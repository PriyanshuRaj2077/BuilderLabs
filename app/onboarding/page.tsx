'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Navbar } from '@/components/Navbar';
import { 
  IndianState, 
  Category, 
  Occupation, 
  EducationLevel, 
  Gender, 
  UserProfile 
} from '@/lib/types';
import { POPULAR_INTERESTS, SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { rankSchemesForProfile } from '@/lib/matching';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  User, 
  Briefcase, 
  HeartHandshake
} from 'lucide-react';
import confetti from 'canvas-confetti';

const STATES: IndianState[] = [
  'All India',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh'
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Form State
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(24);
  const [gender, setGender] = useState<Gender>('female');
  const [state, setState] = useState<IndianState>('Maharashtra');
  const [category, setCategory] = useState<Category>('General');
  const [occupation, setOccupation] = useState<Occupation>('job_seeker');
  const [education, setEducation] = useState<EducationLevel>('undergraduate');
  const [annualIncome, setAnnualIncome] = useState<number>(250000);
  const [isRural, setIsRural] = useState(false);
  const [hasDisability, setHasDisability] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  // Real-time matched preview count
  const [matchedPreviewCount, setMatchedPreviewCount] = useState(0);

  // Load existing profile if any
  useEffect(() => {
    const stored = localStorage.getItem('soochai_profile');
    if (stored) {
      try {
        const p: UserProfile = JSON.parse(stored);
        if (p.name) setName(p.name);
        if (p.age) setAge(p.age);
        if (p.gender) setGender(p.gender);
        if (p.state) setState(p.state);
        if (p.category) setCategory(p.category);
        if (p.occupation) setOccupation(p.occupation);
        if (p.education) setEducation(p.education);
        if (p.annualIncome) setAnnualIncome(p.annualIncome);
        if (p.isRural !== undefined) setIsRural(p.isRural);
        if (p.hasDisability !== undefined) setHasDisability(p.hasDisability);
        if (p.interests) setInterests(p.interests);
      } catch {}
    }
  }, []);

  // Update live preview count on every input change
  useEffect(() => {
    const draftProfile: UserProfile = {
      name,
      age,
      gender,
      state,
      category,
      occupation,
      education,
      annualIncome,
      isRural,
      hasDisability,
      interests
    };

    const results = rankSchemesForProfile(SEED_SCHEMES, draftProfile);
    const eligibleCount = results.filter(r => r.isEligible).length;
    setMatchedPreviewCount(eligibleCount);
  }, [name, age, gender, state, category, occupation, education, annualIncome, isRural, hasDisability, interests]);

  const toggleInterest = (item: string) => {
    if (interests.includes(item)) {
      setInterests(interests.filter(i => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  };

  const handleFinish = async () => {
    const finalProfile: UserProfile = {
      name,
      age,
      gender,
      state,
      category,
      occupation,
      education,
      annualIncome,
      isRural,
      hasDisability,
      interests
    };

    localStorage.setItem('soochai_profile', JSON.stringify(finalProfile));

    // Persist to Supabase profiles table if authenticated
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('profiles').upsert({
          id: user.id,
          full_name: name || user.user_metadata?.full_name || 'Citizen',
          state,
          age: Number(age) || 24,
          gender,
          category,
          occupation,
          education_level: education,
          annual_income: Number(annualIncome) || 0,
          is_rural: Boolean(isRural),
          has_disability: Boolean(hasDisability),
          interests: interests || [],
          is_onboarded: true,
          updated_at: new Date().toISOString()
        });
      }
    } catch (err) {
      console.warn('Could not sync profile to Supabase:', err);
    }
    
    // Celebration effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col font-sans transition-colors duration-200">
      <Navbar currentProfile={{ name, age, gender, state, category, occupation, education, annualIncome, isRural, hasDisability, interests }} />

      <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-12 flex-1">
        
        {/* Progress Tracker Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-secondary)] mb-2">
            <span>Step {step} of 3</span>
            <span className="text-[var(--accent-parrot-text)] flex items-center gap-1 font-bold">
              <Sparkles className="h-3.5 w-3.5 text-[#22e55e]" />
              {matchedPreviewCount} schemes currently matched!
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-[var(--card-subtle)] overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#ff451a] to-[#22e55e] transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Container */}
        <div className="fin-canvas p-6 sm:p-8">
          
          {/* STEP 1: Basic Demographics */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                  <User className="h-6 w-6 text-[#ff451a]" />
                  <span>Personal Demographics</span>
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Tell us who you are so we can filter state-level and age-dependent public schemes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-subtle)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#ff451a]"
                    placeholder="e.g. Priya Sharma"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">Age (Years)</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    min={1}
                    max={100}
                    className="w-full rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-subtle)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#ff451a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">State of Domicile</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value as IndianState)}
                    className="w-full rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-subtle)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#ff451a]"
                  >
                    {STATES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">Gender</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['female', 'male', 'transgender'] as Gender[]).map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGender(g)}
                        className={`rounded-xl py-2 px-3 text-xs font-semibold capitalize border transition-all ${
                          gender === g
                            ? 'bg-[#ff451a] text-white border-[#ff451a] shadow'
                            : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-highlight)]'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">Social Category / Reservation</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {(['General', 'OBC', 'SC', 'ST', 'EWS', 'Minority'] as Category[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCategory(c)}
                      className={`rounded-xl py-2 px-2 text-xs font-semibold border transition-all ${
                        category === c
                          ? 'bg-[#22e55e] text-black font-bold border-[#22e55e] shadow'
                          : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-highlight)]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: Socio-Economic Profile */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-[#ff451a]" />
                  <span>Socio-Economic Background</span>
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Crucial for matching income ceilings, job reservations, and business loan programs.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">Primary Status / Occupation</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {([
                    { id: 'student', label: 'Student' },
                    { id: 'farmer', label: 'Farmer / Agri' },
                    { id: 'entrepreneur', label: 'Entrepreneur / MSME' },
                    { id: 'job_seeker', label: 'Job Seeker' },
                    { id: 'artisan', label: 'Artisan / Crafts' },
                    { id: 'worker', label: 'Informal Worker' },
                    { id: 'self_employed', label: 'Self Employed' },
                    { id: 'senior_citizen', label: 'Senior Citizen' }
                  ] as { id: Occupation; label: string }[]).map((occ) => (
                    <button
                      key={occ.id}
                      type="button"
                      onClick={() => setOccupation(occ.id)}
                      className={`rounded-xl p-3 text-xs font-semibold border text-left transition-all ${
                        occupation === occ.id
                          ? 'bg-[#ff451a] text-white border-[#ff451a] shadow-md font-bold'
                          : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-highlight)]'
                      }`}
                    >
                      {occ.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">Highest Education Attained</label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value as EducationLevel)}
                    className="w-full rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-subtle)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#ff451a]"
                  >
                    <option value="none">No Formal Schooling</option>
                    <option value="primary">Primary School (Up to 5th)</option>
                    <option value="secondary">10th Standard / Matric</option>
                    <option value="higher_secondary">12th Standard / Inter</option>
                    <option value="diploma">Polytechnic / Diploma</option>
                    <option value="undergraduate">Undergraduate (B.Tech, BA, B.Sc, B.Com)</option>
                    <option value="postgraduate">Postgraduate (Master’s)</option>
                    <option value="doctorate">Ph.D / Doctorate</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">
                    Annual Household Income: <strong className="text-[var(--accent-parrot-text)]">₹{annualIncome.toLocaleString('en-IN')}</strong>
                  </label>
                  <input
                    type="range"
                    min={30000}
                    max={1200000}
                    step={20000}
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    className="w-full h-2 bg-[var(--card-subtle)] rounded-lg appearance-none cursor-pointer accent-[#22e55e] mt-2"
                  />
                  <div className="flex justify-between text-[11px] text-[var(--text-muted)] mt-1">
                    <span>₹30K (BPL)</span>
                    <span>₹2.5L (Scholarship Cap)</span>
                    <span>₹8L (OBC/EWS)</span>
                    <span>₹12L+</span>
                  </div>
                </div>
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <label className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRural}
                    onChange={(e) => setIsRural(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#ff451a]"
                  />
                  <span className="text-xs font-medium text-[var(--text-primary)]">Residing in Rural / Gram Panchayat Area</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasDisability}
                    onChange={(e) => setHasDisability(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#ff451a]"
                  />
                  <span className="text-xs font-medium text-[var(--text-primary)]">Differently Abled (PwD 40%+)</span>
                </label>
              </div>

            </div>
          )}

          {/* STEP 3: Goals & Interests */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                  <HeartHandshake className="h-6 w-6 text-[#22e55e]" />
                  <span>Your Opportunity Priorities</span>
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Select which public benefits you want SuchakAI to prioritize on your dashboard.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {POPULAR_INTERESTS.map((interest) => {
                  const selected = interests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`p-3.5 rounded-2xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                        selected
                          ? 'parrot-badge font-bold'
                          : 'bg-[var(--card-bg)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)]'
                      }`}
                    >
                      <span>{interest}</span>
                      {selected && <CheckCircle2 className="h-4 w-4 text-[#22e55e] shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Ready summary banner */}
              <div className="p-4 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[var(--accent-yellow)] shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-[var(--text-primary)]">Your personalized engine is ready!</p>
                  <p className="text-[var(--text-secondary)]">Clicking finish will automatically populate your dashboard with ranked schemes and Gemini rationales.</p>
                </div>
              </div>

            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] px-4 py-2.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-2 rounded-full bg-[#ff451a] px-5 py-2.5 text-xs font-semibold text-white hover:brightness-110 shadow-md shadow-[#ff451a]/20 transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinish}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff451a] to-[#22e55e] px-7 py-3 text-xs font-bold text-white hover:brightness-110 shadow-lg shadow-[#ff451a]/20 transition-all"
              >
                <span>Activate Dashboard ({matchedPreviewCount} Matches)</span>
                <Sparkles className="h-4 w-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

