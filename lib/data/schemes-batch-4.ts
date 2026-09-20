import { Scheme } from '../types';

export const SCHEMES_BATCH_4: Scheme[] = [
  // ── 1. RURAL ENTERPRISE & TRIBAL LIVELIHOODS ──
  {
    id: 'pradhan-mantri-van-dhan-yojana',
    slug: 'pradhan-mantri-van-dhan-yojana',
    name: 'PMVDY – Pradhan Mantri Van Dhan Yojana',
    nameHindi: 'प्रधानमंत्री वन धन योजना',
    ministry: 'Ministry of Tribal Affairs',
    level: 'centrally_sponsored',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Livelihood generation for tribal gatherers and artisans through establishment of Van Dhan Vikas Kendras (VDVKs) for value addition of Minor Forest Produce (MFP).',
    whoIsItFor: 'Tribal forest gatherers, artisans, and forest-dwelling Self-Help Groups.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['ST'],
      occupations: ['artisan', 'worker', 'farmer'],
      isRural: true,
      rawText: 'Tribal gatherers living in forest fringe villages forming Self Help Groups with 60%+ ST membership.'
    },
    benefits: [
      '100% grant of ₹15 Lakh per Van Dhan Vikas Kendra cluster for tools, processing equipment, and working capital',
      'Free training in hygienic harvesting, processing, grading, packaging, and branding of forest produce',
      'Guaranteed Minimum Support Price (MSP) for 87 Minor Forest Produces via TRIFED'
    ],
    benefitAmount: '₹15 Lakh Grant / VDVK Cluster + MSP Guarantee',
    benefitType: 'subsidy',
    requiredDocuments: [
      'ST Caste Certificate / Tribal identity certificate',
      'Aadhaar Card',
      'Van Dhan SHG membership resolution',
      'Bank Account details of SHG'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Form Van Dhan SHG (approx 15 members) with help of local Forest / Tribal Welfare Officer',
      'District Collector sanctions Van Dhan Vikas Kendra cluster',
      'Funds released to SHG bank account for procurement of processing machinery and toolkits'
    ],
    officialUrl: 'https://trifed.tribal.gov.in/',
    portalName: 'TRIFED Van Dhan Portal',
    deadline: 'Continuous cluster formation',
    status: 'active',
    lastVerifiedDate: '2026-08-20',
    isPopular: true
  },
  {
    id: 'kisan-drone-subsidy-scheme',
    slug: 'kisan-drone-subsidy-scheme',
    name: 'Sub-Mission on Agricultural Mechanization – Kisan Drone Subsidy',
    nameHindi: 'किसान ड्रोन सब्सिडी योजना (ड्रोन दीदी)',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'Financial assistance up to 100% (max ₹10 Lakh) for procuring agricultural drones for pesticide spraying, crop health assessment, and soil nutrient analysis.',
    whoIsItFor: 'Farmer Producer Organizations (FPOs), Women Self-Help Groups (Namo Drone Didi), and Custom Hiring Centers.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'entrepreneur'],
      isRural: true,
      rawText: 'FPOs, Agriculture graduates establishing Custom Hiring Centres, or Women SHGs under DAY-NRLM.'
    },
    benefits: [
      '100% financial grant up to ₹10 Lakh for ICAR institutes, Krishi Vigyan Kendras, and State Agriculture Universities',
      'Up to 75% subsidy (max ₹7.5 Lakh) for FPOs purchasing drones for farmers',
      'Free 15-day DGCA-certified drone pilot training and monthly honorarium for Drone Didis'
    ],
    benefitAmount: 'Up to ₹10,00,000 Drone Procurement Grant',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Entity Registration (FPO / SHG / Agri-clinic)',
      'Aadhaar Card of nominated pilot candidate',
      'Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply online through agrimachinery.nic.in or state agriculture directorate',
      'Nominated candidate completes DGCA Remote Pilot Certificate training',
      'Drone procured from DGCA type-certified OEM with DBT subsidy adjustment'
    ],
    officialUrl: 'https://agrimachinery.nic.in/',
    portalName: 'Farmech Drone Portal',
    deadline: 'Annual allocations',
    status: 'active',
    lastVerifiedDate: '2026-08-29',
    isPopular: true
  },
  {
    id: 'weavers-mudra-scheme',
    slug: 'weavers-mudra-scheme',
    name: 'Weavers Mudra Scheme – Handloom Artisan Credit',
    nameHindi: 'बुनकर मुद्रा योजना (हथकरघा कारीगर ऋण)',
    ministry: 'Ministry of Textiles',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Concessional institutional loans up to ₹2 lakh for handloom weavers at 6% interest rate with margin money assistance up to ₹20,000.',
    whoIsItFor: 'Handloom weavers, master weavers, and handloom workers possessing Pehchan Weaver Identity Card.',
    eligibility: {
      ageMin: 18,
      ageMax: 65,
      gender: 'all',
      categories: ['All'],
      occupations: ['artisan', 'self_employed'],
      rawText: 'Handloom weaver holding valid Pehchan ID card issued by Office of Development Commissioner (Handlooms).'
    },
    benefits: [
      'Loan facility up to ₹2,00,000 at concessional interest rate capped at 6%',
      'Margin money assistance up to 20% of project cost (max ₹20,000 for individual weavers, ₹2 Lakh for young entrepreneurs)',
      'Credit guarantee cover through CGTMSE for 3 years'
    ],
    benefitAmount: 'Up to ₹2,00,000 Loan at 6% Interest + ₹20,000 Margin Grant',
    benefitType: 'loan',
    requiredDocuments: [
      'Pehchan Weaver Identity Card',
      'Aadhaar Card and PAN Card',
      'Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Submit application at Weavers’ Service Centre (WSC) or commercial bank branch',
      'Assistant Director (Handlooms) verifies loom setup and active weaving work',
      'Bank sanctions loan with upfront margin money grant credited'
    ],
    officialUrl: 'https://handlooms.nic.in/',
    portalName: 'DC Handlooms Portal',
    deadline: 'Rolling approvals',
    status: 'active',
    lastVerifiedDate: '2026-08-16'
  },
  {
    id: 'national-sc-st-hub-scheme',
    slug: 'national-sc-st-hub-scheme',
    name: 'National SC-ST Hub (NSSH) – Capacity Building & Vendor Development',
    nameHindi: 'राष्ट्रीय अनुसूचित जाति एवं अनुसूचित जनजाति हब',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Special subsidy schemes and tender support to enable SC and ST entrepreneurs to participate in government public procurement and achieve 4% procurement mandate.',
    whoIsItFor: 'Micro and small enterprises owned by Scheduled Caste or Scheduled Tribe entrepreneurs.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['SC', 'ST'],
      occupations: ['entrepreneur', 'self_employed'],
      rawText: 'SC/ST MSEs holding valid Udyam Registration with minimum 51% shareholding owned by SC/ST.'
    },
    benefits: [
      'Special Marketing Assistance Scheme: 100% financial assistance for participating in domestic and international trade fairs',
      'Single Point Registration Scheme (SPRS): 100% fee subsidy for NSIC registration',
      'Tender document cost and Earnest Money Deposit (EMD) exemption in all government tenders'
    ],
    benefitAmount: '100% Subsidy on Tender Fees, Fairs & Certifications',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Udyam Registration Certificate (with SC/ST tag verified)',
      'Caste Certificate of promoters',
      'GST Registration Certificate',
      'Bank Account Passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on scsthub.in portal with Udyam number',
      'Connect with dedicated NSSH Facilitation Centre (NSSHO) in state capital',
      'Avail tender exemptions, market linkage, and equipment purchase subsidies'
    ],
    officialUrl: 'https://www.scsthub.in/',
    portalName: 'National SC-ST Hub Portal',
    deadline: 'Continuous active scheme',
    status: 'active',
    lastVerifiedDate: '2026-08-25'
  },

  // ── 2. WOMEN & YOUTH EMPOWERMENT ──
  {
    id: 'karnataka-gruha-lakshmi-scheme',
    slug: 'karnataka-gruha-lakshmi-scheme',
    name: 'Gruha Lakshmi Scheme – Karnataka Women Head Assistance',
    nameHindi: 'गृह लक्ष्मी योजना (कर्नाटक)',
    ministry: 'Women and Child Development Department, Govt of Karnataka',
    level: 'state',
    state: 'Karnataka',
    categoryTag: 'Women and Child',
    description: 'Monthly direct financial transfer of ₹2,000 to the female head of every eligible household holding BPL, Antyodaya, or APL ration card in Karnataka.',
    whoIsItFor: 'Women heads of household listed on Karnataka state ration cards whose husband is not an income tax or GST payer.',
    eligibility: {
      ageMin: 18,
      gender: 'female',
      state: 'Karnataka',
      categories: ['All'],
      occupations: ['homemaker', 'worker', 'self_employed', 'artisan', 'unemployed'],
      rawText: 'Woman identified as head of household in BPL/AAY/APL ration card in Karnataka not paying income tax or GST.'
    },
    benefits: [
      '₹2,000 direct cash deposit per month (₹24,000/year) into linked Aadhaar bank account',
      'Covers over 1.2 crore female family heads across Karnataka',
      'Empowers household decision-making, nutrition, and domestic self-reliance'
    ],
    benefitAmount: '₹2,000 / month (₹24,000 / year)',
    benefitType: 'cash',
    requiredDocuments: [
      'Ration Card (BPL, Antyodaya, or APL) naming applicant as head of family',
      'Aadhaar Card of the female head and husband',
      'Bank Account Passbook linked to Aadhaar'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply at Grama One, Karnataka One, or Bangalore One centres',
      'Biometric authentication of woman head of household',
      'Monthly DBT credited directly on 20th of every month'
    ],
    officialUrl: 'https://sevasindhugs.karnataka.gov.in/',
    portalName: 'Seva Sindhu Gruha Lakshmi',
    deadline: 'Permanent rolling scheme',
    status: 'active',
    lastVerifiedDate: '2026-09-02',
    isPopular: true
  },
  {
    id: 'bihar-mukhyamantri-kanya-utthan-yojana',
    slug: 'bihar-mukhyamantri-kanya-utthan-yojana',
    name: 'Mukhyamantri Kanya Utthan Yojana – Bihar Graduation Incentive',
    nameHindi: 'मुख्यमंत्री कन्या उत्थान योजना (स्नातक प्रोत्साहन)',
    ministry: 'Education Department, Government of Bihar',
    level: 'state',
    state: 'Bihar',
    categoryTag: 'Women and Child',
    description: 'Direct cash grant of ₹50,000 to every girl student graduating from recognized universities in Bihar to promote higher education and career development.',
    whoIsItFor: 'Unmarried or married girl students passing undergraduate degree examinations from recognized colleges and universities in Bihar.',
    eligibility: {
      ageMin: 19,
      gender: 'female',
      state: 'Bihar',
      categories: ['All'],
      occupations: ['student', 'job_seeker'],
      educationMin: 'undergraduate',
      rawText: 'Female student who completed regular or distance graduation course from a recognized university in Bihar.'
    },
    benefits: [
      'Lump sum cash reward of ₹50,000 directly credited to the graduate’s bank account',
      'Assists young women in funding competitive exam coaching, civil services prep, or higher studies',
      'Applicable across all streams (BA, BSc, BCom, BTech, MBBS, BCA)'
    ],
    benefitAmount: '₹50,000 One-time Graduation DBT Grant',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Graduation Degree Certificate / Final Year Marksheet',
      'College Registration / University Roll Number',
      'Aadhaar Card (linked to bank account in Bihar)',
      'Bihar Domicile Certificate'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on Medhasoft portal (medhasoft.bih.nic.in)',
      'University uploads student graduation results to portal for instant cross-match',
      'Amount credited directly to the student’s DBT-enabled bank account'
    ],
    officialUrl: 'https://medhasoft.bih.nic.in/',
    portalName: 'Medhasoft Bihar Portal',
    deadline: 'After result publication',
    status: 'active',
    lastVerifiedDate: '2026-08-27',
    isPopular: true
  },
  {
    id: 'day-nulm-self-employment-programme',
    slug: 'day-nulm-self-employment-programme',
    name: 'DAY-NULM – Self Employment Programme (SEP)',
    nameHindi: 'दीनदयाल अंत्योदय योजना – राष्ट्रीय शहरी आजीविका मिशन (स्वरोजगार)',
    ministry: 'Ministry of Housing and Urban Affairs',
    level: 'centrally_sponsored',
    categoryTag: 'Skill & Employment',
    description: 'Subsidized bank credit with 7% interest subvention for urban poor setting up individual micro-enterprises (up to ₹2 Lakh) or group micro-enterprises (up to ₹10 Lakh).',
    whoIsItFor: 'Urban poor, street vendors, and urban self-help groups intending to set up micro-manufacturing or service units.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'artisan', 'self_employed', 'entrepreneur'],
      rawText: 'Urban poor identified through community structures (City Mission Management Unit / Urban Local Body).'
    },
    benefits: [
      'Loans up to ₹2,00,000 for individual micro-enterprises without collateral',
      'Loans up to ₹10,00,000 for group enterprises (minimum 3 members)',
      'Interest subvention over and above 7% interest rate paid directly by central government'
    ],
    benefitAmount: 'Up to ₹10 Lakh Micro-Enterprise Credit + Interest Subvention',
    benefitType: 'loan',
    requiredDocuments: [
      'Aadhaar Card & Voter ID',
      'Urban Local Body residency / BPL proof',
      'Project proposal for proposed business activity',
      'Bank Account details'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Submit application at Urban Local Body / Municipality City Mission Management Unit (CMMU)',
      'Task Force Committee screens applications and sponsors files to commercial banks',
      'Bank sanctions loan and releases working capital'
    ],
    officialUrl: 'https://nulm.gov.in/',
    portalName: 'DAY-NULM Portal',
    deadline: 'Rolling applications',
    status: 'active',
    lastVerifiedDate: '2026-08-22'
  },
  {
    id: 'day-nrlm-shg-bank-linkage',
    slug: 'day-nrlm-shg-bank-linkage',
    name: 'DAY-NRLM – Deendayal Antyodaya Yojana Rural Livelihoods Mission',
    nameHindi: 'दीनदयाल अंत्योदय योजना – राष्ट्रीय ग्रामीण आजीविका मिशन',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Community investment fund and collateral-free bank loans up to ₹20 lakh for women Self Help Groups (SHGs) with interest subvention down to 7% (effective 4% on prompt repayment).',
    whoIsItFor: 'Rural women organized into Self Help Groups (SHGs), Village Organizations, and Cluster Level Federations.',
    eligibility: {
      ageMin: 18,
      gender: 'female',
      categories: ['All'],
      occupations: ['homemaker', 'worker', 'farmer', 'artisan', 'self_employed'],
      isRural: true,
      rawText: 'Rural women participating in an SHG that has functioned actively for at least 6 months following Panchasutra principles.'
    },
    benefits: [
      'Revolving Fund (RF) grant of ₹20,000 to ₹30,000 per SHG',
      'Community Investment Fund (CIF) grant up to ₹1.5 Lakh per SHG',
      'Collateral-free bank credit up to ₹20,00,000 per SHG at 4% effective interest rate upon prompt repayment'
    ],
    benefitAmount: 'Up to ₹20,00,000 Collateral-free Credit at 4% Interest',
    benefitType: 'loan',
    requiredDocuments: [
      'SHG Resolution Book and Member Register',
      'Panchasutra Compliance Record (meetings, savings, credit, recovery, accounting)',
      'Aadhaar Cards of all members',
      'SHG Savings Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Community Resource Person (CRP) assists SHG in grading appraisal',
      'Bank evaluates loan proposal based on Micro Credit Plan (MCP)',
      'Sanctioned loan credited to SHG savings account'
    ],
    officialUrl: 'https://nrlm.gov.in/',
    portalName: 'National Rural Livelihoods Portal',
    deadline: 'Continuous operation',
    status: 'active',
    lastVerifiedDate: '2026-08-30',
    isPopular: true
  },
  {
    id: 'jal-jeevan-mission-har-ghar-jal',
    slug: 'jal-jeevan-mission-har-ghar-jal',
    name: 'Jal Jeevan Mission (JJM) – Functional Household Tap Connection',
    nameHindi: 'जल जीवन मिशन (हर घर जल)',
    ministry: 'Ministry of Jal Shakti',
    level: 'centrally_sponsored',
    categoryTag: 'Health & Wellness',
    description: 'Providing safe, adequate, and continuous piped drinking water through individual Functional Household Tap Connections (FHTC) to every rural home in India.',
    whoIsItFor: 'Every rural household in all revenue villages, tribal hamlets, and desert habitations.',
    eligibility: {
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'worker', 'artisan', 'self_employed', 'homemaker', 'senior_citizen'],
      isRural: true,
      rawText: 'All rural households residing in villages without individualized piped tap water connection.'
    },
    benefits: [
      '100% free installation of piped tap connection at doorstep delivering 55 litres of potable water per capita per day (lpcd)',
      'Regular water quality testing via field testing kits (FTKs) managed by village women',
      'Eliminates arduous daily water fetching burdens for rural women and girls'
    ],
    benefitAmount: '100% Free Household Tap Water Connection',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card',
      'Gram Panchayat residential proof'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Village Water and Sanitation Committee (VWSC) / Paani Samiti maps unserved households',
      'Public Health Engineering Department installs pipeline, water meter, and tap standpost',
      'Tap water operational certificate verified by Gram Sabha'
    ],
    officialUrl: 'https://jaljeevanmission.gov.in/',
    portalName: 'Jal Jeevan Mission Portal',
    deadline: 'Universal saturation targets',
    status: 'active',
    lastVerifiedDate: '2026-08-15',
    isPopular: true
  },

  // ── 3. CHILD PROTECTION, NUTRITION & WELFARE ──
  {
    id: 'mission-vatsalya-child-sponsorship',
    slug: 'mission-vatsalya-child-sponsorship',
    name: 'Mission Vatsalya – Family-Based Child Sponsorship Scheme',
    nameHindi: 'मिशन वात्सल्य (बाल प्रायोजन योजना)',
    ministry: 'Ministry of Women and Child Development',
    level: 'centrally_sponsored',
    categoryTag: 'Women and Child',
    description: 'Financial assistance of ₹4,000 per month per child to vulnerable families, widows, divorced mothers, or single-parent families to keep children in family care and prevent institutionalization.',
    whoIsItFor: 'Children in difficult circumstances (orphans, children of widows, incapacitated parents, destitute families) whose rural family income is under ₹72,000 or urban income is under ₹96,000.',
    eligibility: {
      ageMax: 18,
      gender: 'all',
      incomeMax: 96000,
      categories: ['All'],
      occupations: ['student'],
      rawText: 'Children up to 18 years living in families with annual income not exceeding ₹72,000 (rural) or ₹96,000 (urban) where parent is dead, disabled, or incapacitated.'
    },
    benefits: [
      'Direct cash sponsorship of ₹4,000 per month per child directly credited to child’s bank account',
      'Provided for up to 3 years (renewable till child completes 18 years or finishes schooling)',
      'Ensures continuous education, nutrition, medical care, and clothing without family breakdown'
    ],
    benefitAmount: '₹4,000 / month per child',
    benefitType: 'cash',
    requiredDocuments: [
      'Child Birth Certificate and School Enrollment Certificate',
      'Income Certificate issued by Revenue Authority (< ₹72,000/rural or ₹96,000/urban)',
      'Death Certificate of parent (if applicable)',
      'Bank Account in the name of the child and surviving guardian'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Submit application to District Child Protection Unit (DCPU) or Child Welfare Committee (CWC)',
      'Child Protection Officer conducts Social Investigation Inquiry at home',
      'Sponsorship and Foster Care Approval Committee sanctions monthly DBT'
    ],
    officialUrl: 'https://wcd.nic.in/',
    portalName: 'Mission Vatsalya Portal',
    deadline: 'Permanent rolling scheme',
    status: 'active',
    lastVerifiedDate: '2026-08-24',
    isPopular: true
  },
  {
    id: 'poshan-tracker-supplementary-nutrition',
    slug: 'poshan-tracker-supplementary-nutrition',
    name: 'Saksham Anganwadi and POSHAN 2.0 – Supplementary Nutrition',
    nameHindi: 'सक्षम आंगनवाड़ी एवं पोषण 2.0',
    ministry: 'Ministry of Women and Child Development',
    level: 'centrally_sponsored',
    categoryTag: 'Women and Child',
    description: 'Daily hot cooked meals, take-home rations (THR), and micro-nutrient fortified foods for children aged 6 months to 6 years, pregnant women, and lactating mothers.',
    whoIsItFor: 'Children aged 6 months to 6 years, pregnant women, and lactating mothers registered at any Anganwadi Centre.',
    eligibility: {
      ageMax: 6,
      gender: 'all',
      categories: ['All'],
      occupations: ['homemaker', 'worker'],
      rawText: 'All children under 6 years, pregnant women, and nursing mothers residing in the catchment area of an Anganwadi Centre.'
    },
    benefits: [
      'Free Take-Home Ration (THR) or Hot Cooked Meals providing 500-800 kcal calories and 12-25g protein daily',
      'Special double nutrition rations for Severely Acute Malnourished (SAM) children',
      'Regular growth monitoring (height/weight) and free pediatric health checkups'
    ],
    benefitAmount: '100% Free Daily Fortified Nutrition & Meals',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card of mother/father',
      'Child Birth Card / Hospital Discharge Summary'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Visit local village or ward Anganwadi Worker (AWW)',
      'Worker enters details into the national Poshan Tracker mobile app',
      'Collect monthly dry nutrition packs or daily hot meals'
    ],
    officialUrl: 'https://www.poshantracker.in/',
    portalName: 'POSHAN Tracker Portal',
    deadline: 'Continuous service',
    status: 'active',
    lastVerifiedDate: '2026-08-19',
    isPopular: true
  },

  // ── 4. SOCIAL INCLUSION & MINORITY SCHEMES ──
  {
    id: 'begum-hazrat-mahal-national-scholarship',
    slug: 'begum-hazrat-mahal-national-scholarship',
    name: 'Begum Hazrat Mahal National Scholarship for Minority Girls',
    nameHindi: 'बेगम हजरत महल राष्ट्रीय छात्रवृत्ति योजना',
    ministry: 'Ministry of Minority Affairs',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Scholarship assistance to meritorious girl students belonging to notified minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) studying in classes 9 to 12.',
    whoIsItFor: 'Minority girl students studying in classes 9th to 12th securing minimum 50% marks with family income under ₹2,00,000.',
    eligibility: {
      ageMin: 14,
      ageMax: 19,
      gender: 'female',
      incomeMax: 200000,
      categories: ['Minority'],
      occupations: ['student'],
      educationMin: 'primary',
      rawText: 'Girl students belonging to minority communities who secured at least 50% marks in previous class with annual parental income below ₹2 lakh.'
    },
    benefits: [
      '₹5,000 per annum for students of Class IX and X',
      '₹6,000 per annum for students of Class XI and XII',
      'Credited directly to the student’s own bank account via DBT'
    ],
    benefitAmount: '₹5,000 to ₹6,000 / year',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Previous year marksheet showing 50%+ marks',
      'Parental Income Certificate (< ₹2,00,000)',
      'Self-declaration of belonging to minority community',
      'School Bonafide Certificate and Aadhaar Card'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on National Scholarship Portal (scholarships.gov.in)',
      'School principal verifies academic credentials on the portal',
      'Ministry of Minority Affairs sanctions scholarship directly via PFMS'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal',
    deadline: 'October - November annually',
    status: 'active',
    lastVerifiedDate: '2026-08-17',
    isPopular: true
  },
  {
    id: 'atal-bhujal-yojana-groundwater',
    slug: 'atal-bhujal-yojana-groundwater',
    name: 'Atal Bhujal Yojana (ABHY) – Community Groundwater Management',
    nameHindi: 'अटल भूजल योजना',
    ministry: 'Ministry of Jal Shakti',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Community-led sustainable groundwater management in water-stressed districts of Gujarat, Haryana, Karnataka, MP, Maharashtra, Rajasthan, and UP.',
    whoIsItFor: 'Farming communities and Water User Associations in 8,220 designated water-stressed Gram Panchayats.',
    eligibility: {
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'worker'],
      isRural: true,
      rawText: 'Farmers and residents residing in identified water-stressed Gram Panchayats participating in water budgeting.'
    },
    benefits: [
      'Incentive grants to Gram Panchayats for adopting drip/sprinkler irrigation, crop diversification, and artificial recharge',
      'Free community water security planning and real-time groundwater monitoring piezometers',
      'Guaranteed dry-season irrigation water security for participating farmer clusters'
    ],
    benefitAmount: 'Incentive Grants for Water-efficient Farming',
    benefitType: 'service',
    requiredDocuments: [
      'Panchayat resident proof',
      'Aadhaar Card'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Participate in village Water Security Plan meetings organized by DPMU',
      'Adopt water-efficient crops and micro-irrigation practices',
      'Gram Panchayat receives performance-based financial incentives'
    ],
    officialUrl: 'https://ataljal.mowr.gov.in/',
    portalName: 'Atal Bhujal Portal',
    deadline: 'Panchayat annual plan',
    status: 'active',
    lastVerifiedDate: '2026-08-11'
  }
];
