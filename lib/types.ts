export type IndianState =
  | 'All India'
  | 'Andhra Pradesh'
  | 'Arunachal Pradesh'
  | 'Assam'
  | 'Bihar'
  | 'Chhattisgarh'
  | 'Goa'
  | 'Gujarat'
  | 'Haryana'
  | 'Himachal Pradesh'
  | 'Jharkhand'
  | 'Karnataka'
  | 'Kerala'
  | 'Madhya Pradesh'
  | 'Maharashtra'
  | 'Manipur'
  | 'Meghalaya'
  | 'Mizoram'
  | 'Nagaland'
  | 'Odisha'
  | 'Punjab'
  | 'Rajasthan'
  | 'Sikkim'
  | 'Tamil Nadu'
  | 'Telangana'
  | 'Tripura'
  | 'Uttar Pradesh'
  | 'Uttarakhand'
  | 'West Bengal'
  | 'Delhi'
  | 'Jammu and Kashmir'
  | 'Ladakh';

export type Category = 'General' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'Minority' | 'All';

export type Occupation =
  | 'student'
  | 'farmer'
  | 'entrepreneur'
  | 'job_seeker'
  | 'unemployed'
  | 'worker'
  | 'artisan'
  | 'self_employed'
  | 'senior_citizen'
  | 'homemaker';

export type EducationLevel =
  | 'none'
  | 'primary'
  | 'secondary' // 10th
  | 'higher_secondary' // 12th
  | 'diploma'
  | 'undergraduate'
  | 'postgraduate'
  | 'doctorate';

export type Gender = 'male' | 'female' | 'transgender' | 'all';

export type SchemeLevel = 'central' | 'state' | 'centrally_sponsored';

export type SchemeCategory =
  | 'Education & Learning'
  | 'Agriculture & Rural'
  | 'Business & Entrepreneurship'
  | 'Health & Wellness'
  | 'Social Welfare & Empowerment'
  | 'Women and Child'
  | 'Housing & Shelter'
  | 'Skill & Employment';

export interface UserProfile {
  id?: string;
  name: string;
  age: number;
  gender: Gender;
  state: IndianState;
  category: Category;
  occupation: Occupation;
  education: EducationLevel;
  annualIncome: number; // in INR
  isRural: boolean;
  hasDisability: boolean;
  interests: string[];
}

export interface Scheme {
  id: string;
  slug: string;
  name: string;
  nameHindi?: string;
  ministry: string;
  level: SchemeLevel;
  state?: IndianState;
  categoryTag: SchemeCategory;
  description: string;
  
  // Who it is for & plain language summary
  whoIsItFor: string;
  
  // Eligibility criteria (deterministic)
  eligibility: {
    ageMin?: number;
    ageMax?: number;
    gender?: Gender;
    incomeMax?: number; // annual income ceiling in INR
    categories: Category[]; // 'All' or specific like ['SC', 'ST']
    occupations: Occupation[];
    educationMin?: EducationLevel;
    state?: IndianState;
    residency?: string;
    rawText: string;
  };

  // Benefits
  benefits: string[];
  benefitAmount?: string; // e.g. "₹6,000 per year" or "100% Tuition Fee waiver"
  benefitType: 'cash' | 'subsidy' | 'scholarship' | 'loan' | 'insurance' | 'service';

  // Application Details
  requiredDocuments: string[];
  applicationMode: 'online' | 'offline' | 'both';
  applicationProcedure: string[];
  officialUrl: string;
  portalName: string;

  // Status & Freshness
  deadline?: string;
  status: 'active' | 'upcoming' | 'closing_soon' | 'expired';
  lastVerifiedDate: string;
  inconsistencies?: string[]; // conflicting or outdated information across official portals
  isPopular?: boolean;
}

export interface SchemeMatchResult {
  scheme: Scheme;
  matchScore: number; // 0 to 100
  isEligible: boolean;
  whyItMatches: string;
  breakdown: {
    stateMatched: boolean;
    ageMatched: boolean;
    genderMatched: boolean;
    categoryMatched: boolean;
    occupationMatched: boolean;
    incomeMatched: boolean;
  };
  cautionNotes?: string[];
}
