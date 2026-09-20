# 🤖 SuchakAI Chatbot Setup & Usage Guide

## ✨ What Was Added

A **floating AI chatbot** that provides personalized scheme guidance to citizens. The chatbot appears in the bottom-right corner of every page and helps users understand:

- ✅ Which government schemes they're eligible for
- ✅ How to apply with step-by-step procedures
- ✅ What documents they need to submit
- ✅ Income ceilings and eligibility constraints
- ✅ Application deadlines and portal links

---

## 🚀 Quick Start

### 1. No Setup Required! 🎉

The chatbot is **already integrated**. Just run the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and look for the **yellow chat icon** in the bottom-right corner.

### 2. Click the Icon to Open

```
┌─────────────────────────────────────┐
│  SuchakAI Dashboard                 │
├─────────────────────────────────────┤
│                                     │
│                                     │
│                                     │
│                                     │
│                          ┌───────┐  │
│                          │ 💬    │◄─┘ Floating icon (bottom-right)
│                          └───────┘
```

### 3. Ask Questions About Schemes

The chatbot will give **personalized answers** based on:
- Your profile (name, age, state, income, category)
- Eligible schemes for your profile
- Official application procedures

---

## 📊 How It Works

```
┌─────────────────────────────────────────────────────┐
│  User Types: "Which schemes am I eligible for?"     │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│  Backend API (/api/chat)                            │
│  1. Load user profile from localStorage             │
│  2. Rank schemes (6-factor matching)                │
│  3. Take top 10 eligible schemes                    │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │  Gemini AI Available? │
        └────────┬─────────────┘
                 │
        ┌────────┴────────┐
        │                 │
      YES              NO
        │                 │
        ▼                 ▼
    ┌──────┐      ┌──────────────┐
    │Gemini│      │Rule-Based    │
    │AI    │      │Response      │
    │(Fast)│      │Generator     │
    └────┬─┘      │(Instant)     │
         │        └──────┬───────┘
         │               │
         └───────┬───────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│  Response in Chat Panel:                            │
│  ✅ Top matching schemes with percentages          │
│  ✅ Eligibility breakdown (income, state, category)│
│  ✅ Application procedures & documents needed      │
│  ✅ Portal links & deadlines                       │
└─────────────────────────────────────────────────────┘
```

---

## 💡 Example Interactions

### Example 1: Eligibility Question

```
👤 USER: Which schemes am I eligible for?

🤖 ASSISTANT:
Great! You're eligible for 10 schemes based on your student status 
in Maharashtra.

Here are your top 3:
• Post-Matric SC Scholarship (95%) - ₹5,000/year
• Maharashtra DBT Scholarship (92%) - ₹5,000/semester  
• PM-USP Scholarship (87%) - ₹12,000/year

✓ All match your income (₹2L) and SC category.
```

### Example 2: Application Guidance

```
👤 USER: How do I apply for the SC Scholarship?

🤖 ASSISTANT:
For Post-Matric SC Scholarship:

✓ Documents needed:
  - SC Certificate (current year)
  - Income Certificate
  - School/College Marksheet
  - Aadhaar Card
  - Bank Account Details

✓ Application Mode: Online via AICTE Portal
✓ Deadline: Usually June 30 every year
✓ Benefits: ₹5,000 per year

Steps:
1. Visit aicte-india.org
2. Register with Aadhaar
3. Upload documents
4. Get application reference
5. Check status online

⚠️ Keep documents scanned and ready!
```

### Example 3: Benefits Inquiry

```
👤 USER: What benefits will I get from PM-KISAN?

🤖 ASSISTANT:
PM-KISAN offers:

✓ Direct cash transfer: ₹2,000 per month (₹6,000/year)
✓ Deposited directly to bank account (Aadhaar-linked)
✓ Available for small & marginal farmers

You qualify because:
✓ Farmer status matches
✓ Income below limits
✓ State coverage: All India

Note: PM-KISAN only applies to farmers with land. If you're 
not a farmer, explore other schemes like MUDRA or PM-Vishwakarma.
```

---

## 🔧 Configuration

### Option 1: Use Gemini AI (Intelligent Responses)

The chatbot already uses Gemini if you have `GEMINI_API_KEY`:

```bash
# In .env.local
GEMINI_API_KEY=your_api_key_from_aistudio.google.com
```

When set:
- ✅ Natural language responses
- ✅ Context-aware answers
- ✅ Can handle nuanced questions
- ✅ Real-time personalization

### Option 2: Rule-Based Responses (No API Needed)

If `GEMINI_API_KEY` is not set:
- ✅ Instant responses (no API latency)
- ✅ Deterministic & reliable
- ✅ Perfect for testing & demos
- ✅ No Gemini API costs

Both modes work seamlessly — the chatbot auto-detects!

---

## 📱 UI Features

### Desktop View
```
┌────────────────────────────────────────────────────┐
│  Website                                    │  🔔 │
├────────────────────────────────────────────────────┤
│                                                     │
│  Main Content Area                                 │
│                                                     │
│                                                     │
│                                                     │
│                          ┌─────────────────────┐   │
│                          │ SuchakAI Assistant  │   │
│                          ├─────────────────────┤   │
│                          │ Which schemes...    │   │
│                          │ I can help you...   │   │
│                          │ > Ask about schemes │   │
│                          │                     │   │
│                          │ [Type your question]│   │
│                          │            [ ➤ ]   │   │
│                          └─────────────────────┘   │
│                            ↑                       │
│                    Yellow floating icon            │
│                    (Click to toggle)               │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Mobile View
```
┌──────────────────────┐
│  Website             │
├──────────────────────┤
│                      │
│  Main Content        │
│                      │
│                      │
│    ┌──────────────┐  │
│    │ SuchakAI     │  │
│    ├──────────────┤  │
│    │ Text here    │  │
│    │              │  │
│    │ [Type msg]   │  │
│    │        [➤]   │  │
│    └──────────────┘  │
│         💬 ◄──────────┘ Floating icon
│                      │
└──────────────────────┘
```

### Color Scheme
- **Icon (Closed):** Yellow with dark background
- **Icon (Open):** Dark background with white X
- **Panel Header:** Yellow gradient
- **User Messages:** Yellow bubbles (right side)
- **Assistant Messages:** Dark cards (left side)
- **Send Button:** Yellow with dark text

---

## 🔐 Privacy

### What The Chatbot Accesses
✅ Your stored profile (name, age, state, category, income)
✅ Eligible schemes matching your profile
✅ Public scheme information (benefits, deadlines, portals)

### What It CANNOT Access
❌ Your password or authentication tokens
❌ Bank account details
❌ Other users' profiles
❌ Sensitive documents
❌ Admin-only data

### Data Storage
- **Chat History:** Cleared when you close the browser
- **No external storage:** Conversations don't leave your device
- **Profile:** Same as existing app storage (localStorage)

---

## 🧪 Testing

### Test 1: Without Profile (Guest)
1. Close the browser or clear localStorage
2. Refresh the page
3. Chat icon appears but shows: "👤 Please complete your profile to chat"
4. Click the link to go to onboarding

### Test 2: With Profile
1. Go to [http://localhost:3000/onboarding](http://localhost:3000/onboarding)
2. Fill in your details and save
3. Return to any page
4. Chat icon is now active
5. Ask questions and get personalized responses

### Test 3: Check Conversation History
1. Open browser DevTools → Application → Session Storage
2. Look for keys starting with `suchakAI_chat_`
3. Each key contains your conversation as JSON

### Test 4: API Testing
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Which schemes am I eligible for?",
    "profile": {
      "name": "Test User",
      "age": 25,
      "gender": "male",
      "state": "Maharashtra",
      "category": "General",
      "occupation": "student",
      "education": "undergraduate",
      "annualIncome": 300000,
      "isRural": false,
      "hasDisability": false,
      "interests": []
    },
    "conversationId": "test_123"
  }'
```

**Expected Response:**
```json
{
  "response": "Great question! You're eligible for...",
  "source": "rule_fallback",
  "schemes": [
    { "name": "Scheme 1", "matchScore": 95 },
    { "name": "Scheme 2", "matchScore": 88 }
  ]
}
```

---

## 📂 Files Added/Modified

### Created Files
- ✨ `components/ChatbotWidget.tsx` — Main UI component (290 lines)
- ✨ `app/api/chat/route.ts` — Backend API (240 lines)
- ✨ `app/_layout-client.tsx` — Layout integration (25 lines)
- ✨ `docs/chatbot-feature.md` — Full documentation

### Modified Files
- 📝 `app/layout.tsx` — Added chatbot integration (3 lines)

### Total Lines Added
~550 lines of code + documentation

---

## 🎯 Key Features

| Feature | Details |
|---------|---------|
| **Floating Widget** | Yellow icon in bottom-right, always accessible |
| **Personalization** | Uses your profile for targeted advice |
| **AI Powered** | Gemini AI generates intelligent responses |
| **Fallback Mode** | Works without API using rule-based logic |
| **Conversation Memory** | Maintains context during your session |
| **Mobile Friendly** | Responsive design for all screen sizes |
| **Dark/Light Mode** | Follows your theme preference |
| **Zero Config** | Works out of the box, no setup needed |

---

## 🚦 Troubleshooting

| Problem | Solution |
|---------|----------|
| Icon not visible | Check DevTools → check z-index conflicts |
| Chat not responding | Open Console → check `/api/chat` error |
| Slow responses | Add `GEMINI_API_KEY` or use rule-based mode |
| Profile not used | Ensure you've completed onboarding |
| Mobile panel too wide | Adjust viewport width or font size |
| Conversation lost | Session storage clears on browser close (normal) |

---

## 📚 Related Files

- **Components:** `components/ChatbotWidget.tsx`
- **API Routes:** `app/api/chat/route.ts`
- **Types:** `lib/types.ts` (UserProfile, Scheme, etc.)
- **Matching Logic:** `lib/matching.ts` (6-factor algorithm)
- **Gemini Integration:** `lib/gemini.ts` (AI calls)
- **Full Docs:** `docs/chatbot-feature.md`

---

## 💬 Example Question Types

Try asking the chatbot about:

### Discovery
- "Which schemes am I eligible for?"
- "What schemes exist for [category/state]?"
- "Are there any new schemes?"

### Eligibility
- "Am I eligible for PM-KISAN?"
- "What are the income limits?"
- "Do I need to be in a specific state?"

### Application
- "How do I apply for [scheme]?"
- "What documents do I need?"
- "Where do I submit the form?"

### Details
- "What benefits will I get?"
- "When is the deadline?"
- "How much money will I receive?"

### Troubleshooting
- "My application was rejected, what now?"
- "How long does approval take?"
- "Can I apply to multiple schemes?"

---

## 🎓 For Developers

### Component Structure
```typescript
ChatbotWidget
├── Floating Icon Button (fixed position)
└── Chat Panel (animated, z-40)
    ├── Header (yellow gradient)
    ├── Messages Container (scrollable)
    │   ├── User Messages (right-aligned, yellow)
    │   └── Assistant Messages (left-aligned, dark)
    ├── Loading State (spinner)
    ├── Error Display (red banner)
    └── Input Form (input + send button)
```

### API Flow
```
POST /api/chat
├── Validate request (message, profile, conversationId)
├── Rank schemes (rankSchemesForProfile)
├── Build prompt with top schemes + profile context
├── Call Gemini API (if available)
│   └── Return intelligent response
└── Fallback to rule-based generator
    └── Generate deterministic response
```

### State Management
- User profile from `localStorage` (`soochai_profile` key)
- Chat messages in component state
- Conversation history in `sessionStorage`
- In-memory conversation cache on server

---

## 🔮 Future Enhancements

Planned features:
- [ ] Multi-language responses (Hindi, Tamil, Telugu)
- [ ] Document verification with AI vision
- [ ] Direct scheme application filing
- [ ] Deadline reminders & notifications
- [ ] Persistent chat history via Supabase
- [ ] Chatbot analytics & common questions dashboard
- [ ] User feedback ratings
- [ ] Voice input/output support

---

## 📞 Support

**Something not working?**

1. **Check the chatbot is open** — Click yellow icon in bottom-right
2. **Verify profile is set** — Go to `/onboarding` and save your profile
3. **Check browser console** — Open DevTools (F12) → Console tab
4. **Test the API** — Use curl command from Testing section above
5. **Review docs** — See `docs/chatbot-feature.md` for details

**Want to customize?**
- Adjust colors in `app/globals.css` (CSS variables)
- Modify responses in `app/api/chat/route.ts` (rule-based generator)
- Change UI in `components/ChatbotWidget.tsx` (Tailwind classes)

---

## 🎉 You're All Set!

The chatbot is ready to help citizens discover and understand government schemes. Start the dev server and see it in action:

```bash
npm run dev
# Open http://localhost:3000
# Click yellow chat icon in bottom-right corner
# Ask: "Which schemes am I eligible for?"
```

Happy chatting! 🤖✨
