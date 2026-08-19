import React from 'react';
import { Sparkles, Activity, FileText, ArrowRight, Zap, Bell, LineChart, Cpu, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const featuresList = [
    {
      id: 'ai-insights',
      title: 'AI Insights Engine',
      badge: 'AUTOMATED REASONING',
      description: 'Stop staring at static charts. DataFlow AI detects statistical anomalies, attributes metric spikes, and recommends high-leverage revenue actions.',
      icon: Sparkles,
      iconColor: 'text-cyan-400',
      gradient: 'from-cyan-500/10 via-sky-500/5 to-transparent',
      borderColor: 'group-hover:border-cyan-500/40',
      highlights: [
        'Automatic root-cause attribution',
        'Cohort churn probability scoring',
        'Natural language telemetry queries'
      ],
      previewGraphic: (
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
            <span className="text-cyan-400 flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI ANOMALY DETECTED</span>
            </span>
            <span className="text-[10px] text-slate-500">2 min ago</span>
          </div>
          <p className="text-slate-200">
            <span className="text-emerald-400 font-semibold">+28% spike</span> in Enterprise signups correlated with v2.1 pricing rollout.
          </p>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="w-3/4 h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      id: 'real-time-analytics',
      title: 'Real-Time Analytics',
      badge: 'SUB-SECOND STREAMING',
      description: 'Ingest millions of events per second with zero lag. Watch conversion funnels, API latencies, and transaction volumes update live on your screen.',
      icon: Activity,
      iconColor: 'text-indigo-400',
      gradient: 'from-indigo-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-indigo-500/40',
      highlights: [
        'Sub-second event pipeline ingestion',
        'Live streaming dashboard widgets',
        'Custom SQL & NoSQL aggregations'
      ],
      previewGraphic: (
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
            <span className="text-indigo-400 flex items-center space-x-1">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>TELEMETRY STREAM</span>
            </span>
            <span className="text-[10px] text-emerald-400">1,240 req/sec</span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between text-slate-300">
              <span>Checkout Flow Latency</span>
              <span className="text-emerald-400 font-semibold">18ms</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Stripe Webhook Processing</span>
              <span className="text-cyan-400 font-semibold">99.98%</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'automated-reports',
      title: 'Automated Reports',
      badge: 'SLACK & EMAIL SYNCS',
      description: 'Ditch manual CSV exports. Schedule rich daily executive digests and threshold alert notifications directly to Slack, Microsoft Teams, or Email.',
      icon: FileText,
      iconColor: 'text-emerald-400',
      gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      borderColor: 'group-hover:border-emerald-500/40',
      highlights: [
        'Automated Slack executive summaries',
        'PDF board deck generator',
        'Threshold alert triggers & webhooks'
      ],
      previewGraphic: (
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
            <span className="text-emerald-400 flex items-center space-x-1">
              <Bell className="w-3.5 h-3.5" />
              <span>SLACK DIGEST SENT</span>
            </span>
            <span className="text-[10px] text-slate-500">08:00 AM</span>
          </div>
          <p className="text-slate-300 text-[11px] italic">
            "Good morning! Yesterday's MRR grew to $148.2K. Top performing channel: Organic Direct."
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#0B0F17]">
      
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3.5 py-1 rounded-full">
            Core Product Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for modern data teams who move fast
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            From raw SQL tables to executive decision-making. DataFlow AI handles the entire analytical pipeline.
          </p>
        </div>

        {/* Feature Cards 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuresList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-b ${item.gradient} glass-card border border-slate-800/90 transition-all duration-300 ${item.borderColor} flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Interactive Mini Card */}
                <div className="pt-4 border-t border-slate-800/80">
                  {item.previewGraphic}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
