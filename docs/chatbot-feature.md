# 🤖 SuchakAI Floating Chatbot Feature

## Overview

The SuchakAI Floating Chatbot is an **AI-powered conversational assistant** integrated directly into the application. It provides personalized, real-time guidance about government schemes based on each user's profile.

### Key Features

✅ **Floating Widget** — Available 24/7 from any page in a fixed bottom-right corner  
✅ **Personalized Responses** — Answers tailored to the user's demographic, income, and occupation  
✅ **Scheme Recommendations** — Suggests eligible schemes and explains eligibility  
✅ **Application Guidance** — Step-by-step instructions for applying to schemes  
✅ **Intelligent Fallback** — Works even without Gemini API (rule-based responses)  
✅ **Conversation Memory** — Maintains chat history during the session  
✅ **Mobile Responsive** — Optimized for all screen sizes  

---

## 🏗️ Architecture

### Components

#### 1. **ChatbotWidget.tsx** (`components/ChatbotWidget.tsx`)
The main UI component rendering:
- **Floating Icon Button** (bottom-right corner, yellow/black toggle)
- **Chat Panel** (600px wide, 600px tall, responsive on mobile)
- **Message List** (auto-scrolling, distinct user/assistant styling)
- **Input Field** with send button
- **Loading States** and error handling

**Props:**
```typescript
interface ChatbotWidgetProps {
  currentProfile?: UserProfile | null;  // User's profile for personalization
}
```

#### 2. **Chat API Route** (`app/api/chat/route.ts`)
POST endpoint that:
1. Receives user message + profile + conversation ID
2. Ranks eligible schemes using deterministic matching
3. Calls **Gemini AI** with context (if API key available)
4. Falls back to **rule-based responses** (deterministic)
5. Maintains conversation history in-memory
6. Returns personalized response

**Request Body:**
```typescript
{
  message: string;           // User's question
  profile: UserProfile;      // Current citizen profile
  conversationId: string;    // Session ID for history
}
```

**Response:**
```typescript
{
  response: string;          // Assistant's answer
  source: 'gemini' | 'rule_fallback';
  schemes: Array<{           // Top eligible schemes mentioned
    name: string;
    matchScore: number;
  }>;
}
```

#### 3. **Layout Integration** (`app/_layout-client.tsx`)
- Loads user profile from `localStorage` (key: `soochai_profile`)
- Passes profile to ChatbotWidget on all pages
- Ensures chatbot is available app-wide

---

## 📋 How It Works

### User Flow

```
User clicks floating icon
    ↓
Chat panel opens (animated slide-in)
    ↓
User types question about schemes
    ↓
API /api/chat receives request
    ↓
Backend ranks eligible schemes
    ↓
Gemini AI (or rule-based fallback) generates response
    ↓
Response displayed in chat panel
    ↓
User can ask follow-up questions
    ↓
Conversation history maintained in sessionStorage
```

### Example Questions Users Can Ask

- **"Which schemes am I eligible for?"**
  - Returns: Top 3 matching schemes with match scores

- **"How do I apply for PM-KISAN?"**
  - Returns: Required documents, application mode, official portal link

- **"What benefits will I get?"**
  - Returns: Specific benefit amounts and types for their profile

- **"What's the deadline?"**
  - Returns: Upcoming deadlines for eligible schemes

- **"Am I eligible for [Scheme Name]?"**
  - Returns: Eligibility breakdown (age, income, category, state)

---

## 🔧 Configuration

### Environment Variables

The chatbot uses your existing **GEMINI_API_KEY**:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

- **If set:** Chatbot uses Gemini 2.0-Flash for intelligent, context-aware responses
- **If not set:** Chatbot uses rule-based response generator (instant, no API cost)

### Styling

The chatbot respects your existing **CSS variables**:

```css
--background              /* Chat panel background */
--panel-bg                /* Panel background */
--card-bg                 /* Message bubbles */
--accent-yellow           /* Primary action button */
--text-primary            /* Main text color */
--text-secondary          /* Secondary text color */
--border-subtle           /* Panel border */
--input-bg                /* Input field background */
--input-border            /* Input field border */
```

Themes automatically switch between **dark** and **light** modes based on user preference.

---

## 🧠 Personalization Engine

### Data Used

The chatbot personalizes responses using:

```typescript
UserProfile {
  name: string;
  age: number;
  gender: Gender;
  state: IndianState;
  category: Category;           // SC, ST, OBC, General, EWS, Minority
  occupation: Occupation;        // student, farmer, entrepreneur, etc.
  education: EducationLevel;     // primary, secondary, graduate, etc.
  annualIncome: number;         // in INR
  isRural: boolean;
  hasDisability: boolean;
  interests: string[];
}
```

### Matching Algorithm

1. **Deterministic Eligibility Check** — 6-factor weighted matching
   - State/Scope (25%)
   - Category (20%)
   - Occupation (20%)
   - Income (15%)
   - Age & Gender (10%)
   - Urgency & Popularity (10%)

2. **Scheme Ranking** — Top 10 eligible schemes retrieved
3. **Context Building** — Top schemes + user profile sent to Gemini
4. **Response Generation** — AI generates personalized guidance

---

## 💬 Response Examples

### When user asks: "Which schemes am I eligible for?"

**If eligible for schemes:**
```
Great question! You're currently eligible for 8 schemes based on your student 
status in Maharashtra. Here are your top 3:

• Pradhan Mantri Scholarship Yojana (Score: 95%)
• Maharashtra Rajarshi Shahu Scholarship (Score: 92%)
• Post-Matric SC Scholarship (Score: 88%)

✓ All match your income level (₹2L) and OBC category.

Click on each scheme card for detailed eligibility & application steps!
```

### When user asks: "How do I apply for PM-KISAN?"

**If not eligible:**
```
To apply for PM-KISAN:

✓ Documents needed: Aadhaar Card, Landholding Certificate, Bank Account
✓ Mode: Online via official portal
✓ Portal: eKYC System

Visit **pmkisan.gov.in** to start your application!

⚠️ Keep your land records & Aadhaar ready.
```

---

## 📱 UI/UX Details

### Floating Icon

- **Position:** Fixed bottom-right corner (24px margin)
- **Size:** 56px × 56px (rounded square)
- **Colors:**
  - **Closed:** Yellow (#facc15) icon on dark card background
  - **Open:** Dark background with white X icon
- **Hover Effects:** Scale and shadow animations

### Chat Panel

- **Width:** 384px on desktop, 100vw - 48px on mobile
- **Height:** 600px (max)
- **Border Radius:** 24px (glassmorphic design)
- **Layout:**
  - Header (Yellow gradient, 56px)
  - Messages (Auto-scrolling, flex-1)
  - Input (40px, Send button)

### Message Styling

- **User Messages:**
  - Background: Yellow (#facc15)
  - Text: Dark (zinc-950)
  - Alignment: Right
  - Font Weight: Bold

- **Assistant Messages:**
  - Background: Card background
  - Border: Subtle border
  - Text: Primary text color
  - Alignment: Left

---

## 🔐 Privacy & Security

### What The Chatbot Can Access

✅ User's **stored profile** (name, age, state, category, occupation, income)  
✅ **Eligible schemes** based on profile matching  
✅ **Public scheme information** (benefits, eligibility, application URLs)  

### What The Chatbot CANNOT Access

❌ Passwords or authentication tokens  
❌ Bank account details  
❌ Sensitive personal documents  
❌ Other users' profiles  
❌ Admin-only data  

### Data Storage

- **Chat History:** Stored in `sessionStorage` (cleared on browser close)
- **Conversation Memory:** In-memory Map per API server instance (not persistent)
- **User Profile:** From `localStorage` (same as existing app)

---

## 🚀 Development & Testing

### Running Locally

```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
# The chatbot icon appears in bottom-right corner
```

### Testing Without Gemini API

1. **Remove GEMINI_API_KEY** from `.env.local`
2. Chatbot will use **rule-based responses** (instant, no API calls)
3. Perfect for testing UI and conversation flow

### Testing With Gemini API

1. **Add GEMINI_API_KEY** to `.env.local`
2. Restart dev server
3. Chatbot uses intelligent AI responses
4. Check browser console for API logs

### Debugging

- **Open DevTools → Console** to see API request/response logs
- **sessionStorage** contains chat history: `suchakAI_chat_[sessionId]`
- **Network tab** shows `/api/chat` requests

---

## 🔄 Conversation Flow Example

**User Profile:** Priya Sharma, 20y, Maharashtra, SC, Student, ₹200K income

### Exchange 1
```
User:  "Which schemes match my profile?"

API:   Calls /api/chat
       → Ranks schemes: PM-Scholarship (95%), Maharashtra DBT (92%), etc.
       → Calls Gemini with context

Gemini: "Great! You're eligible for 6 schemes as an SC student in Maharashtra. 
        Top matches:
        • Post-Matric SC Scholarship (95%) - ₹5,000/year
        • Maharashtra DBT Scholarship (92%) - ₹5,000/semester
        
        All match your income level (₹2L) and SC category. ✓
        Click scheme cards for application steps!"
```

### Exchange 2
```
User:  "How do I apply for the SC Scholarship?"

API:   Extracts context from conversation history
       Sends: "How do I apply for Post-Matric SC Scholarship?"
       
Gemini: "For Post-Matric SC Scholarship:
        
        ✓ Documents: SC certificate, Income certificate, Marksheet
        ✓ Mode: Online via AICTE/State portal
        ✓ Deadline: Usually June 30 every year
        
        Steps:
        1. Register at official portal
        2. Upload documents (scanned)
        3. Get application reference
        4. Track status online
        
        ⚠️ Ensure your SC certificate is issued this fiscal year!"
```

---

## 🛠️ Advanced Features (Future)

Potential enhancements:

- [ ] **Multi-language Support** — Hindi, Tamil, Telugu responses
- [ ] **Document Upload** — Verify eligibility with real documents
- [ ] **Application Filing** — Direct integration with scheme portals
- [ ] **Notification Alerts** — Remind users of deadlines
- [ ] **Persistent Chat History** — Save via Supabase
- [ ] **Analytics Dashboard** — Track common questions
- [ ] **Feedback Loop** — Rate response accuracy
- [ ] **Voice Input** — Speak questions instead of typing

---

## 📝 Files Modified/Created

### Created
- `components/ChatbotWidget.tsx` — Main UI component
- `app/api/chat/route.ts` — Backend API endpoint
- `app/_layout-client.tsx` — Layout wrapper for chatbot
- `docs/chatbot-feature.md` — This documentation

### Modified
- `app/layout.tsx` — Added ChatbotWidget integration

### No Changes Required
- Existing Gemini integration works as-is
- Existing localStorage patterns reused
- No database schema changes

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Icon not visible | Check z-index conflicts; adjust `.fixed.z-40` if needed |
| Chat not responding | Check browser console for `/api/chat` errors |
| Profile not loading | Ensure `soochai_profile` key exists in localStorage |
| Slow responses | Check if GEMINI_API_KEY is valid; rule-based fallback is instant |
| Mobile panel too large | Adjust width: `w-96` → `w-80` or `w-72` on mobile |
| Grammar/spelling errors | This is rule-based response; add GEMINI_API_KEY for AI |

---

## 📚 Related Documentation

- **[Matching Algorithm](../lib/matching.ts)** — How schemes are ranked
- **[Gemini Integration](../lib/gemini.ts)** — AI explanation generation
- **[Types](../lib/types.ts)** — TypeScript interfaces (UserProfile, Scheme, etc.)
- **[Architecture Research](./architecture_research.md)** — System design details

---

## 📞 Support

For issues or feature requests:
1. Check this documentation
2. Review browser console logs
3. Verify API endpoint responses in Network tab
4. Check `GEMINI_API_KEY` configuration
