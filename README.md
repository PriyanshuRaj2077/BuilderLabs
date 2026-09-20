# SoochAI (सूचक AI) — AI-Powered Citizen Scheme Discovery Portal

> **"Don't make citizens search through hundreds of government schemes. SoochAI automatically finds the schemes relevant to you, explains why you may qualify, and tells you what to do next."**

Built for the **VEXITE Hackathon** using **Next.js 16 (App Router)**, **Google Gemini API**, **Supabase (PostgreSQL with RLS & FTS)**, and **Tailwind CSS**.

---

## 🌟 Key Innovations & USPs

1. **Deterministic Database Filtering First, Gemini Reasoning Second:**
   - The user dashboard never calls heavy AI models or scrapes live government portals on page loads.
   - Core filtering executes via a **6-factor weighted ranking engine** (State 25%, Category 20%, Occupation 20%, Income 15%, Demographics 10%, Freshness 10%).
   - Gemini is invoked meaningfully to parse complex eligibility rules, generate plain-language explanations with checkmarks, and flag verification caveats.
2. **Sub-Second Dashboard Loading & Zero Hallucination on Facts:**
   - Deadlines, income caps, benefits, and official portals are strictly grounded in structured verified data.
   - Dynamic caching layer ensures repeat views load instantly while preserving API quota.
3. **1-Click Persona Switcher for Hackathon Judges:**
   - Demo the platform in under 3 minutes with pre-configured realistic citizen personas:
     - **Priya Sharma:** 20y SC Student in Maharashtra (matches Post-Matric SC Scholarship & MahaDBT).
     - **Ramesh Patel:** 42y Small Landholding Farmer in UP (matches PM-KISAN, PMAY-G, Ayushman Bharat).
     - **Sunita Devi:** 32y Woman Entrepreneur in Karnataka (matches Stand-Up India, MUDRA, SVANidhi).

---

## 🚀 Quickstart & Running Locally

### 1. Prerequisites
- Node.js 20+ installed
- Git

### 2. Setup & Installation
```bash
# Clone the repository
git clone https://github.com/PriyanshuRaj2077/VEXITE-HACK-IN-NOVATE-SuchakAI.git
cd VEXITE-HACK-IN-NOVATE-SuchakAI

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables (.env.local)

Create a `.env.local` file in the root directory:

```env
# Google Gemini API Key (Optional for live Gemini calls; fallback semantic explainer active by default)
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Credentials (Optional for local seed mode; required for cloud sync)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Cron Security Key for Vercel Cron scheduled ingestion
CRON_SECRET=your_cron_secret_here
```

---

## 🗄️ Database Migrations (Supabase PostgreSQL)

The complete SQL DDL schema with **Row Level Security (RLS)**, **Full-Text Search (tsvector)**, and performance indexes is provided at:
`supabase/migrations/001_initial_schema.sql`

To apply in Supabase:
1. Open your Supabase Dashboard SQL Editor.
2. Paste the contents of `supabase/migrations/001_initial_schema.sql` and run.

---

## 🗺️ Project Structure

```
├── app/
│   ├── layout.tsx                     # Root HTML & responsive viewport
│   ├── page.tsx                       # Landing Page with 1-click persona strip
│   ├── globals.css                    # Dark glassmorphism & Tailwind CSS
│   ├── onboarding/page.tsx            # Multi-step profile onboarding flow
│   ├── dashboard/page.tsx             # Personalized citizen discovery dashboard
│   ├── search/page.tsx                # Catalog exploration & faceted search
│   ├── scheme/[id]/page.tsx           # Full scheme detail page (10 required fields)
│   └── api/
│       ├── schemes/match/route.ts     # Deterministic ranking endpoint
│       └── schemes/[id]/explain/route.ts # Gemini AI eligibility reasoning API
├── components/
│   ├── Navbar.tsx                     # Top bar with judge persona switcher
│   ├── SchemeCard.tsx                 # Scheme card with match score & AI callout
│   ├── AIEligibilityModal.tsx         # Gemini checkmarks & caveats breakdown
│   └── FilterSidebar.tsx              # Faceted filters (state, sector, tier)
├── lib/
│   ├── types.ts                       # TypeScript schemas for profiles & schemes
│   ├── matching.ts                    # 6-factor deterministic weighted matching
│   ├── gemini.ts                      # Gemini API caller + semantic rule fallback
│   ├── utils.ts                       # INR currency formatting & CSS utilities
│   ├── data/seed-schemes.ts           # Curated Central & State schemes database
│   └── supabase/                      # Browser & Server Supabase clients
├── supabase/migrations/
│   └── 001_initial_schema.sql         # PostgreSQL schema & RLS policies
└── docs/
    └── architecture_research.md       # 25-section architectural blueprint
```

---

## 👥 Hackathon Team & Credits
- **Project:** SoochAI (VEXITE Hack-In-Novate)
- **Repository:** `https://github.com/PriyanshuRaj2077/VEXITE-HACK-IN-NOVATE-SuchakAI`
