import React from 'react';
import { ArrowRight, Play, Sparkles, ShieldCheck, Cpu, Database } from 'lucide-react';
import DashboardMockup from './DashboardMockup';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Top Content */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Small Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-inner"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              DataFlow AI v2.0 Engine Released
            </span>
            <span className="text-xs text-cyan-400 font-mono pl-1">→</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Turn raw business data into <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              actionable decisions
            </span>
          </motion.h1>

          {/* Short Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Your business data has answers. DataFlow AI unifies SQL databases, Stripe telemetry, and SaaS analytics to generate real-time dashboards and automated AI insights in seconds.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <a
              href="#sandbox"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-6 py-3.5 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95 group"
            >
              <span>Start Exploring Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#product-showcase"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 px-6 py-3.5 rounded-xl transition-all duration-200 hover:border-slate-700"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
              <span>See How It Works</span>
            </a>
          </motion.div>

          {/* Feature Highlights Pills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium"
          >
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC-2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Sub-50ms Query Latency</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Database className="w-4 h-4 text-indigo-400" />
              <span>50+ Pre-built Connectors</span>
            </div>
          </motion.div>

        </div>

        {/* Live Dashboard Preview Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 lg:mt-16 max-w-5xl mx-auto relative"
        >
          {/* Ambient Glow Frame around Dashboard */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-cyan-500/20 blur-xl opacity-70 pointer-events-none"></div>

          <DashboardMockup />
        </motion.div>

      </div>
    </section>
  );
}
