import { Scheme } from '../types';

export const SEED_SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan-01',
    slug: 'pm-kisan-samman-nidhi',
    name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    nameHindi: 'प्रधानमंत्री किसान सम्मान निधि',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'A central sector scheme providing income support to all landholding farmers families in the country to supplement their financial needs for agriculture and allied inputs.',
    whoIsItFor: 'Small and marginal landholder farmer families with cultivable land holdings in their names.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer'],
      incomeMax: 1000000,
      residency: 'Resident citizen of India with cultivable agricultural landholding.',
      rawText: 'All landholding farmer families having cultivable land in their names. Institutional landholders, farmer families holding constitutional posts, serving/retired government officers and employees, and professionals paying income tax are excluded.'
    },
    benefits: [
      'Financial benefit of ₹6,000 per year per family',
      'Direct Benefit Transfer (DBT) directly into Aadhaar-seeded bank accounts',
      'Disbursed in three equal 4-monthly installments of ₹2,000 each'
    ],
    benefitAmount: '₹6,000 / year',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Landholding ownership papers (Khasra/Khatauni or RoR records)',
      'Bank Account passbook with IFSC code',
      'Active Mobile Number linked to Aadhaar for eKYC'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Visit the official PM-KISAN portal (pmkisan.gov.in)',
      'Click on "Farmers Corner" and select "New Farmer Registration"',
      'Enter Aadhaar number, state, and complete OTP mobile verification',
      'Fill in landholding details, upload survey records, and submit',
      'Complete mandatory biometric or face e-KYC on the portal/app'
    ],
    officialUrl: 'https://pmkisan.gov.in/',
    portalName: 'PM-KISAN National Portal',
    deadline: 'Ongoing throughout the year',
    status: 'active',
    lastVerifiedDate: '2026-08-15',
    inconsistencies: [
      'Certain state land record links periodically timeout during peak registration weeks',
      'Land records updated after February 1, 2019 require manual district verification'
    ],
    isPopular: true
  },
  {
    id: 'post-matric-sc-02',
    slug: 'post-matric-scholarship-sc',
    name: 'Centrally Sponsored Post-Matric Scholarship for SC Students',
    nameHindi: 'अनुसूचित जाति के छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'centrally_sponsored',
    categoryTag: 'Education & Learning',
    description: 'Provides financial assistance to Scheduled Caste students studying at post-matriculation or post-secondary stage to enable them to complete their higher education.',
    whoIsItFor: 'SC students enrolled in recognized universities, colleges, or ITIs with annual family income up to ₹2.5 Lakh.',
    eligibility: {
      ageMin: 15,
      ageMax: 35,
      gender: 'all',
      categories: ['SC'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      incomeMax: 250000,
      rawText: 'Candidate must belong to Scheduled Caste (SC) category. The student should be enrolled in an accredited higher education institution. Total annual family income from all sources must not exceed ₹2,50,000.'
    },
    benefits: [
      'Complete mandatory non-refundable college tuition fee reimbursement',
      'Monthly maintenance allowance of ₹4,000 to ₹13,500/year depending on course tier (hostellers vs day scholars)',
      'Study tour charges, thesis typing/printing grant for research scholars',
      'Disability allowance for differently-abled scholars'
    ],
    benefitAmount: '100% Tuition Fee + up to ₹13,500/yr',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Aadhaar Card of the student',
      'Official Caste Certificate issued by competent revenue authority',
      'Income Certificate (valid for current financial year)',
      'Previous year academic marksheets and passing certificate',
      'Current institution fee receipt and Bonafide admission letter',
      'Aadhaar-seeded active Bank Account details'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on the National Scholarship Portal (scholarships.gov.in) with student OTR (One Time Registration)',
      'Select Post Matric Scholarship for SC Students under Ministry of Social Justice',
      'Upload caste, income, and institution fee receipts',
      'Submit form to your college Nodal Officer for electronic verification',
      'Track state and central DBT disbursement stages on the dashboard'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal (NSP)',
    deadline: 'October 31, 2026',
    status: 'active',
    lastVerifiedDate: '2026-08-20',
    isPopular: true
  },
  {
    id: 'pm-mudra-yojana-03',
    slug: 'pradhan-mantri-mudra-yojana',
    name: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    nameHindi: 'प्रधानमंत्री मुद्रा योजना',
    ministry: 'Ministry of Finance / DFS',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Enables micro and small enterprises to access collateral-free institutional loans up to ₹20 Lakh across Shishu, Kishore, and Tarun categories for non-farm income generating activities.',
    whoIsItFor: 'Aspiring entrepreneurs, small business owners, artisans, shopkeepers, and micro-manufacturers.',
    eligibility: {
      ageMin: 18,
      ageMax: 65,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur', 'artisan', 'self_employed', 'worker'],
      rawText: 'Any Indian citizen who has a business plan for a non-farm income generating activity such as manufacturing, processing, trading, or service sector and requires credit up to ₹20 Lakh.'
    },
    benefits: [
      'Collateral-free institutional business loans from Commercial Banks, RRBs, and MFIs',
      'Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), Tarun (₹5 Lakh to ₹10 Lakh), and Tarun Plus (up to ₹20 Lakh)',
      'Subsidized processing fees and concessional interest rates for women and SC/ST borrowers',
      'Provision of MUDRA RuPay Debit Card for working capital drawdowns'
    ],
    benefitAmount: 'Up to ₹20,00,000 collateral-free loan',
    benefitType: 'loan',
    requiredDocuments: [
      'Proof of identity (Voter ID / Aadhaar / Passport / Driving License)',
      'Proof of residence (Electricity bill / Rent agreement / Aadhaar)',
      'Business registration certificate or Udyam Registration (if registered)',
      'Project business plan / Quotation of machinery or inventory to be purchased',
      'Bank statement for past 6 months (for existing enterprises)'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply online via the JanSamarth or UdyamiMitra portal (jansamarth.in)',
      'Alternatively visit any commercial bank, Regional Rural Bank, or NBFC branch',
      'Submit the standardized MUDRA application form with business proposal',
      'Undergo bank appraisal; loan sanction letter issued within 7–14 working days'
    ],
    officialUrl: 'https://www.mudra.org.in/',
    portalName: 'MUDRA Portal / JanSamarth',
    deadline: 'Open all year round',
    status: 'active',
    lastVerifiedDate: '2026-08-10',
    isPopular: true
  },
  {
    id: 'pm-awas-gramin-04',
    slug: 'pradhan-mantri-awas-yojana-gramin',
    name: 'Pradhan Mantri Awas Yojana - Gramin (PMAY-G)',
    nameHindi: 'प्रधानमंत्री आवास योजना - ग्रामीण',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Housing & Shelter',
    description: 'Provides pucca houses with basic amenities to all homeless and households living in kutcha or dilapidated houses in rural areas.',
    whoIsItFor: 'Rural households without permanent housing, selected via SECC/Awas+ deprivation criteria.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'worker', 'unemployed', 'artisan'],
      incomeMax: 200000,
      rawText: 'Homeless rural families or those living in zero, one, or two-room kutcha houses. Identified based on housing deprivation parameters in SECC 2011 validated by Gram Sabhas. Households with motorized vehicles, agricultural equipment, or government employees are excluded.'
    },
    benefits: [
      'Financial assistance of ₹1,20,000 in plain areas and ₹1,30,000 in hilly/difficult/northeast states',
      'Additional 90/95 person-days of unskilled labor support under MGNREGS (approx ₹25,000+ extra)',
      '₹12,000 assistance for toilet construction via Swachh Bharat Mission (SBM-G)',
      'LPG connection under PM Ujjwala Yojana & clean drinking water piped connection'
    ],
    benefitAmount: '₹1,20,000 - ₹1,30,000 + MGNREGA wages',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card of household head and family members',
      'Bank Account passbook linked with Aadhaar',
      'MGNREGA Job Card Number',
      'Consent letter to use Aadhaar number for DBT',
      'Site photograph of existing kutcha structure with geo-tagging'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Names are prioritized through the Gram Sabha verified Awaas+ list',
      'Citizen can approach the local Gram Panchayat Secretary or Block Development Officer',
      'Geo-tagged photo verification conducted via AwaasApp by local field officers',
      'Sanction order generated and funds released directly into bank account in 3 stages linked to construction milestones'
    ],
    officialUrl: 'https://pmayg.nic.in/',
    portalName: 'PMAY-G AwaasSoft Portal',
    deadline: 'Active scheme phase through 2029',
    status: 'active',
    lastVerifiedDate: '2026-07-28',
    isPopular: true
  },
  {
    id: 'ayushman-bharat-pmjay-05',
    slug: 'ayushman-bharat-pmjay',
    name: 'Ayushman Bharat PM-JAY (Health Insurance)',
    nameHindi: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना',
    ministry: 'Ministry of Health and Family Welfare / NHA',
    level: 'centrally_sponsored',
    categoryTag: 'Health & Wellness',
    description: 'The worlds largest government-funded health assurance scheme, providing a health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization.',
    whoIsItFor: 'Bottom 40% vulnerable and poor families identified by socio-economic criteria, plus all senior citizens aged 70+ irrespective of income.',
    eligibility: {
      ageMin: 0,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'worker', 'artisan', 'unemployed', 'senior_citizen'],
      incomeMax: 300000,
      rawText: 'Households listed under SECC database deprived rural categories and designated urban occupational worker groups. In addition, all senior citizens aged 70 years and above are entitled to an exclusive top-up health cover of ₹5 Lakh per year.'
    },
    benefits: [
      'Cashless and paperless access to healthcare services at empaneled public and private hospitals across India',
      'Coverage of up to ₹5,00,000 per family per year on a family floater basis',
      'Covers 1,900+ medical procedures, surgeries, pre- and post-hospitalization medications, and diagnostic tests',
      'No cap on family size or age limit of dependents'
    ],
    benefitAmount: '₹5,00,000 / family / year cover',
    benefitType: 'insurance',
    requiredDocuments: [
      'Aadhaar Card or Ration Card (with family members listed)',
      'Active mobile number for OTP',
      'Existing PM-JAY or State Health Card if already issued'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Check eligibility on beneficiary.nha.gov.in using Mobile Number, Aadhaar, or Ration Card',
      'Visit any Empaneled Health Care Provider (EHCP) or Common Service Centre (CSC)',
      'Complete biometric / e-KYC authentication with the Ayushman Mitra desk',
      'Instant generation and download of the plastic/digital Ayushman PVC Card'
    ],
    officialUrl: 'https://beneficiary.nha.gov.in/',
    portalName: 'National Health Authority (NHA)',
    deadline: 'Continuous enrollment',
    status: 'active',
    lastVerifiedDate: '2026-08-30',
    isPopular: true
  },
  {
    id: 'standup-india-06',
    slug: 'stand-up-india-scheme',
    name: 'Stand-Up India for Women and SC/ST Entrepreneurs',
    nameHindi: 'स्टैंड-अप इंडिया योजना',
    ministry: 'Ministry of Finance / SIDBI',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Facilitates bank loans between ₹10 Lakh and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.',
    whoIsItFor: 'SC/ST and women entrepreneurs establishing manufacturing, service, agri-allied, or trading greenfield startups.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['SC', 'ST', 'All'],
      occupations: ['entrepreneur', 'self_employed'],
      rawText: 'SC/ST and/or woman entrepreneur, above 18 years of age. Loans under the scheme are available for greenfield projects only (the first-time venture of the beneficiary in manufacturing, services, or trading sector). If enterprise is non-individual, 51% shareholding must be held by SC/ST and/or woman.'
    },
    benefits: [
      'Bank credit between ₹10 Lakh and ₹100 Lakh (₹1 Crore) covering up to 85% of project cost',
      'Margin money requirement capped at max 15%',
      'Repayable in 7 years with a moratorium period of up to 18 months',
      'Handholding support via SIDBI and state agencies for project report formulation and skill training'
    ],
    benefitAmount: '₹10 Lakh to ₹1 Crore loan',
    benefitType: 'loan',
    requiredDocuments: [
      'Proof of identity and address (Aadhaar, Passport, PAN Card)',
      'SC/ST Certificate (if applying under SC/ST category)',
      'Company incorporation certificate & proof that 51% stake is held by woman/SC/ST',
      'Detailed Project Report (DPR) with projected financial statements',
      'Pollution control clearance and license requisites'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Register on Stand-Up Mitra portal (standupmitra.in)',
      'Prepare project report or request handholding assistance from Lead District Manager (LDM)',
      'Apply to nearest scheduled commercial bank branch directly through portal',
      'Follow up loan appraisal with designated branch credit officer'
    ],
    officialUrl: 'https://www.standupmitra.in/',
    portalName: 'Stand-Up Mitra Portal',
    deadline: 'Ongoing through March 2028',
    status: 'active',
    lastVerifiedDate: '2026-08-12',
    isPopular: false
  },
  {
    id: 'pm-vishwakarma-07',
    slug: 'pm-vishwakarma-yojana',
    name: 'PM Vishwakarma Scheme for Traditional Artisans & Craftspeople',
    nameHindi: 'पीएम विश्वकर्मा योजना',
    ministry: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
    level: 'central',
    categoryTag: 'Skill & Employment',
    description: 'Comprehensive support scheme for traditional artisans and craftspeople working with hands and tools across 18 traditional trades like carpenters, blacksmiths, potters, cobblers, and tailors.',
    whoIsItFor: 'Traditional artisans and craftspeople engaged in one of the 18 family-based traditional trades in unorganized sector.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['artisan', 'worker', 'self_employed'],
      rawText: 'An artisan or craftsperson working with hands and tools in one of the 18 specified trades on self-employment basis. One member per family. Should not have availed similar government credit schemes (PMEGP, PM SVANidhi, MUDRA) in the past 5 years.'
    },
    benefits: [
      'PM Vishwakarma Digital Certificate and ID card recognition',
      'Basic skill training (5–7 days) with ₹500/day stipend during training',
      'Modern Toolkit incentive e-voucher worth ₹15,000',
      'Collateral-free enterprise credit: 1st tranche up to ₹1 Lakh at 5% interest, 2nd tranche up to ₹2 Lakh',
      'Incentive for digital transactions (₹1 per transaction up to 100 transactions/month)'
    ],
    benefitAmount: '₹15,000 Toolkit + up to ₹3 Lakh loan at 5%',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card with mobile linkage',
      'Bank passbook photocopy / cancelled cheque',
      'Ration card / Proof of family details',
      'Trade skill declaration / recommendation from Gram Panchayat or ULB'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Visit any Common Service Centre (CSC) for free biometric assisted registration',
      'Three-stage verification: Gram Panchayat / ULB level -> District Implementation Committee -> Screening Committee',
      'Download the digital Vishwakarma Certificate & ID Card',
      'Attend mandatory basic skill development batch and claim ₹15,000 toolkit digital voucher'
    ],
    officialUrl: 'https://pmvishwakarma.gov.in/',
    portalName: 'PM Vishwakarma Official Portal',
    deadline: 'Active multi-year roll-out',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    isPopular: true
  },
  {
    id: 'sukanya-samriddhi-08',
    slug: 'sukanya-samriddhi-yojana',
    name: 'Sukanya Samriddhi Yojana (Beti Bachao Beti Padhao)',
    nameHindi: 'सुकन्या समृद्धि योजना',
    ministry: 'Ministry of Women and Child Development / Finance',
    level: 'central',
    categoryTag: 'Women and Child',
    description: 'A government-backed small savings scheme designed specifically for parents of girl children to build a dedicated education and marriage fund with tax-free high compounding returns.',
    whoIsItFor: 'Parents or legal guardians of girl children under 10 years of age.',
    eligibility: {
      ageMin: 0,
      ageMax: 10,
      gender: 'female',
      categories: ['All'],
      occupations: ['student', 'homemaker', 'worker'],
      rawText: 'Account can be opened by the natural or legal guardian in the name of a girl child from the time of her birth till she turns 10 years old. Maximum of two accounts allowed per family (three in case of twins/triplets as second birth).'
    },
    benefits: [
      'Guaranteed high sovereign interest rate (currently 8.2% p.a., compounded annually)',
      'Triple Tax Exemption (EEE status under Section 80C of Income Tax Act)',
      'Flexible deposits: Minimum ₹250 and maximum ₹1,50,000 per financial year',
      'Partial withdrawal up to 50% allowed for higher education after child reaches age 18 or passes 10th grade'
    ],
    benefitAmount: 'High 8.2% compounding tax-free interest',
    benefitType: 'cash',
    requiredDocuments: [
      'Birth Certificate of the girl child issued by municipal or hospital authorities',
      'Identity and address proof of the parent / guardian (Aadhaar, PAN, Voter ID)',
      'Passport size photographs of guardian and child',
      'Medical certificate in case of twin/triplet girl children'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Visit any designated Post Office branch or authorized commercial bank (SBI, PNB, BoB, etc.)',
      'Submit the Sukanya Samriddhi Account Opening Form along with birth certificate and KYC',
      'Deposit initial opening balance (minimum ₹250)',
      'Receive the passbook for tracking yearly deposits and accumulated interest'
    ],
    officialUrl: 'https://www.indiapost.gov.in/',
    portalName: 'India Post / Reserve Bank of India',
    deadline: 'Always open until child reaches 10 years',
    status: 'active',
    lastVerifiedDate: '2026-08-01',
    isPopular: true
  },
  {
    id: 'pm-svanidhi-09',
    slug: 'pm-street-vendors-atmanirbhar-nidhi',
    name: 'PM SVANidhi (Micro-Credit for Street Vendors)',
    nameHindi: 'पीएम स्वनिधि (स्ट्रीट वेंडर्स आत्मनिर्भर निधि)',
    ministry: 'Ministry of Housing and Urban Affairs (MoHUA)',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Affordable working capital collateral-free credit to urban, peri-urban, and rural street vendors to resume their livelihoods post pandemic disruptions.',
    whoIsItFor: 'Street vendors, hawkers, thela-walas, and stationary informal traders vending on streets.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['artisan', 'worker', 'self_employed'],
      rawText: 'Vendors in urban areas holding Certificate of Vending / ID card issued by Urban Local Bodies (ULBs). Vendors surveyed but not issued ID cards, or left out of survey can apply with a Letter of Recommendation (LoR) from Town Vending Committee.'
    },
    benefits: [
      'Initial working capital loan up to ₹10,000 with 1-year tenure',
      'Second loan up to ₹20,000 on timely repayment, and third loan up to ₹50,000',
      '7% interest subsidy credited directly to bank account on timely quarterly repayment',
      'Cashback incentive of up to ₹1,200 per year on carrying out digital transactions via QR codes'
    ],
    benefitAmount: 'Up to ₹50,000 loan + 7% interest subsidy',
    benefitType: 'loan',
    requiredDocuments: [
      'Vending Certificate / Identity Card issued by ULB or Letter of Recommendation (LoR)',
      'Aadhaar Card linked to mobile number',
      'Bank Account passbook or statement',
      'UPI QR code or merchant account details for digital cashback'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Visit the PM SVANidhi portal (pmsvanidhi.mohua.gov.in) or download the mobile app',
      'Verify mobile number via Aadhaar OTP and check vendor survey status',
      'Select preferred Lending Institution (bank or micro-finance partner)',
      'Submit application online; ULB and bank verify without physical branch visits needed'
    ],
    officialUrl: 'https://pmsvanidhi.mohua.gov.in/',
    portalName: 'PM SVANidhi Portal',
    deadline: 'Scheme active nationwide',
    status: 'active',
    lastVerifiedDate: '2026-08-18',
    isPopular: true
  },
  {
    id: 'maha-dbt-post-matric-10',
    slug: 'maharashtra-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh',
    name: 'Maharashtra Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme',
    nameHindi: 'राजर्षि छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना (महाराष्ट्र)',
    ministry: 'Higher and Technical Education Department, Govt of Maharashtra',
    level: 'state',
    state: 'Maharashtra',
    categoryTag: 'Education & Learning',
    description: 'Provides 50% tuition and exam fee reimbursement to economically weaker Open/General/EWS and OBC students enrolled in recognized professional higher education courses in Maharashtra.',
    whoIsItFor: 'Students with Maharashtra domicile enrolled in professional undergraduate/postgraduate degrees with family income up to ₹8 Lakh.',
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
      rawText: 'Candidate must be a Domicile of Maharashtra. Admission through Centralized Admission Process (CAP) in approved professional courses (Engineering, Pharmacy, MBA, Architecture, etc.). Family annual income should not exceed ₹8,00,000. Not more than 2 children from same family can avail.'
    },
    benefits: [
      '50% reimbursement of tuition fees and exam fees charged by recognized colleges/institutes',
      'Direct DBT disbursement directly to the institute / student account',
      'Subsidized hostel maintenance allowance for students living away from home'
    ],
    benefitAmount: '50% College Tuition Fee reimbursement',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Maharashtra Domicile Certificate',
      'Income Certificate issued by Tahsildar for previous financial year (<= ₹8 Lakh)',
      'CAP Allotment Letter confirming admission through merit rounds',
      '10th and 12th standard marksheets',
      'Aadhaar seeded bank account confirmation receipt',
      'Ration Card copy showing number of children'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on MahaDBT portal (mahadbt.maharashtra.gov.in)',
      'Create profile and authenticate Aadhaar biometric/OTP',
      'Select Directorate of Higher Education -> Rajarshi Chhatrapati Shahu Maharaj Scheme',
      'Enter college admission registration number and upload Domicile and Income certificates',
      'Submit application and track scrutiny status at College, District, and State levels'
    ],
    officialUrl: 'https://mahadbt.maharashtra.gov.in/',
    portalName: 'MahaDBT State Portal',
    deadline: 'December 31, 2026',
    status: 'active',
    lastVerifiedDate: '2026-08-22',
    isPopular: true
  },
  {
    id: 'up-kanya-sumangala-11',
    slug: 'mukhya-mantri-kanya-sumangala-yojana-up',
    name: 'Uttar Pradesh Mukhya Mantri Kanya Sumangala Yojana',
    nameHindi: 'मुख्यमंत्री कन्या सुमंगला योजना (उत्तर प्रदेश)',
    ministry: 'Women and Child Development Department, Govt of Uttar Pradesh',
    level: 'state',
    state: 'Uttar Pradesh',
    categoryTag: 'Women and Child',
    description: 'A conditional cash transfer program in Uttar Pradesh providing staged financial assistance to girl children from birth until completion of degree/diploma education.',
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
      rawText: 'Applicant family must be a resident of Uttar Pradesh and have an annual income not exceeding ₹3,00,000. Maximum of two girls per family can receive benefits under this scheme.'
    },
    benefits: [
      'Total financial package of ₹25,000 disbursed across 6 developmental milestones',
      'Stage 1: ₹5,000 upon birth of girl child',
      'Stage 2: ₹2,000 on completing 1-year vaccinations',
      'Stage 3: ₹3,000 on admission to Class 1',
      'Stage 4: ₹3,000 on admission to Class 6',
      'Stage 5: ₹5,000 on admission to Class 9',
      'Stage 6: ₹7,000 on enrollment in 2-year diploma or undergraduate degree'
    ],
    benefitAmount: '₹25,000 milestone cash grant',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar card of mother, father/guardian, and girl child (if available)',
      'UP State Domicile Certificate or Voter Card / Ration Card',
      'Income certificate issued by competent authority (up to ₹3 Lakh)',
      'Birth Certificate of girl child / immunization card / school admission certificate',
      'Bank passbook photocopy of joint account with guardian'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Access the MKSY portal (mksy.up.gov.in)',
      'Register as citizen and generate credentials with mobile verification',
      'Select relevant milestone category (e.g. Stage 5 for 9th grade or Stage 6 for graduation)',
      'Upload immunization/admission proof, submit to District Probation Officer scrutiny'
    ],
    officialUrl: 'https://mksy.up.gov.in/',
    portalName: 'UP Kanya Sumangala Portal',
    deadline: 'Round-the-year application according to child age milestone',
    status: 'active',
    lastVerifiedDate: '2026-08-05',
    isPopular: true
  },
  {
    id: 'karnataka-yuvanidhi-12',
    slug: 'karnataka-yuva-nidhi-scheme',
    name: 'Karnataka Yuva Nidhi Scheme (Unemployment Allowance)',
    nameHindi: 'कर्नाटक युवा निधि योजना (बेरोजगारी भत्ता)',
    ministry: 'Department of Skill Development, Govt of Karnataka',
    level: 'state',
    state: 'Karnataka',
    categoryTag: 'Skill & Employment',
    description: 'Provides monthly unemployment allowance and skill development training to educated youth who graduated from Karnataka institutions and are seeking jobs.',
    whoIsItFor: 'Degree and diploma graduates residing in Karnataka who remain unemployed after completing their degree.',
    eligibility: {
      ageMin: 20,
      ageMax: 30,
      gender: 'all',
      state: 'Karnataka',
      categories: ['All'],
      occupations: ['job_seeker', 'unemployed', 'student'],
      educationMin: 'diploma',
      rawText: 'Candidate must have graduated in diploma or degree from Karnataka institutions. Must have completed education at least 6 months prior without securing private or government employment. Domicile in Karnataka for minimum 6 years.'
    },
    benefits: [
      '₹3,000 per month for degree holders for up to 2 years or until employment is secured',
      '₹1,500 per month for diploma holders for up to 2 years',
      'Direct monthly DBT disbursement to Aadhaar-linked bank accounts',
      'Free industry-oriented skill training & job placement fairs facilitated by Karnataka Skill Mission'
    ],
    benefitAmount: '₹3,000 / month (Degree) or ₹1,500 / month (Diploma)',
    benefitType: 'cash',
    requiredDocuments: [
      'Karnataka Domicile / Study certificate proving 6 years study in Karnataka',
      'Aadhaar Card',
      'Degree or Diploma provisional/original certificate and final marks card',
      'Unemployment declaration certificate (Self-declaration)',
      'Aadhaar-seeded Bank Account'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Log into the Seva Sindhu portal (sevasindhuservices.karnataka.gov.in)',
      'Click on Yuva Nidhi registration',
      'Input University Registration Number; degree details are fetched via NAD/DigiLocker',
      'Provide self-declaration regarding unemployment and submit Aadhaar e-Sign'
    ],
    officialUrl: 'https://sevasindhuservices.karnataka.gov.in/',
    portalName: 'Seva Sindhu Karnataka Portal',
    deadline: 'Ongoing for recent academic batches',
    status: 'active',
    lastVerifiedDate: '2026-08-28',
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

export const DEMO_PERSONAS = [
  {
    name: 'Priya Sharma',
    label: 'SC College Student (Maharashtra)',
    avatar: '🎓',
    profile: {
      name: 'Priya Sharma',
      age: 20,
      gender: 'female' as const,
      state: 'Maharashtra' as const,
      category: 'SC' as const,
      occupation: 'student' as const,
      education: 'undergraduate' as const,
      annualIncome: 210000,
      isRural: false,
      hasDisability: false,
      interests: ['Higher Education Scholarships', 'Skill Training & Employment']
    }
  },
  {
    name: 'Ramesh Patel',
    label: 'Small Landholding Farmer (Uttar Pradesh)',
    avatar: '🌾',
    profile: {
      name: 'Ramesh Patel',
      age: 42,
      gender: 'male' as const,
      state: 'Uttar Pradesh' as const,
      category: 'OBC' as const,
      occupation: 'farmer' as const,
      education: 'secondary' as const,
      annualIncome: 140000,
      isRural: true,
      hasDisability: false,
      interests: ['Agriculture & Crop Subsidies', 'Housing & Construction Grants', 'Health Insurance & Medical Care']
    }
  },
  {
    name: 'Sunita Devi',
    label: 'Women Micro-Entrepreneur (Karnataka)',
    avatar: '💼',
    profile: {
      name: 'Sunita Devi',
      age: 32,
      gender: 'female' as const,
      state: 'Karnataka' as const,
      category: 'General' as const,
      occupation: 'entrepreneur' as const,
      education: 'diploma' as const,
      annualIncome: 280000,
      isRural: false,
      hasDisability: false,
      interests: ['Small Business / Startup Loans', 'Women Empowerment & Child Welfare']
    }
  }
];
