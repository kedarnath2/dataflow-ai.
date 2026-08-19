import React, { useState } from 'react';
import { Sparkles, BarChart3, PieChart, LineChart, Terminal, CheckCircle2, ArrowRight, Play, Cpu, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductShowcase() {
  const samplePrompts = [
    {
      id: 'forecast',
      query: 'Forecast Q4 ARR growth with 95% confidence intervals',
      category: 'Predictive Modeling',
      metrics: { title: 'Q4 ARR Forecast', val: '$1.84M', growth: '+22.8%' },
      summary: 'DataFlow AI engine calculated revenue trajectories using historical seasonal cohorts. ARR projected to reach $1.84M by Dec 31 with 95% statistical confidence.',
      chartType: 'line',
      insights: [
        'Enterprise SaaS expansion accounts for 68% of new growth',
        'Net Dollar Retention (NDR) tracking strong at 124%',
        'Low risk of seasonal dip in December'
      ]
    },
    {
      id: 'churn',
      query: 'Identify customer churn anomalies across subscription tiers',
      category: 'Anomaly Detection',
      metrics: { title: 'Churn Risk Index', val: '1.18%', growth: '-0.35%' },
      summary: 'AI detected 14 accounts in the Starter Tier exhibiting a 40% drop in weekly active query volume over 14 days. Re-engagement trigger recommended.',
      chartType: 'bar',
      insights: [
        'Starter Tier churn risk elevated due to onboarding friction',
        'Pro and Enterprise Tiers show 99.2% 12-month retention',
        'Automated email sequence dispatched to at-risk accounts'
      ]
    },
    {
      id: 'cac',
      query: 'Decompose marketing Customer Acquisition Cost (CAC) by channel',
      category: 'Attribution Analysis',
      metrics: { title: 'Blended CAC', val: '$142', growth: '-12.4%' },
      summary: 'Organic search & developer documentation drive highest ROI with a $48 CAC. Paid search CAC increased to $210 due to competitive bidding.',
      chartType: 'pie',
      insights: [
        'Developer doc traffic converts at 6.4% (Highest ROI channel)',
        'Recommend reallocating 20% budget from Paid Search to Content',
        'Payback period reduced from 4.2 months to 2.8 months'
      ]
    }
  ];

  const [activePrompt, setActivePrompt] = useState(samplePrompts[0]);
  const [customInput, setCustomInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSelectPrompt = (prompt) => {
    setIsProcessing(true);
    setActivePrompt(prompt);
    setTimeout(() => {
      setIsProcessing(false);
    }, 400);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setActivePrompt({
        id: 'custom',
        query: customInput,
        category: 'Custom NL Query',
        metrics: { title: 'Analyzed Metric', val: '$248.5K', growth: '+15.2%' },
        summary: `Custom analysis executed for "${customInput}". Telemetry correlated with historical benchmarks with 99.1% execution accuracy.`,
        insights: [
          'High positive correlation with user cohort activity',
          'No statistically significant anomalies detected in 30-day window',
          'Telemetry pipeline healthy and normalized'
        ]
      });
    }, 500);
  };

  return (
    <section id="product-showcase" className="py-24 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/50 border border-indigo-800/40 px-3.5 py-1 rounded-full">
            Interactive Product Workbench
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ask questions in natural English. Get instant interactive charts.
          </h2>
          <p className="text-base text-slate-400">
            Click a sample prompt below or type your own question to test DataFlow AI's real-time reasoning engine.
          </p>
        </div>

        {/* Workbench Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sample Prompts & Custom Query Input */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-2">
              SELECT SAMPLE AI PROMPT
            </h3>

            {samplePrompts.map((p) => (
              <div
                key={p.id}
                onClick={() => handleSelectPrompt(p)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  activePrompt.id === p.id 
                    ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30' 
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                    {p.category}
                  </span>
                  {activePrompt.id === p.id && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-slate-100 flex items-center justify-between">
                  <span>"{p.query}"</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                </p>
              </div>
            ))}

            {/* Custom Input */}
            <form onSubmit={handleCustomSubmit} className="pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Type a custom query (e.g. 'Show net dollar retention')..."
                  className="w-full pl-4 pr-24 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors flex items-center space-x-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Run Query</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Dynamic Live Workbench Display */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl glass-card border border-slate-800/90 shadow-2xl relative min-h-[420px] flex flex-col justify-between">
              
              {/* Top Workbench Status Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-slate-300">
                      Query Execution Sandbox • DataFlow v2.0 Engine
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                    Latency: 38ms
                  </span>
                </div>

                {/* Animated Result Container */}
                <AnimatePresence mode="wait">
                  {isProcessing ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-16 flex flex-col items-center justify-center space-y-3"
                    >
                      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs font-mono text-slate-400">Synthesizing telemetry & neural projections...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={activePrompt.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Metric Header Card */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div>
                          <div className="text-xs font-mono text-slate-400 uppercase">{activePrompt.metrics.title}</div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-0.5">
                            {activePrompt.metrics.val}
                          </div>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono">
                          <span>{activePrompt.metrics.growth} vs prior cohort</span>
                        </div>
                      </div>

                      {/* AI Executive Summary Paragraph */}
                      <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs sm:text-sm text-slate-200 leading-relaxed">
                        <div className="flex items-center space-x-1.5 text-cyan-400 font-semibold font-mono mb-1">
                          <Sparkles className="w-4 h-4" />
                          <span>AI Executive Synthesis</span>
                        </div>
                        {activePrompt.summary}
                      </div>

                      {/* Key Takeaways Checklist */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono font-semibold text-slate-400 uppercase">Key Takeaways & Actionable Levers</div>
                        {activePrompt.insights.map((insight, i) => (
                          <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{insight}</span>
                          </div>
                        ))}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Footer Callout */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>MODEL: GPT-4o / DATAFLOW-ANALYTICS-V2</span>
                <span className="text-cyan-400 hover:underline cursor-pointer flex items-center space-x-1">
                  <span>Export Report to PDF/Slack</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
