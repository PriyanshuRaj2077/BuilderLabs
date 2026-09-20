import { Scheme } from '../types';

export const SCHEMES_BATCH_3: Scheme[] = [
  // ── 1. ENERGY, ENVIRONMENT & GREEN INNOVATION ──
  {
    id: 'pm-kusum-solar-agriculture-pump',
    slug: 'pm-kusum-solar-agriculture-pump',
    name: 'PM-KUSUM – Solar Agriculture Pumps & Grid Feeding',
    nameHindi: 'पीएम-कुसुम योजना (सौर कृषि पंप एवं ऊर्जा)',
    ministry: 'Ministry of New and Renewable Energy',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Subsidies up to 60% for farmers to install standalone solar water pumps or solarize existing grid-connected agricultural pumps with option to sell excess power to discoms.',
    whoIsItFor: 'Individual farmers, farmer groups, cooperatives, and Panchayats with irrigation needs or barren land for solar farming.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer'],
      isRural: true,
      rawText: 'Farmers possessing cultivable or barren land with an assured underground water source.'
    },
    benefits: [
      '60% subsidy (30% Central + 30% State) for standalone solar pumps',
      'Bank loan covering 30% of project cost; farmer only contributes 10%',
      'Sell excess generated electricity back to state DISCOM for continuous passive income'
    ],
    benefitAmount: 'Up to 60% Subsidy on Solar Pump Installation',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card',
      'Land Records (Jamabandi / Khatoni)',
      'Bank Account details',
      'Electricity connection bill (for Component C solarization)'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on state renewable energy development agency portal (e.g. MahaUrja, UPNEDA)',
      'Deposit 10% farmer share into escrow',
      'Certified solar vendor installs pump with remote monitoring system and grid inverter'
    ],
    officialUrl: 'https://pmkusum.mnre.gov.in/',
    portalName: 'PM-KUSUM National Portal',
    deadline: 'Annual state allocations',
    status: 'active',
    lastVerifiedDate: '2026-09-01',
    isPopular: true
  },
  {
    id: 'pm-e-drive-electric-mobility',
    slug: 'pm-e-drive-electric-mobility',
    name: 'PM E-DRIVE – Electric Vehicle Demand Incentives',
    nameHindi: 'पीएम ई-ड्राइव (इलेक्ट्रिक वाहन सब्सिडी)',
    ministry: 'Ministry of Heavy Industries',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Direct upfront purchase subsidy on electric two-wheelers, electric three-wheelers, e-ambulances, and e-trucks along with nationwide fast-charging infrastructure rollouts.',
    whoIsItFor: 'Consumers, commercial transport operators, and logistics businesses purchasing eligible electric vehicles.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'self_employed', 'entrepreneur'],
      rawText: 'Any buyer purchasing an eligible electric vehicle model certified under the scheme from an authorized EV dealership.'
    },
    benefits: [
      'Upfront subsidy of up to ₹10,000 for electric two-wheelers (₹5,000 per kWh of battery capacity)',
      'Subsidies up to ₹50,000 for electric three-wheelers and commercial e-rickshaws',
      'Subsidy deducted directly from ex-showroom invoice at the time of purchase'
    ],
    benefitAmount: 'Up to ₹50,000 Direct Price Discount on EVs',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card (for digital e-Voucher generation)',
      'Valid Driving License (for two-wheeler buyers)'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Visit any authorized OEM dealership selling PM E-DRIVE certified electric models',
      'Dealer generates Aadhaar-authenticated e-Voucher on the PM E-DRIVE portal',
      'Discount deducted instantly from vehicle purchase price'
    ],
    officialUrl: 'https://heavyindustries.gov.in/',
    portalName: 'MHI PM E-DRIVE Portal',
    deadline: 'Active till March 2026',
    status: 'active',
    lastVerifiedDate: '2026-09-02',
    isPopular: true
  },

  // ── 2. FOOD SECURITY & LABOUR WELFARE ──
  {
    id: 'pm-garib-kalyan-anna-yojana-extended',
    slug: 'pm-garib-kalyan-anna-yojana-extended',
    name: 'PMGKAY – Pradhan Mantri Garib Kalyan Anna Yojana',
    nameHindi: 'प्रधानमंत्री गरीब कल्याण अन्न योजना (निःशुल्क राशन)',
    ministry: 'Ministry of Consumer Affairs, Food and Public Distribution',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Providing 5 kg of free foodgrains (rice/wheat/coarse grains) per person per month to over 81 crore Antyodaya and Priority Household beneficiaries across India.',
    whoIsItFor: 'All Antyodaya Anna Yojana (AAY) and Priority Household (PHH) ration card holders.',
    eligibility: {
      gender: 'all',
      incomeMax: 150000,
      categories: ['All'],
      occupations: ['worker', 'farmer', 'artisan', 'homemaker', 'unemployed', 'senior_citizen'],
      rawText: 'Beneficiaries possessing valid Antyodaya Anna Yojana (AAY) or Priority Household (PHH) NFSA ration card.'
    },
    benefits: [
      '5 kg foodgrains (wheat/rice/millet) per member per month completely free of charge (₹0 price)',
      '35 kg free foodgrains per household per month for Antyodaya (poorest of the poor) families',
      'Nationwide portability: collect ration from any Fair Price Shop in India using One Nation One Ration Card'
    ],
    benefitAmount: '100% Free 5 kg Foodgrains per Member/Month',
    benefitType: 'service',
    requiredDocuments: [
      'NFSA Ration Card (AAY or PHH)',
      'Aadhaar Card for biometric authentication on ePoS device'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Visit any Fair Price Shop (FPS) anywhere in India',
      'Authenticate family member’s fingerprint or iris on ePoS device',
      'Collect free foodgrains immediately without paying any fee'
    ],
    officialUrl: 'https://nfsa.gov.in/',
    portalName: 'National Food Security Portal',
    deadline: 'Free allocation through 2029',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    isPopular: true
  },
  {
    id: 'pm-shram-yogi-maan-dhan-pension',
    slug: 'pm-shram-yogi-maan-dhan-pension',
    name: 'PM-SYM – Pradhan Mantri Shram Yogi Maan-dhan',
    nameHindi: 'प्रधानमंत्री श्रम योगी मानधन योजना',
    ministry: 'Ministry of Labour and Employment',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Assured monthly pension of ₹3,00,000 for unorganized workers (domestic workers, street vendors, rickshaw pullers, construction workers, agricultural workers).',
    whoIsItFor: 'Unorganized workers aged 18 to 40 years whose monthly income is ₹15,000 or less and who are not covered under EPFO/ESIC/NPS.',
    eligibility: {
      ageMin: 18,
      ageMax: 40,
      gender: 'all',
      incomeMax: 180000,
      categories: ['All'],
      occupations: ['worker', 'artisan', 'self_employed'],
      rawText: 'Unorganized workers with monthly income up to ₹15,000 aged 18–40 not enrolled in EPFO, ESIC, or NPS.'
    },
    benefits: [
      'Guaranteed ₹3,000 monthly pension on attaining 60 years of age for the lifetime of subscriber',
      '50% monthly contribution matched equally by Central Government',
      'Family pension of 50% (₹1,500/month) to spouse in case of subscriber demise'
    ],
    benefitAmount: '₹3,000 / Month Guaranteed Pension',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Savings Bank Account Passbook / Jan Dhan Account with IFSC',
      'Mobile Number linked to Aadhaar'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Enroll at any Common Services Centre (CSC) or online on maandhan.in',
      'Auto-debit mandate setup for monthly contribution (₹55 to ₹200 depending on entry age)',
      'Instant Shram Yogi Pension Card issued'
    ],
    officialUrl: 'https://maandhan.in/',
    portalName: 'Maan-Dhan Portal',
    deadline: 'Enroll between age 18-40',
    status: 'active',
    lastVerifiedDate: '2026-08-18'
  },
  {
    id: 'eshram-portal-unorganized-workers',
    slug: 'eshram-portal-unorganized-workers',
    name: 'e-Shram Universal ID & Social Security Cover',
    nameHindi: 'ई-श्रम कार्ड एवं सामाजिक सुरक्षा',
    ministry: 'Ministry of Labour and Employment',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'National database of unorganized workers offering Universal Account Number (UAN) card, accidental death/disability insurance, and prioritized access to social schemes.',
    whoIsItFor: 'All unorganized workers aged 16 to 59 years (construction laborers, gig/platform workers, domestic helpers, agricultural workers, auto drivers).',
    eligibility: {
      ageMin: 16,
      ageMax: 59,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'artisan', 'self_employed'],
      rawText: 'Any worker in the unorganized sector aged 16–59 years not an income tax payer and not covered under EPFO/ESIC.'
    },
    benefits: [
      'Unique 12-digit Universal Account Number (UAN) valid across entire India',
      'Accidental Death Insurance of ₹2,00,000 and Permanent Disability cover of ₹1,00,000',
      'Automatic linkage to future central and state welfare grants and emergency disaster relief'
    ],
    benefitAmount: '₹2,00,000 Accidental Cover + Universal Card',
    benefitType: 'insurance',
    requiredDocuments: [
      'Aadhaar Card linked with active mobile number',
      'Bank Account Passbook with IFSC'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Self-register on register.eshram.gov.in or visit CSC centre',
      'Verify via Aadhaar OTP and enter occupation code',
      'Download and print instant UAN e-Shram Card'
    ],
    officialUrl: 'https://eshram.gov.in/',
    portalName: 'e-Shram Portal',
    deadline: 'Open registration',
    status: 'active',
    lastVerifiedDate: '2026-08-30',
    isPopular: true
  },
  {
    id: 'indira-gandhi-national-widow-pension-ignwps',
    slug: 'indira-gandhi-national-widow-pension-ignwps',
    name: 'IGNWPS – Indira Gandhi National Widow Pension Scheme',
    nameHindi: 'इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Women and Child',
    description: 'Monthly social security pension for widows aged 40 to 79 living below the poverty line.',
    whoIsItFor: 'Widows aged 40–79 years belonging to households living below the poverty line.',
    eligibility: {
      ageMin: 40,
      ageMax: 79,
      gender: 'female',
      incomeMax: 150000,
      categories: ['All'],
      occupations: ['homemaker', 'worker', 'unemployed'],
      rawText: 'Widow aged between 40 and 79 years belonging to a household living below the poverty line (BPL).'
    },
    benefits: [
      'Monthly pension ranging from ₹500 to ₹2,500 (with state government supplementary contribution)',
      'Direct monthly deposit into beneficiary’s bank or post office account',
      'Automatic transition to Senior Citizen Pension upon attaining 80 years of age'
    ],
    benefitAmount: '₹500 to ₹2,500 / month',
    benefitType: 'cash',
    requiredDocuments: [
      'Death Certificate of husband',
      'Aadhaar Card',
      'BPL Card / Income Certificate',
      'Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Submit application at Block Development Office or online via state social welfare portal',
      'Verification conducted by local revenue / Panchayat secretary',
      'Sanction letter generated on NSAP portal and monthly DBT activated'
    ],
    officialUrl: 'https://nsap.nic.in/',
    portalName: 'NSAP Widow Pension',
    deadline: 'Permanent scheme',
    status: 'active',
    lastVerifiedDate: '2026-08-15'
  },

  // ── 3. STATE SPECIFIC FLAGSHIPS ──
  {
    id: 'west-bengal-kanyashree-prakalpa',
    slug: 'west-bengal-kanyashree-prakalpa',
    name: 'Kanyashree Prakalpa – West Bengal Girl Child Empowerment',
    nameHindi: 'कन्याश्री प्रकल्प (पश्चिम बंगाल)',
    ministry: 'Women & Child Development and Social Welfare Department, Govt of WB',
    level: 'state',
    state: 'West Bengal',
    categoryTag: 'Women and Child',
    description: 'UN Public Service Award winning scheme providing annual scholarship (K1) and one-time grant of ₹25,000 (K2) to girls in West Bengal to retain them in education and prevent child marriage.',
    whoIsItFor: 'Unmarried girl students aged 13 to 19 years studying in recognized institutions in West Bengal.',
    eligibility: {
      ageMin: 13,
      ageMax: 19,
      gender: 'female',
      state: 'West Bengal',
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'primary',
      rawText: 'Unmarried female students studying in classes VIII to XII or pursuing higher education in West Bengal.'
    },
    benefits: [
      'K1: Annual scholarship of ₹1,000 per year for girls aged 13–18 in Classes VIII to XII',
      'K2: One-time grant of ₹25,000 on reaching 18 years provided the girl remains enrolled in education and unmarried',
      'K3: Additional monthly support for postgraduate studies'
    ],
    benefitAmount: '₹1,000 / yr + ₹25,000 One-time Grant',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Birth Certificate of girl child',
      'School / College Bonafide Certificate',
      'Unmarried Declaration signed by parents',
      'Bank Account in the girl’s own name'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Collect Form from school/college head and submit with bank details',
      'Head of Institution verifies and uploads to wb.kanyashree.gov.in',
      'Sanctioned amount credited directly to the student’s bank account'
    ],
    officialUrl: 'https://wbkanyashree.gov.in/',
    portalName: 'WB Kanyashree Portal',
    deadline: 'Annual school term',
    status: 'active',
    lastVerifiedDate: '2026-08-20',
    isPopular: true
  },
  {
    id: 'bihar-mukhyamantri-udyami-yojana',
    slug: 'bihar-mukhyamantri-udyami-yojana',
    name: 'Mukhyamantri Udyami Yojana – Bihar Entrepreneurship Scheme',
    nameHindi: 'मुख्यमंत्री उद्यमी योजना (बिहार)',
    ministry: 'Industries Department, Government of Bihar',
    level: 'state',
    state: 'Bihar',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Financial assistance of up to ₹10 Lakh (50% grant + 50% interest-free loan) to youth, women, SC, ST, and EBC entrepreneurs in Bihar for setting up micro enterprises.',
    whoIsItFor: 'Permanent residents of Bihar aged 18 to 50 who have passed 10+2 / Intermediate, ITI, or Polytechnic diploma.',
    eligibility: {
      ageMin: 18,
      ageMax: 50,
      gender: 'all',
      state: 'Bihar',
      categories: ['All'],
      occupations: ['entrepreneur', 'unemployed', 'self_employed'],
      educationMin: 'higher_secondary',
      rawText: 'Permanent resident of Bihar having passed Intermediate/10+2 or equivalent with firm/enterprise registered.'
    },
    benefits: [
      'Total financial package of ₹10 Lakh per project',
      '50% of the project cost (up to ₹5 Lakh) is 100% grant (subsidy, no repayment)',
      'Remaining 50% (up to ₹5 Lakh) is an interest-free loan (0% interest for women/SC/ST, 1% for others) repayable in 84 installments'
    ],
    benefitAmount: '₹10,00,000 (₹5 Lakh Grant + ₹5 Lakh Interest-Free Loan)',
    benefitType: 'loan',
    requiredDocuments: [
      'Bihar Domicile Certificate',
      '10+2 / Intermediate / ITI Marksheet',
      'Current Bank Account in the name of the registered firm',
      'Caste Certificate and Aadhaar Card'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on udyami.bihar.gov.in during annual application window',
      'Computerized transparent lottery selection conducted by Industries Department',
      'Selected candidates receive 2-week technical training followed by release of funds in 3 installments'
    ],
    officialUrl: 'https://udyami.bihar.gov.in/',
    portalName: 'Bihar Udyami Portal',
    deadline: 'Annual application window (July-August)',
    status: 'active',
    lastVerifiedDate: '2026-08-29',
    isPopular: true
  },
  {
    id: 'andhra-pradesh-ysr-cheyutha',
    slug: 'andhra-pradesh-ysr-cheyutha',
    name: 'YSR Cheyutha – Livelihood Empowerment for Women (AP)',
    nameHindi: 'वाईएसआर चेयूता योजना (आंध्र प्रदेश)',
    ministry: 'Department of Social Welfare, Government of Andhra Pradesh',
    level: 'state',
    state: 'Andhra Pradesh',
    categoryTag: 'Women and Child',
    description: 'Financial assistance of ₹18,750 per year (total ₹75,000 over 4 years) to women aged 45 to 60 years from SC, ST, BC, and Minority communities to establish sustainable micro-businesses.',
    whoIsItFor: 'Women aged 45 to 60 from SC, ST, BC, and Minority communities in Andhra Pradesh.',
    eligibility: {
      ageMin: 45,
      ageMax: 60,
      gender: 'female',
      state: 'Andhra Pradesh',
      categories: ['SC', 'ST', 'OBC', 'Minority'],
      occupations: ['homemaker', 'worker', 'self_employed'],
      rawText: 'Women belonging to SC, ST, BC, or Minority communities aged between 45 and 60 years residing in Andhra Pradesh.'
    },
    benefits: [
      '₹18,750 per year directly transferred to bank account for 4 consecutive years (total ₹75,000)',
      'Enterprise partnerships with Amul, Reliance, ITC, and P&G for setting up dairy, grocery, and retail units',
      'Zero liability and unencumbered direct empowerment'
    ],
    benefitAmount: '₹75,000 over 4 years (₹18,750 / year)',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Caste Certificate (SC/ST/BC/Minority)',
      'Integrated Certificate showing age 45-60',
      'Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Enroll through Village / Ward Volunteer and Sachivalayam staff',
      'Social audit conducted by Gram Sabha with social security display list',
      'Direct benefit transfer credited on state announcement day'
    ],
    officialUrl: 'https://navasakam.ap.gov.in/',
    portalName: 'AP Navasakam Portal',
    deadline: 'Annual welfare calendar',
    status: 'active',
    lastVerifiedDate: '2026-08-17',
    isPopular: true
  },
  {
    id: 'kerala-karunya-aarogya-suraksha-padhathi-kasp',
    slug: 'kerala-karunya-aarogya-suraksha-padhathi-kasp',
    name: 'KASP – Karunya Arogya Suraksha Padhathi (Kerala)',
    nameHindi: 'कारुण्य आरोग्य सुरक्षा पद्धति (केरल)',
    ministry: 'Health and Family Welfare Department, Government of Kerala',
    level: 'state',
    state: 'Kerala',
    categoryTag: 'Health & Wellness',
    description: 'Cashless secondary and tertiary healthcare coverage of ₹5 lakh per family per year across empaneled public and private hospitals in Kerala.',
    whoIsItFor: 'BPL families, Antyodaya card holders, and registered welfare board workers in Kerala.',
    eligibility: {
      gender: 'all',
      state: 'Kerala',
      incomeMax: 200000,
      categories: ['All'],
      occupations: ['farmer', 'worker', 'artisan', 'self_employed', 'senior_citizen'],
      rawText: 'Kerala resident households belonging to vulnerable, BPL, and RSBY legacy categories.'
    },
    benefits: [
      'Cashless in-patient treatment up to ₹5,00,000 per family per year',
      'Covers 1,600+ treatments including cardiology, nephrology, neurosurgery, and cancer care',
      'Dedicated Karunya Mitra helpdesks inside all empaneled hospitals'
    ],
    benefitAmount: '₹5,00,000 / Year Cashless Health Cover',
    benefitType: 'insurance',
    requiredDocuments: [
      'Aadhaar Card',
      'Ration Card (Pink or Yellow BPL Card)',
      'KASP / PMJAY Health Card'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Verify eligibility at any Akshaya e-Centre or government hospital Karunya kiosk',
      'Show Ration Card and Aadhaar to generate instant e-card',
      'Present card at hospital billing desk for cashless hospitalization'
    ],
    officialUrl: 'https://sha.kerala.gov.in/',
    portalName: 'Kerala State Health Agency',
    deadline: 'Permanent coverage',
    status: 'active',
    lastVerifiedDate: '2026-08-22',
    isPopular: true
  },
  {
    id: 'gujarat-mukhyamantri-amrutam-vatsalya',
    slug: 'gujarat-mukhyamantri-amrutam-vatsalya',
    name: 'Mukhyamantri Amrutum (MA) & Vatsalya Scheme – Gujarat',
    nameHindi: 'मुख्यमंत्री अमृतम (माँ) एवं वात्सल्य योजना (गुजरात)',
    ministry: 'Health and Family Welfare Department, Government of Gujarat',
    level: 'state',
    state: 'Gujarat',
    categoryTag: 'Health & Wellness',
    description: 'Cashless tertiary healthcare cover up to ₹10 lakh per family per year for catastrophic illnesses in Gujarat.',
    whoIsItFor: 'Lower income and middle class families in Gujarat with annual income up to ₹4,00,000.',
    eligibility: {
      gender: 'all',
      state: 'Gujarat',
      incomeMax: 400000,
      categories: ['All'],
      occupations: ['worker', 'farmer', 'self_employed', 'artisan', 'senior_citizen'],
      rawText: 'Residents of Gujarat with total annual family income not exceeding ₹4 lakh.'
    },
    benefits: [
      'Enhanced cashless treatment cover up to ₹10,00,000 per family per year',
      'Covers cardiovascular surgeries, neurosurgery, burns, poly-trauma, kidney failure, and pediatric cancer',
      'Travel allowance of ₹300 per hospitalization included'
    ],
    benefitAmount: '₹10,00,000 / Year Cashless Hospital Cover',
    benefitType: 'insurance',
    requiredDocuments: [
      'Income Certificate issued by Mamlatdar / Taluka Development Officer (< ₹4 Lakh)',
      'Aadhaar Card and Family Ration Card',
      'Passport size photographs of all family members'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Visit nearest Civic Centre, Taluka kiosk, or District Hospital kiosk',
      'Submit income certificate and complete biometric registration for all members',
      'Receive instant plastic MA / Vatsalya Smart Card'
    ],
    officialUrl: 'https://magujarat.com/',
    portalName: 'Gujarat MA Portal',
    deadline: 'Permanent coverage',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    isPopular: true
  },
  {
    id: 'madhya-pradesh-mukhyamantri-medhavi-vidyarthi',
    slug: 'madhya-pradesh-mukhyamantri-medhavi-vidyarthi',
    name: 'MMVY – Mukhyamantri Medhavi Vidyarthi Yojana (Madhya Pradesh)',
    nameHindi: 'मुख्यमंत्री मेधावी विद्यार्थी योजना (मध्य प्रदेश)',
    ministry: 'Department of Technical Education & Skill Development, Govt of MP',
    level: 'state',
    state: 'Madhya Pradesh',
    categoryTag: 'Education & Learning',
    description: '100% tuition fee reimbursement by the state government for meritorious students securing admission to engineering (IIT/NIT/JEE), medical (NEET), law (CLAT), and premier institutions.',
    whoIsItFor: 'Meritorious MP domicile students scoring 70%+ in MP Board or 85%+ in CBSE/ICSE with parental income under ₹6 Lakh.',
    eligibility: {
      ageMin: 16,
      ageMax: 26,
      gender: 'all',
      state: 'Madhya Pradesh',
      incomeMax: 600000,
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      rawText: 'Domicile of MP who scored 70%+ in MPBSE or 85%+ in CBSE/ICSE Class 12 with father/mother annual income less than ₹6 lakh.'
    },
    benefits: [
      '100% tuition fees paid directly to IITs, NITs, government and private medical colleges, NLU, and central universities',
      'Covers entire 4 to 5.5 year course fees (up to ₹1.5 Lakh per year for private colleges)',
      'Removes financial hurdles for top-rank competitive examination achievers'
    ],
    benefitAmount: '100% Full Course Tuition Fee Paid by Govt',
    benefitType: 'scholarship',
    requiredDocuments: [
      'MP Domicile Certificate',
      'Class 12th Marks Sheet (70%+ for MP Board or 85%+ for CBSE)',
      'Parental Income Certificate (< ₹6 Lakh)',
      'College Admission and Allotment letter (JEE / NEET / CLAT score card)'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on Scholarshipportal.mp.nic.in / Medhavi portal',
      'Upload 12th marksheet, entrance rank card, and college admission fee receipt',
      'Institution approves application and MP Government reimburses tuition fee'
    ],
    officialUrl: 'http://scholarshipportal.mp.nic.in/MedhaviChhatra/',
    portalName: 'MP Medhavi Portal',
    deadline: 'College admission session',
    status: 'active',
    lastVerifiedDate: '2026-08-28',
    isPopular: true
  },

  // ── 4. PREMIER NATIONAL HIGHER EDUCATION & RESEARCH ──
  {
    id: 'pm-usp-central-sector-college-scholarship',
    slug: 'pm-usp-central-sector-college-scholarship',
    name: 'PM-USP – Central Sector Scheme of Scholarship for College and University Students',
    nameHindi: 'कॉलेज एवं विश्वविद्यालय छात्रवृत्ति योजना (पीएम-यूएसपी)',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Financial support of ₹12,000 to ₹20,000/year to meritorious students above 80th percentile in class 12 board exams pursuing regular degree programs.',
    whoIsItFor: 'Students scoring above 80th percentile in Class 12 board examinations with family income below ₹4.50 Lakh.',
    eligibility: {
      ageMin: 17,
      ageMax: 25,
      gender: 'all',
      incomeMax: 450000,
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      rawText: 'Students who are above 80th percentile of successful candidates in relevant stream in Class XII of respective state board with parental income < ₹4.5 lakh.'
    },
    benefits: [
      '₹12,000 per annum for the first 3 years of Undergraduate study',
      '₹20,000 per annum for 4th and 5th year of study / Postgraduate courses',
      'Renewable every year based on maintaining 50%+ marks and 75% attendance'
    ],
    benefitAmount: '₹12,000 to ₹20,000 / year',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Class 12th Board Marksheet proving percentile ranking',
      'Income Certificate (< ₹4.50 Lakh)',
      'College Bonafide Certificate',
      'Aadhaar-seeded Bank Account Passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply on National Scholarship Portal (scholarships.gov.in)',
      'Select Central Sector Scheme of Scholarship for College and University Students',
      'Institution nodal officer verifies online credentials and state board marks'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal',
    deadline: '31 October annually',
    status: 'active',
    lastVerifiedDate: '2026-08-16',
    isPopular: true
  },
  {
    id: 'dst-inspire-she-scholarship',
    slug: 'dst-inspire-she-scholarship',
    name: 'INSPIRE Scholarship for Higher Education (SHE)',
    nameHindi: 'इंस्पायर छात्रवृत्ति योजना (उच्च विज्ञान शिक्षा)',
    ministry: 'Ministry of Science and Technology',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Scholarship of ₹80,000 per year for top 1% meritorious students pursuing B.Sc./B.S./Int. M.Sc. in Natural and Basic Sciences.',
    whoIsItFor: 'Students within top 1% in Class 12 board exams or top rankers in JEE/NEET opting for regular Basic Science degree programs.',
    eligibility: {
      ageMin: 17,
      ageMax: 22,
      gender: 'all',
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      rawText: 'Students within top 1% at Class XII examination of any state/central board enrolled in B.Sc., B.S., or Int. M.Sc. in natural and basic sciences.'
    },
    benefits: [
      '₹80,000 per year for up to 5 years (₹60,000 annual scholarship + ₹20,000 summer research mentorship grant)',
      'Opportunity to undertake summer research internships under premier scientists at BARC, TIFR, IISc, and IITs'
    ],
    benefitAmount: '₹80,000 / year (up to 5 years)',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Class 12th Board Marksheet & Advisory/Eligibility Note issued by board',
      'College Admission Fee receipt & Bonafide Certificate in Basic Science stream',
      'SBI Bank Account Passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on online-inspire.gov.in',
      'Upload Advisory Note and college enrollment proof',
      'DST evaluates and directly releases scholarship installments via DBT'
    ],
    officialUrl: 'https://online-inspire.gov.in/',
    portalName: 'DST INSPIRE Portal',
    deadline: 'December annually',
    status: 'active',
    lastVerifiedDate: '2026-08-24',
    isPopular: true
  },
  {
    id: 'aicte-saksham-scholarship-disabled',
    slug: 'aicte-saksham-scholarship-disabled',
    name: 'AICTE Saksham Scholarship for Specially-Abled Students',
    nameHindi: 'एआईसीटीई सक्षम छात्रवृत्ति (दिव्यांग विद्यार्थी)',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: '₹50,000 per annum to students with benchmark disabilities admitted to technical degree or diploma courses in AICTE approved institutions.',
    whoIsItFor: 'Specially-abled students having not less than 40% disability enrolled in 1st year of technical degree/diploma whose family income is under ₹8 Lakh.',
    eligibility: {
      ageMin: 16,
      ageMax: 30,
      gender: 'all',
      incomeMax: 800000,
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      hasDisability: true,
      rawText: 'Differently-abled students with disability not less than 40% admitted to 1st year of Degree/Diploma course in an AICTE approved institution.'
    },
    benefits: [
      '₹50,000 per year for every year of study (4 years for degree, 3 years for diploma)',
      'Covers college fee, laptop/assistive software procurement, books, and study devices',
      'Disbursed directly through DBT'
    ],
    benefitAmount: '₹50,000 / year (up to 4 years)',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Disability Certificate / UDID Card showing 40% or more disability',
      '10th and 12th Marksheet',
      'AICTE college admission receipt',
      'Income Certificate (< ₹8 Lakh)'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply on National Scholarship Portal (scholarships.gov.in) under AICTE schemes',
      'College verifies student admission and disability documents',
      'AICTE sanctions scholarship directly via PFMS DBT'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'NSP – AICTE Saksham',
    deadline: '31 October annually',
    status: 'active',
    lastVerifiedDate: '2026-08-18'
  },
  {
    id: 'pm-special-scholarship-scheme-jk-ladakh',
    slug: 'pm-special-scholarship-scheme-jk-ladakh',
    name: 'PMSSS – Prime Minister’s Special Scholarship Scheme for J&K and Ladakh',
    nameHindi: 'प्रधानमंत्री विशेष छात्रवृत्ति योजना (जम्मू-कश्मीर एवं लद्दाख)',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Full academic fee waiver and ₹1 lakh annual maintenance allowance for students from J&K and Ladakh pursuing undergraduate studies outside the UTs.',
    whoIsItFor: 'Domicile students of Jammu & Kashmir and Ladakh who passed 12th from state board/CBSE and secured college admission through AICTE counseling.',
    eligibility: {
      ageMin: 17,
      ageMax: 25,
      gender: 'all',
      state: 'Jammu and Kashmir',
      incomeMax: 800000,
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      rawText: 'Domiciles of UTs of J&K and Ladakh passing 10+2 examination from JKBOSE or CBSE affiliated schools in J&K with family income under ₹8 lakh.'
    },
    benefits: [
      'Full academic fee paid directly to the college (up to ₹1.25 Lakh for General, ₹2.25 Lakh for Engineering, ₹3.00 Lakh for Medical)',
      'Maintenance allowance of ₹1,00,000 per annum paid directly to student for hostel, mess, and books',
      'Supernumerary quota seats allocated in premier colleges across India'
    ],
    benefitAmount: 'Full College Tuition Fee + ₹1,00,000 / Year Living Allowance',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Domicile Certificate of J&K / Ladakh',
      '12th Marks Sheet and 10th Certificate',
      'Income Certificate issued by Tehsildar',
      'Aadhaar Card'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on AICTE PMSSS portal (aicte-jk-scholarship-gov.in)',
      'Attend document verification at nearest Government Facilitation Centre in J&K/Ladakh',
      'Participate in online seat allotment counseling and join allotted college'
    ],
    officialUrl: 'https://www.aicte-india.org/bureaus/jk',
    portalName: 'AICTE PMSSS Portal',
    deadline: 'June - July annually',
    status: 'active',
    lastVerifiedDate: '2026-08-30',
    isPopular: true
  }
];
