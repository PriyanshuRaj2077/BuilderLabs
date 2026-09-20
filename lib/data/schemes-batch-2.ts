import { Scheme } from '../types';

export const SCHEMES_BATCH_2: Scheme[] = [
  // ── 1. BUSINESS & ENTREPRENEURSHIP ──
  {
    id: 'startup-india-seed-fund-scheme',
    slug: 'startup-india-seed-fund-scheme',
    name: 'Startup India Seed Fund Scheme (SISFS)',
    nameHindi: 'स्टार्टअप इंडिया सीड फंड योजना',
    ministry: 'Ministry of Commerce and Industry',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Financial assistance to early-stage startups for proof of concept, prototype development, product trials, market entry, and commercialization.',
    whoIsItFor: 'DPIIT-recognized innovative startups incorporated not more than 2 years ago with a business idea utilizing technology or innovation.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur'],
      educationMin: 'undergraduate',
      rawText: 'Startup recognized by DPIIT incorporated not more than 2 years ago with innovative product/service and viable commercialization plan.'
    },
    benefits: [
      'Grant up to ₹20 Lakh for proof of concept, prototype development, and trials',
      'Debt financing or convertible debentures up to ₹50 Lakh for market entry and commercialization',
      'Mentorship and incubation access via approved university and sector incubators'
    ],
    benefitAmount: 'Up to ₹20 Lakh Grant / ₹50 Lakh Debt',
    benefitType: 'subsidy',
    requiredDocuments: [
      'DPIIT Startup Recognition Certificate',
      'Company Certificate of Incorporation / CIN',
      'Pitch Deck and Business Plan'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online through seedfund.startupindia.gov.in',
      'Select up to 3 sector-specific incubators for evaluation',
      'Incubator Seed Management Committee screens presentations and disburses funding'
    ],
    officialUrl: 'https://seedfund.startupindia.gov.in/',
    portalName: 'Startup India Seed Fund Portal',
    deadline: 'Rolling applications',
    status: 'active',
    lastVerifiedDate: '2026-08-18',
    isPopular: true
  },
  {
    id: 'pm-formalisation-micro-food-processing',
    slug: 'pm-formalisation-micro-food-processing',
    name: 'PMFME – PM Formalisation of Micro Food Processing Enterprises',
    nameHindi: 'पीएम सूक्ष्म खाद्य उद्योग उन्नयन योजना',
    ministry: 'Ministry of Food Processing Industries',
    level: 'centrally_sponsored',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Financial, technical, and business support for the upgradation and establishment of micro food processing enterprises following the One District One Product (ODOP) approach.',
    whoIsItFor: 'Individual micro food processors, Self Help Groups (SHGs), FPOs, and Producer Cooperatives engaged in food processing.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur', 'self_employed', 'worker'],
      rawText: 'Existing micro food processing units or new entrepreneurs investing in ODOP or other food processing activities.'
    },
    benefits: [
      'Credit-linked capital subsidy of 35% of eligible project cost up to maximum of ₹10 Lakh',
      'Seed capital of ₹40,000 per SHG member for working capital and small tools',
      '50% subsidy for branding and marketing of ODOP products'
    ],
    benefitAmount: '35% Subsidy (Max ₹10 Lakh)',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar and PAN Card',
      'Food Safety FSSAI Registration / License',
      'Detailed Project Report (DPR) for machinery purchase',
      'Bank Account Passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on pmfme.mofpi.gov.in portal',
      'District Resource Person (DRP) assists in DPR preparation free of cost',
      'Bank sanctions loan and subsidy is held in Subsidy Reserve Fund account'
    ],
    officialUrl: 'https://pmfme.mofpi.gov.in/',
    portalName: 'PMFME MOFPI Portal',
    deadline: 'Continuous intake',
    status: 'active',
    lastVerifiedDate: '2026-08-22'
  },
  {
    id: 'msme-zed-certification-scheme',
    slug: 'msme-zed-certification-scheme',
    name: 'MSME Sustainable (ZED) Certification Scheme',
    nameHindi: 'एमएसएमई जेड (जीरो डिफेक्ट जीरो इफेक्ट) प्रमाणन योजना',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Subsidies up to 80% to encourage MSMEs to adopt Zero Defect Zero Effect manufacturing practices and achieve Bronze, Silver, or Gold ZED certification.',
    whoIsItFor: 'Manufacturing micro, small, and medium enterprises possessing valid Udyam Registration.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur'],
      rawText: 'All manufacturing MSMEs registered with Udyam Registration Portal.'
    },
    benefits: [
      '80% subsidy on certification cost for Micro enterprises (75% for SC/ST/Women/NER)',
      '60% subsidy for Small enterprises, 50% for Medium enterprises',
      'Up to ₹5 Lakh financial assistance for testing/equipment upgrades',
      'Concessions in bank interest rates and processing fees by public sector banks'
    ],
    benefitAmount: 'Up to 80% Subsidy on Certification & Upgrades',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Udyam Registration Certificate',
      'Factory layout & process photos',
      'Electricity Bill / Pollution NOC'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on zed.msme.gov.in portal with Udyam number',
      'Complete online self-assessment and upload compliance proof',
      'Independent accredited agency inspects factory and awards Bronze/Silver/Gold certificate'
    ],
    officialUrl: 'https://zed.msme.gov.in/',
    portalName: 'MSME ZED Portal',
    deadline: 'Active scheme',
    status: 'active',
    lastVerifiedDate: '2026-08-11'
  },
  {
    id: 'aspire-scheme-rural-livelihoods',
    slug: 'aspire-scheme-rural-livelihoods',
    name: 'ASPIRE – Scheme for Promotion of Innovation, Rural Industry & Entrepreneurship',
    nameHindi: 'एस्पायर योजना (ग्रामीण नवाचार एवं उद्योग)',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Setting up Livelihood Business Incubators (LBIs) and Technology Business Incubators (TBIs) to generate employment in agro-rural industries.',
    whoIsItFor: 'Rural youth, aspiring entrepreneurs, and technical trainees seeking practical incubation in agro-rural sectors.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur', 'job_seeker', 'worker'],
      isRural: true,
      rawText: 'Rural youth and artisans wishing to undergo hands-on enterprise training in agro-processing, engineering, and rural manufacturing.'
    },
    benefits: [
      'Free hands-on incubation and enterprise setup training',
      '100% grant up to ₹1 crore for government LBIs to procure plant and machinery',
      'Bank loan linkages and DPR assistance for newly incubated micro units'
    ],
    benefitAmount: 'Hands-on Business Incubation + Seed Support',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card',
      'Educational certificate (10th/12th/ITI/Diploma)',
      'Enterprise plan proposal'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Contact nearest District Industries Centre (DIC) or KVIC/Coir Board LBI centre',
      'Enroll in agro-industry training batch',
      'Graduate with bankable project report ready for Mudra or PMEGP funding'
    ],
    officialUrl: 'https://aspire.msme.gov.in/',
    portalName: 'ASPIRE MSME Portal',
    deadline: 'Batch schedules',
    status: 'active',
    lastVerifiedDate: '2026-08-16'
  },
  {
    id: 'nabard-dairy-entrepreneurship-development',
    slug: 'nabard-dairy-entrepreneurship-development',
    name: 'DEDS – Dairy Entrepreneurship Development Scheme (NABARD)',
    nameHindi: 'डेयरी उद्यमिता विकास योजना (नाबार्ड)',
    ministry: 'Ministry of Fisheries, Animal Husbandry and Dairying',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'Back-ended capital subsidy through NABARD to establish modern dairy farms, milk processing plants, and cold chains.',
    whoIsItFor: 'Farmers, individual entrepreneurs, NGOs, and cooperatives setting up small dairy units (2 to 10 crossbred cows/buffaloes).',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'entrepreneur'],
      isRural: true,
      rawText: 'Farmers, individual entrepreneurs, and self-help groups establishing small dairy units or milk chilling infrastructure.'
    },
    benefits: [
      '25% back-ended capital subsidy on outlay for General category (up to ₹1.75 Lakh for 10-animal unit)',
      '33.33% back-ended capital subsidy for SC/ST beneficiaries (up to ₹2.33 Lakh)',
      'Loans financed through scheduled commercial banks, RRBs, and state cooperative banks'
    ],
    benefitAmount: '25% to 33.33% Capital Subsidy via NABARD',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card and Land Records for shed construction',
      'Veterinary clearance / cattle procurement quotes',
      'Bank Loan Sanction Letter'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Submit dairy project proposal to local commercial bank or RRB',
      'Bank sanctions loan and uploads claim onto NABARD ENSURE portal',
      'Subsidy credited to beneficiary Subsidy Reserve Fund (SRF) account'
    ],
    officialUrl: 'https://www.nabard.org/',
    portalName: 'NABARD Official Portal',
    deadline: 'Annual allocations',
    status: 'active',
    lastVerifiedDate: '2026-08-20'
  },

  // ── 2. AGRICULTURE & RURAL ──
  {
    id: 'pradhan-mantri-kisan-maandhan-yojana',
    slug: 'pradhan-mantri-kisan-maandhan-yojana',
    name: 'PM-KMY – Pradhan Mantri Kisan Maandhan Yojana',
    nameHindi: 'प्रधानमंत्री किसान मानधन योजना',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'Voluntary and contributory pension scheme offering assured monthly pension of ₹3,000 to small and marginal farmers upon attaining age 60.',
    whoIsItFor: 'Small and marginal farmers aged 18 to 40 years cultivating cultivable land up to 2 hectares.',
    eligibility: {
      ageMin: 18,
      ageMax: 40,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer'],
      isRural: true,
      rawText: 'Small and Marginal Farmers (SMFs) owning cultivable land up to 2 hectares as per land records between 18 and 40 years of age.'
    },
    benefits: [
      'Guaranteed ₹3,000 monthly pension from age 60 for life',
      '50% monthly contribution matched rupee-for-rupee by the Central Government',
      'Monthly contribution can be automatically deducted from PM-KISAN quarterly installments'
    ],
    benefitAmount: '₹3,000 / Month Guaranteed Pension',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Khatoni / Land Ownership record showing land up to 2 hectares',
      'Savings Bank Account details with IFSC'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Visit nearest Common Services Centre (CSC) or self-enroll on maandhan.in',
      'Pay first monthly contribution (₹55 to ₹200 depending on entry age)',
      'Receive unique Kisan Pension Card'
    ],
    officialUrl: 'https://maandhan.in/',
    portalName: 'Maan-Dhan Pension Portal',
    deadline: 'Join between age 18-40',
    status: 'active',
    lastVerifiedDate: '2026-08-24'
  },
  {
    id: 'sub-mission-agricultural-mechanization-smam',
    slug: 'sub-mission-agricultural-mechanization-smam',
    name: 'SMAM – Sub-Mission on Agricultural Mechanization',
    nameHindi: 'कृषि यंत्रीकरण पर उप-मिशन (एसएमएएम)',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Financial assistance of 40% to 50% for purchasing tractors, power tillers, seed drills, harvesters, and setting up Custom Hiring Centers (CHCs).',
    whoIsItFor: 'Small, marginal, women, and SC/ST farmers seeking to procure modern farm machinery or establish village custom hiring centres.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer'],
      isRural: true,
      rawText: 'Farmers owning agricultural land. Priority given to SC, ST, small/marginal, and women farmers.'
    },
    benefits: [
      '50% subsidy on purchase of agricultural equipment for SC/ST/Women/Small/Marginal farmers',
      '40% subsidy for other categories of farmers',
      'Up to ₹10 Lakh subsidy (40%) to rural entrepreneurs for establishing Custom Hiring Centers'
    ],
    benefitAmount: '40% to 50% Subsidy on Machinery',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card',
      'Land Records (7/12, Khasra/Khatauni)',
      'Caste Certificate (for SC/ST subsidy)',
      'Bank Account Passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on agrimachinery.nic.in portal',
      'Select machine, dealer, and upload land documents',
      'Receive digital sanction token and take delivery with DBT subsidy adjustment'
    ],
    officialUrl: 'https://agrimachinery.nic.in/',
    portalName: 'Farmech Portal',
    deadline: 'Annual financial year quotas',
    status: 'active',
    lastVerifiedDate: '2026-08-26',
    isPopular: true
  },
  {
    id: 'national-beekeeping-honey-mission',
    slug: 'national-beekeeping-honey-mission',
    name: 'National Beekeeping & Honey Mission (NBHM)',
    nameHindi: 'राष्ट्रीय मधुमक्खी पालन एवं शहद मिशन',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'Subsidies and training to promote scientific beekeeping under the Sweet Revolution for honey production, bee wax, and crop cross-pollination.',
    whoIsItFor: 'Farmers, beekeepers, rural youth, and self-help groups intending to set up apiaries.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'self_employed', 'worker'],
      isRural: true,
      rawText: 'Individuals or groups trained in scientific beekeeping from certified institutions (KVIC/KVK).'
    },
    benefits: [
      'Up to 80% subsidy for bee colonies and beehives equipment',
      'Financial support for honey testing labs and processing units',
      'Significant 15-25% yield increase in mustard, sunflower, and orchard crops via bee pollination'
    ],
    benefitAmount: 'Up to 80% Subsidy on Beehives & Equipment',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card',
      'Beekeeping Training Completion Certificate',
      'Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Register on Madhukranti portal (madhukranti.in)',
      'Apply under NBHM through State Department of Horticulture',
      'Receive inspected equipment and DBT subsidy'
    ],
    officialUrl: 'https://madhukranti.in/',
    portalName: 'MadhuKranti Portal',
    deadline: 'Continuous batches',
    status: 'active',
    lastVerifiedDate: '2026-08-14'
  },
  {
    id: 'mission-amrit-sarovar-rural-water',
    slug: 'mission-amrit-sarovar-rural-water',
    name: 'Mission Amrit Sarovar – Rejuvenation of Water Bodies',
    nameHindi: 'मिशन अमृत सरोवर (जल संरक्षण अभियान)',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Constructing and rejuvenating at least 75 Amrit Sarovars (water bodies) in each district with community participation, wage employment, and tree plantations.',
    whoIsItFor: 'Rural communities, Gram Panchayats, MGNREGA job card holders, and water user groups.',
    eligibility: {
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'farmer'],
      isRural: true,
      rawText: 'Active rural community members and MGNREGA cardholders participating in local water conservation works.'
    },
    benefits: [
      'Guaranteed daily wages under MGNREGA for pond excavation and bunding',
      'Revived ground water levels, assured irrigation ponds, and commercial fishery rights for local Panchayats',
      'Recreational walking tracks and green public spaces in rural habitations'
    ],
    benefitAmount: 'MGNREGA Wages + Community Water Access',
    benefitType: 'service',
    requiredDocuments: [
      'MGNREGS Job Card (for wage earners)',
      'Aadhaar Card'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Attend Gram Sabha water planning sessions',
      'Enroll for local pond excavation work under Village Employment Guarantee scheme',
      'Wages credited weekly directly to bank account via DBT'
    ],
    officialUrl: 'https://amritsarovar.gov.in/',
    portalName: 'Amrit Sarovar Portal',
    deadline: 'Always ongoing',
    status: 'active',
    lastVerifiedDate: '2026-08-10'
  },

  // ── 3. EDUCATION & LEARNING ──
  {
    id: 'central-sector-interest-subsidy-csis',
    slug: 'central-sector-interest-subsidy-csis',
    name: 'CSIS – Central Sector Interest Subsidy on Education Loans',
    nameHindi: 'केंद्रीय क्षेत्र ब्याज सब्सिडी योजना (उच्च शिक्षा ऋण)',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: '100% full interest subsidy during moratorium period (course duration plus 1 year) on education loans for students from economically weaker sections.',
    whoIsItFor: 'Students with parental income up to ₹4.5 lakh per annum pursuing professional/technical degrees in India.',
    eligibility: {
      ageMin: 17,
      ageMax: 35,
      gender: 'all',
      incomeMax: 450000,
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      rawText: 'Economically Weaker Section (EWS) students with annual parental income up to ₹4.5 lakh enrolled in recognized technical/professional higher education courses in India.'
    },
    benefits: [
      'Full 100% interest waiver during the entire course duration + 1 year moratorium',
      'Applicable on educational loans up to ₹10 Lakh taken from IBA member banks',
      'Saves families between ₹1.5 Lakh to ₹3.5 Lakh in accrued interest during studies'
    ],
    benefitAmount: '100% Interest Paid by Govt During Study Period',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Income Certificate issued by competent revenue authority (< ₹4.5 Lakh)',
      'Education Loan Sanction Letter from Bank',
      'College Admission and Fee Receipts'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply through the lending bank where educational loan is availed',
      'Submit valid EWS Income Certificate to bank branch manager',
      'Bank registers claim on Canara Bank CSIS web portal for interest reimbursement'
    ],
    officialUrl: 'https://www.canarabank.com/',
    portalName: 'IBA / Canara Bank CSIS Portal',
    deadline: 'With education loan sanction',
    status: 'active',
    lastVerifiedDate: '2026-08-15',
    isPopular: true
  },
  {
    id: 'national-means-cum-merit-scholarship',
    slug: 'national-means-cum-merit-scholarship',
    name: 'NMMSS – National Means-cum-Merit Scholarship Scheme',
    nameHindi: 'राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति योजना',
    ministry: 'Ministry of Education',
    level: 'centrally_sponsored',
    categoryTag: 'Education & Learning',
    description: 'Awarding ₹12,000 per annum to meritorious students from economically weaker sections to arrest drop-out at class VIII and encourage study till secondary stage.',
    whoIsItFor: 'Class VIII passed students from government and aided schools whose parental annual income does not exceed ₹3,50,000.',
    eligibility: {
      ageMin: 13,
      ageMax: 18,
      gender: 'all',
      incomeMax: 350000,
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'primary',
      rawText: 'Students studying as regular students in class IX in Government, Local Body, and Government-aided schools having passed Class VIII with minimum 55% marks (50% for SC/ST).'
    },
    benefits: [
      '₹12,000 per annum (₹1,000 per month) for four academic years (Class IX to XII)',
      'Transferred directly to student’s bank account through DBT on PFMS',
      'Renewable every year based on passing marks in final examinations'
    ],
    benefitAmount: '₹12,000 / year (Class 9 through 12)',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Class VII and VIII marksheet',
      'Parental Income Certificate (< ₹3,50,000)',
      'State level NMMSS examination score card',
      'Aadhaar-seeded Bank Account passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Qualify in State Level NMMSS Selection Test (Mental Ability Test & Scholastic Aptitude Test)',
      'Register and submit verified application on National Scholarship Portal (scholarships.gov.in)',
      'Funds disbursed via PFMS directly to student account'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal',
    deadline: 'October - November annually',
    status: 'active',
    lastVerifiedDate: '2026-08-12',
    isPopular: true
  },
  {
    id: 'prime-ministers-research-fellowship-pmrf',
    slug: 'prime-ministers-research-fellowship-pmrf',
    name: 'PMRF – Prime Minister’s Research Fellowship',
    nameHindi: 'प्रधानमंत्री अनुसंधान फैलोशिप (पीएमआरएफ)',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Prestigious fellowship of ₹70,000 to ₹80,000/month plus research grant of ₹2 Lakh/year for top scholars pursuing Ph.D. in STEM at IITs, IISc, and IISERs.',
    whoIsItFor: 'Meritorious B.Tech/M.Tech/M.Sc graduates securing Ph.D. admission in top Indian research institutes.',
    eligibility: {
      ageMin: 20,
      ageMax: 32,
      gender: 'all',
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'undergraduate',
      rawText: 'Eligible candidates admitted into Ph.D. programs in PMRF granting institutions having CGPA of at least 8.0 or qualifying GATE score.'
    },
    benefits: [
      '₹70,000/month for 1st & 2nd year; ₹75,000/month for 3rd year; ₹80,000/month for 4th & 5th year',
      'Annual Research Contingency Grant of ₹2,00,000 (total ₹10 Lakh over 5 years)',
      'International conference travel funding and advanced research facility access'
    ],
    benefitAmount: '₹70,000 to ₹80,000 / month + ₹2 Lakh/yr Research Grant',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Ph.D. admission confirmation at PMRF participating institute',
      'Undergraduate/Postgraduate Transcripts with minimum 8.0 CGPA',
      'Research Proposal & Statement of Purpose',
      'Recommendation letters from faculty advisors'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Nomination submitted through the host Ph.D. institution via National Nodal Portal',
      'National Subject Expert Committee reviews project pitch and viva',
      'Award announced and fellowship initiated via ministry portal'
    ],
    officialUrl: 'https://www.pmrf.in/',
    portalName: 'PMRF Official Portal',
    deadline: 'Bi-annual nomination cycles',
    status: 'active',
    lastVerifiedDate: '2026-08-28',
    isPopular: true
  },
  {
    id: 'swami-vivekananda-single-girl-scholarship',
    slug: 'swami-vivekananda-single-girl-scholarship',
    name: 'Swami Vivekananda Single Girl Child Scholarship for Social Sciences',
    nameHindi: 'स्वामी विवेकानंद सिंगल गर्ल चाइल्ड फेलोशिप',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'UGC fellowship of ₹31,000 to ₹35,000/month to single girl children pursuing regular, full-time Ph.D. programs in Social Sciences in recognized universities.',
    whoIsItFor: 'Single girl child of parents who has registered for regular Ph.D. in Social Sciences in a recognized Indian university.',
    eligibility: {
      ageMax: 40,
      gender: 'female',
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'postgraduate',
      rawText: 'Single girl child of her parents having taken admission in regular Ph.D. in any recognized university/institution in Social Sciences.'
    },
    benefits: [
      '₹31,000 per month for initial 2 years (JRF)',
      '₹35,000 per month for remaining tenure up to 3 years (SRF)',
      'Contingency grant of ₹10,000/year for humanities and social sciences'
    ],
    benefitAmount: '₹31,000 to ₹35,000 / month (up to 5 years)',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Affidavit from parents on stamp paper declaring only child status',
      'Ph.D. Registration / Admission Certificate in Social Science discipline',
      'Master Degree Marksheet and Degree Certificate'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply on UGC e-Scholarship portal (ugc.gov.in)',
      'Upload single girl child affidavit verified by First Class Magistrate',
      'Institution nodal officer verifies application for UGC approval'
    ],
    officialUrl: 'https://www.ugc.gov.in/',
    portalName: 'UGC Scholarship Portal',
    deadline: 'Annual UGC window',
    status: 'active',
    lastVerifiedDate: '2026-08-09'
  },

  // ── 4. HEALTH & WELLNESS ──
  {
    id: 'rashtriya-vayoshri-yojana',
    slug: 'rashtriya-vayoshri-yojana',
    name: 'Rashtriya Vayoshri Yojana (RVY) – Assistive Living Devices for Seniors',
    nameHindi: 'राष्ट्रीय वयोश्री योजना',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'central',
    categoryTag: 'Health & Wellness',
    description: 'Free physical aids and assisted-living devices for senior citizens belonging to BPL category suffering from age-related disabilities or infirmities.',
    whoIsItFor: 'Senior citizens aged 60 and above belonging to BPL families with age-related infirmities (low vision, hearing impairment, tooth loss, locomotor disability).',
    eligibility: {
      ageMin: 60,
      gender: 'all',
      incomeMax: 200000,
      categories: ['All'],
      occupations: ['senior_citizen'],
      rawText: 'Senior citizens aged 60 years and above possessing BPL ration card or monthly income not exceeding ₹15,000.'
    },
    benefits: [
      '100% free distribution of walking sticks, elbow crutches, walkers, tripods',
      'Free hearing aids, wheelchair, artificial dentures, and spectacles',
      'Comprehensive pre-distribution assessment by ALIMCO doctors'
    ],
    benefitAmount: '100% Free Assistive Devices (Value up to ₹15,000)',
    benefitType: 'service',
    requiredDocuments: [
      'Senior Citizen Age Proof (Aadhaar, Voter ID)',
      'BPL Card / Income Certificate (< ₹15,000/month)',
      'Medical assessment certificate from government doctor'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Attend identification camp organized by District Administration and ALIMCO',
      'Clinical assessment performed on the spot by medical experts',
      'Devices fitted and handed over at dedicated distribution camps free of charge'
    ],
    officialUrl: 'https://alimco.in/',
    portalName: 'ALIMCO / MoSJE Portal',
    deadline: 'District camp schedules',
    status: 'active',
    lastVerifiedDate: '2026-08-17'
  },
  {
    id: 'adip-scheme-aids-appliances-divyangjan',
    slug: 'adip-scheme-aids-appliances-divyangjan',
    name: 'ADIP Scheme – Free Aids and Appliances for Persons with Disabilities',
    nameHindi: 'एडिप योजना (दिव्यांगजन उपकरण सहायता)',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'central',
    categoryTag: 'Health & Wellness',
    description: 'Assisting disabled persons in procuring sophisticated, durable, and scientifically manufactured modern aids and appliances to promote physical and social independence.',
    whoIsItFor: 'Indian citizens with 40% or more certified disability whose monthly income is under ₹30,000.',
    eligibility: {
      gender: 'all',
      incomeMax: 360000,
      categories: ['All'],
      occupations: ['worker', 'student', 'self_employed', 'unemployed', 'senior_citizen'],
      hasDisability: true,
      rawText: 'Person with benchmark disability of 40% or more certified by competent medical authority with monthly income up to ₹30,000.'
    },
    benefits: [
      '100% free motorized tricycles, braille kits, smart canes, laptops with screen-reading software for income < ₹20,000/month',
      '50% aid cost subsidy for income between ₹20,000 and ₹30,000/month',
      'Free surgical correction and post-fit rehabilitation therapy'
    ],
    benefitAmount: '100% Free Advanced Aids (e.g. Motorized Tricycle up to ₹42,000)',
    benefitType: 'service',
    requiredDocuments: [
      'UDID Card (Unique Disability ID) or Disability Certificate showing 40%+',
      'Income Certificate / BPL Card',
      'Aadhaar Card'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply online on adip.depwd.gov.in or attend ALIMCO camp in district',
      'Upload UDID and income proof',
      'Collect customized fitted assistive device at distribution mela'
    ],
    officialUrl: 'https://adip.depwd.gov.in/',
    portalName: 'ADIP Portal',
    deadline: 'Open throughout year',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    isPopular: true
  },

  // ── 5. SOCIAL SECURITY & WELFARE ──
  {
    id: 'indira-gandhi-national-old-age-pension',
    slug: 'indira-gandhi-national-old-age-pension',
    name: 'IGNOAPS – Indira Gandhi National Old Age Pension Scheme',
    nameHindi: 'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Monthly social security pension for senior citizens aged 60 and above living below the poverty line.',
    whoIsItFor: 'BPL citizens aged 60 years and above who have little or no regular source of subsistence.',
    eligibility: {
      ageMin: 60,
      gender: 'all',
      incomeMax: 150000,
      categories: ['All'],
      occupations: ['senior_citizen'],
      rawText: 'Applicant must be 60 years or older and belong to a household living below the poverty line (BPL).'
    },
    benefits: [
      'Monthly pension ranging from ₹500 to ₹2,500 (Central share ₹200-₹500 supplemented by state government contribution)',
      'Lifelong continuous monthly credit straight into pensioner’s bank or post office account',
      'No fees or charges for enrollment or maintenance'
    ],
    benefitAmount: '₹500 to ₹2,500 / month (varies by state top-up)',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card (with verified age 60+)',
      'BPL Ration Card / SECC Inclusion slip',
      'Bank Account Passbook linked with Aadhaar'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply via state social welfare portal or at Block Development Office (BDO) / Municipal office',
      'Gram Panchayat / Ward Councilor verifies living condition and BPL status',
      'Sanction order issued and monthly DBT started via National Social Assistance Programme (NSAP)'
    ],
    officialUrl: 'https://nsap.nic.in/',
    portalName: 'NSAP Official Portal',
    deadline: 'Permanent rolling scheme',
    status: 'active',
    lastVerifiedDate: '2026-08-21',
    isPopular: true
  },
  {
    id: 'indira-gandhi-national-disability-pension',
    slug: 'indira-gandhi-national-disability-pension',
    name: 'IGNDPS – Indira Gandhi National Disability Pension Scheme',
    nameHindi: 'इंदिरा गांधी राष्ट्रीय दिव्यांगता पेंशन योजना',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Monthly disability pension for persons aged 18 to 79 with severe or multiple disabilities belonging to BPL households.',
    whoIsItFor: 'BPL individuals aged 18–79 years suffering from severe (80% and above) or multiple disabilities.',
    eligibility: {
      ageMin: 18,
      ageMax: 79,
      gender: 'all',
      incomeMax: 150000,
      categories: ['All'],
      occupations: ['worker', 'unemployed'],
      hasDisability: true,
      rawText: 'Person aged 18-79 years who belongs to BPL family and has severe disability of 80% or multiple disabilities.'
    },
    benefits: [
      'Monthly pension of ₹600 to ₹3,000 depending on state supplementary contribution',
      'Assurance of financial independence for persons with high support needs',
      'Eligible for automatic conversion to senior citizen pension after attaining 80 years'
    ],
    benefitAmount: '₹600 to ₹3,000 / month',
    benefitType: 'cash',
    requiredDocuments: [
      'UDID Card / Disability Certificate confirming 80%+ disability',
      'BPL Card / Certificate',
      'Aadhaar Card',
      'Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Submit application on nsap.nic.in or at District Social Welfare Officer office',
      'District Medical Board validates disability percentage',
      'Disbursement starts on monthly schedule via DBT'
    ],
    officialUrl: 'https://nsap.nic.in/',
    portalName: 'NSAP Disability Pension',
    deadline: 'Permanent scheme',
    status: 'active',
    lastVerifiedDate: '2026-08-23'
  },
  {
    id: 'national-family-benefit-scheme-nfbs',
    slug: 'national-family-benefit-scheme-nfbs',
    name: 'NFBS – National Family Benefit Scheme (Death of Breadwinner)',
    nameHindi: 'राष्ट्रीय परिवार लाभ योजना',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Lump sum cash assistance of ₹20,000 to ₹30,000 to a bereaved BPL family on the death of a primary breadwinner.',
    whoIsItFor: 'BPL households who lose their primary breadwinner aged between 18 and 60 years.',
    eligibility: {
      ageMin: 18,
      ageMax: 60,
      gender: 'all',
      incomeMax: 150000,
      categories: ['All'],
      occupations: ['worker', 'farmer', 'artisan', 'self_employed'],
      rawText: 'BPL household in case of death of the primary breadwinner (male or female) between 18 and 60 years of age.'
    },
    benefits: [
      'One-time lump sum grant of ₹20,000 (central component) plus state top-up (up to ₹30,000 total)',
      'Immediate financial relief to prevent debt and distress among surviving family members',
      'Sanctioned within 30 days of application'
    ],
    benefitAmount: '₹20,000 to ₹30,000 One-time Emergency Grant',
    benefitType: 'cash',
    requiredDocuments: [
      'Death Certificate of primary breadwinner',
      'Age proof of deceased (showing age between 18 and 60 at demise)',
      'BPL Card / Income Certificate',
      'Aadhaar and Bank details of surviving spouse or eldest head'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply within 6 months of breadwinner demise at Tehsil office or online via state portal',
      'Tehsildar verifies inquiry report and approves sanction',
      'Treasury transfers lump sum payment directly via PFMS DBT'
    ],
    officialUrl: 'https://nsap.nic.in/',
    portalName: 'NSAP Family Benefit',
    deadline: 'Within 6 months of death',
    status: 'active',
    lastVerifiedDate: '2026-08-16'
  },

  // ── 6. SKILL & EMPLOYMENT ──
  {
    id: 'deen-dayal-upadhyaya-grameen-kaushalya-yojana',
    slug: 'deen-dayal-upadhyaya-grameen-kaushalya-yojana',
    name: 'DDU-GKY – Deen Dayal Upadhyaya Grameen Kaushalya Yojana',
    nameHindi: 'दीन दयाल उपाध्याय ग्रामीण कौशल्य योजना',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Skill & Employment',
    description: 'Demand-driven, placement-linked skill training for poor rural youth with guaranteed minimum 70% job placement in formal organized sectors.',
    whoIsItFor: 'Poor rural youth aged 15 to 35 years (up to 45 years for women, PwD, and special groups).',
    eligibility: {
      ageMin: 15,
      ageMax: 35,
      gender: 'all',
      categories: ['All'],
      occupations: ['job_seeker', 'unemployed', 'worker'],
      educationMin: 'secondary',
      isRural: true,
      rawText: 'Rural youth from BPL/poor households as identified by SECC or holding MGNREGA job card with at least 15 days completed work.'
    },
    benefits: [
      '100% free residential skill training, free uniforms, books, and lodging',
      'Post-placement support allowance of ₹1,000 to ₹3,000 per month for up to 6 months',
      'Guaranteed job placement with statutory minimum wage and provident fund'
    ],
    benefitAmount: 'Free Residential Skilling + Guaranteed Placement',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card',
      'BPL Ration Card or MGNREGA Job Card of family',
      '10th / 12th Marks Sheet',
      'Bank Account details'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Register on Kaushal Panjee (kaushalpanjee.nic.in) or visit Project Implementing Agency (PIA) centre',
      'Counselors assess aptitude and assign course (Hospitality, IT-BPM, Retail, Logistics, Healthcare)',
      'Complete training, clear assessment, and join formal employer'
    ],
    officialUrl: 'https://ddugky.gov.in/',
    portalName: 'DDU-GKY Kaushal Panjee',
    deadline: 'Continuous admissions',
    status: 'active',
    lastVerifiedDate: '2026-08-19',
    isPopular: true
  },
  {
    id: 'pm-daksh-yojana-skilling',
    slug: 'pm-daksh-yojana-skilling',
    name: 'PM-DAKSH – Pradhan Mantri Dakshta Aur Kushalta Sampann Hitgrahi',
    nameHindi: 'पीएम दक्ष योजना (कौशल विकास)',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'central',
    categoryTag: 'Skill & Employment',
    description: 'Free upskilling, short-term training, and entrepreneurship development for SC, OBC, EBC, DNT, and sanitation workers with stipend support.',
    whoIsItFor: 'Target group youth from SC, OBC (income < ₹3 Lakh), EBC (income < ₹1 Lakh), DNT, and Safai Karamchari backgrounds.',
    eligibility: {
      ageMin: 18,
      ageMax: 45,
      gender: 'all',
      incomeMax: 300000,
      categories: ['SC', 'OBC', 'EWS'],
      occupations: ['job_seeker', 'unemployed', 'worker', 'artisan'],
      rawText: 'Marginalized youth belonging to SC, OBC (family income < ₹3 lakh), EBC, or Sanitation Workers categories.'
    },
    benefits: [
      '100% free high-quality training across modern trades (Apparel, Automotive, Electronics, Solar)',
      'Stipend of ₹1,500/month for non-residential and ₹2,500 for upskilling trainees',
      'Wage compensation of ₹3,000 for upskilling programs (5 days)'
    ],
    benefitAmount: 'Free Skilling + Up to ₹2,500 Monthly Stipend',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card',
      'Caste Certificate (for SC/OBC)',
      'Income Certificate (for OBC/EBC)',
      'Bank Account Passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on PM-DAKSH portal (pmdaksh.dosje.gov.in) or PM-DAKSH mobile app',
      'Choose trade and nearest certified government training institute',
      'Receive stipend and wage compensation upon 80% attendance'
    ],
    officialUrl: 'https://pmdaksh.dosje.gov.in/',
    portalName: 'PM-DAKSH Portal',
    deadline: 'Rolling batches',
    status: 'active',
    lastVerifiedDate: '2026-08-27'
  },
  {
    id: 'national-career-service-portal',
    slug: 'national-career-service-portal',
    name: 'National Career Service (NCS) – Employment Linkage',
    nameHindi: 'राष्ट्रीय करियर सेवा (एनसीएस)',
    ministry: 'Ministry of Labour and Employment',
    level: 'central',
    categoryTag: 'Skill & Employment',
    description: 'Free pan-India job matching platform connecting job seekers with verified private and public sector employers, career counseling, and job fairs.',
    whoIsItFor: 'All job seekers, fresh graduates, ITI passouts, experienced professionals, and apprentices.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['job_seeker', 'unemployed', 'student', 'worker'],
      rawText: 'Any Indian citizen above 18 seeking employment or career counseling services.'
    },
    benefits: [
      'Direct access to over 10 Lakh active verified private and government job openings',
      'Free career counseling and psychometric testing at Model Career Centres (MCCs)',
      'Direct interview calls at localized Rozgar Melas across India'
    ],
    benefitAmount: 'Free Job Matching + Career Counseling + Fairs',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card',
      'Updated Resume / CV',
      'Educational Certificates'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register free as Jobseeker on ncs.gov.in using Aadhaar or PAN',
      'Build digital profile with qualifications, skills, and preferred job locations',
      'Apply to unlimited jobs and receive instant interview alerts on phone'
    ],
    officialUrl: 'https://www.ncs.gov.in/',
    portalName: 'National Career Service',
    deadline: 'Open 24/7 year round',
    status: 'active',
    lastVerifiedDate: '2026-09-01',
    isPopular: true
  }
];
