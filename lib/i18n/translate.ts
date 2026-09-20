// Runtime English to Hindi translation for dynamic content such as scheme
// descriptions, benefit lists and AI explanations. Static UI text goes
// through the dictionaries in en.ts/hi.ts; this layer only handles dataset
// and API content that has no pre-written Hindi.
//
// How it works:
// 1. Curated OVERRIDES win first, so official names stay accurate.
// 2. A localStorage cache keeps every translated string on the device, so
//    each unique string is fetched once per browser.
// 3. Anything else is queued and translated in small paced batches using
//    free, key-less public endpoints (Google gtx first, MyMemory fallback).
// 4. Failures leave the English text in place and are retried on the next
//    session. No API keys, no paid services, no backend involvement.

const CACHE_KEY = 'soochai_hi_cache_v1';
const MAX_CACHE = 900;
const CHUNK = 6;
const PAUSE_MS = 350;
const DEVANAGARI = /[\u0900-\u097F]/;

// Curated Hindi for official titles and fixed dataset phrases. Automatic
// translation is good for sentences, but proper nouns deserve accuracy.
const OVERRIDES: Record<string, string> = {
  'Ministry of Agriculture and Farmers Welfare': 'कृषि एवं किसान कल्याण मंत्रालय',
  'Ministry of Social Justice and Empowerment': 'सामाजिक न्याय और अधिकारिता मंत्रालय',
  'Ministry of Finance / DFS': 'वित्त मंत्रालय / वित्तीय सेवा विभाग',
  'Ministry of Finance / PFRDA': 'वित्त मंत्रालय / पेंशन निधि नियामक एवं विकास प्राधिकरण',
  'Ministry of Finance / SIDBI': 'वित्त मंत्रालय / भारतीय लघु उद्योग विकास बैंक',
  'Ministry of Health and Family Welfare / NHA': 'स्वास्थ्य और परिवार कल्याण मंत्रालय / राष्ट्रीय स्वास्थ्य प्राधिकरण',
  'Ministry of Housing and Urban Affairs (MoHUA)': 'आवास और शहरी कार्य मंत्रालय',
  'Ministry of Micro, Small and Medium Enterprises (MSME)': 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय',
  'Ministry of Minority Affairs': 'अल्पसंख्यक कार्य मंत्रालय',
  'Ministry of MSME / KVIC': 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय / खादी एवं ग्रामोद्योग आयोग',
  'Ministry of Petroleum and Natural Gas': 'पेट्रोलियम और प्राकृतिक गैस मंत्रालय',
  'Ministry of Rural Development': 'ग्रामीण विकास मंत्रालय',
  'Ministry of Skill Development and Entrepreneurship (MSDE)': 'कौशल विकास एवं उद्यमिता मंत्रालय',
  'Ministry of Women and Child Development / Finance': 'महिला और बाल विकास मंत्रालय / वित्त मंत्रालय',
  'Department of Empowerment of Persons with Disabilities, MoSJE': 'दिव्यांजन सशक्तिकरण विभाग, सामाजिक न्याय और अधिकारिता मंत्रालय',
  'Department of Fisheries, Ministry of Fisheries, Animal Husbandry & Dairying': 'मत्स्य विभाग, मत्स्य, पशुपालन एवं डेयरी मंत्रालय',
  'Department of Higher Education, Ministry of Education': 'उच्चतर शिक्षा विभाग, शिक्षा मंत्रालय',
  'Department of Skill Development, Govt of Karnataka': 'कौशल विकास विभाग, कर्नाटक सरकार',
  'Department of Training & Technical Education, Govt of NCT of Delhi': 'प्रशिक्षण एवं तकनीकी शिक्षा विभाग, दिल्ली सरकार',
  'Higher and Technical Education Department, Govt of Maharashtra': 'उच्चतर एवं तकनीकी शिक्षा विभाग, महाराष्ट्र सरकार',
  'Medical and Health Department, Govt of Rajasthan': 'चिकित्सा एवं स्वास्थ्य विभाग, राजस्थान सरकार',
  'Women and Child Development Department, Govt of Madhya Pradesh': 'महिला एवं बाल विकास विभाग, मध्य प्रदेश सरकार',
  'Women and Child Development Department, Govt of Uttar Pradesh': 'महिला एवं बाल विकास विभाग, उत्तर प्रदेश सरकार',
  'Ongoing enrollment': 'लगातार पंजीकरण जारी',
  'Ongoing throughout the year': 'पूरे वर्ष जारी',
  'Ongoing for eligible batches': 'पात्र बैचों के लिए जारी',
  'Ongoing district distribution camps': 'जिला वितरण शिविर जारी',
};

let cache: Map<string, string> | null = null;
let loaded = false;
const failed = new Set<string>();
const queued = new Set<string>();
const inflight = new Set<string>();
const queue: string[] = [];
let flushTimer: ReturnType<typeof setTimeout> | null = null;
let saveTimer: ReturnType<typeof setTimeout> | null = null;
const listeners = new Set<() => void>();

function load(): Map<string, string> {
  if (!loaded) {
    loaded = true;
    cache = new Map();
    if (typeof window !== 'undefined') {
      try {
        const raw = window.localStorage.getItem(CACHE_KEY);
        if (raw) {
          const obj: unknown = JSON.parse(raw);
          if (obj && typeof obj === 'object') {
            for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
              if (typeof v === 'string' && v) cache.set(k, v);
            }
          }
        }
      } catch {
        /* start empty */
      }
    }
  }
  return cache as Map<string, string>;
}

function persist() {
  if (typeof window === 'undefined' || !cache) return;
  try {
    if (cache.size > MAX_CACHE) {
      const drop = cache.size - MAX_CACHE;
      let i = 0;
      for (const k of cache.keys()) {
        if (i++ >= drop) break;
        cache.delete(k);
      }
    }
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(Object.fromEntries(cache)));
  } catch {
    /* storage unavailable, keep memory cache */
  }
}

function schedulePersist() {
  if (saveTimer) return;
  saveTimer = setTimeout(() => {
    saveTimer = null;
    persist();
  }, 1200);
}

function notify() {
  listeners.forEach((l) => l());
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

// Returns the Hindi rendering if it is already available on this device,
// otherwise undefined so the caller shows the English source.
export function translateSync(text: string): string | undefined {
  if (!text) return undefined;
  const ov = OVERRIDES[text];
  if (ov) return ov;
  if (DEVANAGARI.test(text)) return text;
  return load().get(text);
}

function needsWork(text: string): boolean {
  if (!text || text.length < 2 || text.length > 2000) return false;
  if (OVERRIDES[text]) return false;
  if (DEVANAGARI.test(text)) return false;
  if (!/[A-Za-z]/.test(text)) return false;
  const c = load();
  if (c.has(text) || failed.has(text)) return false;
  return true;
}

export function prefetch(texts: readonly string[]): void {
  if (typeof window === 'undefined') return;
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
  let added = false;
  for (const raw of texts) {
    const text = raw.trim();
    if (!text || queued.has(text) || inflight.has(text)) continue;
    if (!needsWork(text)) continue;
    queued.add(text);
    queue.push(text);
    added = true;
  }
  if (added && flushTimer === null) flushTimer = setTimeout(flush, 120);
}

function flush() {
  flushTimer = null;
  if (!queue.length) return;
  const chunk = queue.splice(0, CHUNK);
  chunk.forEach((t) => queued.delete(t));
  chunk.forEach((t) => inflight.add(t));
  void Promise.all(chunk.map(runOne)).then(() => {
    chunk.forEach((t) => inflight.delete(t));
    notify();
    if (queue.length) flushTimer = setTimeout(flush, PAUSE_MS);
  });
}

async function runOne(text: string): Promise<void> {
  let hi: string | null = null;
  try {
    hi = await viaGtx(text);
  } catch {
    /* try fallback */
  }
  if (hi === null) {
    try {
      hi = await viaMyMemory(text);
    } catch {
      failed.add(text);
    }
  }
  if (hi) {
    load().set(text, hi);
    schedulePersist();
  }
}

async function viaGtx(text: string): Promise<string> {
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=' +
    encodeURIComponent(text);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`gtx ${res.status}`);
  const data: unknown = await res.json();
  if (!Array.isArray(data) || !Array.isArray(data[0])) throw new Error('gtx shape');
  let out = '';
  for (const seg of data[0] as unknown[]) {
    if (Array.isArray(seg) && typeof seg[0] === 'string') out += seg[0];
  }
  if (!out.trim()) throw new Error('gtx empty');
  return out.trim();
}

async function viaMyMemory(text: string): Promise<string> {
  const parts = splitForMyMemory(text);
  const out: string[] = [];
  for (const part of parts) {
    const url =
      'https://api.mymemory.translated.net/get?q=' +
      encodeURIComponent(part) +
      '&langpair=en%7Chi&de=hello@soochai.in';
    const res = await fetch(url);
    if (!res.ok) throw new Error(`mm ${res.status}`);
    const j: unknown = await res.json();
    const status = (j as { responseStatus?: number }).responseStatus;
    const translated = (j as { responseData?: { translatedText?: string } }).responseData
      ?.translatedText;
    if (status !== 200 || !translated) throw new Error('mm bad');
    // MyMemory returns a loud ALL CAPS notice when the daily quota is gone.
    const looksLikeNotice =
      translated.length > 20 && translated === translated.toUpperCase() && !translated.includes('₹');
    if (looksLikeNotice) throw new Error('mm quota');
    out.push(translated.trim());
  }
  return out.join(' ');
}

function splitForMyMemory(text: string): string[] {
  if (text.length <= 480) return [text];
  const sentences = text.split(/(?<=[.?!।])\s+/);
  const parts: string[] = [];
  let cur = '';
  for (const s of sentences) {
    if (cur && (cur + ' ' + s).trim().length > 460) {
      parts.push(cur.trim());
      cur = s;
    } else {
      cur = (cur + ' ' + s).trim();
    }
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts;
}
