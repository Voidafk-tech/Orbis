
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hello! I'm Orbis AI. How can I help you with your business accounting today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: "You are Orbis AI, the intelligent assistant for Orbis Accounting. Orbis Accounting specializes in AR/AP management, WCB compliance, and payroll solutions for B2B businesses. We have 15+ years of experience and managed $50M+ annually. Our primary goal is to help businesses scale by handling their complex accounting needs with precision. If users ask about pricing, tell them to book a consultation. Be professional, concise, and helpful. Do not mention that you are an AI model unless asked.",
          temperature: 0.7,
        }
      });

      const assistantText = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary text-gray-900 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        >
          <span className="material-icons-outlined text-2xl group-hover:rotate-12 transition-transform">chat_bubble</span>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-gray-900">1</div>
        </button>
      ) : (
        <div className="w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl flex flex-col border border-gray-100 dark:border-gray-700 overflow-hidden animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="p-4 bg-primary text-gray-900 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-icons-outlined text-sm">support_agent</span>
              </div>
              <div>
                <h4 className="text-sm font-bold">Orbis AI Assistant</h4>
                <div className="flex items-center gap-1 text-[10px] opacity-75">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded-full p-1 transition-colors">
              <span className="material-icons-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-900/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-gray-900 font-medium' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-2xl flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce"></span>
                  <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce delay-100"></span>
                  <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="relative flex items-center">
              <input 
                type="text"
                placeholder="Ask about our services..."
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl px-4 py-2.5 pr-12 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 text-primary hover:scale-110 disabled:opacity-50 disabled:scale-100 transition-all"
              >
                <span className="material-icons-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
