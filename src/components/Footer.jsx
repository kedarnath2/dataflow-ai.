import React from 'react';
import { Activity, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info (2 Columns) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#0B0F17] rounded-[7px] flex items-center justify-center">
                  <Activity className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                DataFlow<span className="text-cyan-400">.</span>AI
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The AI-powered analytics platform that turns raw business data into real-time dashboards and predictive executive decisions.
            </p>

            {/* Live Operational Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-white transition-colors">AI Insights Engine</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Real-Time Streaming</a></li>
              <li><a href="#product-showcase" className="hover:text-white transition-colors">Interactive Workbench</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Native Connectors</a></li>
              <li><a href="#decisions" className="text-cyan-400 hover:text-cyan-300 font-mono">DECISIONS.md</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#solutions" className="hover:text-white transition-colors">SaaS & ARR Analytics</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">E-Commerce Telemetry</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Product Analytics</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Executive Reporting</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Whitepaper</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} DataFlow AI Inc. Built for Technical Assessment & Interview Showcase.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors flex items-center space-x-1">
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors flex items-center space-x-1">
              <Twitter className="w-4 h-4" />
              <span>@DataFlowAI</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
