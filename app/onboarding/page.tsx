'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  GraduationCap, 
  Briefcase, 
  IndianRupee, 
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
  const [name, setName] = useState('Priya Sharma');
  const [age, setAge] = useState<number>(21);
  const [gender, setGender] = useState<Gender>('female');
  const [state, setState] = useState<IndianState>('Maharashtra');
  const [category, setCategory] = useState<Category>('SC');
  const [occupation, setOccupation] = useState<Occupation>('student');
  const [education, setEducation] = useState<EducationLevel>('undergraduate');
  const [annualIncome, setAnnualIncome] = useState<number>(200000);
  const [isRural, setIsRural] = useState(false);
  const [hasDisability, setHasDisability] = useState(false);
  const [interests, setInterests] = useState<string[]>([
    'Higher Education Scholarships',
    'Skill Training & Employment'
  ]);

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

  const handleFinish = () => {
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
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Navbar currentProfile={{ name, age, gender, state, category, occupation, education, annualIncome, isRural, hasDisability, interests }} />

      <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-12 flex-1">
        
        {/* Progress Tracker Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
            <span>Step {step} of 3</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" />
              {matchedPreviewCount} schemes currently matched!
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Container */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8">
          
          {/* STEP 1: Basic Demographics */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <User className="h-6 w-6 text-blue-400" />
                  <span>Personal Demographics</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Tell us who you are so we can filter state-level and age-dependent public schemes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    placeholder="e.g. Priya Sharma"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Age (Years)</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    min={1}
                    max={100}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">State of Domicile</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value as IndianState)}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {STATES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Gender</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['female', 'male', 'transgender'] as Gender[]).map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGender(g)}
                        className={`rounded-xl py-2 px-3 text-xs font-semibold capitalize border transition-all ${
                          gender === g
                            ? 'bg-blue-600 text-white border-blue-500 shadow'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Social Category / Reservation</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {(['General', 'OBC', 'SC', 'ST', 'EWS', 'Minority'] as Category[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCategory(c)}
                      className={`rounded-xl py-2 px-2 text-xs font-semibold border transition-all ${
                        category === c
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
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
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-indigo-400" />
                  <span>Socio-Economic Background</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Crucial for matching income ceilings, job reservations, and business loan programs.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Primary Status / Occupation</label>
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
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {occ.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Highest Education Attained</label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value as EducationLevel)}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
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
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Annual Household Income: <strong className="text-emerald-400">₹{annualIncome.toLocaleString('en-IN')}</strong>
                  </label>
                  <input
                    type="range"
                    min={30000}
                    max={1200000}
                    step={20000}
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 mt-2"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>₹30K (BPL)</span>
                    <span>₹2.5L (Scholarship Cap)</span>
                    <span>₹8L (OBC/EWS)</span>
                    <span>₹12L+</span>
                  </div>
                </div>
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRural}
                    onChange={(e) => setIsRural(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0"
                  />
                  <span className="text-xs font-medium text-slate-300">Residing in Rural / Gram Panchayat Area</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasDisability}
                    onChange={(e) => setHasDisability(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0"
                  />
                  <span className="text-xs font-medium text-slate-300">Differently Abled (PwD 40%+)</span>
                </label>
              </div>

            </div>
          )}

          {/* STEP 3: Goals & Interests */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <HeartHandshake className="h-6 w-6 text-emerald-400" />
                  <span>Your Opportunity Priorities</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
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
                      className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                        selected
                          ? 'bg-emerald-950/40 border-emerald-500 text-white font-semibold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{interest}</span>
                      {selected && <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Ready summary banner */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-blue-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-white">Your personalized engine is ready!</p>
                  <p className="text-slate-300">Clicking finish will automatically populate your dashboard with ranked schemes and Gemini rationales.</p>
                </div>
              </div>

            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinish}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-2.5 text-xs font-bold text-white hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all"
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
