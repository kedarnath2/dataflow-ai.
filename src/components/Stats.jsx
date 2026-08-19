import React from 'react';
import { Clock, ShieldCheck, Zap, Database, CheckCircle2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stats() {
  const capabilities = [
    {
      metric: '< 45ms',
      label: 'Average Query Latency',
      description: 'Distributed in-memory OLAP caching engine delivers instant analytics results.',
      icon: Clock,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      metric: '99.99%',
      label: 'Platform Availability SLA',
      description: 'Built on fault-tolerant Kubernetes clusters with multi-region failover.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    },
    {
      metric: '50+',
      label: 'Native Data Connectors',
      description: '1-click integrations for Snowflake, PostgreSQL, BigQuery, Stripe, and REST APIs.',
      icon: Database,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      metric: 'Zero-Copy',
      label: 'Privacy-First Architecture',
      description: 'Data stays in your cloud. DataFlow AI processes telemetry in-memory without persistent storage.',
      icon: Lock,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20'
    }
  ];

  return (
    <section className="py-16 md:py-20 border-y border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-3 py-1 rounded-full">
            Engineered For Performance & Trust
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
            Everything you need to understand your data
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            No bloated setups. No synthetic metrics. Pure analytical speed and verifiable security.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${item.bgColor} ${item.borderColor} border`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-slate-400">
                    SPEC 0{idx + 1}
                  </span>
                </div>

                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                  {item.metric}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {item.label}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Badges Row */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span className="text-slate-500 uppercase tracking-widest text-[10px]">CONNECTS WITH:</span>
          {['Snowflake', 'PostgreSQL', 'BigQuery', 'ClickHouse', 'Stripe', 'MongoDB', 'AWS Redshift'].map((db, i) => (
            <span key={i} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              {db}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
