'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, ExternalLink, Copy, Check } from 'lucide-react';
import { UserProfile } from '@/lib/types';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  source?: 'gemini' | 'rule_fallback';
  schemes?: Array<{ name: string; matchScore: number }>;
}

interface ChatbotWidgetProps {
  currentProfile?: UserProfile | null;
}

const QUICK_SUGGESTIONS = [
  { text: 'Which schemes match me?', icon: '🎯' },
  { text: 'How do I apply?', icon: '📝' },
  { text: 'What documents needed?', icon: '📋' },
  { text: 'What are benefits?', icon: '💰' },
];

export function ChatbotWidget({ currentProfile }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionId] = useState(() => `chat_${Date.now()}_${Math.random().toString(36).slice(2)}`);

  // Load messages from session storage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(`suchakAI_chat_${sessionId}`);
    if (stored) {
      try {
        setMessages(JSON.parse(stored));
      } catch {
        // Ignore parse errors
      }
    }
  }, [sessionId]);

  // Save messages to session storage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem(`suchakAI_chat_${sessionId}`, JSON.stringify(messages));
    }
  }, [messages, sessionId]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleCopyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(`copied_${Date.now()}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => {
      const form = document.querySelector('form');
      if (form) {
        form.dispatchEvent(new Event('submit', { bubbles: true }));
      }
    }, 100);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !currentProfile) return;

    const userMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      role: 'user',
      content: inputValue.trim(),
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          profile: currentProfile,
          conversationId: sessionId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: `msg_${Date.now() + 1}`,
        role: 'assistant',
        content: data.response,
        timestamp: Date.now(),
        source: data.source || 'gemini',
        schemes: data.schemes || [],
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get response';
      setError(errorMessage);

      // Add a fallback error message
      const errorMsg: ChatMessage = {
        id: `msg_${Date.now() + 1}`,
        role: 'assistant',
        content: `I apologize, but I encountered an error: ${errorMessage}. Please try again or check your internet connection.`,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg border border-[var(--border-subtle)] transition-all duration-300 ${
          isOpen
            ? 'bg-[var(--accent-yellow)] text-zinc-950 hover:bg-[#f5d741]'
            : 'bg-[var(--card-bg)] text-[var(--accent-yellow)] hover:bg-[var(--card-hover)] hover:border-[var(--accent-yellow)]'
        }`}
        title={isOpen ? 'Close Chat' : 'Open Chat'}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-48px)] h-[600px] rounded-[24px] border border-[var(--border-subtle)] bg-[var(--panel-bg)] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">

          {/* Header */}
          <div className="flex-shrink-0 bg-gradient-to-r from-[var(--accent-yellow)] to-amber-400 px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-zinc-950 tracking-tight">SuchakAI Assistant</h3>
              <p className="text-xs text-zinc-800">Ask about schemes for {currentProfile?.name || 'you'}</p>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-[var(--background)]">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 px-2">
                <div className="w-12 h-12 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[var(--accent-yellow)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Welcome to SuchakAI!</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    Ask me anything about government schemes, eligibility, benefits, or application procedures.
                  </p>
                </div>
                <div className="w-full space-y-2">
                  {QUICK_SUGGESTIONS.map((sugg, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickSuggestion(sugg.text)}
                      className="w-full text-left px-3 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] hover:border-[var(--accent-yellow)] hover:bg-[var(--card-hover)] transition-all"
                    >
                      <span className="mr-2">{sugg.icon}</span>
                      {sugg.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg text-sm group ${
                        msg.role === 'user'
                          ? 'bg-[var(--accent-yellow)] text-zinc-950 font-medium'
                          : 'bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-primary)]'
                      }`}
                    >
                      <p className="whitespace-pre-wrap break-words">{msg.content}</p>

                      {/* Scheme suggestion pills */}
                      {msg.schemes && msg.schemes.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-[var(--border-subtle)]">
                          {msg.schemes.slice(0, 3).map((scheme, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--accent-yellow)]/10 border border-[var(--accent-yellow)]/30 text-xs text-[var(--accent-yellow)]"
                            >
                              ✨ {scheme.matchScore}%
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Message actions */}
                      <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleCopyMessage(msg.content)}
                          className="p-1 hover:bg-[var(--card-hover)] rounded text-xs"
                          title="Copy message"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>

                      {msg.source === 'rule_fallback' && (
                        <p className="text-xs opacity-60 mt-1">📋 Rule-based response</p>
                      )}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] px-4 py-3 rounded-lg flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-[var(--accent-yellow)] animate-spin" />
                      <p className="text-sm text-[var(--text-secondary)]">Thinking...</p>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Error Display */}
          {error && (
            <div className="flex-shrink-0 px-6 py-2 bg-red-500/10 border-t border-red-500/30 text-xs text-red-400">
              ⚠️ {error}
            </div>
          )}

          {/* Input Area */}
          <form
            onSubmit={handleSendMessage}
            className="flex-shrink-0 border-t border-[var(--border-subtle)] bg-[var(--panel-bg)] p-4"
          >
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about schemes..."
                disabled={loading || !currentProfile}
                className="flex-1 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-full px-4 py-2.5 text-sm placeholder-[var(--text-muted)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !inputValue.trim() || !currentProfile}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-yellow)] text-zinc-950 hover:bg-[#f5d741] disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold"
                title="Send message"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            {!currentProfile && (
              <p className="text-xs text-[var(--text-secondary)] mt-2 text-center">
                👤 Please{' '}
                <a href="/onboarding" className="text-[var(--accent-yellow)] hover:underline inline-flex items-center gap-1">
                  complete your profile <ExternalLink className="w-3 h-3" />
                </a>{' '}
                to chat
              </p>
            )}
          </form>
        </div>
      )}
    </>
  );
}
