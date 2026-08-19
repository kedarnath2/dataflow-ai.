import React from 'react';
import { Database, Cpu, Zap, ArrowRight, CheckCircle2, Code2, Layers, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Data Sources',
      subtitle: 'Plug & Play Integration',
      description: 'Connect PostgreSQL, Snowflake, Stripe, or Google BigQuery in under 60 seconds with secure read-only API keys or native connectors.',
      icon: Database,
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      iconColor: 'text-cyan-400',
      codeSnippet: `// 1-Click Connection Config
const dataflow = new DataFlow({
  source: 'postgresql://prod-db',
  mode: 'zero-copy-stream',
  encryption: 'AES-256-GCM'
});`
    },
    {
      number: '02',
      title: 'AI Models & Generates Insights',
      subtitle: 'Automated Schema Discovery',
      description: 'Our neural data engine automatically models table relationships, normalizes metrics, and runs real-time statistical anomaly detection.',
      icon: Cpu,
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      iconColor: 'text-indigo-400',
      codeSnippet: `// Autonomous AI Synthesis
const insights = await dataflow.analyze({
  metrics: ['MRR', 'CAC', 'Churn'],
  detectAnomalies: true
});`
    },
    {
      number: '03',
      title: 'Act & Automate Decisions',
      subtitle: 'Continuous Workflow Execution',
      description: 'Publish live interactive dashboards to team members or trigger automated webhook alerts to Slack and CRM workflows when metrics shift.',
      icon: Zap,
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      iconColor: 'text-emerald-400',
      codeSnippet: `// Automated Slack Dispatch
dataflow.on('metric_spike', (alert) => {
  slack.send('#exec-updates', alert.summary);
});`
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3.5 py-1 rounded-full">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How DataFlow AI turns complexity into clarity
          </h2>
          <p className="text-base text-slate-400">
            No 6-month data engineering overhauls. Up and running in under 5 minutes.
          </p>
        </div>

        {/* 3 Step Process Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800/90 relative flex flex-col justify-between group hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                      {step.number}
                    </span>
                    <div className={`px-3 py-1 rounded-full border text-xs font-mono font-semibold ${step.badgeColor}`}>
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <Icon className={`w-5 h-5 ${step.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Code / Config Preview snippet */}
                <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pb-2 mb-2 border-b border-slate-800/80">
                    <span className="flex items-center space-x-1">
                      <Code2 className="w-3 h-3 text-cyan-400" />
                      <span>STEP_{step.number}_CONFIG.TS</span>
                    </span>
                    <span className="text-emerald-400 font-semibold">VALIDATED</span>
                  </div>
                  <pre className="text-cyan-300/90 leading-tight">
                    <code>{step.codeSnippet}</code>
                  </pre>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
