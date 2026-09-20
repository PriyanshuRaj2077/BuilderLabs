import { Scheme } from '../types';

export const SCHEMES_BATCH_1: Scheme[] = [
  // ── 1. BUSINESS & ENTREPRENEURSHIP ──
  {
    id: 'pm-svanidhi-street-vendor',
    slug: 'pm-svanidhi-street-vendor',
    name: 'PM SVANidhi – Micro-Credit Scheme for Street Vendors',
    nameHindi: 'पीएम स्वनिधि योजना',
    ministry: 'Ministry of Housing and Urban Affairs',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Affordable working capital collateral-free loans to urban and peri-urban street vendors to restart livelihoods with 7% interest subsidy on timely repayment.',
    whoIsItFor: 'Urban and peri-urban street vendors, hawkers, thelawalas, and small traders holding vending certificates or recommendation letters.',
    eligibility: {
      ageMin: 18,
      ageMax: 65,
      gender: 'all',
      categories: ['All'],
      occupations: ['artisan', 'self_employed', 'worker'],
      rawText: 'Street vendors in urban areas possessing Certificate of Vending or Identity Card issued by Urban Local Bodies (ULBs).'
    },
    benefits: [
      'First tranche working capital loan up to ₹10,000 (1 year)',
      'Second tranche enhanced loan up to ₹20,000 on prompt repayment',
      'Third tranche loan up to ₹50,000 with 7% interest subsidy',
      'Cashback up to ₹1,200/year on digital transactions'
    ],
    benefitAmount: '₹10,000 to ₹50,000 Collateral-free Loan',
    benefitType: 'loan',
    requiredDocuments: [
      'Aadhaar Card linked to mobile',
      'Urban Local Body (ULB) Vending Certificate or Recommendation Letter',
      'Bank Account Passbook / Statement'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Visit pmsvanidhi.mohua.gov.in or nearest CSC / Lending Bank branch',
      'Enter Aadhaar and authenticate via OTP',
      'Select lending partner (Public/Private Bank, NBFC, MFI)',
      'Upload Vending Card and bank account details for instant sanction'
    ],
    officialUrl: 'https://pmsvanidhi.mohua.gov.in/',
    portalName: 'PM SVANidhi Portal',
    deadline: 'Rolling enrollment',
    status: 'active',
    lastVerifiedDate: '2026-08-15',
    isPopular: true
  },
  {
    id: 'stand-up-india-scheme',
    slug: 'stand-up-india-scheme',
    name: 'Stand-Up India Scheme for SC/ST and Women Entrepreneurs',
    nameHindi: 'स्टैंड-अप इंडिया योजना',
    ministry: 'Ministry of Finance',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Bank loans between ₹10 lakh and ₹1 crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up greenfield enterprises.',
    whoIsItFor: 'SC, ST, and Women entrepreneurs launching greenfield enterprises in manufacturing, services, agri-allied, or trading sectors.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['SC', 'ST', 'All'],
      occupations: ['entrepreneur', 'self_employed'],
      rawText: 'Individual SC/ST or woman entrepreneur. In case of non-individual enterprises, 51% of shareholding and controlling stake must be held by SC/ST or woman.'
    },
    benefits: [
      'Composite loan (term loan and working capital) between ₹10 lakh and ₹1 crore',
      'Covers up to 85% of project cost',
      'Repayable in 7 years with a moratorium period of up to 18 months',
      'Credit Guarantee Cover through NCGTC'
    ],
    benefitAmount: '₹10 Lakh to ₹1 Crore Loan',
    benefitType: 'loan',
    requiredDocuments: [
      'Identity & Address Proof (Aadhaar, Voter ID, PAN)',
      'Caste Certificate (for SC/ST applicants)',
      'Detailed Project Report (DPR) and Projected Balance Sheet',
      'Proof of enterprise ownership (51%+ stake for women/SC/ST)'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Register on standupmitra.in portal or visit scheduled commercial bank',
      'Fill borrower profile and connect with handholding agencies if needed',
      'Submit Detailed Project Report along with loan application'
    ],
    officialUrl: 'https://www.standupmitra.in/',
    portalName: 'Stand-Up Mitra Portal',
    deadline: 'Ongoing till 2027',
    status: 'active',
    lastVerifiedDate: '2026-08-10',
    isPopular: true
  },
  {
    id: 'pmegp-prime-minister-employment-generation',
    slug: 'pmegp-prime-minister-employment-generation',
    name: 'PMEGP – Prime Minister Employment Generation Programme',
    nameHindi: 'प्रधानमंत्री रोजगार सृजन कार्यक्रम',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Credit-linked subsidy programme to generate self-employment opportunities through establishment of micro-enterprises in non-farm sectors.',
    whoIsItFor: 'Aspiring micro-entrepreneurs setting up new manufacturing or service units.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur', 'unemployed', 'self_employed'],
      educationMin: 'secondary',
      rawText: 'Any individual above 18 years. For projects over ₹10 lakh in manufacturing and ₹5 lakh in service, at least 8th standard pass is required.'
    },
    benefits: [
      'Government subsidy up to 35% of project cost in rural areas (25% for general category)',
      'Government subsidy up to 25% in urban areas (15% for general category)',
      'Max project cost ₹50 lakh for manufacturing, ₹20 lakh for service units'
    ],
    benefitAmount: 'Up to 35% Capital Subsidy (Max ₹17.5 Lakh)',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card & PAN Card',
      'Education qualification certificate (8th/10th mark sheet)',
      'Caste / Special category certificate (if applicable)',
      'Detailed Project Report (DPR)',
      'EDP training completion certificate'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on kviconline.gov.in/pmegpeportal',
      'Select implementing agency (KVIC, KVIB, or DIC)',
      'Upload project proposal and KYC documents',
      'Undergo mandatory Entrepreneurship Development Programme (EDP) training after bank in-principle sanction'
    ],
    officialUrl: 'https://www.kviconline.gov.in/pmegpeportal/',
    portalName: 'KVIC PMEGP e-Portal',
    deadline: 'Rolling applications',
    status: 'active',
    lastVerifiedDate: '2026-08-20',
    isPopular: true
  },
  {
    id: 'pradhan-mantri-mudra-yojana-tarun',
    slug: 'pradhan-mantri-mudra-yojana-tarun',
    name: 'PMMY Tarun Plus – Enhanced Micro Business Loan',
    nameHindi: 'प्रधानमंत्री मुद्रा योजना (तरुण प्लस)',
    ministry: 'Ministry of Finance',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Enhanced institutional credit facility offering collateral-free financing up to ₹20 lakh for growing micro and small non-farm enterprises that have successfully repaid previous loans.',
    whoIsItFor: 'Established micro-business owners, manufacturers, artisans, shopkeepers looking to expand their production capacity or service operations.',
    eligibility: {
      ageMin: 18,
      ageMax: 65,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur', 'self_employed', 'artisan'],
      rawText: 'Non-corporate, non-farm small/micro enterprises with a proven track record of timely repayment of previous Mudra Tarun loans.'
    },
    benefits: [
      'Loan facility up to ₹20 lakh without requiring third-party collateral or mortgage',
      'Concessional processing fees and competitive interest rates linked to MCLR/EBLR',
      'Flexible repayment tenure up to 7 years'
    ],
    benefitAmount: 'Up to ₹20,00,000 Loan',
    benefitType: 'loan',
    requiredDocuments: [
      'PAN Card and Aadhaar Card',
      'Udyam Registration Certificate',
      'Past 12 months Bank Account statement',
      'Income Tax Returns (ITR) for last 2 years (if applicable)'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply via Udyamimitra portal (udyamimitra.in) or visit any commercial / cooperative bank',
      'Submit business proof and past Mudra repayment clearance certificate',
      'Receive loan sanction within 7–14 working days'
    ],
    officialUrl: 'https://www.mudra.org.in/',
    portalName: 'MUDRA Portal',
    deadline: 'Open throughout year',
    status: 'active',
    lastVerifiedDate: '2026-09-01',
    isPopular: true
  },
  {
    id: 'aspiration-access-credit-msme',
    slug: 'aspiration-access-credit-msme',
    name: 'Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)',
    nameHindi: 'सूक्ष्म एवं लघु उद्यम क्रेडिट गारंटी ट्रस्ट',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    level: 'central',
    categoryTag: 'Business & Entrepreneurship',
    description: 'Credit guarantee cover to Member Lending Institutions (MLIs) up to ₹5 crore to facilitate collateral-free term loans and working capital to micro and small businesses.',
    whoIsItFor: 'New and existing Micro and Small Enterprises (MSEs) seeking bank finance without collateral or third-party guarantee.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['entrepreneur', 'self_employed'],
      rawText: 'All micro and small manufacturing and service enterprises holding valid Udyam Registration.'
    },
    benefits: [
      'Collateral-free credit facility up to ₹5 Crore',
      'Guarantee coverage up to 85% for micro-enterprises and women/SC/ST entrepreneurs',
      'Reduced annual guarantee fee of 0.37% for loans up to ₹1 Crore'
    ],
    benefitAmount: 'Up to ₹5 Crore Collateral-free Credit Cover',
    benefitType: 'loan',
    requiredDocuments: [
      'Udyam Registration Certificate',
      'Enterprise incorporation documents & GST registration',
      'Project Feasibility Report / Audited Financial Statements'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Approach designated bank / NBFC with Udyam registration and project proposal',
      'Request bank to cover the loan under CGTMSE scheme',
      'Bank assesses project and applies directly to CGTMSE for guarantee sanction'
    ],
    officialUrl: 'https://www.cgtmse.in/',
    portalName: 'CGTMSE Portal',
    deadline: 'Open throughout year',
    status: 'active',
    lastVerifiedDate: '2026-08-18'
  },

  // ── 2. AGRICULTURE & RURAL DEVELOPMENT ──
  {
    id: 'pm-krishi-sinchayee-yojana-per-drop-more-crop',
    slug: 'pm-krishi-sinchayee-yojana-per-drop-more-crop',
    name: 'PMKSY – Per Drop More Crop (Micro Irrigation)',
    nameHindi: 'प्रधानमंत्री कृषि सिंचाई योजना (प्रति बूंद अधिक फसल)',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Financial assistance for installing drip and sprinkler micro-irrigation systems to maximize water use efficiency and enhance crop yield.',
    whoIsItFor: 'Farmers possessing cultivable agricultural land with assured irrigation water source.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer'],
      isRural: true,
      rawText: 'All categories of farmers owning agricultural land or holding registered lease of minimum 7 years.'
    },
    benefits: [
      'Up to 55% subsidy on micro-irrigation system cost for Small & Marginal farmers',
      'Up to 45% subsidy for other farmers',
      'Water savings up to 40-50% with yield increase of 30-40%'
    ],
    benefitAmount: 'Up to 55% Subsidy on Drip/Sprinkler Units',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card',
      'Land Records (7/12 extract, Khasra, Khatoni)',
      'Soil and Water Test Report (if required by state)',
      'Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply on state horticulture/agriculture DBT portal or visit District Horticulture Office',
      'Field inspection conducted by department officials to verify farm layout',
      'Selection of empanelled micro-irrigation agency and installation with DBT subsidy credit'
    ],
    officialUrl: 'https://pmksy.gov.in/',
    portalName: 'PMKSY Official Portal',
    deadline: 'Seasonal window',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    isPopular: true
  },
  {
    id: 'paramparagat-krishi-vikas-yojana',
    slug: 'paramparagat-krishi-vikas-yojana',
    name: 'PKVY – Paramparagat Krishi Vikas Yojana (Organic Farming)',
    nameHindi: 'परम्परागत कृषि विकास योजना',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Promoting organic farming through cluster approach and Participatory Guarantee System (PGS) certification with financial support for organic inputs and market linkage.',
    whoIsItFor: 'Farmers willing to form clusters of 20-50 hectares for chemical-free organic crop cultivation.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer'],
      isRural: true,
      rawText: 'Farmers forming farmer groups / clusters willing to adopt PGS-India organic certification standards.'
    },
    benefits: [
      'Financial assistance of ₹50,000 per hectare for 3-year transition cycle',
      'Direct benefit transfer of ₹31,000/ha for on-farm organic inputs, bio-fertilizers and bio-pesticides',
      '₹8,800/ha for post-harvest management, packaging and organic branding'
    ],
    benefitAmount: '₹50,000 per Hectare over 3 Years',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card',
      'Farmer group resolution and member list',
      'Land Records (Khata/Khasra)',
      'Bank Account linked to Aadhaar'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Form cluster through local Krishi Vigyan Kendra (KVK) or Assistant Agriculture Officer',
      'Register cluster on jaivikkheti.in portal',
      'Receive input subsidies directly in farmer bank accounts upon certification milestones'
    ],
    officialUrl: 'https://pgsindia-ncof.gov.in/',
    portalName: 'Jaivik Kheti Portal',
    deadline: 'Cluster formation cycle',
    status: 'active',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'pm-matsya-sampada-yojana',
    slug: 'pm-matsya-sampada-yojana',
    name: 'PM Matsya Sampada Yojana (PMMSY) – Fisheries Development',
    nameHindi: 'प्रधानमंत्री मत्स्य संपदा योजना',
    ministry: 'Ministry of Fisheries, Animal Husbandry and Dairying',
    level: 'centrally_sponsored',
    categoryTag: 'Agriculture & Rural',
    description: 'Holistic scheme to boost fish production, modernize aquaculture infrastructure, establish cold chains, and enhance fishers welfare.',
    whoIsItFor: 'Fishers, fish farmers, fish workers, fisheries cooperatives, self-help groups, and fisheries entrepreneurs.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'worker', 'self_employed'],
      rawText: 'Traditional fishermen, pond owners, biofloc/recirculating aquaculture enthusiasts, and fishery entrepreneurs.'
    },
    benefits: [
      'Up to 60% governmental financial assistance for Women and SC/ST beneficiaries',
      'Up to 40% financial assistance for General category beneficiaries',
      'Support for biofloc units, pond construction, cold storage vans, and safety gear'
    ],
    benefitAmount: '40% to 60% Project Subsidy',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card',
      'Land / Water body ownership or long lease agreement',
      'DPR (Detailed Project Report)',
      'Fisheries Department registration certificate'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Submit project proposal on pmmsy.dof.gov.in portal or to District Fisheries Officer',
      'District Level Committee (DLC) scrutinizes and recommends proposal',
      'Administrative approval issued and subsidy disbursed in stages'
    ],
    officialUrl: 'https://pmmsy.dof.gov.in/',
    portalName: 'PMMSY Official Portal',
    deadline: 'Rolling approvals',
    status: 'active',
    lastVerifiedDate: '2026-08-28',
    isPopular: true
  },
  {
    id: 'kisan-credit-card-animal-husbandry',
    slug: 'kisan-credit-card-animal-husbandry',
    name: 'Kisan Credit Card (KCC) for Animal Husbandry & Dairying',
    nameHindi: 'पशुपालन एवं डेयरी हेतु किसान क्रेडिट कार्ड',
    ministry: 'Ministry of Fisheries, Animal Husbandry and Dairying',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'Working capital credit facility up to ₹2 lakh at a subsidized interest rate of 4% per annum for dairy farmers, goat/sheep rearers, and poultry owners.',
    whoIsItFor: 'Dairy farmers, livestock owners, and poultry rearers requiring credit for feed, veterinary medicines, and livestock maintenance.',
    eligibility: {
      ageMin: 18,
      ageMax: 70,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'worker'],
      rawText: 'Individual farmers or joint borrowers owning or leasing dairy cattle, buffaloes, sheep, goat, or poultry birds.'
    },
    benefits: [
      'Collateral-free working capital loan up to ₹1.6 lakh (expandable to ₹2 lakh)',
      'Effective interest rate of only 4% per annum upon prompt repayment',
      'Revolving credit limit valid for 5 years with annual review'
    ],
    benefitAmount: 'Up to ₹2,00,000 at 4% Effective Interest',
    benefitType: 'loan',
    requiredDocuments: [
      'Aadhaar Card & Voter ID',
      'Proof of livestock possession (Animal health card / tagging record)',
      'Land ownership or shed lease proof'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Fill simplified one-page KCC application form at nearest commercial bank or milk union',
      'Attach animal tagging certificate verified by local veterinary officer',
      'Bank issues KCC RuPay debit card within 14 days'
    ],
    officialUrl: 'https://dahd.nic.in/',
    portalName: 'DAHD Government Portal',
    deadline: 'Available year-round',
    status: 'active',
    lastVerifiedDate: '2026-08-30'
  },
  {
    id: 'agri-infrastructure-fund',
    slug: 'agri-infrastructure-fund',
    name: 'Agriculture Infrastructure Fund (AIF)',
    nameHindi: 'कृषि अवसंरचना कोष',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'central',
    categoryTag: 'Agriculture & Rural',
    description: 'Medium to long term debt financing facility for investment in viable post-harvest management infrastructure and community farming assets.',
    whoIsItFor: 'Primary Agricultural Credit Societies (PACS), Farmer Producer Organizations (FPOs), Agri-entrepreneurs, and Startups.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'entrepreneur'],
      rawText: 'FPOs, agricultural cooperatives, individual farmers, and agri-entrepreneurs building post-harvest storage, cold chains, or processing units.'
    },
    benefits: [
      '3% per annum interest subvention up to a loan limit of ₹2 crore',
      'Subvention available for a maximum tenure of 7 years',
      'Credit guarantee coverage under CGTMSE for loans up to ₹2 crore'
    ],
    benefitAmount: '3% Interest Subvention on Loans up to ₹2 Crore',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Detailed Project Report (DPR) for farm-gate infrastructure',
      'PAN, Aadhaar, and Entity Registration (FPO/Society/GST)',
      'Land Title or Long-term Lease Agreement for project site'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on agriinfra.dac.gov.in portal',
      'Submit DPR and choose preferred participating commercial lending bank',
      'Ministry assesses eligibility and forwards sanctioned file to lending bank'
    ],
    officialUrl: 'https://agriinfra.dac.gov.in/',
    portalName: 'Agri Infra Portal',
    deadline: 'Open till 2032',
    status: 'active',
    lastVerifiedDate: '2026-08-22'
  },

  // ── 3. EDUCATION & LEARNING ──
  {
    id: 'pm-vidyalaxmi-education-loan',
    slug: 'pm-vidyalaxmi-education-loan',
    name: 'PM Vidyalaxmi Scheme – Higher Education Loan Support',
    nameHindi: 'पीएम विद्यालक्ष्मी योजना',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Financial support and full interest subvention for meritorious students securing admission to top 860 higher education institutions across India.',
    whoIsItFor: 'Students admitted into designated top NIRF-ranked institutions whose family income does not exceed ₹8,00,000 per annum.',
    eligibility: {
      ageMin: 17,
      ageMax: 35,
      gender: 'all',
      incomeMax: 800000,
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      rawText: 'Enrolled in NIRF top 100 overall/category institutions or government premier colleges with annual family income up to ₹8 lakh.'
    },
    benefits: [
      'Collateral-free, guarantor-free education loan up to ₹7.5 lakh',
      '3% interest subvention for students from families earning up to ₹8 lakh/year',
      'Covers 100% tuition fees and related educational expenses'
    ],
    benefitAmount: 'Up to ₹7.5 Lakh Collateral-Free + 3% Interest Subvention',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Admission Offer Letter from qualifying NIRF institution',
      '10th and 12th Grade Marksheets',
      'Family Income Certificate issued by competent revenue authority',
      'Aadhaar Card'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on the unified PM Vidyalaxmi portal',
      'Select qualifying institution and linked loan partner',
      'Upload academic records and income certificate for digital verification'
    ],
    officialUrl: 'https://www.vidyalakshmi.co.in/',
    portalName: 'PM Vidyalaxmi Portal',
    deadline: 'Academic intake cycles',
    status: 'active',
    lastVerifiedDate: '2026-09-02',
    isPopular: true
  },
  {
    id: 'pragati-scholarship-girls-technical',
    slug: 'pragati-scholarship-girls-technical',
    name: 'AICTE Pragati Scholarship for Girl Students',
    nameHindi: 'एआईसीटीई प्रगति बालिका छात्रवृत्ति योजना',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Empowering girl students pursuing technical diploma or degree education in AICTE-approved institutions with ₹50,000 per annum.',
    whoIsItFor: 'Female students admitted into the first year of degree or diploma technical courses with family income under ₹8,00,000 per annum.',
    eligibility: {
      ageMin: 16,
      ageMax: 30,
      gender: 'female',
      incomeMax: 800000,
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      rawText: 'Up to two girl children per family admitted to first year of Degree/Diploma level course in an AICTE approved institution.'
    },
    benefits: [
      '₹50,000 per annum for every year of study (up to 4 years for degree, 3 years for diploma)',
      'Amount credited as lump sum through Direct Benefit Transfer (DBT)',
      'Covers college fee, books, computer equipment, and software'
    ],
    benefitAmount: '₹50,000 / year (up to 4 years)',
    benefitType: 'scholarship',
    requiredDocuments: [
      '10th and 12th Marksheet',
      'AICTE college admission receipt and fee structure',
      'Family Income Certificate (< ₹8 Lakh)',
      'Aadhaar-seeded bank account details'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on National Scholarship Portal (scholarships.gov.in)',
      'Institute verifies student credentials on the portal',
      'Merit list published and scholarship disbursed via PFMS DBT'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal',
    deadline: '31 October annually',
    status: 'active',
    lastVerifiedDate: '2026-08-16',
    isPopular: true
  },
  {
    id: 'national-overseas-scholarship-sc',
    slug: 'national-overseas-scholarship-sc',
    name: 'National Overseas Scholarship for SC / De-notified Tribes',
    nameHindi: 'अनुसूचित जाति हेतु राष्ट्रीय विदेशी छात्रवृत्ति योजना',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Financial assistance to meritorious students belonging to SC, de-notified nomadic tribes, and landless agricultural labourers for pursuing Master degree or Ph.D. abroad.',
    whoIsItFor: 'SC students who secured admission in QS top 500 foreign universities with minimum 60% marks in qualifying degree.',
    eligibility: {
      ageMin: 21,
      ageMax: 35,
      gender: 'all',
      incomeMax: 800000,
      categories: ['SC'],
      occupations: ['student'],
      educationMin: 'undergraduate',
      rawText: 'SC candidate with minimum 60% marks or equivalent grade in qualifying examination and total family income not exceeding ₹8.00 lakh per annum.'
    },
    benefits: [
      '100% tuition fees paid directly to the foreign university',
      'Annual maintenance allowance: USD 15,400 for USA / GBP 9,900 for UK',
      'Contingency allowance, visa fees, medical insurance, and economy airfare'
    ],
    benefitAmount: 'Full Tuition + Up to $15,400 / Year Living Allowance',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Unconditional Offer Letter from QS Top 500 foreign university',
      'Caste Certificate issued by authorized revenue officer',
      'Income Certificate and ITR of parents/guardians',
      'Valid Indian Passport'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on nosmsje.gov.in during the annual application window (Feb - March)',
      'Upload academic records, foreign university admission letter, and caste certificate',
      'Screening committee evaluates applications and issues provisional selection awards'
    ],
    officialUrl: 'https://nosmsje.gov.in/',
    portalName: 'NOS MoSJE Portal',
    deadline: '31 March annually',
    status: 'active',
    lastVerifiedDate: '2026-08-05'
  },
  {
    id: 'dr-ambedkar-post-matric-ebc-scholarship',
    slug: 'dr-ambedkar-post-matric-ebc-scholarship',
    name: 'Dr. Ambedkar Post-Matric Scholarship for EBC Students',
    nameHindi: 'डॉ. अम्बेडकर आर्थिक रूप से पिछड़े वर्ग छात्रवृत्ति',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'centrally_sponsored',
    categoryTag: 'Education & Learning',
    description: 'Post-matriculation educational scholarship for Economically Backward Class (EBC) students to complete secondary and higher education.',
    whoIsItFor: 'Students from general categories whose family income is below ₹2.50 lakh per annum.',
    eligibility: {
      ageMin: 15,
      ageMax: 30,
      gender: 'all',
      incomeMax: 250000,
      categories: ['EWS', 'General'],
      occupations: ['student'],
      educationMin: 'secondary',
      rawText: 'General category students not covered under SC/ST/OBC quotas with total family income from all sources not exceeding ₹2.5 lakh per annum.'
    },
    benefits: [
      'Reimbursement of non-refundable compulsory fees charged by institutions',
      'Monthly maintenance allowance ranging from ₹260 to ₹750 depending on course group',
      'Study tour and thesis typing allowances for post-graduate scholars'
    ],
    benefitAmount: 'Full Fee Reimbursement + Monthly Maintenance',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Previous year pass certificate and marksheet',
      'Income Certificate issued by Tehsildar / Sub-Divisional Magistrate',
      'Fee receipt of current academic course',
      'Aadhaar Card'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Submit application on National Scholarship Portal (scholarships.gov.in)',
      'School or college verifies student enrollment and fee structure',
      'State welfare department validates and releases payment via DBT'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal',
    deadline: 'November annually',
    status: 'active',
    lastVerifiedDate: '2026-08-14'
  },
  {
    id: 'pm-ugc-ishan-uday-scholarship-ner',
    slug: 'pm-ugc-ishan-uday-scholarship-ner',
    name: 'Ishan Uday Special Scholarship Scheme for North Eastern Region',
    nameHindi: 'ईशान उदय विशेष छात्रवृत्ति योजना (पूर्वोत्तर क्षेत्र)',
    ministry: 'Ministry of Education',
    level: 'central',
    categoryTag: 'Education & Learning',
    description: 'Special scholarship scheme to promote higher education and enhance gross enrollment ratio among students from the North Eastern States.',
    whoIsItFor: 'Domiciles of North Eastern states (Assam, Arunachal, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura) enrolled in undergraduate degree courses.',
    eligibility: {
      ageMin: 17,
      ageMax: 25,
      gender: 'all',
      incomeMax: 450000,
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      rawText: 'Domicile of NER who passed Class XII from a school in NER and enrolled in general degree, technical, or professional UG course with parental income under ₹4.5 lakh.'
    },
    benefits: [
      '₹5,400 per month for general degree courses (10 months/year)',
      '₹7,800 per month for technical and professional courses including medical and engineering',
      'Disbursed directly into student bank account for entire normal duration of course'
    ],
    benefitAmount: '₹54,000 to ₹78,000 / year',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Permanent Resident Certificate (PRC) / Domicile of NER State',
      'Class XII Marksheet',
      'Parental Income Certificate',
      'Aadhaar-linked Bank Account details'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply on National Scholarship Portal under UGC schemes',
      'Upload Domicile certificate and College bonafide',
      'UGC generates merit list of 10,000 slots allocated across NE states'
    ],
    officialUrl: 'https://scholarships.gov.in/',
    portalName: 'NSP – UGC Ishan Uday',
    deadline: '31 October annually',
    status: 'active',
    lastVerifiedDate: '2026-08-19'
  },

  // ── 4. WOMEN AND CHILD ──
  {
    id: 'pm-matru-vandana-yojana',
    slug: 'pm-matru-vandana-yojana',
    name: 'PMMVY – Pradhan Mantri Matru Vandana Yojana',
    nameHindi: 'प्रधानमंत्री मातृ वंदना योजना',
    ministry: 'Ministry of Women and Child Development',
    level: 'centrally_sponsored',
    categoryTag: 'Women and Child',
    description: 'Direct cash incentive to pregnant women and lactating mothers for health seeking behavior and nutritional support during childbirth.',
    whoIsItFor: 'Pregnant women and lactating mothers for the first living child (₹5,000) and second child if it is a girl (₹6,000).',
    eligibility: {
      ageMin: 19,
      gender: 'female',
      categories: ['All'],
      occupations: ['homemaker', 'worker', 'self_employed', 'unemployed'],
      rawText: 'Pregnant women and lactating mothers who belong to SC/ST, BPL, EWS, or whose family income is below ₹8 lakh per annum, excluding regular government employees.'
    },
    benefits: [
      '₹5,000 in two installments for the first child (registration + antenatal checkup + child birth)',
      '₹6,000 in single installment for second child if newborn is a girl',
      'Encourages institutional delivery and timely immunization'
    ],
    benefitAmount: '₹5,000 to ₹6,000 DBT Cash Incentive',
    benefitType: 'cash',
    requiredDocuments: [
      'Mother and Child Protection (MCP) Card / RCH portal registration',
      'Aadhaar Cards of mother and husband',
      'Aadhaar-linked bank account passbook',
      'Child Birth Certificate (for 2nd installment)'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Register at nearest Anganwadi Centre (AWC) or online at pmmvy.wcd.gov.in',
      'Submit MCP card details with proof of antenatal checkup',
      'Direct DBT credit transferred to the mother’s Aadhaar-seeded bank account'
    ],
    officialUrl: 'https://pmmvy.wcd.gov.in/',
    portalName: 'PMMVY Citizen Portal',
    deadline: 'Within 270 days of pregnancy',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    isPopular: true
  },
  {
    id: 'sukanya-samriddhi-yojana',
    slug: 'sukanya-samriddhi-yojana',
    name: 'Sukanya Samriddhi Yojana (SSY) – Girl Child Prosperity',
    nameHindi: 'सुकन्या समृद्धि योजना',
    ministry: 'Ministry of Finance',
    level: 'central',
    categoryTag: 'Women and Child',
    description: 'High-interest sovereign savings scheme for the girl child offering complete EEE (Exempt-Exempt-Exempt) tax benefits under Section 80C.',
    whoIsItFor: 'Parents or legal guardians of a girl child aged 10 years or younger.',
    eligibility: {
      ageMax: 10,
      gender: 'female',
      categories: ['All'],
      occupations: ['student'],
      rawText: 'Account can be opened by natural or legal guardian in the name of a girl child from her birth till she attains 10 years of age (max 2 accounts per family).'
    },
    benefits: [
      'Attractive government-guaranteed interest rate (currently 8.2% p.a., compounded annually)',
      'Triple tax exemption (contributions, interest earned, and maturity proceeds are 100% tax free)',
      'Partial withdrawal up to 50% allowed for higher education after age 18'
    ],
    benefitAmount: '8.2% Interest + 100% Tax-Free Returns',
    benefitType: 'service',
    requiredDocuments: [
      'Birth Certificate of the girl child',
      'Identity and address proof of guardian (Aadhaar, PAN)',
      'Passport size photographs of child and guardian'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Visit any Post Office branch or authorized public/private commercial bank',
      'Fill Form-1 and deposit initial amount (minimum ₹250)',
      'Receive SSY passbook to track annual deposits and compounding balance'
    ],
    officialUrl: 'https://www.indiapost.gov.in/',
    portalName: 'India Post SSY Services',
    deadline: 'Before child turns 10',
    status: 'active',
    lastVerifiedDate: '2026-08-31',
    isPopular: true
  },
  {
    id: 'mahila-samman-savings-certificate',
    slug: 'mahila-samman-savings-certificate',
    name: 'Mahila Samman Savings Certificate (MSSC)',
    nameHindi: 'महिला सम्मान बचत पत्र',
    ministry: 'Ministry of Finance',
    level: 'central',
    categoryTag: 'Women and Child',
    description: 'Dedicated small savings scheme designed exclusively for women and girls offering an attractive fixed interest rate of 7.5% per annum for a 2-year tenure.',
    whoIsItFor: 'Any woman for herself or a guardian on behalf of a minor girl.',
    eligibility: {
      ageMin: 1,
      gender: 'female',
      categories: ['All'],
      occupations: ['homemaker', 'worker', 'self_employed', 'student', 'senior_citizen'],
      rawText: 'Any woman of any age or guardian of a minor girl. No maximum age limit.'
    },
    benefits: [
      'Fixed return of 7.5% per annum compounded quarterly',
      'Flexible investment from ₹1,000 up to ₹2,00,000',
      'Partial withdrawal of up to 40% permitted after completion of 1 year',
      'Tenure of 2 years with sovereign repayment guarantee'
    ],
    benefitAmount: '7.5% Fixed Annual Compounded Interest',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card of the applicant',
      'PAN Card',
      'Application Form (Form-A)',
      'KYC photograph'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Visit any Post Office or nationalized commercial bank branch',
      'Submit Form-A along with Aadhaar and PAN copy',
      'Deposit desired amount via cheque or cash and receive certificate passbook'
    ],
    officialUrl: 'https://www.indiapost.gov.in/',
    portalName: 'India Post Savings Bank',
    deadline: 'Available at all Post Offices',
    status: 'active',
    lastVerifiedDate: '2026-08-11'
  },
  {
    id: 'pm-ujjwala-yojana-2-lpg',
    slug: 'pm-ujjwala-yojana-2-lpg',
    name: 'PM Ujjwala Yojana 2.0 – Free LPG Connection for Women',
    nameHindi: 'प्रधानमंत्री उज्ज्वला योजना 2.0',
    ministry: 'Ministry of Petroleum and Natural Gas',
    level: 'central',
    categoryTag: 'Women and Child',
    description: 'Providing clean cooking LPG connections to adult women from poor households with zero deposit, free first cylinder refill, and free cooking gas stove.',
    whoIsItFor: 'Adult women belonging to BPL, SC/ST, PMAY, or poor rural/migrant families without an active LPG connection.',
    eligibility: {
      ageMin: 18,
      gender: 'female',
      incomeMax: 200000,
      categories: ['All'],
      occupations: ['homemaker', 'worker'],
      isRural: true,
      rawText: 'Adult woman belonging to poor household not having any existing LPG connection in the name of any family member residing in the same household.'
    },
    benefits: [
      'Free LPG connection with security deposit waived by Government of India',
      'Free first 14.2 kg LPG cylinder refill',
      'Free double-burner hotplate (gas stove)',
      'Subsidized cylinder refills under ongoing DBT subsidy (₹300/cylinder discount)'
    ],
    benefitAmount: 'Free LPG Connection + Stove + First Refill',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card of applicant and adult family members',
      'Ration Card / Family Composition proof (or self-declaration for migrants)',
      'Aadhaar-linked Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply online at pmuy.gov.in or submit form at nearest Indane / Bharat Gas / HP Gas distributor',
      'Distributor verifies de-duplication across OMCS portal',
      'Free LPG cylinder, regulator, and stove installed at beneficiary home'
    ],
    officialUrl: 'https://www.pmuy.gov.in/',
    portalName: 'PM Ujjwala Portal',
    deadline: 'Ongoing enrollment',
    status: 'active',
    lastVerifiedDate: '2026-08-27',
    isPopular: true
  },

  // ── 5. HEALTH & WELLNESS ──
  {
    id: 'ayushman-bharat-vayo-vandana-senior-citizens',
    slug: 'ayushman-bharat-vayo-vandana-senior-citizens',
    name: 'Ayushman Bharat – Vayo Vandana Card for All Seniors 70+',
    nameHindi: 'आयुष्मान भारत – वय वंदना कार्ड (70+ वरिष्ठ नागरिक)',
    ministry: 'Ministry of Health and Family Welfare',
    level: 'central',
    categoryTag: 'Health & Wellness',
    description: 'Universal cashless health coverage of ₹5 lakh per year to all senior citizens aged 70 years and above across India, regardless of income or socioeconomic status.',
    whoIsItFor: 'Every Indian citizen aged 70 years and older, irrespective of family income or existing pension.',
    eligibility: {
      ageMin: 70,
      gender: 'all',
      categories: ['All'],
      occupations: ['senior_citizen'],
      rawText: 'All Indian citizens aged 70 years and above as per Aadhaar record. No income ceiling and no caste restrictions.'
    },
    benefits: [
      'Distinct Ayushman Vayo Vandana Card providing ₹5,00,000 dedicated annual family hospital cover',
      'Cashless in-patient treatment across 29,000+ empaneled government and private hospitals',
      'Covers pre-existing diseases, surgeries, ICU, medicines, and post-hospitalization diagnostics'
    ],
    benefitAmount: '₹5,00,000 / Year Dedicated Cashless Cover',
    benefitType: 'insurance',
    requiredDocuments: [
      'Aadhaar Card with correct date of birth proving age 70+'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Download Ayushman App or visit beneficiary.nha.gov.in',
      'Authenticate with Aadhaar eKYC via OTP or face scan',
      'Generate and download instant Ayushman Vayo Vandana Card'
    ],
    officialUrl: 'https://beneficiary.nha.gov.in/',
    portalName: 'NHA Beneficiary Portal',
    deadline: 'Active permanent scheme',
    status: 'active',
    lastVerifiedDate: '2026-09-03',
    isPopular: true
  },
  {
    id: 'pradhan-mantri-bhartiya-janaushadhi-pariyojana',
    slug: 'pradhan-mantri-bhartiya-janaushadhi-pariyojana',
    name: 'PMBJP – Pradhan Mantri Bhartiya Janaushadhi Pariyojana',
    nameHindi: 'प्रधानमंत्री भारतीय जनऔषधि परियोजना',
    ministry: 'Ministry of Chemicals and Fertilizers',
    level: 'central',
    categoryTag: 'Health & Wellness',
    description: 'Making quality generic medicines and surgical consumables available to common citizens at 50% to 90% cheaper prices than branded market equivalents.',
    whoIsItFor: 'All citizens seeking high quality generic medications, surgical supplies, and sanitary products at affordable costs.',
    eligibility: {
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'student', 'farmer', 'self_employed', 'senior_citizen', 'unemployed', 'homemaker'],
      rawText: 'Open to all Indian citizens. No registration or card required to purchase from Kendra.'
    },
    benefits: [
      'Over 2,046 generic medicines and 300 surgical items at 50-90% lower rates',
      'Quality certified by WHO-GMP compliant testing laboratories',
      'Suvidha biodegradable sanitary napkins at just ₹1 per pad'
    ],
    benefitAmount: '50% to 90% Savings on Quality Medicines',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Doctor Prescription (for scheduled prescription medicines)'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Locate nearest Janaushadhi Kendra using the Jan Aushadhi Sugam mobile app',
      'Present doctor prescription and purchase medicines across the counter'
    ],
    officialUrl: 'https://janaushadhi.gov.in/',
    portalName: 'PMBJP Official Portal',
    deadline: 'Open every day',
    status: 'active',
    lastVerifiedDate: '2026-08-20',
    isPopular: true
  },
  {
    id: 'national-tb-elimination-nikshay-poshan',
    slug: 'national-tb-elimination-nikshay-poshan',
    name: 'Ni-kshay Poshan Yojana – Nutritional Support for TB Patients',
    nameHindi: 'निक्षय पोषण योजना',
    ministry: 'Ministry of Health and Family Welfare',
    level: 'central',
    categoryTag: 'Health & Wellness',
    description: 'Direct cash transfer of ₹1,000 per month to all notified tuberculosis patients for nutritional support throughout their treatment duration.',
    whoIsItFor: 'All clinical TB patients notified on the government Ni-kshay digital health platform.',
    eligibility: {
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'farmer', 'student', 'self_employed', 'unemployed', 'senior_citizen'],
      rawText: 'All TB patients diagnosed and registered on the Ni-kshay portal undergoing active anti-tubercular treatment.'
    },
    benefits: [
      'Enhanced monthly financial benefit of ₹1,000 directly deposited via DBT',
      'Provided for each month of active treatment (typically 6 to 9 months)',
      'Free diagnostic tests (CBNAAT/TrueNat) and free DOTS medication courses'
    ],
    benefitAmount: '₹1,000 / month during treatment',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Ni-kshay Patient ID (provided by treating health facility)',
      'Bank Account passbook / IFSC details'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Get diagnosed at government hospital or registered private clinic',
      'Hospital enters patient details on nikshay.in portal',
      'DBT monthly installments credited automatically to patient account'
    ],
    officialUrl: 'https://www.nikshay.in/',
    portalName: 'Ni-kshay Portal',
    deadline: 'During course of treatment',
    status: 'active',
    lastVerifiedDate: '2026-08-14'
  },
  {
    id: 'pm-national-dialysis-programme',
    slug: 'pm-national-dialysis-programme',
    name: 'Pradhan Mantri National Dialysis Programme (PMNDP)',
    nameHindi: 'प्रधानमंत्री राष्ट्रीय डायलिसिस कार्यक्रम',
    ministry: 'Ministry of Health and Family Welfare',
    level: 'centrally_sponsored',
    categoryTag: 'Health & Wellness',
    description: 'Free hemodialysis and peritoneal dialysis services to all BPL patients at District Hospital Dialysis Centers across the nation.',
    whoIsItFor: 'End-Stage Renal Disease (ESRD) patients from Below Poverty Line (BPL) families requiring regular dialysis cycles.',
    eligibility: {
      gender: 'all',
      incomeMax: 250000,
      categories: ['All'],
      occupations: ['worker', 'farmer', 'senior_citizen', 'unemployed'],
      rawText: 'BPL patients suffering from chronic kidney failure requiring regular dialysis maintenance.'
    },
    benefits: [
      '100% free hemodialysis sessions at District Hospital dialysis units',
      'Cashless consumables, dialyzer reuse, and laboratory monitoring',
      'Subsidized Peritoneal Dialysis at doorstep for non-BPL citizens'
    ],
    benefitAmount: '100% Free Dialysis for BPL Patients',
    benefitType: 'service',
    requiredDocuments: [
      'BPL Card / Ration Card / Ayushman Card',
      'Nephrologist prescription and diagnosis summary',
      'Aadhaar Card'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Visit District Hospital Nephrology / Dialysis Unit with referral slip',
      'Enroll in PMNDP digital portal through hospital medical officer',
      'Schedule regular dialysis sessions free of charge'
    ],
    officialUrl: 'https://nhm.gov.in/',
    portalName: 'National Health Mission Portal',
    deadline: 'Always operational',
    status: 'active',
    lastVerifiedDate: '2026-08-22'
  },

  // ── 6. HOUSING & SHELTER ──
  {
    id: 'pm-awas-yojana-urban-2',
    slug: 'pm-awas-yojana-urban-2',
    name: 'PMAY-Urban 2.0 – Housing for All Urban Families',
    nameHindi: 'प्रधानमंत्री आवास योजना (शहरी 2.0)',
    ministry: 'Ministry of Housing and Urban Affairs',
    level: 'centrally_sponsored',
    categoryTag: 'Housing & Shelter',
    description: 'Interest subsidy and financial assistance up to ₹2.5 lakh to construct or buy pucca houses for 1 crore urban poor and middle-class families.',
    whoIsItFor: 'EWS, LIG, and Middle Income Group (MIG) families living in statutory towns who do not own a pucca house anywhere in India.',
    eligibility: {
      ageMin: 21,
      gender: 'all',
      incomeMax: 900000,
      categories: ['All'],
      occupations: ['worker', 'self_employed', 'entrepreneur', 'job_seeker'],
      rawText: 'Family must not own a pucca house in India. Annual household income up to ₹3 lakh for EWS, ₹6 lakh for LIG, and ₹9 lakh for MIG.'
    },
    benefits: [
      'Interest subsidy of 4.0% on home loans up to ₹25 lakh for up to 12-year tenure (subsidy value up to ₹1.8 lakh)',
      'Direct financial assistance of ₹2.5 lakh for Beneficiary-Led Construction (BLC)',
      'Affordable Rental Housing Complexes (ARHCs) for urban migrants and industrial workers'
    ],
    benefitAmount: 'Up to ₹2,50,000 Subsidy / Assistance',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Cards of all family members',
      'Income Certificate / ITR / Salary Slips',
      'Affidavit stating non-ownership of pucca house anywhere in India',
      'Land title or approved building plan (for construction mode)'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply online on pmay-urban.gov.in or through Urban Local Body (ULB) / Municipal office',
      'Biometric eKYC and physical verification conducted by municipality',
      'Subsidy credited directly into beneficiary home loan account via NHB/HUDCO'
    ],
    officialUrl: 'https://pmay-urban.gov.in/',
    portalName: 'PMAY Urban Portal',
    deadline: 'Active through 2029',
    status: 'active',
    lastVerifiedDate: '2026-09-01',
    isPopular: true
  },
  {
    id: 'pm-awas-yojana-gramin-extended',
    slug: 'pm-awas-yojana-gramin-extended',
    name: 'PMAY-Gramin – Rural Housing Scheme (Phase 2)',
    nameHindi: 'प्रधानमंत्री आवास योजना (ग्रामीण)',
    ministry: 'Ministry of Rural Development',
    level: 'centrally_sponsored',
    categoryTag: 'Housing & Shelter',
    description: 'Financial grant of ₹1.20 lakh in plains and ₹1.30 lakh in hilly states to homeless rural families or those living in kutcha and dilapidated houses.',
    whoIsItFor: 'Rural households identified under SECC/Awaas+ survey list who do not possess a permanent pucca house.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['farmer', 'worker', 'artisan', 'unemployed'],
      isRural: true,
      rawText: 'Homeless rural families or households living in zero, one, or two-room houses with kutcha wall and kutcha roof.'
    },
    benefits: [
      'Direct grant of ₹1,20,000 (plains) / ₹1,30,000 (hilly/NE states/IAP districts)',
      'Additional 90 to 95 days of unskilled labour wages under MGNREGS (approx. ₹27,000)',
      '₹12,000 additional assistance for toilet construction under Swachh Bharat Mission'
    ],
    benefitAmount: '₹1,20,000 to ₹1,30,000 + MGNREGS Wages',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Awaas+ Registration ID / Job Card',
      'Bank Account Passbook',
      'Gram Panchayat verification certificate'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Gram Sabha verifies beneficiary from Awaas+ list',
      'Geo-tagged photographs of existing kutcha house taken via AwaasApp',
      'Sanction letter issued and grant disbursed in 3 stages linked to construction stages'
    ],
    officialUrl: 'https://pmayg.nic.in/',
    portalName: 'PMAY-G AwaasSoft Portal',
    deadline: 'Continuous targets till 2029',
    status: 'active',
    lastVerifiedDate: '2026-08-26',
    isPopular: true
  },

  // ── 7. SKILL & EMPLOYMENT ──
  {
    id: 'pm-internship-scheme',
    slug: 'pm-internship-scheme',
    name: 'Prime Minister Internship Scheme in Top 500 Companies',
    nameHindi: 'प्रधानमंत्री इंटर्नशिप योजना',
    ministry: 'Ministry of Corporate Affairs',
    level: 'central',
    categoryTag: 'Skill & Employment',
    description: 'Providing 12-month industry internships in India’s top 500 companies to youth aged 21–24 with a monthly stipend of ₹5,00,000 and one-time allowance of ₹6,000.',
    whoIsItFor: 'Unemployed youth aged 21-24 who have completed 10th, 12th, ITI, Polytechnic diploma, or graduation (BA, BSc, BCom, BCA, BBA, BPharma).',
    eligibility: {
      ageMin: 21,
      ageMax: 24,
      gender: 'all',
      incomeMax: 800000,
      categories: ['All'],
      occupations: ['job_seeker', 'unemployed', 'student'],
      educationMin: 'secondary',
      rawText: 'Indian youth aged 21-24 years not engaged in full-time employment or full-time education, whose family income is below ₹8 lakh and no member is a permanent government employee.'
    },
    benefits: [
      'Monthly stipend of ₹5,000 (₹4,500 by Central Govt + ₹500 by host corporate under CSR)',
      'One-time grant of ₹6,000 upon joining the internship for incidental expenses',
      '12 months real-world workplace experience in top 500 blue-chip companies',
      'Insurance cover under PMJJBY and PMSBY provided by the government'
    ],
    benefitAmount: '₹5,000 / month + ₹6,000 One-time Grant',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Aadhaar Card',
      'Educational Certificates (10th/12th/Diploma/Degree Marksheets)',
      'Bank Account Passbook (Aadhaar linked)',
      'Self-declaration of family income and employment status'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register on pminternship.mca.gov.in portal',
      'Complete profile, educational details, and choose up to 3 sectors/locations',
      'Companies review profiles and issue digital internship offer letters'
    ],
    officialUrl: 'https://pminternship.mca.gov.in/',
    portalName: 'PM Internship Portal (MCA)',
    deadline: 'Biannual batch cycles',
    status: 'active',
    lastVerifiedDate: '2026-09-02',
    isPopular: true
  },
  {
    id: 'pm-kaushal-vikas-yojana-4',
    slug: 'pm-kaushal-vikas-yojana-4',
    name: 'PMKVY 4.0 – Pradhan Mantri Kaushal Vikas Yojana',
    nameHindi: 'प्रधानमंत्री कौशल विकास योजना 4.0',
    ministry: 'Ministry of Skill Development and Entrepreneurship',
    level: 'central',
    categoryTag: 'Skill & Employment',
    description: 'Free industry-aligned skilling, on-job training, and certification in Industry 4.0 courses (AI, Robotics, Mechatronics, IoT, 3D Printing, Drones).',
    whoIsItFor: 'Indian youth looking for market-relevant technical skills, school/college dropouts, and job seekers.',
    eligibility: {
      ageMin: 15,
      ageMax: 45,
      gender: 'all',
      categories: ['All'],
      occupations: ['job_seeker', 'unemployed', 'worker', 'student'],
      rawText: 'Indian national with valid Aadhaar possessing minimum educational criteria stipulated for the specific National Skills Qualification Framework (NSQF) job role.'
    },
    benefits: [
      '100% free skill training sponsored by Government of India',
      'Recognized National Skills Qualification Framework (NSQF) certification',
      'Direct monetary rewards and placement assistance through Rozgar Melas'
    ],
    benefitAmount: '100% Free Training & Certification + Placement',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card',
      'Educational Marksheet (as per job role qualification)',
      'Bank Account details'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Register on Skill India Digital Hub (skillindiadigital.gov.in)',
      'Search desired trade and locate nearest Pradhan Mantri Kaushal Kendra (PMKK)',
      'Complete course, appear for independent assessment, and receive NSQF certificate'
    ],
    officialUrl: 'https://www.skillindiadigital.gov.in/',
    portalName: 'Skill India Digital Hub',
    deadline: 'Rolling batches',
    status: 'active',
    lastVerifiedDate: '2026-08-18',
    isPopular: true
  },
  {
    id: 'national-apprenticeship-promotion-scheme',
    slug: 'national-apprenticeship-promotion-scheme',
    name: 'NAPS-2 – National Apprenticeship Promotion Scheme',
    nameHindi: 'राष्ट्रीय शिक्षुता प्रोत्साहन योजना',
    ministry: 'Ministry of Skill Development and Entrepreneurship',
    level: 'central',
    categoryTag: 'Skill & Employment',
    description: 'Financial support directly credited to apprentices undergoing on-the-job training in manufacturing and service establishments.',
    whoIsItFor: 'ITI pass-outs, diploma holders, graduates, and 10th/12th pass youth seeking paid on-the-job apprenticeship.',
    eligibility: {
      ageMin: 14,
      gender: 'all',
      categories: ['All'],
      occupations: ['student', 'job_seeker', 'worker'],
      educationMin: 'secondary',
      rawText: 'Candidates possessing educational qualifications prescribed for the designated or optional trade with minimum age 14 (18 for hazardous trades).'
    },
    benefits: [
      'Direct Benefit Transfer (DBT) of 25% of prescribed stipend up to ₹1,500/month paid by central government',
      'Remaining 75% stipend paid by employer company',
      'Practical enterprise experience and National Apprenticeship Certificate (NAC)'
    ],
    benefitAmount: 'Government DBT up to ₹1,500 / month',
    benefitType: 'scholarship',
    requiredDocuments: [
      'Aadhaar Card',
      '10th / 12th / ITI / Diploma Marks Sheet',
      'Bank Account seeded with Aadhaar'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Register as candidate on apprenticeshipindia.gov.in',
      'Search and apply for apprentice vacancies posted by public/private companies',
      'Sign digital contract and receive monthly DBT stipend'
    ],
    officialUrl: 'https://www.apprenticeshipindia.gov.in/',
    portalName: 'Apprenticeship India Portal',
    deadline: 'Open throughout year',
    status: 'active',
    lastVerifiedDate: '2026-08-29'
  },

  // ── 8. SOCIAL WELFARE & EMPOWERMENT ──
  {
    id: 'atal-pension-yojana-enhanced',
    slug: 'atal-pension-yojana-enhanced',
    name: 'Atal Pension Yojana (APY) – Guaranteed Social Security',
    nameHindi: 'अटल पेंशन योजना',
    ministry: 'Ministry of Finance',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Government guaranteed monthly pension of ₹1,000 to ₹5,000 for unorganized sector workers after attaining 60 years of age.',
    whoIsItFor: 'Indian citizens aged 18 to 40 years holding a savings bank account who are not income-tax payers.',
    eligibility: {
      ageMin: 18,
      ageMax: 40,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'artisan', 'farmer', 'self_employed'],
      rawText: 'Any Indian citizen between 18 and 40 years holding a savings bank or post office account, who is not an income tax payer.'
    },
    benefits: [
      'Guaranteed monthly pension choice: ₹1,000, ₹2,000, ₹3,000, ₹4,000 or ₹5,000 from age 60',
      'Spouse receives the exact same pension for life after subscriber demise',
      'Accumulated corpus returned to nominee after demise of both subscriber and spouse'
    ],
    benefitAmount: '₹1,000 to ₹5,000 / Month Guaranteed Pension',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Active Savings Bank Account with auto-debit consent',
      'Nominee details'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Visit bank branch or use net banking / mobile banking app',
      'Choose desired pension slab (₹1,000 - ₹5,000) based on monthly contribution matrix',
      'Enable monthly auto-debit and obtain PRAN (Permanent Retirement Account Number)'
    ],
    officialUrl: 'https://www.npscra.nsdl.co.in/scheme-details.php',
    portalName: 'PFRDA / NSDL APY Portal',
    deadline: 'Join between age 18-40',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    isPopular: true
  },
  {
    id: 'pradhan-mantri-jeevan-jyoti-bima-yojana',
    slug: 'pradhan-mantri-jeevan-jyoti-bima-yojana',
    name: 'PMJJBY – Pradhan Mantri Jeevan Jyoti Bima Yojana',
    nameHindi: 'प्रधानमंत्री जीवन ज्योति बीमा योजना',
    ministry: 'Ministry of Finance',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Affordable one-year life insurance scheme renewable annually offering ₹2 lakh death coverage due to any reason for an annual premium of just ₹436.',
    whoIsItFor: 'Individuals aged 18 to 50 years with a bank or post office account consenting to auto-debit.',
    eligibility: {
      ageMin: 18,
      ageMax: 50,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'farmer', 'artisan', 'self_employed', 'entrepreneur', 'job_seeker', 'unemployed', 'homemaker'],
      rawText: 'All bank account holders aged 18 to 50 years. Life cover continues up to age 55 provided annual renewal premium is maintained.'
    },
    benefits: [
      '₹2,00,000 death benefit payable to nominee in case of death due to any reason',
      'Extremely low annual premium of ₹436 (less than ₹1.20 per day)',
      'Direct electronic settlement through bank without paper hassles'
    ],
    benefitAmount: '₹2,00,000 Life Insurance Cover',
    benefitType: 'insurance',
    requiredDocuments: [
      'Aadhaar Card',
      'Bank Account Passbook',
      'Nominee Identity Proof'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Log into net banking / mobile banking or visit home bank branch',
      'Submit simplified one-page consent-cum-declaration form',
      'Enable automatic annual renewal debit on 31st May each year'
    ],
    officialUrl: 'https://financialservices.gov.in/',
    portalName: 'DFS Financial Inclusion Portal',
    deadline: 'Annual renewal by 31 May',
    status: 'active',
    lastVerifiedDate: '2026-08-15',
    isPopular: true
  },
  {
    id: 'pradhan-mantri-suraksha-bima-yojana',
    slug: 'pradhan-mantri-suraksha-bima-yojana',
    name: 'PMSBY – Pradhan Mantri Suraksha Bima Yojana',
    nameHindi: 'प्रधानमंत्री सुरक्षा बीमा योजना',
    ministry: 'Ministry of Finance',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'One-year accidental insurance scheme renewable annually offering ₹2 lakh risk coverage against accidental death or permanent total disability for only ₹20 per year.',
    whoIsItFor: 'Individuals aged 18 to 70 years with a bank account giving auto-debit mandate.',
    eligibility: {
      ageMin: 18,
      ageMax: 70,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'farmer', 'artisan', 'self_employed', 'entrepreneur', 'student', 'senior_citizen'],
      rawText: 'All individuals aged between 18 and 70 years holding an active bank or post office savings account.'
    },
    benefits: [
      '₹2,00,000 in case of accidental death or permanent total disability',
      '₹1,00,000 in case of permanent partial disability (loss of one eye/limb)',
      'Unmatched cost of just ₹20 per year'
    ],
    benefitAmount: '₹2,00,000 Accidental Insurance Cover',
    benefitType: 'insurance',
    requiredDocuments: [
      'Aadhaar Card',
      'Bank Account Passbook',
      'Nominee details'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Enable PMSBY via internet banking or fill auto-debit consent form at branch',
      'Nominal ₹20 debited automatically annually from savings account'
    ],
    officialUrl: 'https://financialservices.gov.in/',
    portalName: 'DFS Financial Services',
    deadline: 'Renewable annually',
    status: 'active',
    lastVerifiedDate: '2026-08-15',
    isPopular: true
  },
  {
    id: 'pm-vishwakarma-artisan-toolkit',
    slug: 'pm-vishwakarma-artisan-toolkit',
    name: 'PM Vishwakarma Toolkit Incentive & Collateral-Free Credit',
    nameHindi: 'पीएम विश्वकर्मा योजना (टूलकिट प्रोत्साहन)',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Holistic support to traditional artisans and craftspeople including digital toolkit voucher of ₹15,000, 5% subsidized credit, and stipend-backed skill training.',
    whoIsItFor: 'Artisans engaged in 18 traditional trades (carpenters, blacksmiths, potters, sculptors, cobblers, masons, basket weavers, tailors, etc.).',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['artisan', 'self_employed', 'worker'],
      rawText: 'An artisan or craftsperson working with hands and tools engaged in one of the 18 identified family-based traditional trades in the unorganized sector.'
    },
    benefits: [
      '₹15,000 e-Voucher for modern toolkits upon completion of basic skill training',
      'Collateral-free enterprise loan: Tranche 1 up to ₹1 Lakh + Tranche 2 up to ₹2 Lakh at concessional 5% interest',
      'Daily stipend of ₹500 during the 5-7 days basic skilling programme',
      'Official PM Vishwakarma Certificate and Digital ID card'
    ],
    benefitAmount: '₹15,000 Toolkit + ₹3,00,000 Concessional Credit',
    benefitType: 'loan',
    requiredDocuments: [
      'Aadhaar Card',
      'Mobile linked with Aadhaar',
      'Bank Account details',
      'Trade verification by Gram Panchayat / Urban Local Body'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Enroll at nearest Common Services Centre (CSC) on pmvishwakarma.gov.in',
      'Three-tier verification (Gram Panchayat / ULB, District Committee, Screening Committee)',
      'Undergo basic training, receive ₹15,000 e-voucher, and apply for loan tranche'
    ],
    officialUrl: 'https://pmvishwakarma.gov.in/',
    portalName: 'PM Vishwakarma Portal',
    deadline: 'Open registration',
    status: 'active',
    lastVerifiedDate: '2026-09-02',
    isPopular: true
  },
  {
    id: 'national-safai-karamcharis-finance-scheme',
    slug: 'national-safai-karamcharis-finance-scheme',
    name: 'NSKFDC Sanitation Workers Self-Employment Scheme',
    nameHindi: 'राष्ट्रीय सफाई कर्मचारी वित्त एवं विकास योजना',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Financial assistance and concessional loans for mechanized sanitation equipment, commercial vehicles, and alternative livelihoods for sanitation workers.',
    whoIsItFor: 'Safai Karamcharis, manual scavengers (identified under MS Act 2013), and their dependents.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker', 'unemployed', 'self_employed'],
      rawText: 'Target group includes Safai Karamcharis, manual scavengers, and their dependents certified by local urban/rural authority.'
    },
    benefits: [
      'Up to ₹50,000 capital subsidy or up to 50% project cost for alternative micro-enterprises',
      'Concessional loans up to ₹15 lakh for mechanized sewer cleaning equipment with 4% interest rate for women',
      'Stipend of ₹3,000 per month during skill development training'
    ],
    benefitAmount: 'Up to ₹50,000 Subsidy + 4% Interest Loan',
    benefitType: 'subsidy',
    requiredDocuments: [
      'Aadhaar Card',
      'Occupation Certificate issued by Municipality / Panchayat',
      'Bank Account Passbook',
      'Project proposal for new venture'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply through State Channelizing Agencies (SCAs) or online at nskfdc.nic.in',
      'Verification conducted by local authority',
      'Loan and subsidy released via SCA to beneficiary bank account'
    ],
    officialUrl: 'https://nskfdc.nic.in/',
    portalName: 'NSKFDC Official Portal',
    deadline: 'Rolling batches',
    status: 'active',
    lastVerifiedDate: '2026-08-08'
  },
  {
    id: 'national-action-plan-mechanised-sanitation-namaste',
    slug: 'national-action-plan-mechanised-sanitation-namaste',
    name: 'NAMASTE Scheme – Mechanized Sanitation Ecosystem',
    nameHindi: 'नमस्ते योजना (मशीनीकृत स्वच्छता पारिस्थितिकी तंत्र)',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Promoting 100% mechanization of sewer and septic tank cleaning, profiling Sewer Entry Professionals (SSWs), providing PPE kits, health insurance, and capital subsidies.',
    whoIsItFor: 'Sanitation workers involved in sewer and septic tank cleaning operations.',
    eligibility: {
      ageMin: 18,
      ageMax: 60,
      gender: 'all',
      categories: ['All'],
      occupations: ['worker'],
      rawText: 'Identified Sewer and Septic Tank Workers (SSWs) profiled by Urban Local Bodies (ULBs).'
    },
    benefits: [
      'Free Ayushman Bharat PM-JAY health insurance coverage of ₹5 lakh',
      'Capital subsidy up to ₹5 lakh for purchasing mechanized cleaning vehicles / sewer suction units',
      'Free safety training and standardized PPE safety gear kits',
      'Alternative livelihood training with ₹3,000 monthly stipend'
    ],
    benefitAmount: '₹5 Lakh Health Cover + Up to ₹5 Lakh Vehicle Subsidy',
    benefitType: 'service',
    requiredDocuments: [
      'Aadhaar Card',
      'ULB Sanitation Worker Profiling ID',
      'Bank Passbook'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Participate in ULB profiling camps organized in municipality',
      'Receive NAMASTE Digital Photo ID Card and Ayushman PM-JAY enrollment',
      'Apply for vehicle capital subsidy through NSKFDC channel'
    ],
    officialUrl: 'https://namaste.gov.in/',
    portalName: 'NAMASTE Portal',
    deadline: 'Camp mode ongoing',
    status: 'active',
    lastVerifiedDate: '2026-08-16'
  },
  {
    id: 'support-for-marginalised-individuals-livelihood-smile',
    slug: 'support-for-marginalised-individuals-livelihood-smile',
    name: 'SMILE – Comprehensive Rehabilitation for Transgender Persons',
    nameHindi: 'स्माइल योजना (ट्रांसजेंडर पुनर्वास)',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'central',
    categoryTag: 'Social Welfare & Empowerment',
    description: 'Comprehensive welfare scheme offering scholarships, skill training, Garima Greh shelter homes, and composite healthcare packaging for transgender persons.',
    whoIsItFor: 'Transgender persons holding Transgender Certificate issued by the National Portal for Transgender Persons.',
    eligibility: {
      ageMin: 14,
      gender: 'transgender',
      categories: ['All'],
      occupations: ['student', 'job_seeker', 'worker', 'self_employed', 'unemployed'],
      rawText: 'Transgender persons holding valid National Transgender Identity Card issued under Transgender Persons (Protection of Rights) Act 2019.'
    },
    benefits: [
      'Composite medical cover up to ₹5 lakh annually under Ayushman Bharat TG package (including gender affirmation surgeries)',
      'Post-matric scholarships ranging from ₹13,500/year for higher education',
      'Free residential accommodation, food, and medical care in Garima Greh shelters',
      'Short-term skill development training with placement support'
    ],
    benefitAmount: '₹5 Lakh Medical Cover + Scholarships + Shelter Support',
    benefitType: 'service',
    requiredDocuments: [
      'National Transgender Identity Card (from transgender.dosje.gov.in)',
      'Aadhaar Card',
      'Bank Account Passbook'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Obtain Transgender ID card on transgender.dosje.gov.in portal without physical inspection',
      'Select SMILE welfare benefits (Healthcare / Scholarship / Skill Training / Shelter)',
      'Benefits dispatched via direct portal verification and DBT'
    ],
    officialUrl: 'https://transgender.dosje.gov.in/',
    portalName: 'National Transgender Portal',
    deadline: 'Available year-round',
    status: 'active',
    lastVerifiedDate: '2026-08-21'
  },

  // ── 9. STATE SPECIFIC SCHEMES (HIGH POPULARITY) ──
  {
    id: 'karnataka-yuva-nidhi-scheme',
    slug: 'karnataka-yuva-nidhi-scheme',
    name: 'Yuva Nidhi Scheme – Karnataka Unemployment Allowance',
    nameHindi: 'कर्नाटक युवा निधि योजना',
    ministry: 'Department of Youth Advancement and Sports, Govt of Karnataka',
    level: 'state',
    state: 'Karnataka',
    categoryTag: 'Skill & Employment',
    description: 'Financial assistance of ₹3,000/month for degree holders and ₹1,500/month for diploma holders who graduated and remained unemployed for 6 months.',
    whoIsItFor: 'Karnataka domicile graduates and diploma holders who have not gained employment or higher education admission within 6 months of graduation.',
    eligibility: {
      ageMin: 21,
      ageMax: 30,
      gender: 'all',
      state: 'Karnataka',
      categories: ['All'],
      occupations: ['unemployed', 'job_seeker'],
      educationMin: 'diploma',
      rawText: 'Karnataka residents who passed degree or diploma courses and remain unemployed after 6 months of graduation.'
    },
    benefits: [
      '₹3,000 per month for unemployed Graduates for up to 24 months',
      '₹1,500 per month for unemployed Diploma holders for up to 24 months',
      'Free skill enhancement training provided through Karnataka Skill Development Corporation'
    ],
    benefitAmount: '₹1,500 to ₹3,000 / month (up to 2 years)',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Karnataka Domicile / Study Certificate proving 7 years education in Karnataka',
      'Degree / Diploma Passing Certificate and Marks Cards',
      'Aadhaar-seeded Bank Account'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on Seva Sindhu portal (sevasindhuservices.karnataka.gov.in)',
      'Authenticate with Aadhaar and enter university enrollment registration number',
      'Monthly DBT credited upon self-declaration of unemployment status'
    ],
    officialUrl: 'https://sevasindhuservices.karnataka.gov.in/',
    portalName: 'Karnataka Seva Sindhu',
    deadline: 'Ongoing for eligible batches',
    status: 'active',
    lastVerifiedDate: '2026-08-24',
    isPopular: true
  },
  {
    id: 'maharashtra-ladki-bahin-yojana',
    slug: 'maharashtra-ladki-bahin-yojana',
    name: 'Mukhyamantri Majhi Ladki Bahin Yojana – Maharashtra',
    nameHindi: 'मुख्यमंत्री माझी लाडकी बहीण योजना (महाराष्ट्र)',
    ministry: 'Women and Child Development Department, Govt of Maharashtra',
    level: 'state',
    state: 'Maharashtra',
    categoryTag: 'Women and Child',
    description: 'Monthly direct cash transfer of ₹1,500 to underprivileged married, widowed, divorced, or destitute women in Maharashtra aged 21 to 65 years.',
    whoIsItFor: 'Women residents of Maharashtra aged 21 to 65 with family annual income under ₹2,50,000.',
    eligibility: {
      ageMin: 21,
      ageMax: 65,
      gender: 'female',
      state: 'Maharashtra',
      incomeMax: 250000,
      categories: ['All'],
      occupations: ['homemaker', 'worker', 'self_employed', 'artisan', 'unemployed'],
      rawText: 'Resident women of Maharashtra aged 21–65 whose annual family income is less than ₹2.50 lakh.'
    },
    benefits: [
      '₹1,500 direct cash transfer per month (₹18,000 annually) deposited into bank account',
      'Financial independence and nutrition security for underprivileged women',
      'Zero processing fee and simplified mobile-based application'
    ],
    benefitAmount: '₹1,500 / month (₹18,000 / year)',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Maharashtra Domicile Certificate or Ration Card (Orange/Yellow)',
      'Income Certificate (or Orange/Yellow ration card as income proxy)',
      'Bank Passbook (Aadhaar linked with DBT enabled)'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Apply on Nari Shakti Doot mobile app or visit nearest Anganwadi / Setu Suvidha Kendra',
      'Submit Aadhaar and ration card for instant eKYC',
      'Amount credited directly to bank account on the 15th of each month'
    ],
    officialUrl: 'https://ladkibahin.maharashtra.gov.in/',
    portalName: 'Majhi Ladki Bahin Portal',
    deadline: 'Open registration',
    status: 'active',
    lastVerifiedDate: '2026-09-02',
    isPopular: true
  },
  {
    id: 'telangana-rythu-bandhu-bharosa',
    slug: 'telangana-rythu-bandhu-bharosa',
    name: 'Rythu Bharosa – Telangana Farmer Investment Support',
    nameHindi: 'तेलंगाना रैतु भरोसा योजना',
    ministry: 'Agriculture Department, Government of Telangana',
    level: 'state',
    state: 'Telangana',
    categoryTag: 'Agriculture & Rural',
    description: 'Agricultural investment support of ₹15,000 per acre per year to land-owning farmers and tenant cultivators for purchasing seeds, fertilizers, and farm inputs.',
    whoIsItFor: 'Farmers and registered tenant cultivators holding agricultural land in Telangana.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      state: 'Telangana',
      categories: ['All'],
      occupations: ['farmer'],
      isRural: true,
      rawText: 'Pattadar farmers possessing registered agricultural land passbooks and registered tenant farmers in Telangana.'
    },
    benefits: [
      '₹15,000 per acre per year (₹7,500 per acre per season for Kharif and Rabi)',
      'Financial support directly credited through DBT ahead of sowing season',
      'Eliminates reliance on high-interest private moneylenders for farm inputs'
    ],
    benefitAmount: '₹15,000 per Acre / Year',
    benefitType: 'cash',
    requiredDocuments: [
      'Pattadar Passbook / Dharani Land Record',
      'Aadhaar Card',
      'Aadhaar-seeded Bank Account Passbook'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Land records automatically mapped via Dharani portal',
      'Agriculture Extension Officer (AEO) verifies physical land holding and active cultivation',
      'Treasury disburses seasonal installment directly via DBT'
    ],
    officialUrl: 'https://rythubharosa.telangana.gov.in/',
    portalName: 'Telangana Rythu Bharosa Portal',
    deadline: 'Seasonal disbursement',
    status: 'active',
    lastVerifiedDate: '2026-08-20',
    isPopular: true
  },
  {
    id: 'delhi-free-bus-travel-women',
    slug: 'delhi-free-bus-travel-women',
    name: 'Pink Ticket Scheme – Free Bus Travel for Women in Delhi',
    nameHindi: 'गुलाबी टिकट योजना (दिल्ली महिला निःशुल्क बस यात्रा)',
    ministry: 'Transport Department, Government of NCT of Delhi',
    level: 'state',
    state: 'Delhi',
    categoryTag: 'Women and Child',
    description: '100% free bus travel for all female commuters across all Delhi Transport Corporation (DTC) and cluster buses using single-journey Pink Tickets.',
    whoIsItFor: 'All women and transgender commuters traveling on city public transport in Delhi.',
    eligibility: {
      gender: 'female',
      state: 'Delhi',
      categories: ['All'],
      occupations: ['student', 'worker', 'homemaker', 'self_employed', 'senior_citizen', 'job_seeker', 'unemployed', 'artisan', 'entrepreneur'],
      rawText: 'All female and transgender passengers travelling in DTC city buses or Delhi Integrated Multi-Modal Transit System (DIMTS) cluster buses.'
    },
    benefits: [
      '100% fare waiver on both AC and Non-AC city public buses across Delhi NCR',
      'Zero paperwork — instant Pink Ticket issued by conductor upon boarding',
      'Saves ₹1,000 to ₹2,500 monthly for working women and female students'
    ],
    benefitAmount: '100% Free Bus Travel Across Delhi',
    benefitType: 'service',
    requiredDocuments: [
      'No documents needed — physical Pink Pass handed over on board'
    ],
    applicationMode: 'offline',
    applicationProcedure: [
      'Board any DTC or cluster bus in Delhi',
      'Ask the bus conductor for a Pink Ticket',
      'Conductor issues the ticket free of charge for the single journey'
    ],
    officialUrl: 'https://transport.delhi.gov.in/',
    portalName: 'Delhi Transport Department',
    deadline: 'Operational every day',
    status: 'active',
    lastVerifiedDate: '2026-08-15',
    isPopular: true
  },
  {
    id: 'tamil-nadu-pudhumai-penn-scheme',
    slug: 'tamil-nadu-pudhumai-penn-scheme',
    name: 'Moovalur Ramamirtham Ammaiyar Pudhumai Penn Scheme – Tamil Nadu',
    nameHindi: 'पुधुमई पेन योजना (तमिलनाडु)',
    ministry: 'Social Welfare and Women Empowerment Department, Govt of Tamil Nadu',
    level: 'state',
    state: 'Tamil Nadu',
    categoryTag: 'Education & Learning',
    description: 'Monthly incentive of ₹1,000 to girl students who studied classes 6 to 12 in government schools till the completion of their undergraduate degree or diploma.',
    whoIsItFor: 'Female students pursuing higher education who studied in Tamil Nadu government schools from 6th to 12th standard.',
    eligibility: {
      ageMin: 17,
      ageMax: 25,
      gender: 'female',
      state: 'Tamil Nadu',
      categories: ['All'],
      occupations: ['student'],
      educationMin: 'higher_secondary',
      rawText: 'Girl students who studied in Tamil Nadu Government schools from Class 6 to Class 12 and enrolled in degree, diploma, or ITI courses.'
    },
    benefits: [
      '₹1,000 per month (₹12,000/year) directly transferred into student bank account',
      'Provided till graduation without interruption',
      'Promotes female higher education gross enrollment and reduces early marriage'
    ],
    benefitAmount: '₹1,000 / month till graduation',
    benefitType: 'scholarship',
    requiredDocuments: [
      'School Transfer Certificate proving study in Govt School from Class 6 to 12',
      'College Bonafide Certificate & ID Card',
      'Aadhaar Card',
      'Bank Account Passbook in student name'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Colleges coordinate with students to register on the Pudhumai Penn portal (penkalvi.tn.gov.in)',
      'School education department EMIS database cross-verifies government school record',
      'Monthly scholarship credited on 7th of every month via DBT'
    ],
    officialUrl: 'https://penkalvi.tn.gov.in/',
    portalName: 'Pudhumai Penn Portal',
    deadline: 'College admission semester',
    status: 'active',
    lastVerifiedDate: '2026-08-23',
    isPopular: true
  },
  {
    id: 'uttar-pradesh-kanya-sumangala-yojana',
    slug: 'uttar-pradesh-kanya-sumangala-yojana',
    name: 'Mukhya Mantri Kanya Sumangala Yojana – Uttar Pradesh',
    nameHindi: 'मुख्यमंत्री कन्या सुमंगला योजना (उत्तर प्रदेश)',
    ministry: 'Women and Child Development Department, Government of UP',
    level: 'state',
    state: 'Uttar Pradesh',
    categoryTag: 'Women and Child',
    description: 'Conditional cash transfer of ₹25,000 in six milestones from birth to graduation for the education, healthcare, and welfare of girl children in Uttar Pradesh.',
    whoIsItFor: 'Permanent residents of Uttar Pradesh having a maximum of two girl children with family income under ₹3,00,000/year.',
    eligibility: {
      gender: 'female',
      state: 'Uttar Pradesh',
      incomeMax: 300000,
      categories: ['All'],
      occupations: ['student'],
      rawText: 'Permanent resident of UP with maximum 2 daughters in family (3 in case of twin girls as second delivery) with annual income under ₹3 lakh.'
    },
    benefits: [
      'Enhanced total grant of ₹25,000 disbursed across 6 development stages',
      'Stage 1: ₹5,000 at birth; Stage 2: ₹2,000 on full immunization; Stage 3: ₹3,000 on Class 1 admission',
      'Stage 4: ₹3,000 on Class 6 admission; Stage 5: ₹5,000 on Class 9 admission; Stage 6: ₹7,000 on college admission'
    ],
    benefitAmount: '₹25,000 Milestone-based DBT Grant',
    benefitType: 'cash',
    requiredDocuments: [
      'Uttar Pradesh Domicile Certificate',
      'Income Certificate (< ₹3,00,000)',
      'Birth Certificate of the girl child',
      'School / College Bonafide admission receipt'
    ],
    applicationMode: 'online',
    applicationProcedure: [
      'Apply online on mksy.up.gov.in',
      'Select relevant milestone category and upload required certificate',
      'Block Development Officer (BDO) / SDM approves and grants are directly deposited'
    ],
    officialUrl: 'https://mksy.up.gov.in/',
    portalName: 'UP Kanya Sumangala Portal',
    deadline: 'Rolling milestones',
    status: 'active',
    lastVerifiedDate: '2026-08-17',
    isPopular: true
  },
  {
    id: 'rajasthan-chiranjeevi-swasthya-bima',
    slug: 'rajasthan-chiranjeevi-swasthya-bima',
    name: 'Mukhyamantri Ayushman Arogya Yojana (MAAY) – Rajasthan',
    nameHindi: 'मुख्यमंत्री आयुष्मान आरोग्य योजना (राजस्थान)',
    ministry: 'Medical, Health and Family Welfare Department, Govt of Rajasthan',
    level: 'state',
    state: 'Rajasthan',
    categoryTag: 'Health & Wellness',
    description: 'Comprehensive cashless health insurance providing up to ₹25 lakh annual treatment cover per family across empaneled hospitals in Rajasthan.',
    whoIsItFor: 'All families resident in Rajasthan holding Jan Aadhar Card (free for NFSA, small farmers, and SECC; nominal premium for others).',
    eligibility: {
      gender: 'all',
      state: 'Rajasthan',
      categories: ['All'],
      occupations: ['farmer', 'worker', 'self_employed', 'artisan', 'student', 'senior_citizen', 'unemployed', 'homemaker'],
      rawText: 'All families residing in Rajasthan holding a valid Jan Aadhar card.'
    },
    benefits: [
      'Cashless hospital cover up to ₹25,00,000 per family per year',
      'Covers 1,800+ disease packages including cardiac surgery, organ transplants, and oncology',
      'Pre-hospitalization (5 days) and post-hospitalization (15 days) diagnostics and medicines included'
    ],
    benefitAmount: 'Up to ₹25,00,000 Cashless Cover / Family',
    benefitType: 'insurance',
    requiredDocuments: [
      'Jan Aadhar Card or Jan Aadhar Enrollment Slip',
      'Aadhaar Card'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Automatic coverage for NFSA ration card holders, small farmers, and contract workers',
      'Other families register on health.rajasthan.gov.in or e-Mitra by paying ₹850 annual premium',
      'Show Jan Aadhar at any empaneled hospital helpdesk for cashless admission'
    ],
    officialUrl: 'https://health.rajasthan.gov.in/',
    portalName: 'Rajasthan Health Portal',
    deadline: 'Annual renewal for paid categories',
    status: 'active',
    lastVerifiedDate: '2026-08-27',
    isPopular: true
  },
  {
    id: 'odisha-kalia-farmer-scheme',
    slug: 'odisha-kalia-farmer-scheme',
    name: 'KALIA Scheme – Krushak Assistance for Livelihood and Income Augmentation (Odisha)',
    nameHindi: 'कालिया योजना (ओडिशा)',
    ministry: 'Agriculture and Farmers Empowerment Department, Govt of Odisha',
    level: 'state',
    state: 'Odisha',
    categoryTag: 'Agriculture & Rural',
    description: 'Direct financial assistance for small farmers, marginal cultivators, and landless agricultural households in Odisha for cultivation and allied livelihoods.',
    whoIsItFor: 'Small/marginal farmers and landless agricultural laborers residing in Odisha.',
    eligibility: {
      ageMin: 18,
      gender: 'all',
      state: 'Odisha',
      categories: ['All'],
      occupations: ['farmer', 'worker'],
      isRural: true,
      rawText: 'Small and marginal farmers or landless agricultural households in Odisha whose names are registered in the state farmer database.'
    },
    benefits: [
      'Cultivation assistance of ₹4,000/year (₹2,000 per season) in sync with PM-KISAN (total ₹10,000/year combined)',
      '₹12,500 livelihood package for landless agricultural households for goat rearing, poultry, and fishery',
      'Interest-free crop loan up to ₹1,00,000 at 0% interest'
    ],
    benefitAmount: '₹4,00,000 to ₹12,500 Assistance + 0% Interest Loans',
    benefitType: 'cash',
    requiredDocuments: [
      'Aadhaar Card',
      'Ration Card / Food Security Card',
      'Land record (RoR) for cultivators',
      'Aadhaar-seeded Bank Account'
    ],
    applicationMode: 'both',
    applicationProcedure: [
      'Check inclusion on kalia.odisha.gov.in or submit form at Gram Panchayat office',
      'Biometric eKYC verified through Mo Seva Kendra',
      'Direct credit disbursed to bank account prior to agricultural seasons'
    ],
    officialUrl: 'https://kalia.odisha.gov.in/',
    portalName: 'KALIA Odisha Portal',
    deadline: 'Seasonal rollouts',
    status: 'active',
    lastVerifiedDate: '2026-08-19'
  }
];
