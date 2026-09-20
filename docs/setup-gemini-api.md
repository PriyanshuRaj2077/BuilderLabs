# 🔑 Setting Up Gemini API for Enhanced Chatbot

## Overview

By default, the chatbot uses **rule-based responses** (instant, deterministic). When you add a **Gemini API key**, it enables **AI-powered intelligent responses** that understand natural language and provide more personalized answers.

---

## Why Add Gemini API?

### Without Gemini API ❌
- Uses rule-based pattern matching
- Limited to predefined responses
- Good for basic questions

### With Gemini API ✅
- Natural language understanding
- More personalized answers
- Handles complex questions better
- Contextual and nuanced responses

---

## Step 1: Get Gemini API Key

1. Visit: https://aistudio.google.com/app/apikey
2. Click **"Get API Key"** → **"Create API Key in new project"**
3. Copy your generated API key
4. Keep it safe! 🔐

---

## Step 2: Add to Local Development

### Option A: Create `.env.local` (Recommended)

Create a new file `.env.local` in the project root:

```env
GEMINI_API_KEY=your_api_key_here_from_step_1
```

✅ This file is **automatically gitignored** and won't be committed to GitHub

### Option B: Use Vercel Environment Variables

If deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add new variable:
   - Name: `GEMINI_API_KEY`
   - Value: your API key
4. Save and redeploy

---

## Step 3: Restart Development Server

```bash
npm run dev
```

The chatbot will now use Gemini AI for responses! 🚀

---

## Verify It's Working

### Test with These Questions

1. **"Tell me about PM-KISAN"**
   - With Gemini: Detailed explanation specific to the scheme
   - Without Gemini: Rule-based description

2. **"What schemes match my profile?"**
   - With Gemini: Nuanced explanation tailored to user
   - Without Gemini: Standard list format

3. **"Is Mudra Yojana suitable for a farmer?"**
   - With Gemini: Intelligent analysis of fit
   - Without Gemini: Generic eligibility info

---

## Troubleshooting

### Chatbot Still Using Rule-Based Responses?

1. **Check `.env.local` exists** and contains `GEMINI_API_KEY`
2. **Restart dev server**: Kill and run `npm run dev` again
3. **Check console logs**: Look for "Gemini API" vs "rule_fallback" in responses
4. **Verify API key validity**: Test the key at https://aistudio.google.com/

### "Gemini API failed" Error

1. API key may have expired → Get a new one
2. API quota may be exceeded → Check Google AI Studio
3. Network issue → Check internet connection
4. Invalid API key format → Copy from Google AI Studio again

---

## Security Best Practices

### ✅ DO
- Store API key in `.env.local` (gitignored)
- Use `.env.local` for local development only
- Regenerate key if accidentally exposed
- Keep `.env.example` as template without secrets

### ❌ DON'T
- Commit `.env.local` to git
- Share API key in code or documentation
- Use test key in production
- Expose key in error messages

---

## Environment File Structure

### `.env.example` (Committed to Git)
```env
# Template file
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### `.env.local` (Local Only, Not Committed)
```env
# Your actual API key (keep this private!)
GEMINI_API_KEY=your_actual_api_key_from_google_ai_studio
```

---

## API Key Status Check

### Check Current Config

```bash
# See if API key is loaded
echo $GEMINI_API_KEY

# Or test the endpoint
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello","profile":{...},"conversationId":"test"}'
```

Look in the response JSON:
```json
{
  "source": "gemini",        // ✅ Using Gemini AI
  "response": "..."
}
```

vs

```json
{
  "source": "rule_fallback",  // ⚠️ Using fallback (no Gemini)
  "response": "..."
}
```

---

## Costs & Quotas

- **Free Tier**: 60 requests per minute, 1500 per day
- **Free Model**: Gemini 2.0-Flash (latest, fastest)
- **Upgrade**: Visit Google AI Studio for paid plans

For heavy usage, upgrade your plan at: https://aistudio.google.com/

---

## Testing After Setup

### Full Test Suite

```bash
# Question 1: List eligible schemes
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Which schemes am I eligible for?",
    "profile": {"name":"Ramesh","age":42,"occupation":"farmer",...},
    "conversationId": "test1"
  }'

# Question 2: Scheme details
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Tell me about PM-KISAN",
    "profile": {...},
    "conversationId": "test2"
  }'

# Question 3: Application process
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How do I apply?",
    "profile": {...},
    "conversationId": "test3"
  }'
```

**Expected Result:** `"source": "gemini"` in all responses ✅

---

## Next Steps

1. ✅ Get API key from Google AI Studio
2. ✅ Add to `.env.local`
3. ✅ Restart dev server
4. ✅ Test with sample questions
5. ✅ Enjoy AI-powered chatbot! 🎉

---

## Additional Resources

- **Gemini API Docs:** https://ai.google.dev/docs
- **Gemini Models:** https://ai.google.dev/models
- **API Key Management:** https://aistudio.google.com/app/apikey
- **Rate Limits:** https://ai.google.dev/docs/usage_and_billing

---

## Summary

| Component | Status |
|-----------|--------|
| **Chatbot (Rule-based)** | ✅ Works without API key |
| **Gemini API (Optional)** | ✅ Enhances with natural language |
| **Configuration** | ✅ `.env.local` (gitignored) |
| **Security** | ✅ No secrets in repository |
| **Local Development** | ✅ Ready to use |

Chatbot is **fully functional** with or without Gemini API key! 🚀

