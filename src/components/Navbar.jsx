import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0B0F17] rounded-[11px] flex items-center justify-center">
                <Activity className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                DataFlow<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <div className="relative group cursor-pointer py-1">
              <span className="flex items-center space-x-1 hover:text-white transition-colors">
                <span>Product</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </span>
            </div>

            <a href="#solutions" className="hover:text-white transition-colors py-1">
              Solutions
            </a>

            <a href="#features" className="hover:text-white transition-colors py-1">
              Features
            </a>

            <a href="#how-it-works" className="hover:text-white transition-colors py-1">
              How It Works
            </a>

            <a href="#decisions" className="hover:text-white transition-colors py-1 text-cyan-400/90 font-mono text-xs px-2 py-1 rounded bg-cyan-950/40 border border-cyan-800/40">
              DECISIONS.md
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#sandbox" className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2">
              Sign In
            </a>
            <a 
              href="#sandbox" 
              className="inline-flex items-center justify-center space-x-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 px-4 py-2.5 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 active:scale-95"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F17]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 shadow-2xl transition-all duration-200">
          <div className="flex flex-col space-y-3 pt-2 text-base font-medium text-slate-200">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Product & Features
            </a>
            <a 
              href="#solutions" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Solutions
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#decisions" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-800/40 text-sm font-mono"
            >
              📄 Read DECISIONS.md
            </a>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col space-y-2.5">
            <a 
              href="#sandbox" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg border border-slate-700 font-medium text-slate-200 hover:bg-slate-900 text-sm"
            >
              Sign In
            </a>
            <a 
              href="#sandbox" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300 text-sm flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20"
            >
              <span>Start Analyzing Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
