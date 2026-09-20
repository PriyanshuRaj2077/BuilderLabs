-- Supabase Initial Schema for SoochAI (PostgreSQL)
-- Supports Row Level Security (RLS), GIN Full-Text Search, and Deterministic Eligibility Matching

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 1. Profiles Table (Linked to Supabase Auth auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  state TEXT NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 0 AND age <= 120),
  gender TEXT NOT NULL,
  category TEXT NOT NULL,
  occupation TEXT NOT NULL,
  education_level TEXT NOT NULL,
  annual_income INTEGER NOT NULL DEFAULT 0,
  is_rural BOOLEAN NOT NULL DEFAULT false,
  has_disability BOOLEAN NOT NULL DEFAULT false,
  interests TEXT[] DEFAULT '{}',
  is_onboarded BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Schemes Table
CREATE TABLE IF NOT EXISTS public.schemes (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  name_hindi TEXT,
  ministry TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('central', 'state', 'centrally_sponsored')),
  state TEXT,
  category_tag TEXT NOT NULL,
  description TEXT NOT NULL,
  who_is_it_for TEXT NOT NULL,
  
  -- Eligibility Criteria
  age_min INTEGER,
  age_max INTEGER,
  gender_requirement TEXT,
  income_max INTEGER,
  categories TEXT[] DEFAULT '{"All"}',
  occupations TEXT[] DEFAULT '{}',
  education_min TEXT,
  residency TEXT,
  eligibility_raw TEXT NOT NULL,
  
  -- Benefits
  benefits TEXT[] NOT NULL DEFAULT '{}',
  benefit_amount TEXT,
  benefit_type TEXT NOT NULL,
  
  -- Application & Official Source
  required_documents TEXT[] NOT NULL DEFAULT '{}',
  application_mode TEXT NOT NULL,
  application_procedure TEXT[] NOT NULL DEFAULT '{}',
  official_url TEXT NOT NULL,
  portal_name TEXT NOT NULL,
  
  -- Status & Verification
  deadline TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  last_verified_date DATE NOT NULL DEFAULT CURRENT_DATE,
  inconsistencies TEXT[] DEFAULT '{}',
  is_popular BOOLEAN DEFAULT false,
  
  search_vector TSVECTOR,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Saved / Bookmarked Schemes
CREATE TABLE IF NOT EXISTS public.saved_schemes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  scheme_id TEXT NOT NULL REFERENCES public.schemes(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'saved' CHECK (status IN ('saved', 'interested', 'applied')),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, scheme_id)
);

-- 4. AI Explanation Cache (Saves Gemini tokens and delivers sub-second results)
CREATE TABLE IF NOT EXISTS public.explanation_cache (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cache_key TEXT UNIQUE NOT NULL,
  scheme_id TEXT NOT NULL REFERENCES public.schemes(id) ON DELETE CASCADE,
  explanation TEXT NOT NULL,
  match_score INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Full Text Search Index Trigger
CREATE OR REPLACE FUNCTION update_schemes_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', COALESCE(NEW.name, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.description, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.ministry, '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(NEW.eligibility_raw, '')), 'D');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_schemes_search_vector ON public.schemes;
CREATE TRIGGER trigger_schemes_search_vector
  BEFORE INSERT OR UPDATE ON public.schemes
  FOR EACH ROW EXECUTE FUNCTION update_schemes_search_vector();

-- 6. Indexes for Performance
CREATE INDEX IF NOT EXISTS idx_schemes_search ON public.schemes USING GIN(search_vector);
CREATE INDEX IF NOT EXISTS idx_schemes_state ON public.schemes(state);
CREATE INDEX IF NOT EXISTS idx_schemes_status ON public.schemes(status);
CREATE INDEX IF NOT EXISTS idx_schemes_categories ON public.schemes USING GIN(categories);
CREATE INDEX IF NOT EXISTS idx_schemes_occupations ON public.schemes USING GIN(occupations);

-- 7. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schemes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_schemes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.explanation_cache ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only select and update their own record
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Schemes: Anyone (including anonymous users for exploration) can read schemes
CREATE POLICY "Public schemes read access" ON public.schemes
  FOR SELECT TO PUBLIC USING (true);

-- Saved Schemes: Users manage only their own
CREATE POLICY "Users manage own saved schemes" ON public.saved_schemes
  FOR ALL USING (auth.uid() = user_id);

-- Explanation Cache: Public read, authenticated upsert
CREATE POLICY "Explanation cache readable by all" ON public.explanation_cache
  FOR SELECT TO PUBLIC USING (true);

CREATE POLICY "Explanation cache writable by auth" ON public.explanation_cache
  FOR INSERT WITH CHECK (true);
