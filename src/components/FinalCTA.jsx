import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="sandbox" className="py-24 relative overflow-hidden bg-radial-gradient">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl glass-card border border-cyan-500/30 text-center space-y-8 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Accent Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500"></div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT SANDBOX ACCESS • NO CREDIT CARD REQUIRED</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Start analyzing your data in under 5 minutes
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Join forward-thinking data teams who use DataFlow AI to replace static reports with real-time intelligence.
            </p>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-md mx-auto pt-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm font-medium flex items-center justify-center space-x-2"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Sandbox link generated! Redirecting to demo workspace...</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="flex-1 px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2 whitespace-nowrap group"
                >
                  <span>Launch Free Sandbox</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC-2 Compliant</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Cancel Anytime</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
