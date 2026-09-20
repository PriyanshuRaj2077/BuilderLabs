import { Scheme } from '../types';

export const SEED_SCHEMES: Scheme[] = [
  // 1. Agriculture
  {
    id: 'pm-kisan-01',
    slug: 'pm-kisan-samman-nidhi',
    name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    nameHindi: 'प्रधानमंत्री किसान सम्मान निधि',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'Central sector scheme providing ₹6,000 yearly income support directly to landholding farmer families across India in three 4-monthly tranches.',
    whoIsItFor: 'Small and marginal landholder farmer families with cultivable land holdings in their names.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer'],
      incomeMax: 1000000,
      residency: 'Resident citizen of India with cultivable agricultural landholding.',
      rawText: 'All landholding farmer families having cultivable land in their names. Institutional landholders, constitutional post holders, retired government staff with pension > ₹10,000/mo, and income tax payers are excluded.'
    },
    benefits: [
      'Financial support of ₹6,000 per year per eligible family',
      'Direct Benefit Transfer (DBT) directly into Aadhaar-seeded bank accounts',
      'Disbursed in 3 equal installments of ₹2,000 each'
    ],
    benefitAmount: '₹6,000 / year',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Land ownership records (Khasra/Khatauni or RoR)',
      'Aadhaar-seeded Bank Account passbook',
      'Active mobile number for OTP eKYC'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Visit pmkisan.gov.in and click on "Farmers Corner"',
      'Select "New Farmer Registration" and verify Aadhaar via OTP',
      'Upload landholding patta/RoR survey numbers and submit',
      'Complete mandatory biometric or face e-KYC on the portal or app'
    ],
    officialUrl: 'https://pmkisan.gov.in/',
    portalName: 'PM-KISAN National Portal',
    deadline: 'Ongoing enrollment',
    status: 'active',
    lastVerifiedDate: '2026-08-15',
    inconsistencies: [
      'Land records updated after Feb 1, 2019 require physical Patwari/Tehsildar attestation in several states.'
    ],
    isPopular: true
  },

  // 2. Education - SC
  {
    id: 'post-matric-sc-02',
    slug: 'post-matric-scholarship-sc',
    name: 'Centrally Sponsored Post-Matric Scholarship for SC Students',
    nameHindi: 'अनुसूचित जाति के छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'centrally_sponsored',
    categoryTag: 'Education & Learning',
    description: 'Comprehensive financial assistance for Scheduled Caste students pursuing post-matriculation or post-secondary degrees, diplomas, or professional studies.',
    whoIsItFor: 'SC students enrolled in recognized universities, colleges, or ITIs with annual family income up to ₹2.5 Lakh.',
    eligibility: {
      ageMin: 15,
      ageMax: 35,
      gender: 'all',
      categories: ['SC'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      incomeMax: 250000,
      rawText: 'Student must belong to Scheduled Caste (SC) category. Must be enrolled in accredited post-matric courses. Total annual family income from all sources must not exceed ₹2,50,000.'
    },
    benefits: [
      '100% reimbursement of non-refundable tuition and institutional fees',
      'Monthly maintenance allowance of ₹4,000 to ₹13,500/year depending on course tier (hostellers vs day scholars)',
      'Study tour allowances and thesis typing grant for doctoral scholars'
    ],
    benefitAmount: '100% Tuition Fee + up to ₹13,500/yr stipend',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Aadhaar Card of the student',
      'Caste Certificate issued by designated Revenue Authority',
      'Income Certificate (valid for current financial year)',
      'Previous academic marksheets and fee receipt',
      'Aadhaar-seeded active Bank Account details'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on National Scholarship Portal (scholarships.gov.in) with student OTR',
      'Select Post Matric Scholarship for SC under Ministry of Social Justice',
      'Upload caste, income, and admission receipts',
      'Submit to College Nodal Officer for electronic verification'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal (NSP)',
    deadline: 'October 31, 2026',
    status: 'active',
    lastVerifiedDate: '2026-08-20',
    isPopular: true
  },

  // 3. Business - MUDRA
  {
    id: 'pm-mudra-yojana-03',
    slug: 'pradhan-mantri-mudra-yojana',
    name: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    nameHindi: 'प्रधानमंत्री मुद्रा योजना',
    ministry: 'Ministry of Finance / DFS',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Collateral-free institutional business loans up to ₹20 Lakh across Shishu, Kishore, and Tarun categories for non-farm income-generating enterprises.',
    whoIsItFor: 'Micro & small business owners, artisans, retail shopkeepers, and aspiring non-farm entrepreneurs.',
    eligibility: {
      ageMin: 18,
      ageMax: 65,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur', 'artisan', 'self_employed', 'worker'],
      rawText: 'Any Indian citizen with a business plan for non-farm manufacturing, trading, or service sector needing credit up to ₹20 Lakh.'
    },
    benefits: [
      'Collateral-free loans from Public/Private Banks, RRBs, and NBFCs',
      'Shishu (up to ₹50,000), Kishore (₹50,000 - ₹5L), Tarun (₹5L - ₹10L), and Tarun Plus (up to ₹20L)',
      'Low interest rates and issuance of MUDRA RuPay Card for working capital drawdowns'
    ],
    benefitAmount: 'Up to ₹20,00,000 collateral-free loan',
    benefitType: 'loan',
    requiredDocuments: [
      'Proof of identity and address (Aadhaar / Voter ID / PAN)',
      'Business registration certificate or Udyam Registration (if registered)',
      'Project business quotation / machinery proposal',
      'Past 6 months bank statement (for existing firms)'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply online via JanSamarth portal (jansamarth.in) or visit any commercial bank branch',
      'Submit the standardized MUDRA application form with business proposal',
      'Bank processes appraisal without collateral requirement'
    ],
    officialUrl: 'https://www.mudra.org.in/',
    portalName: 'MUDRA / JanSamarth Portal',
    deadline: 'Ongoing throughout the year',
    status: 'active',
    lastVerifiedDate: '2026-08-10',
    isPopular: true
  },

  // 4. Housing - PMAY-G
  {
    id: 'pm-awas-gramin-04',
    slug: 'pradhan-mantri-awas-yojana-gramin',
    name: 'Pradhan Mantri Awas Yojana - Gramin (PMAY-G)',
    nameHindi: 'प्रधानमंत्री आवास योजना - ग्रामीण',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Housing & Shelter',
    description: 'Financial assistance for construction of permanent pucca houses with basic amenities for homeless and kutcha house residents in rural areas.',
    whoIsItFor: 'Rural households with zero or 1-2 room kutcha houses identified via SECC/Awaas+ verified survey.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'worker', 'unemployed', 'artisan'],
      incomeMax: 200000,
      rawText: 'Homeless rural families living in kutcha structures validated by Gram Sabhas. Households owning motorized vehicles or government employees are excluded.'
    },
    benefits: [
      '₹1,20,000 grant in plain areas; ₹1,30,000 in hilly/northeastern states',
      '90-95 days of unskilled labor wages under MGNREGS (approx ₹25,000+)',
      '₹12,000 toilet grant via Swachh Bharat Mission'
    ],
    benefitAmount: '₹1,20,000 - ₹1,30,000 + MGNREGA wages',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card of household head and family members',
      'MGNREGA Job Card Number',
      'Aadhaar-linked Bank Account details',
      'Geo-tagged photo of existing kutcha shelter'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Prioritization via Gram Sabha verified Awaas+ list',
      'Verification conducted via AwaasApp by local Block Development Officers',
      'Disbursed directly in 3 construction milestone tranches'
    ],
    officialUrl: 'https://pmayg.nic.in/',
    portalName: 'PMAY-G AwaasSoft Portal',
    deadline: 'Active phase through 2029',
    status: 'active',
    lastVerifiedDate: '2026-07-28',
    isPopular: true
  },

  // 5. Health - PM-JAY
  {
    id: 'ayushman-bharat-pmjay-05',
    slug: 'ayushman-bharat-pmjay',
    name: 'Ayushman Bharat PM-JAY (Health Insurance)',
    nameHindi: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना',
    ministry: 'Ministry of Health and Family Welfare / NHA',
    level: 'centrally_sponsored',
    categoryTag: 'Health & Wellness',
    description: 'World’s largest health assurance scheme providing ₹5 Lakh per family per year for secondary and tertiary care hospitalization across India.',
    whoIsItFor: 'Bottom 40% vulnerable families identified by socio-economic criteria, plus all senior citizens aged 70+ irrespective of income.',
    eligibility: {
      ageMin: 0,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'worker', 'artisan', 'unemployed', 'senior_citizen'],
      incomeMax: 300000,
      rawText: 'Households listed under SECC database rural deprivation parameters and designated urban worker categories. All senior citizens aged 70+ receive universal ₹5L coverage.'
    },
    benefits: [
      '₹5,00,000 health cover per family per year on a floater basis',
      'Cashless and paperless treatment at 27,000+ empaneled public and private hospitals',
      'Covers 1,900+ procedures, surgeries, and pre/post hospitalization diagnostics'
    ],
    benefitAmount: '₹5,00,000 / family / year cover',
    benefitType: 'insurance',
    requiredDocuments: [
      'Aadhaar Card or Ration Card (family listing)',
      'Active mobile number for eKYC OTP'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Check status on beneficiary.nha.gov.in using Aadhaar or Mobile Number',
      'Visit any Empaneled Hospital or Common Service Centre (CSC)',
      'Complete biometric eKYC at Ayushman Mitra desk and download card'
    ],
    officialUrl: 'https://beneficiary.nha.gov.in/',
    portalName: 'National Health Authority (NHA)',
    deadline: 'Continuous enrollment',
    status: 'active',
    lastVerifiedDate: '2026-08-30',
    isPopular: true
  },

  // 6. Women & SC/ST Business - Stand-Up India
  {
    id: 'standup-india-06',
    slug: 'stand-up-india-scheme',
    name: 'Stand-Up India for Women and SC/ST Entrepreneurs',
    nameHindi: 'स्टैंड-अप इंडिया योजना',
    ministry: 'Ministry of Finance / SIDBI',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Facilitates bank loans between ₹10 Lakh and ₹1 Crore to SC, ST, and women borrowers setting up greenfield manufacturing, service, or trading enterprises.',
    whoIsItFor: 'SC/ST and women entrepreneurs establishing their first greenfield enterprise.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['SC', 'ST', 'All'],
      occupations: ['entrepreneur', 'self_employed'],
      rawText: 'SC/ST and/or woman entrepreneur, above 18 years. Greenfield projects only (first-time venture). In non-individual enterprises, 51% shareholding must be held by SC/ST or woman.'
    },
    benefits: [
      'Composite loan between ₹10 Lakh and ₹100 Lakh (₹1 Crore)',
      'Covers up to 85% of total project cost',
      'Repayable in 7 years with up to 18 months moratorium'
    ],
    benefitAmount: '₹10 Lakh to ₹1 Crore credit',
    benefitType: 'loan',
    requiredDocuments: [
      'Identity and address proof (Aadhaar, PAN, Passport)',
      'Caste Certificate (for SC/ST applicants)',
      'Proof of 51% controlling stake by woman or SC/ST',
      'Detailed Project Report (DPR)'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Register on standupmitra.in portal',
      'Request handholding or connect with Lead District Manager (LDM)',
      'Submit loan application to preferred commercial bank'
    ],
    officialUrl: 'https://www.standupmitra.in/',
    portalName: 'Stand-Up Mitra Portal',
    deadline: 'Active through 2028',
    status: 'active',
    lastVerifiedDate: '2026-08-12',
    isPopular: false
  },

  // 7. Traditional Artisans - PM Vishwakarma
  {
    id: 'pm-vishwakarma-07',
    slug: 'pm-vishwakarma-yojana',
    name: 'PM Vishwakarma Scheme for Artisans & Craftspeople',
    nameHindi: 'पीएम विश्वकर्मा योजना',
    ministry: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
    level: 'central',
    categoryTag: 'Skill & Employment',
    description: 'End-to-end support for traditional artisans working across 18 family-based trades including carpentry, blacksmithing, pottery, sculpting, and tailoring.',
    whoIsItFor: 'Artisans and craftspeople working with hands and tools in traditional trades in the unorganized sector.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['artisan', 'worker', 'self_employed'],
      rawText: 'Artisan working with hands and tools in one of 18 specified trades. One member per family. Must not have availed PMEGP or MUDRA in last 5 years.'
    },
    benefits: [
      'PM Vishwakarma Digital Certificate and ID recognition',
      'Skill training with ₹500/day stipend',
      'Modern Toolkit incentive e-voucher worth ₹15,000',
      'Collateral-free credit: ₹1 Lakh at 5% interest (tranche 1), ₹2 Lakh (tranche 2)'
    ],
    benefitAmount: '₹15,000 Toolkit + up to ₹3 Lakh loan @ 5%',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card linked to mobile',
      'Bank passbook / cancelled cheque',
      'Trade skill declaration / Gram Panchayat recommendation'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Visit any Common Service Centre (CSC) for biometric registration',
      'Verification through Gram Panchayat / ULB -> District Committee',
      'Download Vishwakarma ID and join basic skill training'
    ],
    officialUrl: 'https://pmvishwakarma.gov.in/',
    portalName: 'PM Vishwakarma Official Portal',
    deadline: 'Active multi-year roll-out',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    isPopular: true
  },

  // 8. Girl Child Savings - Sukanya Samriddhi
  {
    id: 'sukanya-samriddhi-08',
    slug: 'sukanya-samriddhi-yojana',
    name: 'Sukanya Samriddhi Yojana (Beti Bachao Beti Padhao)',
    nameHindi: 'सुकन्या समृद्धि योजना',
    ministry: 'Ministry of Women and Child Development / Finance',
    level: 'central',
    categoryTag: 'Women and Child',
    description: 'Government small savings scheme for parents of girl children with high compounding tax-free interest for higher education and marriage.',
    whoIsItFor: 'Parents or legal guardians of girl children aged 10 years or younger.',
    eligibility: {
      ageMin: 0,
      ageMax: 10,
      gender: 'female',
      categories: ['All'],
      occupations: ['student', 'homemaker', 'worker'],
      rawText: 'Account opened by parent/guardian for a girl child from birth until 10 years. Maximum two accounts per family (three in case of twins/triplets).'
    },
    benefits: [
      'Sovereign guaranteed interest rate (8.2% p.a., compounded annually)',
      'Triple Tax Exemption (EEE status under Section 80C)',
      'Partial withdrawal up to 50% for college education after age 18'
    ],
    benefitAmount: '8.2% p.a. Tax-Free Compounding Interest',
    benefitType: 'cash',
    requiredDocuments: [
      'Birth Certificate of the girl child',
      'Identity and address proof of the guardian (Aadhaar/PAN)',
      'Guardian passport size photograph'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Visit any Post Office branch or authorized commercial bank',
      'Submit account opening form with birth certificate and KYC',
      'Deposit initial opening balance (min ₹250)'
    ],
    officialUrl: 'https://www.indiapost.gov.in/',
    portalName: 'India Post / Reserve Bank of India',
    deadline: 'Open until child turns 10',
    status: 'active',
    lastVerifiedDate: '2026-08-01',
    isPopular: true
  },

  // 9. Street Vendors - PM SVANidhi
  {
    id: 'pm-svanidhi-09',
    slug: 'pm-street-vendors-atmanirbhar-nidhi',
    name: 'PM SVANidhi (Micro-Credit for Street Vendors)',
    nameHindi: 'पीएम स्वनिधि (स्ट्रीट वेंडर्स आत्मनिर्भर निधि)',
    ministry: 'Ministry of Housing and Urban Affairs (MoHUA)',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Working capital micro-credit to urban and peri-urban street vendors to rebuild and grow their informal vending livelihoods.',
    whoIsItFor: 'Urban and peri-urban street vendors, hawkers, thela-walas, and small roadside traders.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['artisan', 'worker', 'self_employed'],
      rawText: 'Street vendors in urban areas holding Certificate of Vending / ID card issued by Urban Local Bodies (ULBs) or Letter of Recommendation (LoR).'
    },
    benefits: [
      'Initial working capital loan up to ₹10,000, progressing to ₹20,000 and ₹50,000',
      '7% interest subsidy on timely quarterly repayment',
      'Cashback incentive up to ₹1,200 per year on digital UPI transactions'
    ],
    benefitAmount: 'Up to ₹50,000 loan + 7% interest subsidy',
    benefitType: 'loan',
    requiredDocuments: [
      'Vending Certificate / ULB ID or Letter of Recommendation',
      'Aadhaar Card linked to mobile',
      'Bank passbook details',
      'UPI QR code / merchant details'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Visit pmsvanidhi.mohua.gov.in or PM SVANidhi mobile app',
      'Authenticate with Aadhaar OTP and check vendor survey status',
      'Select preferred bank and submit digitally'
    ],
    officialUrl: 'https://pmsvanidhi.mohua.gov.in/',
    portalName: 'PM SVANidhi Portal',
    deadline: 'Active nationwide',
    status: 'active',
    lastVerifiedDate: '2026-08-18',
    isPopular: true
  },

  // 10. State - Maharashtra Education
  {
    id: 'maha-dbt-post-matric-10',
    slug: 'maharashtra-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh',
    name: 'Maharashtra Rajarshi Shahu Maharaj Shikshan Shulkh Shishyavrutti',
    nameHindi: 'राजर्षि छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना',
    ministry: 'Higher and Technical Education Department, Govt of Maharashtra',
    level: 'state',
    state: 'Maharashtra',
    categoryTag: 'Education & Learning',
    description: 'Provides 50% tuition and examination fee reimbursement to economically weaker General, EWS, and OBC students in recognized higher education courses in Maharashtra.',
    whoIsItFor: 'Maharashtra domicile students admitted via CAP into professional degree/diploma programs with income up to ₹8 Lakh.',
    eligibility: {
      ageMin: 17,
      ageMax: 30,
      gender: 'all',
      state: 'Maharashtra',
      categories: ['General', 'EWS', 'OBC'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      incomeMax: 800000,
      residency: 'Must be a bona fide domicile of Maharashtra State.',
      rawText: 'Domicile of Maharashtra. Admitted via Centralized Admission Process (CAP) in approved degree/diploma courses. Annual family income <= ₹8,00,000. Max 2 children per family.'
    },
    benefits: [
      '50% reimbursement of tuition and examination fees',
      'Direct DBT disbursement to institute / student account',
      'Hostel maintenance assistance for outstation students'
    ],
    benefitAmount: '50% College Tuition & Exam Fee waiver',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Maharashtra Domicile Certificate',
      'Income Certificate issued by Tahsildar (<= ₹8 Lakh)',
      'CAP Allotment Letter confirming admission',
      '10th & 12th standard marksheets',
      'Aadhaar-seeded bank account confirmation'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on MahaDBT portal (mahadbt.maharashtra.gov.in)',
      'Authenticate Aadhaar and choose Higher & Technical Education',
      'Upload Domicile and Income certificates and submit application'
    ],
    officialUrl: 'https://mahadbt.maharashtra.gov.in/',
    portalName: 'MahaDBT State Portal',
    deadline: 'December 31, 2026',
    status: 'active',
    lastVerifiedDate: '2026-08-22',
    isPopular: true
  },

  // 11. State - UP Girls Welfare
  {
    id: 'up-kanya-sumangala-11',
    slug: 'mukhya-mantri-kanya-sumangala-yojana-up',
    name: 'Uttar Pradesh Mukhya Mantri Kanya Sumangala Yojana',
    nameHindi: 'मुख्यमंत्री कन्या सुमंगला योजना (उत्तर प्रदेश)',
    ministry: 'Women and Child Development Department, Govt of Uttar Pradesh',
    level: 'state',
    state: 'Uttar Pradesh',
    categoryTag: 'Women and Child',
    description: 'Conditional cash transfer in Uttar Pradesh providing ₹25,000 across 6 educational and health milestones from birth to graduation.',
    whoIsItFor: 'Families with girl children domiciled in Uttar Pradesh with annual household income up to ₹3 Lakh.',
    eligibility: {
      ageMin: 0,
      ageMax: 25,
      gender: 'female',
      state: 'Uttar Pradesh',
      categories: ['All'],
      occupations: ['student', 'homemaker'],
      incomeMax: 300000,
      residency: 'Resident of Uttar Pradesh with valid domicile.',
      rawText: 'Applicant family must reside in Uttar Pradesh with annual income <= ₹3,00,000. Max 2 girls per family can receive benefits.'
    },
    benefits: [
      'Total financial grant of ₹25,000 across 6 milestones',
      '₹5,000 upon birth; ₹2,000 after complete 1-yr immunization',
      '₹3,000 for Class 1 admission; ₹3,000 for Class 6; ₹5,000 for Class 9',
      '₹7,000 on enrollment in undergraduate degree or 2-year diploma'
    ],
    benefitAmount: '₹25,000 milestone cash grant',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar card of parent and child',
      'UP State Domicile Certificate',
      'Income Certificate (<= ₹3 Lakh)',
      'School admission receipt or birth certificate',
      'Joint bank passbook copy'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Access mksy.up.gov.in portal',
      'Register citizen account and select corresponding stage milestone',
      'Upload immunization/admission proof for District Probation Officer scrutiny'
    ],
    officialUrl: 'https://mksy.up.gov.in/',
    portalName: 'UP Kanya Sumangala Portal',
    deadline: 'Open round the year',
    status: 'active',
    lastVerifiedDate: '2026-08-05',
    isPopular: true
  },

  // 12. State - Karnataka Unemployment
  {
    id: 'karnataka-yuvanidhi-12',
    slug: 'karnataka-yuva-nidhi-scheme',
    name: 'Karnataka Yuva Nidhi Scheme (Unemployment Allowance)',
    nameHindi: 'कर्नाटक युवा निधि योजना (बेरोजगारी भत्ता)',
    ministry: 'Department of Skill Development, Govt of Karnataka',
    level: 'state',
    state: 'Karnataka',
    categoryTag: 'Skill & Employment',
    description: 'Monthly unemployment allowance and free industry skill training to educated graduates from Karnataka institutions seeking jobs.',
    whoIsItFor: 'Degree and diploma graduates residing in Karnataka unemployed for 6+ months after graduation.',
    eligibility: {
      ageMin: 20,
      ageMax: 30,
      gender: 'all',
      state: 'Karnataka',
      categories: ['All'],
      occupations: ['job_seeker', 'unemployed', 'student'],
      educationMin: 'diploma',
      rawText: 'Graduated in degree or diploma from Karnataka institutions. Unemployed for min 6 months after graduation. Domiciled in Karnataka for 6+ years.'
    },
    benefits: [
      '₹3,000 per month for degree graduates for up to 2 years',
      '₹1,500 per month for diploma holders for up to 2 years',
      'Direct monthly DBT transfer to bank account',
      'Free skill training and job placement drives via Karnataka Skill Mission'
    ],
    benefitAmount: '₹3,000/mo (Degree) or ₹1,500/mo (Diploma)',
    benefitType: 'cash',
    requiredDocuments: [
      'Karnataka Domicile / 6-year study proof',
      'Degree or Diploma provisional/original certificate',
      'Aadhaar Card',
      'Self-declaration of unemployment'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Log into Seva Sindhu portal (sevasindhuservices.karnataka.gov.in)',
      'Click Yuva Nidhi registration and input University Registration Number',
      'Authenticate with Aadhaar e-Sign'
    ],
    officialUrl: 'https://sevasindhuservices.karnataka.gov.in/',
    portalName: 'Seva Sindhu Karnataka Portal',
    deadline: 'Ongoing for eligible batches',
    status: 'active',
    lastVerifiedDate: '2026-08-28',
    isPopular: true
  },

  // 13. Senior Citizens - Atal Pension Yojana
  {
    id: 'atal-pension-yojana-13',
    slug: 'atal-pension-yojana',
    name: 'Atal Pension Yojana (APY)',
    nameHindi: 'अटल पेंशन योजना',
    ministry: 'Ministry of Finance / PFRDA',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Government-backed pension scheme for workers in the unorganized sector providing a guaranteed monthly pension of ₹1,000 to ₹5,000 after age 60.',
    whoIsItFor: 'Citizens aged 18-40 working in the unorganized sector, especially gig workers, agricultural laborers, and maids.',
    eligibility: {
      ageMin: 18,
      ageMax: 40,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'farmer', 'artisan', 'self_employed', 'homemaker'],
      rawText: 'Any citizen of India aged between 18 and 40 years holding a savings bank account. Should not be an income tax payer.'
    },
    benefits: [
      'Guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 from age 60',
      'Pension continues to spouse upon demise of subscriber',
      'Entire accumulated corpus returned to nominee upon demise of both subscriber and spouse'
    ],
    benefitAmount: '₹1,000 to ₹5,000 / month guaranteed pension',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Active savings bank account with auto-debit consent',
      'Mobile number'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Visit your bank branch or access net-banking / JanSuraksha portal',
      'Choose desired pension slab (e.g. ₹5,000/mo)',
      'Set up monthly auto-debit instructions'
    ],
    officialUrl: 'https://www.npscra.nsdl.co.in/',
    portalName: 'NPS Trust / PFRDA',
    deadline: 'Always open for age 18-40',
    status: 'active',
    lastVerifiedDate: '2026-08-14',
    isPopular: true
  },

  // 14. Entrepreneurship - PMEGP
  {
    id: 'pmegp-loan-subsidy-14',
    slug: 'prime-ministers-employment-generation-programme',
    name: 'Prime Minister’s Employment Generation Programme (PMEGP)',
    nameHindi: 'प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)',
    ministry: 'Ministry of MSME / KVIC',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Credit-linked capital subsidy scheme providing up to 35% government subsidy for setting up new micro-enterprises in manufacturing (up to ₹50L) and service sectors (up to ₹20L).',
    whoIsItFor: 'First-generation entrepreneurs, SHGs, and individuals aged 18+ starting new manufacturing or service units.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur', 'artisan', 'self_employed', 'worker'],
      educationMin: 'primary',
      rawText: 'Any individual above 18 years. For setting up project above ₹10 Lakh in manufacturing or ₹5 Lakh in service, educational qualification of min 8th pass is mandatory.'
    },
    benefits: [
      'Subsidy of 15% to 25% for general category in urban/rural areas',
      'Subsidy of 25% to 35% for SC, ST, OBC, Women, and Differently-Abled in rural areas',
      'Project cost ceiling: ₹50 Lakh for manufacturing and ₹20 Lakh for service units'
    ],
    benefitAmount: 'Up to 35% Capital Subsidy on ₹50L project',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Detailed Project Report (DPR)',
      'Aadhaar Card & PAN Card',
      'Caste/Special category certificate (if claiming 35% subsidy)',
      '8th class pass marksheet or higher education certificate',
      'EDP training certificate (can be completed online post-sanction)'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on KVIC PMEGP e-Portal (kviconline.gov.in)',
      'Upload DPR and agency preferences (KVIC, KVIB, or DIC)',
      'District Task Force Committee scrutinizes and forwards to financing bank'
    ],
    officialUrl: 'https://www.kviconline.gov.in/pmegpeportal/',
    portalName: 'KVIC PMEGP e-Portal',
    deadline: 'Year-round application',
    status: 'active',
    lastVerifiedDate: '2026-08-19',
    isPopular: true
  },

  // 15. Agriculture - PM Fasal Bima
  {
    id: 'pmfby-crop-insurance-15',
    slug: 'pradhan-mantri-fasal-bima-yojana',
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    nameHindi: 'प्रधानमंत्री फसल बीमा योजना',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Comprehensive crop insurance covering yield losses due to non-preventable natural risks (drought, flood, pests, storms) at ultra-low farmer premium rates.',
    whoIsItFor: 'All farmers growing notified crops in notified areas including sharecroppers and tenant farmers.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer'],
      rawText: 'All farmers growing notified crops in notified areas. Voluntary for all farmers (both loanee and non-loanee farmers).'
    },
    benefits: [
      'Uniform maximum premium: Only 2% for Kharif crops, 1.5% for Rabi crops, and 5% for annual commercial/horticulture crops',
      'Balance premium subsidized equally by Central and State Governments',
      'Covers sowing prevention, standing crop loss, post-harvest losses, and localized disasters'
    ],
    benefitAmount: 'Up to 100% Insured Sum Claim Cover',
    benefitType: 'insurance',
    requiredDocuments: [
      'Land Revenue records (Khata/Khasra/RoR) or tenancy agreement',
      'Sowing Certificate / declaration issued by Patwari or Village Officer',
      'Aadhaar Card and Bank Account passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply via National Crop Insurance Portal (pmfby.gov.in) or nearest CSC / Bank',
      'Pay nominal premium (1.5% - 2%) before the seasonal cutoff deadline',
      'Crop loss reporting via Crop Insurance App within 72 hours of damage'
    ],
    officialUrl: 'https://pmfby.gov.in/',
    portalName: 'National Crop Insurance Portal',
    deadline: 'Seasonal (July 31 for Kharif; Dec 31 for Rabi)',
    status: 'active',
    lastVerifiedDate: '2026-08-11',
    isPopular: true
  },

  // 16. Higher Education - PM-USP Central Sector Scholarship
  {
    id: 'pm-usp-college-scholarship-16',
    slug: 'central-sector-scholarship-college-students',
    name: 'Central Sector Scheme of Scholarship for College & University Students (PM-USP)',
    nameHindi: 'कॉलेज और विश्वविद्यालय के छात्रों के लिए केंद्रीय क्षेत्र छात्रवृत्ति योजना',
    ministry: 'Department of Higher Education, Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Merit-cum-means scholarship for meritorious college students who scored above the 80th percentile in 12th Board examinations.',
    whoIsItFor: 'Undergraduate and postgraduate students pursuing regular degree courses with family income <= ₹4.5 Lakh.',
    eligibility: {
      ageMin: 17,
      ageMax: 25,
      gender: 'all',
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      incomeMax: 450000,
      rawText: 'Scored above 80th percentile in respective Class 12 Board examination. Pursuing regular degree course. Family income not exceeding ₹4,50,000 per annum. Not availing other central scholarships.'
    },
    benefits: [
      '₹12,000 per annum for the first 3 years of undergraduate study',
      '₹20,000 per annum at postgraduate degree level',
      '5-year integrated courses get ₹20,000/yr in 4th and 5th years'
    ],
    benefitAmount: '₹12,000 to ₹20,000 / year stipend',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Class 12 Marks card showing percentile ranking',
      'Income Certificate (valid for current financial year)',
      'College Bonafide student admission certificate',
      'Aadhaar-seeded bank account'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on National Scholarship Portal (scholarships.gov.in)',
      'Institution verification by University Nodal Officer',
      'Direct DBT disbursement directly to student'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal (NSP)',
    deadline: 'October 31, 2026',
    status: 'active',
    lastVerifiedDate: '2026-08-26',
    isPopular: true
  },

  // 17. Urban Housing - PMAY-U
  {
    id: 'pm-awas-urban-17',
    slug: 'pradhan-mantri-awas-yojana-urban-2',
    name: 'Pradhan Mantri Awas Yojana - Urban (PMAY-U 2.0)',
    nameHindi: 'प्रधानमंत्री आवास योजना - शहरी 2.0',
    ministry: 'Ministry of Housing and Urban Affairs (MoHUA)',
    level: 'centrally_sponsored',
    categoryTag: 'Housing & Shelter',
    description: 'Interest subsidy and direct financial assistance for building or buying affordable pucca homes in urban statutory towns.',
    whoIsItFor: 'EWS, LIG, and Middle-Income urban families who do not own a pucca house anywhere in India.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'artisan', 'self_employed', 'entrepreneur', 'job_seeker'],
      incomeMax: 900000,
      rawText: 'Urban household having no pucca house in any part of India. EWS (income up to ₹3L) and LIG (income up to ₹6L).'
    },
    benefits: [
      'Up to ₹2.5 Lakh central and state subsidy for Beneficiary Led Construction (BLC)',
      'Interest subsidy of 4% on home loans up to ₹8 Lakh for 12 years',
      'Mandatory female ownership or co-ownership of the house'
    ],
    benefitAmount: 'Up to ₹2,50,000 subsidy / loan interest relief',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar of all family members',
      'Proof of land ownership (for construction) or builder purchase agreement',
      'Income Certificate / ITR',
      'Affidavit of not owning a pucca home'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply online on pmaymis.gov.in or via municipal corporation citizen service center',
      'ULB site inspection and inclusion in city action plan'
    ],
    officialUrl: 'https://pmaymis.gov.in/',
    portalName: 'PMAY-Urban Portal',
    deadline: 'Active phase through 2029',
    status: 'active',
    lastVerifiedDate: '2026-08-04',
    isPopular: true
  },

  // 18. Skill Training - PMKVY
  {
    id: 'pmkvy-skill-training-18',
    slug: 'pradhan-mantri-kaushal-vikas-yojana',
    name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)',
    nameHindi: 'प्रधानमंत्री कौशल विकास योजना',
    ministry: 'Ministry of Skill Development and Entrepreneurship (MSDE)',
    level: 'central',
    categoryTag: 'Skill & Employment',
    description: 'Free industry-aligned short-term skill certification, job placement assistance, and monetary reward for school/college dropouts and unemployed youth.',
    whoIsItFor: 'Unemployed youth, school/college dropouts seeking technical or vocational certification.',
    eligibility: {
      ageMin: 15,
      ageMax: 45,
      gender: 'all',
      categories: ['All'],
      occupations: ['job_seeker', 'unemployed', 'student', 'worker'],
      rawText: 'Indian citizen aged 15-45. School/college dropouts or unemployed youth seeking market-driven skill training.'
    },
    benefits: [
      '100% free skill training in modern trades (AI, Drone tech, Solar, CNC, Healthcare, Retail)',
      'Government recognized National Skills Qualification Framework (NSQF) certification',
      'Post-placement stipend and accidental insurance cover for 3 years'
    ],
    benefitAmount: '100% Free Training + NSQF Certificate + Placement',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card',
      'Previous educational marksheet / school leaving certificate',
      'Bank passbook details'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Search nearest Pradhan Mantri Kaushal Kendra (PMKK) on skillindia.gov.in',
      'Enroll in chosen job role and complete theoretical + practical hours',
      'Appear for third-party assessment and receive Skill Card'
    ],
    officialUrl: 'https://www.skillindia.gov.in/',
    portalName: 'Skill India Digital Hub',
    deadline: 'Batches enrolling continuously',
    status: 'active',
    lastVerifiedDate: '2026-08-21',
    isPopular: true
  },

  // 19. Women Fuel Subsidy - PM Ujjwala
  {
    id: 'pm-ujjwala-yojana-19',
    slug: 'pradhan-mantri-ujjwala-yojana',
    name: 'Pradhan Mantri Ujjwala Yojana (PMUY 2.0)',
    nameHindi: 'प्रधानमंत्री उज्ज्वला योजना 2.0',
    ministry: 'Ministry of Petroleum and Natural Gas',
    level: 'central',
    categoryTag: 'Women and Child',
    description: 'Provides deposit-free LPG connection along with free first refill and hotplate stove to adult women from poor and deprived households.',
    whoIsItFor: 'Adult women belonging to BPL, SC/ST, PMAY, or deprived categories with no existing LPG connection in the household.',
    eligibility: {
      ageMin: 18,
      gender: 'female',
      categories: ['All'],
      occupations: ['homemaker', 'worker', 'farmer', 'artisan'],
      rawText: 'Adult woman from poor household with no existing LPG connection in the name of any family member residing together.'
    },
    benefits: [
      'Free LPG cylinder connection with security deposit waived (₹1,600 value)',
      'Free first 14.2 kg LPG cylinder refill',
      'Free two-burner gas stove (hotplate)',
      'Targeted ₹300 subsidy per refill on up to 12 domestic cylinders per year'
    ],
    benefitAmount: 'Free LPG Connection + ₹300/cylinder subsidy',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar card of adult woman applicant and family members',
      'Ration card or BPL declaration',
      'Bank passbook with IFSC code',
      'Self-declaration of residency'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply online at pmuy.gov.in or visit local LPG distributor (Indane, BharatGas, HP)',
      'Distributor validates de-duplication check against NIC database',
      'LPG connection installed at home with safety briefing'
    ],
    officialUrl: 'https://www.pmuy.gov.in/',
    portalName: 'PMUY National Portal',
    deadline: 'Ongoing enrollment',
    status: 'active',
    lastVerifiedDate: '2026-08-09',
    isPopular: true
  },

  // 20. Fisheries - PM Matsya Sampada
  {
    id: 'pm-matsya-sampada-20',
    slug: 'pradhan-mantri-matsya-sampada-yojana',
    name: 'Pradhan Mantri Matsya Sampada Yojana (PMMSY)',
    nameHindi: 'प्रधानमंत्री मत्स्य सम्पदा योजना',
    ministry: 'Department of Fisheries, Ministry of Fisheries, Animal Husbandry & Dairying',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Government financial assistance of 40% to 60% for fish farming, aquaculture ponds, biofloc units, fish feed mills, and refrigerated transport vans.',
    whoIsItFor: 'Fishers, fish farmers, rural youth, women, and fisheries cooperatives.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'entrepreneur', 'self_employed'],
      rawText: 'Fishers, fish farmers, fisheries cooperatives, and entrepreneurs having suitable land or water bodies.'
    },
    benefits: [
      '40% project subsidy for general category beneficiaries',
      '60% project subsidy for SC, ST, and Women beneficiaries',
      'Includes assistance for pond construction, recirculatory aquaculture systems (RAS), and cold chain'
    ],
    benefitAmount: '40% - 60% Government Capital Subsidy',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Land ownership records or lease agreement for 7+ years',
      'Aadhaar and PAN card',
      'Detailed Project Proposal (DPR)',
      'Fisheries training certificate'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Submit proposal on pmmsy.dof.gov.in or to District Fisheries Officer',
      'District Level Committee evaluates and forwards to State Fisheries Department',
      'Subsidy released in DBT installments linked to pond construction milestones'
    ],
    officialUrl: 'https://pmmsy.dof.gov.in/',
    portalName: 'PMMSY Portal',
    deadline: 'Annual state call for proposals',
    status: 'active',
    lastVerifiedDate: '2026-08-16',
    isPopular: false
  },

  // 21. Minority Education - Begum Hazrat Mahal Scholarship
  {
    id: 'begum-hazrat-mahal-21',
    slug: 'begum-hazrat-mahal-national-scholarship',
    name: 'Begum Hazrat Mahal National Scholarship for Meritorious Girls',
    nameHindi: 'बेगम हज़रत महल राष्ट्रीय छात्रवृत्ति',
    ministry: 'Ministry of Minority Affairs',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Scholarship support to girl students belonging to notified minority communities (Muslims, Christians, Sikhs, Buddhists, Jains, Parsis) studying in Class 9 to 12.',
    whoIsItFor: 'Meritorious minority girl students studying in Class 9-12 with family income up to ₹2 Lakh.',
    eligibility: {
      ageMin: 13,
      ageMax: 20,
      gender: 'female',
      categories: ['Minority', 'All'],
      occupations: ['student'],
      educationMin: 'secondary',
      incomeMax: 200000,
      rawText: 'Girl students belonging to notified national minorities. Minimum 50% marks in previous class. Annual family income <= ₹2,00,000.'
    },
    benefits: [
      '₹5,000 per year for Class 9 and 10 students',
      '₹6,000 per year for Class 11 and 12 students',
      'Direct DBT credit to student bank account'
    ],
    benefitAmount: '₹5,000 to ₹6,000 / year',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Minority community self-declaration certificate',
      'School bonafide certificate verified by Principal',
      'Income certificate (<= ₹2 Lakh)',
      'Previous class marksheet (min 50%)',
      'Aadhaar Card'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on National Scholarship Portal (scholarships.gov.in)',
      'Submit academic verification by school Principal',
      'DBT released post state verification'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal (NSP)',
    deadline: 'November 15, 2026',
    status: 'active',
    lastVerifiedDate: '2026-08-27',
    isPopular: true
  },

  // 22. Disability Welfare - ADIP Scheme
  {
    id: 'adip-disability-assistive-22',
    slug: 'assistance-to-disabled-persons-adip',
    name: 'ADIP Scheme (Assistance to Disabled Persons for Assistive Aids)',
    nameHindi: 'दिव्यांगजनों को सहायक उपकरण वितरण योजना (ADIP)',
    ministry: 'Department of Empowerment of Persons with Disabilities, MoSJE',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Free modern assistive aids, motorized tricycles, braille kits, hearing aids, prosthetics, and cochlear implants to differently-abled persons.',
    whoIsItFor: 'Persons with 40% or more certified disability having monthly family income up to ₹30,000.',
    eligibility: {
      ageMin: 0,
      gender: 'all',
      categories: ['All'],
      occupations: ['student', 'worker', 'unemployed', 'senior_citizen', 'homemaker'],
      incomeMax: 360000,
      rawText: 'Indian citizen with 40% or more certified benchmark disability. Monthly income up to ₹20,000 for 100% aid subsidy; up to ₹30,000 for 50% subsidy.'
    },
    benefits: [
      '100% free distribution of customized motorized tricycles, smart canes, wheelchairs, and hearing aids',
      'High-end cochlear implant surgery funding up to ₹6,00,000 for children under 5 years',
      'Laptops with screen readers for visually impaired college students'
    ],
    benefitAmount: '100% Free Assistive Devices / ₹6L Cochlear cover',
    benefitType: 'service',
    requiredDocuments: [
      'Disability Certificate / Unique Disability ID (UDID) Card',
      'Income Certificate issued by Revenue Authority',
      'Aadhaar Card',
      'Doctor recommendation for specific assistive aid'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Register on ALIMCO or swavlambancard.gov.in',
      'Attend district distribution camps organized by ALIMCO / District Social Welfare Officer'
    ],
    officialUrl: 'https://www.alimco.in/',
    portalName: 'ALIMCO / Swavlamban Portal',
    deadline: 'Ongoing district distribution camps',
    status: 'active',
    lastVerifiedDate: '2026-08-17',
    isPopular: true
  },

  // 23. State - Rajasthan Health Chiranjeevi / Ayushman
  {
    id: 'rajasthan-chiranjeevi-health-23',
    slug: 'mukhya-mantri-ayushman-arogya-yojana-rajasthan',
    name: 'Rajasthan Mukhya Mantri Ayushman Arogya Yojana',
    nameHindi: 'मुख्यमंत्री आयुष्मान आरोग्य योजना (राजस्थान)',
    ministry: 'Medical and Health Department, Govt of Rajasthan',
    level: 'state',
    state: 'Rajasthan',
    categoryTag: 'Health & Wellness',
    description: 'State flagship health assurance cover providing up to ₹25 Lakh cashless treatment cover per family per year in empaneled hospitals in Rajasthan.',
    whoIsItFor: 'Residents of Rajasthan holding Jan Aadhaar cards; free for NFSA/SECC/small farmers, and subsidized for others.',
    eligibility: {
      ageMin: 0,
      gender: 'all',
      state: 'Rajasthan',
      categories: ['All'],
      occupations: ['farmer', 'worker', 'artisan', 'self_employed', 'unemployed'],
      rawText: 'Resident of Rajasthan with Jan Aadhaar Card. Free for NFSA families, small farmers, and contractual workers. Other families can join by paying ₹850/yr premium.'
    },
    benefits: [
      'Universal health insurance coverage up to ₹25 Lakh per family per year',
      'Accidental insurance cover up to ₹10 Lakh',
      'Covers critical organ transplants (heart, liver, kidney) and complex oncology treatments'
    ],
    benefitAmount: 'Up to ₹25,00,000 / family / year cover',
    benefitType: 'insurance',
    requiredDocuments: [
      'Jan Aadhaar Card of Rajasthan',
      'Aadhaar Card of patient',
      'Active mobile number linked to Jan Aadhaar'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Check status on sso.rajasthan.gov.in using Jan Aadhaar ID',
      'Eligible families are enrolled automatically; others pay ₹850 annual premium on the portal'
    ],
    officialUrl: 'https://health.rajasthan.gov.in/',
    portalName: 'Rajasthan SSO / Health Portal',
    deadline: 'Annual renewal for paid category',
    status: 'active',
    lastVerifiedDate: '2026-08-23',
    isPopular: true
  },

  // 24. State - Delhi Higher Education Guarantee
  {
    id: 'delhi-higher-education-loan-24',
    slug: 'delhi-higher-education-and-skill-guarantee-scheme',
    name: 'Delhi Higher Education & Skill Development Credit Guarantee Scheme',
    nameHindi: 'दिल्ली उच्च शिक्षा एवं कौशल गारंटी योजना',
    ministry: 'Department of Training & Technical Education, Govt of NCT of Delhi',
    level: 'state',
    state: 'Delhi',
    categoryTag: 'Education & Learning',
    description: 'Collateral-free, third-party-guarantee-free educational loan up to ₹10 Lakh for students pursuing higher education in Delhi with Delhi Govt acting as guarantor.',
    whoIsItFor: 'Students who completed 10th & 12th in Delhi pursuing higher education degrees or diplomas in Delhi institutions.',
    eligibility: {
      ageMin: 16,
      ageMax: 35,
      gender: 'all',
      state: 'Delhi',
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      residency: 'Must have completed 10th and 12th standard schooling in Delhi.',
      rawText: 'Candidate must have completed 10th and 12th grade from recognized school located in NCT of Delhi. Pursuing diploma/degree in approved Delhi college.'
    },
    benefits: [
      'Collateral-free education loan up to ₹10,00,000',
      'No margin money required for loans up to ₹10 Lakh',
      'Repayment begins 1 year after course completion with 15-year tenure'
    ],
    benefitAmount: 'Up to ₹10,00,000 collateral-free education loan',
    benefitType: 'loan',
    requiredDocuments: [
      '10th and 12th marksheets from Delhi school',
      'Delhi residence proof (Aadhaar / Voter ID / Ration card)',
      'College admission letter and detailed course fee structure',
      'Bank account details'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on Delhi Higher Education Portal (edistrict.delhigovt.nic.in)',
      'Upload marksheet proving Delhi schooling and college admission proof',
      'Designated bank sanctions loan with Delhi Govt credit guarantee'
    ],
    officialUrl: 'https://edistrict.delhigovt.nic.in/',
    portalName: 'Delhi e-District / Higher Education Portal',
    deadline: 'Open throughout academic session',
    status: 'active',
    lastVerifiedDate: '2026-08-24',
    isPopular: true
  },

  // 25. State - MP Ladli Behna Yojana
  {
    id: 'mp-ladli-behna-25',
    slug: 'mukhya-mantri-ladli-behna-yojana-mp',
    name: 'Madhya Pradesh Mukhya Mantri Ladli Behna Yojana',
    nameHindi: 'मुख्यमंत्री लाड़ली बहना योजना (मध्य प्रदेश)',
    ministry: 'Women and Child Development Department, Govt of Madhya Pradesh',
    level: 'state',
    state: 'Madhya Pradesh',
    categoryTag: 'Women and Child',
    description: 'Monthly unconditional direct cash transfer of ₹1,250 credited directly into the bank accounts of adult women in Madhya Pradesh to foster economic independence.',
    whoIsItFor: 'Married, widowed, divorced, or abandoned women aged 21-60 domiciled in Madhya Pradesh with family income <= ₹2.5 Lakh.',
    eligibility: {
      ageMin: 21,
      ageMax: 60,
      gender: 'female',
      state: 'Madhya Pradesh',
      categories: ['All'],
      occupations: ['homemaker', 'worker', 'farmer', 'artisan', 'self_employed'],
      incomeMax: 250000,
      residency: 'Resident of Madhya Pradesh.',
      rawText: 'Resident of MP. Married woman aged 21 to 60 years. Family annual income less than ₹2,50,000. Family must not own more than 5 acres of agricultural land or four-wheeler.'
    },
    benefits: [
      '₹1,250 per month credited directly on the 10th of every month',
      'Annual direct cash transfer support of ₹15,000 per woman',
      'Aadhaar-based DBT payment with zero intermediary deductions'
    ],
    benefitAmount: '₹1,250 / month (₹15,000 / year)',
    benefitType: 'cash',
    requiredDocuments: [
      'Samagra Family ID and Member ID',
      'Aadhaar Card',
      'Aadhaar-linked DBT enabled active Bank Account',
      'Mobile number'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply at Gram Panchayat / Ward camp or online via cmladlibahna.mp.gov.in',
      'Biometric eKYC conducted by local field staff',
      'Approved list published on portal with DBT tracker'
    ],
    officialUrl: 'https://cmladlibahna.mp.gov.in/',
    portalName: 'MP Ladli Behna Portal',
    deadline: 'Periodic camp drives',
    status: 'active',
    lastVerifiedDate: '2026-08-29',
    isPopular: true
  }
];

export const POPULAR_INTERESTS = [
  'Higher Education Scholarships',
  'Agriculture & Crop Subsidies',
  'Small Business / Startup Loans',
  'Skill Training & Employment',
  'Health Insurance & Medical Care',
  'Housing & Construction Grants',
  'Women Empowerment & Child Welfare',
  'Disabled Welfare Schemes',
  'Senior Citizen Pension & Care'
];
