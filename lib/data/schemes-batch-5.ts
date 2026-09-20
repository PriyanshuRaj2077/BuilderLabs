import { Scheme } from '../types';

export const SCHEMES_BATCH_5: Scheme[] = [
  // ── 1. SOLAR, ENERGY & INFRASTRUCTURE ──
  {
    id: 'pm-surya-ghar-muft-bijli-yojana',
    slug: 'pm-surya-ghar-muft-bijli-yojana',
    name: 'PM Surya Ghar: Muft Bijli Yojana – Rooftop Solar Subsidy',
    nameHindi: 'पीएम सूर्य घर: मुफ्त बिजली योजना',
    ministry: 'Ministry of New and Renewable Energy',
    level: 'central',
    categoryTag: 'Housing & Shelter',
    description: 'Providing up to 300 units of free electricity every month to 1 crore households by installing rooftop solar systems with direct central capital subsidy up to ₹78,000.',
    whoIsItFor: 'Indian households with suitable roof space, grid electricity connection, and no prior rooftop solar subsidy availed.',
    eligibility: {
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'farmer', 'self_employed', 'artisan', 'entrepreneur', 'senior_citizen'],
      rawText: 'Any residential electricity consumer with a dedicated roof or terrace holding an active electricity connection.'
    },
    benefits: [
      'Central capital subsidy of ₹33,000 for 1 kW, ₹66,000 for 2 kW, and ₹78,000 for 3 kW+ systems',
      'Zero or negative electricity bills: generate up to 300 free units/month and export surplus power to grid for credit',
      'Collateral-free low-interest bank loans at 7% from public sector banks for the balance amount'
    ],
    benefitAmount: 'Direct Subsidy up to ₹78,000 + 300 Units Free Power/Month',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Recent Electricity Bill (last 6 months)',
      'Aadhaar Card of the electricity account holder',
      'Bank Account Passbook / Cancelled Cheque',
      'Proof of roof ownership / occupancy'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on pmsuryaghar.gov.in with state, DISCOM name, and electricity consumer number',
      'Select empanelled vendor and obtain technical feasibility approval from DISCOM',
      'Vendor installs solar system, DISCOM installs bidirectional net meter, and ₹78,000 subsidy is credited to bank account within 30 days'
    ],
    officialUrl: 'https://pmsuryaghar.gov.in/',
    portalName: 'PM Surya Ghar National Portal',
    deadline: 'Open till 1 crore target',
    status: 'active',
    lastVerifiedDate: '2026-09-02',
    isPopular: true
  },
  {
    id: 'satat-compressed-biogas-plants',
    slug: 'satat-compressed-biogas-plants',
    name: 'SATAT – Sustainable Alternative Towards Affordable Transportation',
    nameHindi: 'सतत योजना (कम्प्रेस्ड बायो-गैस संयंत्र)',
    ministry: 'Ministry of Petroleum and Natural Gas',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Encouraging entrepreneurs to establish Compressed Bio-Gas (CBG) plants from agricultural residue, cattle dung, and urban organic waste with guaranteed long-term offtake by Oil Marketing Companies.',
    whoIsItFor: 'Agri-entrepreneurs, dairy cooperatives, and business owners building bio-CNG plants.',
    eligibility: {
      ageMin: 21,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur'],
      rawText: 'Entrepreneurs or commercial entities with land and access to organic waste/paddy straw/dung for bio-gas production.'
    },
    benefits: [
      'Guaranteed commercial procurement price for CBG by IOCL, BPCL, HPCL, and GAIL for 10–15 years',
      'Central Financial Assistance (CFA) up to ₹4 Crore per plant based on capacity',
      'Additional income from fermented organic manure (FOM) for sale to organic farmers'
    ],
    benefitAmount: 'Up to ₹4 Crore Project Subsidy + Guaranteed Offtake',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Detailed Project Report (DPR)',
      'Company Incorporation / Partnership Deed',
      'Land Title or Long Lease for plant site',
      'Pollution Control Board Consent to Establish'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Submit Expression of Interest (EoI) on oil marketing company portal or satat.co.in',
      'Receive Letter of Intent (LoI) with guaranteed gas buyback agreement',
      'Sanction loan from commercial bank and receive CFA capital subsidy'
    ],
    officialUrl: 'https://satat.co.in/',
    portalName: 'SATAT Portal',
    deadline: 'Rolling approvals',
    status: 'active',
    lastVerifiedDate: '2026-08-14'
  },

  // ── 2. WOMEN SAFETY & HOSTEL SCHEMES ──
  {
    id: 'mission-shakti-sakhi-niwas-hostel',
    slug: 'mission-shakti-sakhi-niwas-hostel',
    name: 'Mission Shakti – Sakhi Niwas (Working Women Hostels)',
    nameHindi: 'मिशन शक्ति – सखी निवास (कामकाजी महिला छात्रावास)',
    ministry: 'Ministry of Women and Child Development',
    level: 'centrally_sponsored',
    categoryTag: 'Women and Child',
    description: 'Safe, affordable, and clean residential accommodation with daycare/creche facilities for working women living away from home in urban and semi-urban areas.',
    whoIsItFor: 'Single, married, widowed, divorced, or separated working women whose gross monthly income is under ₹50,000 (metro) or ₹35,000 (other towns).',
    eligibility: {
      ageMin: 18,
      gender: 'female',
      incomeMax: 600000,
      categories: ['All'],
      occupations: ['worker', 'self_employed', 'entrepreneur'],
      rawText: 'Working women earning up to ₹50,000/month in metropolitan cities or ₹35,000/month in other cities undergoing employment or job training.'
    },
    benefits: [
      'Highly subsidized residential accommodation (hostel room, food, 24/7 security, WiFi)',
      'In-house safe day-care creche facility for children up to 18 years (girls) and 5 years (boys)',
      'Clean living space enabling young women to pursue careers in major economic hubs'
    ],
    benefitAmount: 'Subsidized Safe Urban Accommodation & Creche',
    benefitType: 'service',
    requiredDocuments: [
      'Employment Letter / Salary Slip',
      'Aadhaar Card',
      'Identity and address proof of permanent residence',
      'Two character reference letters'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Locate nearest Sakhi Niwas hostel via wcd.nic.in or District Women and Child Development office',
      'Submit admission application with proof of current employment in city',
      'Hostel management committee allots room on nominal monthly maintenance charges'
    ],
    officialUrl: 'https://wcd.nic.in/',
    portalName: 'Ministry of WCD Portal',
    deadline: 'Continuous admissions based on vacancy',
    status: 'active',
    lastVerifiedDate: '2026-08-26',
    isPopular: true
  },
  {
    id: 'mission-shakti-sambal-one-stop-centre',
    slug: 'mission-shakti-sambal-one-stop-centre',
    name: 'Mission Shakti – Sambal (One Stop Centres / Sakhi 181)',
    nameHindi: 'मिशन शक्ति – संबल (सखी वन स्टॉप सेंटर)',
    ministry: 'Ministry of Women and Child Development',
    level: 'central',
    categoryTag: 'Women and Child',
    description: 'Integrated 24/7 emergency support under one roof (medical aid, legal counsel, police assistance, psycho-social counseling, and temporary shelter) for women affected by violence.',
    whoIsItFor: 'Any girl or woman facing domestic violence, harassment, physical abuse, or distress in private or public spaces.',
    eligibility: {
      gender: 'female',
      categories: ['All'],
      occupations: ['homemaker', 'worker', 'student', 'self_employed', 'unemployed', 'senior_citizen'],
      rawText: 'All girls and women in distress or subjected to physical, sexual, emotional, psychological, or economic abuse.'
    },
    benefits: [
      '100% free emergency medical treatment and immediate hospital admission',
      'Free temporary safe shelter for up to 5 days with food, clothing, and medicines',
      'Free legal aid and lawyer representation through District Legal Services Authority (DLSA)',
      '24/7 Toll-Free Women Helpline: 181'
    ],
    benefitAmount: '100% Free Emergency Medical, Legal & Shelter Aid',
    benefitType: 'service',
    requiredDocuments: [
      'No documents mandatory for emergency admission; Aadhaar requested later if available'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Dial 181 (Women Helpline) or walk into nearest One Stop Centre (OSC) at District Hospital',
      'Case worker coordinates medical checkup, police report (zero FIR if needed), and counselor',
      'Safe shelter provided with continuous case monitoring and legal accompaniment'
    ],
    officialUrl: 'https://wcd.nic.in/',
    portalName: 'Mission Shakti Portal',
    deadline: 'Operational 24x7x365',
    status: 'active',
    lastVerifiedDate: '2026-08-20',
    isPopular: true
  },

  // ── 3. SKILL TRAINING & HIGHER EDUCATION ──
  {
    id: 'nats-national-apprenticeship-training-scheme',
    slug: 'nats-national-apprenticeship-training-scheme',
    name: 'NATS 2.0 – National Apprenticeship Training Scheme for Graduates',
    nameHindi: 'राष्ट्रीय शिक्षुता प्रशिक्षण योजना (स्नातक एवं डिप्लोमा)',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Skill & Employment',
    description: 'One-year paid industrial apprenticeship training for Engineering, General stream graduates (BA, BSc, BCom), and Diploma holders with direct monthly DBT stipend.',
    whoIsItFor: 'Fresh engineering, science, commerce, humanities graduates and polytechnic diploma holders within 3 years of passing.',
    eligibility: {
      ageMin: 18,
      ageMax: 28,
      gender: 'all',
      categories: ['All'],
      occupations: ['job_seeker', 'student', 'unemployed'],
      educationMin: 'diploma',
      rawText: 'Indian national holding degree or diploma in engineering, technology, or general streams within 3 years of course completion.'
    },
    benefits: [
      'Direct monthly government stipend subsidy up to ₹4,500/month (total stipend ₹9,000 to ₹15,000+ matched by corporate employer)',
      'Certificate of Proficiency issued by Board of Apprenticeship Training (BOAT) recognized across public and private sectors',
      'Direct pathway to permanent jobs in leading manufacturing, IT, pharma, and core industries'
    ],
    benefitAmount: '₹9,000 to ₹15,000 / month Stipend (Govt DBT + Employer)',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Degree / Diploma Marksheet and Provisional Certificate',
      'Aadhaar Card',
      'Aadhaar-seeded Bank Account Passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Enroll on the national NATS portal (nats.education.gov.in)',
      'Search and apply for apprentice vacancies in top PSUs and private companies',
      'Sign digital contract and receive monthly DBT stipend'
    ],
    officialUrl: 'https://nats.education.gov.in/',
    portalName: 'NATS 2.0 Portal',
    deadline: 'Rolling vacancies throughout year',
    status: 'active',
    lastVerifiedDate: '2026-08-30',
    isPopular: true
  },
  {
    id: 'free-coaching-scheme-sc-obc-students',
    slug: 'free-coaching-scheme-sc-obc-students',
    name: 'Free Coaching Scheme for SC and OBC Students',
    nameHindi: 'अनुसूचित जाति एवं अन्य पिछड़ा वर्ग हेतु निःशुल्क कोचिंग योजना',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: '100% free coaching in premier private coaching institutes for UPSC Civil Services, State PSCs, JEE, NEET, CLAT, CAT, Banking, and SSC for SC and OBC students.',
    whoIsItFor: 'Meritorious students belonging to SC and OBC communities with annual family income up to ₹8,00,000.',
    eligibility: {
      ageMin: 18,
      ageMax: 35,
      gender: 'all',
      incomeMax: 800000,
      categories: ['SC', 'OBC'],
      occupations: ['student', 'job_seeker'],
      educationMin: 'higher_secondary',
      rawText: 'SC and OBC candidates who passed Class 12 or graduation with family income not exceeding ₹8 lakh per annum.'
    },
    benefits: [
      '100% full course coaching fee paid directly to empaneled premier coaching institutes',
      'Monthly local stipend of ₹4,000/month for outstation students (₹2,500/month for local students) during the coaching period',
      'Covers classroom guidance, test series, study materials, and interview preparation'
    ],
    benefitAmount: '100% Free Coaching Fees + Up to ₹4,000 / Month Stipend',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Caste Certificate (SC / OBC valid non-creamy layer)',
      'Income Certificate (< ₹8,00,000)',
      '10th, 12th, and Graduation Marksheets',
      'Aadhaar-seeded Bank Account Passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on coaching.dosje.gov.in during the annual application window',
      'Merit list prepared based on academic percentage in qualifying degree/examination',
      'Selected candidates join allotted premier coaching centre'
    ],
    officialUrl: 'https://coaching.dosje.gov.in/',
    portalName: 'MoSJE Free Coaching Portal',
    deadline: 'Annual window (May-June)',
    status: 'active',
    lastVerifiedDate: '2026-08-11',
    isPopular: true
  },
  {
    id: 'national-fellowship-obc-students-nfobc',
    slug: 'national-fellowship-obc-students-nfobc',
    name: 'NFOBC – National Fellowship for Other Backward Classes',
    nameHindi: 'अन्य पिछड़ा वर्ग हेतु राष्ट्रीय फेलोशिप (एनएफओबीसी)',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'UGC fellowship of ₹37,000 to ₹42,000 per month for OBC scholars pursuing regular M.Phil. or Ph.D. programs in Sciences, Humanities, and Social Sciences.',
    whoIsItFor: 'OBC students who have qualified UGC-NET / CSIR-NET and registered for full-time Ph.D. in recognized universities.',
    eligibility: {
      ageMin: 21,
      ageMax: 35,
      gender: 'all',
      incomeMax: 800000,
      categories: ['OBC'],
      occupations: ['student'],
      educationMin: 'postgraduate',
      rawText: 'OBC candidates possessing valid Non-Creamy Layer certificate registered for regular full-time Ph.D. course.'
    },
    benefits: [
      'Junior Research Fellow (JRF): ₹37,000 per month for first 2 years',
      'Senior Research Fellow (SRF): ₹42,000 per month for remaining 3 years',
      'Annual contingency grant up to ₹25,000 + House Rent Allowance (HRA) as per city slab'
    ],
    benefitAmount: '₹37,000 to ₹42,000 / month + HRA + Contingency',
    benefitType: 'scholarship',
    requiredDocuments: [
      'OBC Non-Creamy Layer Certificate',
      'Post-Graduation Marksheet and Degree',
      'Ph.D. Registration / Admission Certificate',
      'UGC-NET / CSIR-NET Score Card'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'UGC automatically identifies fellowship awardees from NET merit list among registered OBC scholars',
      'Award letter issued on UGC fellowship portal',
      'Monthly fellowship disbursed via Canara Bank Scholarship Portal DBT'
    ],
    officialUrl: 'https://ugc.gov.in/',
    portalName: 'UGC Fellowship Portal',
    deadline: 'With NET exam cycles',
    status: 'active',
    lastVerifiedDate: '2026-08-15'
  },
  {
    id: 'pm-shri-schools-modern-education',
    slug: 'pm-shri-schools-modern-education',
    name: 'PM SHRI – PM Schools for Rising India',
    nameHindi: 'पीएम श्री स्कूल योजना',
    ministry: 'Ministry of Education',
    level: 'centrally_sponsored',
    categoryTag: 'Education & Learning',
    description: 'Upgrading 14,500 government schools across India into smart, green, and technologically advanced exemplar schools offering experiential NEP-aligned learning.',
    whoIsItFor: 'Students enrolled in government elementary and secondary schools selected under PM SHRI across all states.',
    eligibility: {
      ageMin: 5,
      ageMax: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['student'],
      rawText: 'All students attending government schools designated as PM SHRI exemplar institutions.'
    },
    benefits: [
      'Free access to advanced ICT labs, smart interactive classrooms, and robotics/AI tinkering labs',
      'Free vocational skilling courses, internships with local artisans, and environmental learning gardens',
      'Special focus on sports, nutritional mid-day meals, and child-centric pedagogy'
    ],
    benefitAmount: 'Free Smart Classrooms & High-Tech Schooling',
    benefitType: 'service',
    requiredDocuments: [
      'School Admission Form',
      'Aadhaar Card of student / parents'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Enroll in any local designated PM SHRI Government / Kendriya Vidyalaya / Navodaya Vidyalaya',
      'Zero tuition fee for elementary classes under Right to Education (RTE)'
    ],
    officialUrl: 'https://pmshrischools.education.gov.in/',
    portalName: 'PM SHRI National Portal',
    deadline: 'Annual school enrollment',
    status: 'active',
    lastVerifiedDate: '2026-08-21',
    isPopular: true
  },

  // ── 4. AYUSH, HEALTH & AGRI-VALUE CHAIN ──
  {
    id: 'national-ayush-mission-health',
    slug: 'national-ayush-mission-health',
    name: 'National AYUSH Mission – Free Traditional Holistic Healthcare',
    nameHindi: 'राष्ट्रीय आयुष मिशन (आयुर्वेद एवं योग कल्याण)',
    ministry: 'Ministry of Ayush',
    level: 'centrally_sponsored',
    categoryTag: 'Health & Wellness',
    description: 'Free healthcare, medical consultations, and herbal medicines across Ayurveda, Yoga, Unani, Siddha, and Homeopathy (AYUSH) health and wellness centres.',
    whoIsItFor: 'All citizens seeking holistic preventive, chronic, and lifestyle disease management.',
    eligibility: {
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'farmer', 'student', 'homemaker', 'self_employed', 'senior_citizen'],
      rawText: 'Open to all citizens across urban and rural India without any income criteria.'
    },
    benefits: [
      '100% free outpatient medical consultations with certified AYUSH doctors and Vaidyas',
      'Free distribution of essential classical Ayurvedic, Homeopathic, and Unani medicines',
      'Free daily therapeutic Yoga classes and lifestyle disorder management sessions'
    ],
    benefitAmount: '100% Free AYUSH Healthcare & Herbal Medicines',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card or ABHA Health ID (for digital OPD registration)'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Visit nearest Ayush Health and Wellness Centre (AHWC) or Ayush dispensary',
      'Register at OPD desk and receive free doctor consultation and medicines'
    ],
    officialUrl: 'https://ayush.gov.in/',
    portalName: 'Ministry of Ayush Portal',
    deadline: 'Permanent daily services',
    status: 'active',
    lastVerifiedDate: '2026-08-18'
  },
  {
    id: 'pradhan-mantri-kisan-sampada-yojana-pmksy',
    slug: 'pradhan-mantri-kisan-sampada-yojana-pmksy',
    name: 'PMKSY – Pradhan Mantri Kisan SAMPADA Yojana',
    nameHindi: 'प्रधानमंत्री किसान संपदा योजना (खाद्य प्रसंस्करण)',
    ministry: 'Ministry of Food Processing Industries',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'Creation of modern food processing infrastructure, mega food parks, integrated cold chains, and agro-processing clusters to reduce post-harvest agricultural losses.',
    whoIsItFor: 'Agri-food processors, cold chain operators, farmer producer organizations (FPOs), and cooperatives.',
    eligibility: {
      ageMin: 21,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur', 'farmer'],
      rawText: 'Commercial entities, FPOs, and cooperatives investing in food processing infrastructure.'
    },
    benefits: [
      'Capital subsidy of 35% to 50% of eligible project cost (up to ₹10 Crore for cold chains and mega food parks)',
      'Subsidies up to 70% in North Eastern states and Himalayan regions',
      'Minimizes post-harvest fruit/vegetable rotting from 25% down to under 5%'
    ],
    benefitAmount: 'Up to ₹10 Crore Capital Grant for Food Processing',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Detailed Project Report (DPR) certified by chartered engineer',
      'Bank In-Principle Loan Sanction Letter',
      'Land Title or 15-year registered lease deed',
      'FSSAI & Environmental Clearances'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Submit online application against published Expression of Interest on sampada-mofpi.gov.in',
      'Technical Committee evaluates financial and technical viability',
      'Subsidy released in 3-4 progress-linked installments into bank escrow account'
    ],
    officialUrl: 'https://mofpi.gov.in/pmksy',
    portalName: 'MoFPI SAMPADA Portal',
    deadline: 'EoI cycles',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    isPopular: true
  },
  {
    id: 'national-livestock-mission-breed-development',
    slug: 'national-livestock-mission-breed-development',
    name: 'National Livestock Mission (NLM) – 50% Capital Subsidy',
    nameHindi: 'राष्ट्रीय पशुधन मिशन (50% पूंजीगत सब्सिडी)',
    ministry: 'Ministry of Fisheries, Animal Husbandry and Dairying',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Direct 50% capital subsidy up to ₹50 Lakh to establish breed multiplication farms for poultry, sheep, goat, piggery, and fodder seed production.',
    whoIsItFor: 'Individual farmers, rural entrepreneurs, SHGs, FPOs, and JLGs starting commercial livestock breeding farms.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'entrepreneur'],
      isRural: true,
      rawText: 'Individual or enterprise possessing land and technical capability to establish certified livestock breeding units.'
    },
    benefits: [
      '50% capital subsidy directly released in two installments via SIDBI',
      'Up to ₹25 Lakh subsidy for 500-parent sheep/goat breeding farms',
      'Up to ₹25 Lakh subsidy for broiler/layer parent poultry farms; up to ₹50 Lakh for fodder silage units'
    ],
    benefitAmount: '50% Capital Subsidy up to ₹50 Lakh',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Detailed Project Report (DPR)',
      'Land Ownership Proof (minimum 1 to 2 acres required for shed)',
      'Bank Loan Sanction letter or bank statement showing self-financing proof',
      'Training certificate in animal husbandry'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on the national NLM portal (nlm.udyamimitra.in)',
      'State Implementing Agency (SIA) inspects site and recommends project',
      'Subsidy released in 2 tranches: 50% upon bank loan disbursement and 50% on physical completion'
    ],
    officialUrl: 'https://nlm.udyamimitra.in/',
    portalName: 'NLM Udyamimitra Portal',
    deadline: 'Continuous intake',
    status: 'active',
    lastVerifiedDate: '2026-08-31',
    isPopular: true
  },
  {
    id: 'interest-subvention-short-term-crop-loan',
    slug: 'interest-subvention-short-term-crop-loan',
    name: 'Modified Interest Subvention Scheme (MISS) – 4% Farm Credit',
    nameHindi: 'संशोधित ब्याज सबवेंशन योजना (4% रियायती फसल ऋण)',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'Concessional short-term crop loans up to ₹3 lakh through Kisan Credit Card (KCC) at an effective interest rate of only 4% per annum upon prompt repayment.',
    whoIsItFor: 'All farmers cultivating crops, holding active Kisan Credit Cards with commercial, cooperative, or regional rural banks.',
    eligibility: {
      ageMin: 18,
      ageMax: 75,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer'],
      isRural: true,
      rawText: 'Farmers availing short-term crop loans up to ₹3 lakh through Kisan Credit Card.'
    },
    benefits: [
      '1.5% interest subvention provided to banks to offer loans at benchmark 7%',
      'Additional 3% Prompt Repayment Incentive (PRI) for farmers who repay within one year',
      'Net effective interest rate reduced to an unbeatable 4% per annum'
    ],
    benefitAmount: 'Short-term Crop Loans up to ₹3 Lakh at 4% Effective Interest',
    benefitType: 'loan',
    requiredDocuments: [
      'Kisan Credit Card (KCC)',
      'Land Record (Khatauni / Patta / 7/12 extract)',
      'Aadhaar Card'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Visit local commercial bank, Gramin Bank, or Primary Agricultural Credit Society (PACS)',
      'Submit crop cultivation land declaration for the upcoming season',
      'Draw funds via KCC RuPay card and repay within 12 months to receive the 3% PRI rebate'
    ],
    officialUrl: 'https://agricoop.nic.in/',
    portalName: 'Agriculture Department Portal',
    deadline: 'Available every cropping season',
    status: 'active',
    lastVerifiedDate: '2026-09-01',
    isPopular: true
  }
];
