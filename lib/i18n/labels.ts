import type { EnKeys } from './en';
import type { Scheme } from '../types';

// Maps raw data values from the scheme dataset and user profile to
// dictionary keys so they render in the active language. Values that
// are not in the maps (for example a state name not listed here)
// fall back to the raw value.
export const SECTOR_KEY: Record<string, EnKeys> = {
  'Agriculture & Rural': 'cat_agri',
  'Business & Entrepreneurship': 'cat_business',
  'Education & Learning': 'cat_education',
  'Health & Wellness': 'cat_health',
  'Housing & Shelter': 'cat_housing',
  'Skill & Employment': 'cat_skill',
  'Social Welfare & Empowerment': 'cat_welfare',
  'Women and Child': 'cat_women',
};

export const STATE_KEY: Record<string, EnKeys> = {
  'All India': 'st_all',
  'Andhra Pradesh': 'st_andhra',
  Assam: 'st_assam',
  Bihar: 'st_bihar',
  Chhattisgarh: 'st_chhattisgarh',
  Delhi: 'st_delhi',
  Gujarat: 'st_gujarat',
  Haryana: 'st_haryana',
  'Himachal Pradesh': 'st_himachal',
  Jharkhand: 'st_jharkhand',
  Karnataka: 'st_karnataka',
  Kerala: 'st_kerala',
  'Madhya Pradesh': 'st_madhya',
  Maharashtra: 'st_maharashtra',
  Odisha: 'st_odisha',
  Punjab: 'st_punjab',
  Rajasthan: 'st_rajasthan',
  'Tamil Nadu': 'st_tamil',
  Telangana: 'st_telangana',
  'Uttar Pradesh': 'st_up',
  Uttarakhand: 'st_uttarakhand',
  'West Bengal': 'st_bengal',
  'Jammu and Kashmir': 'st_jk',
  Ladakh: 'st_ladakh',
};

export const CATEGORY_KEY: Record<string, EnKeys> = {
  General: 'cg_general',
  OBC: 'cg_obc',
  SC: 'cg_sc',
  ST: 'cg_st',
  EWS: 'cg_ews',
  Minority: 'cg_minority',
  All: 'cg_all',
};

type T = (k: EnKeys) => string;

export function sectorLabel(t: T, tag: string): string {
  const k = SECTOR_KEY[tag];
  return k ? t(k) : tag;
}

export function stateLabel(t: T, state: string): string {
  const k = STATE_KEY[state];
  return k ? t(k) : state;
}

export function categoryLabel(t: T, category: string): string {
  const k = CATEGORY_KEY[category];
  return k ? t(k) : category;
}

// The dataset ships an official Hindi name for every scheme, so titles are
// never machine translated. Falls back to the English name.
export function schemeTitle(scheme: Pick<Scheme, 'name' | 'nameHindi'>, lang: string): string {
  return lang === 'hi' && scheme.nameHindi ? scheme.nameHindi : scheme.name;
}
