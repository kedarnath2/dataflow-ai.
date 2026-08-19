import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Percent, 
  Zap, 
  Sparkles, 
  ArrowUpRight, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardMockup() {
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [timeRange, setTimeRange] = useState('7d');
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState(null);
  const [isQuerying, setIsQuerying] = useState(false);

  const metricsData = {
    revenue: {
      title: 'Monthly Recurring Revenue',
      value: '$148,290',
      change: '+18.4%',
      isPositive: true,
      subtext: '+$22.4k vs last month',
      chartPath: 'M0,120 Q60,110 120,70 T240,80 T360,30 T480,45 T600,10',
      fillPath: 'M0,120 Q60,110 120,70 T240,80 T360,30 T480,45 T600,10 L600,160 L0,160 Z',
      insightTitle: 'Revenue Expansion Alert',
      insightBody: 'Expansion ARR up 24% driven by Enterprise Tier upgrades. Churn risks remain low at 1.2%.',
      insightType: 'success',
      points: [
        { day: 'Mon', val: '$18.2k' },
        { day: 'Tue', val: '$19.5k' },
        { day: 'Wed', val: '$21.1k' },
        { day: 'Thu', val: '$20.4k' },
        { day: 'Fri', val: '$23.8k' },
        { day: 'Sat', val: '$22.1k' },
        { day: 'Sun', val: '$24.9k' },
      ]
    },
    users: {
      title: 'Active User Cohorts',
      value: '42,850',
      change: '+24.1%',
      isPositive: true,
      subtext: '+8.3k new signups',
      chartPath: 'M0,130 Q70,90 140,100 T280,60 T420,40 T560,20 T600,15',
      fillPath: 'M0,130 Q70,90 140,100 T280,60 T420,40 T560,20 T600,15 L600,160 L0,160 Z',
      insightTitle: 'Viral Engagement Pattern',
      insightBody: 'DAU/MAU ratio reached 64.2%. High retention detected in onboarding flow step 3.',
      insightType: 'info',
      points: [
        { day: 'Mon', val: '5.2k' },
        { day: 'Tue', val: '5.8k' },
        { day: 'Wed', val: '6.1k' },
        { day: 'Thu', val: '5.9k' },
        { day: 'Fri', val: '6.4k' },
        { day: 'Sat', val: '6.2k' },
        { day: 'Sun', val: '7.2k' },
      ]
    },
    churn: {
      title: 'Customer Churn Rate',
      value: '1.18%',
      change: '-0.42%',
      isPositive: true, // lower churn is positive
      subtext: '0.4% lower than benchmark',
      chartPath: 'M0,40 Q80,50 160,80 T320,100 T480,120 T600,135',
      fillPath: 'M0,40 Q80,50 160,80 T320,100 T480,120 T600,135 L600,160 L0,160 Z',
      insightTitle: 'Proactive Churn Safeguard',
      insightBody: 'AI flagged 12 accounts with declining API usage; automated re-engagement workflow triggered.',
      insightType: 'warning',
      points: [
        { day: 'Mon', val: '1.60%' },
        { day: 'Tue', val: '1.52%' },
        { day: 'Wed', val: '1.41%' },
        { day: 'Thu', val: '1.35%' },
        { day: 'Fri', val: '1.28%' },
        { day: 'Sat', val: '1.22%' },
        { day: 'Sun', val: '1.18%' },
      ]
    },
    conversion: {
      title: 'Funnel Conversion Rate',
      value: '4.82%',
      change: '+3.10%',
      isPositive: true,
      subtext: '+0.8% organic conversion',
      chartPath: 'M0,110 Q90,95 180,65 T360,70 T540,30 T600,20',
      fillPath: 'M0,110 Q90,95 180,65 T360,70 T540,30 T600,20 L600,160 L0,160 Z',
      insightTitle: 'Optimization Opportunity',
      insightBody: 'Mobile checkout conversion increased by 3.8% following payment step simplification.',
      insightType: 'success',
      points: [
        { day: 'Mon', val: '3.9%' },
        { day: 'Tue', val: '4.1%' },
        { day: 'Wed', val: '4.3%' },
        { day: 'Thu', val: '4.2%' },
        { day: 'Fri', val: '4.6%' },
        { day: 'Sat', val: '4.5%' },
        { day: 'Sun', val: '4.82%' },
      ]
    }
  };

  const current = metricsData[selectedMetric];

  const handleSimulateAi = (e) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;
    setIsQuerying(true);
    setAiResponse(null);

    setTimeout(() => {
      setIsQuerying(false);
      setAiResponse({
        query: aiQuery,
        answer: `Analysis complete: Based on current telemetry, revenue velocity is projected to reach $172,000 next month (+16% YoY). Primary growth levers identified in Enterprise SaaS tier upgrades.`,
        confidence: '98.6%',
        timeTaken: '0.04s'
      });
    }, 600);
  };

  return (
    <div className="w-full rounded-2xl glass-card border border-slate-800/90 shadow-2xl overflow-hidden text-slate-100">
      
      {/* Header bar of Dashboard Mockup */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-slate-800/80 bg-slate-950/60">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="text-xs font-mono text-slate-400 border-l border-slate-800 pl-3 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LIVE TELEMETRY • STAGING ENVIRONMENT</span>
          </span>
        </div>

        {/* Time range selector */}
        <div className="flex items-center space-x-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-xs font-medium">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-2.5 py-1 rounded-md transition-all ${
                timeRange === range
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-6">

        {/* Top Metric Cards Toggle Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Revenue */}
          <div 
            onClick={() => setSelectedMetric('revenue')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              selectedMetric === 'revenue' 
                ? 'bg-slate-800/80 border-cyan-500/60 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40' 
                : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400">Revenue</span>
              <DollarSign className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">$148.2K</div>
            <div className="flex items-center space-x-1 mt-1 text-xs font-medium text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18.4%</span>
            </div>
          </div>

          {/* Active Users */}
          <div 
            onClick={() => setSelectedMetric('users')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              selectedMetric === 'users' 
                ? 'bg-slate-800/80 border-cyan-500/60 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40' 
                : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400">Active Users</span>
              <Users className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">42.8K</div>
            <div className="flex items-center space-x-1 mt-1 text-xs font-medium text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+24.1%</span>
            </div>
          </div>

          {/* Churn Rate */}
          <div 
            onClick={() => setSelectedMetric('churn')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              selectedMetric === 'churn' 
                ? 'bg-slate-800/80 border-cyan-500/60 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40' 
                : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400">Churn Rate</span>
              <Percent className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">1.18%</div>
            <div className="flex items-center space-x-1 mt-1 text-xs font-medium text-emerald-400">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>-0.42%</span>
            </div>
          </div>

          {/* Conversion */}
          <div 
            onClick={() => setSelectedMetric('conversion')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              selectedMetric === 'conversion' 
                ? 'bg-slate-800/80 border-cyan-500/60 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40' 
                : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400">Conversion</span>
              <Zap className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">4.82%</div>
            <div className="flex items-center space-x-1 mt-1 text-xs font-medium text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+3.10%</span>
            </div>
          </div>

        </div>

        {/* Dynamic Chart Display Section */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white flex items-center space-x-2">
                <span>{current.title}</span>
                <span className="text-xs font-normal text-slate-400">({timeRange.toUpperCase()})</span>
              </h3>
              <p className="text-xs text-slate-400">{current.subtext}</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-extrabold text-cyan-400 font-mono">{current.value}</span>
            </div>
          </div>

          {/* SVG Animated Chart Visualization */}
          <div className="relative h-44 sm:h-52 w-full pt-4">
            {/* Grid Horizontal Guide Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="w-full border-b border-slate-700 border-dashed"></div>
              <div className="w-full border-b border-slate-700 border-dashed"></div>
              <div className="w-full border-b border-slate-700 border-dashed"></div>
            </div>

            <svg viewBox="0 0 600 160" className="w-full h-full overflow-visible preserve-3d">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area Fill */}
              <motion.path
                key={`fill-${selectedMetric}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                d={current.fillPath}
                fill="url(#chartGradient)"
              />

              {/* Line Stroke */}
              <motion.path
                key={`line-${selectedMetric}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                d={current.chartPath}
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>

            {/* X-Axis Labels */}
            <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
              {current.points.map((p, idx) => (
                <div key={idx} className="text-center">
                  <div>{p.day}</div>
                  <div className="font-semibold text-slate-300">{p.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Insight Pill & Anomaly Notification */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 mt-0.5 sm:mt-0">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300 font-mono">
                  AI INTELLIGENCE ENGINE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span className="text-[11px] text-slate-400 font-mono">Confidence: 99.4%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                <span className="font-semibold text-white">{current.insightTitle}: </span>
                {current.insightBody}
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 self-end sm:self-center bg-cyan-950/50 hover:bg-cyan-900/50 px-3 py-1.5 rounded-md border border-cyan-800/40 transition-colors">
            <span>Apply Recommendation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Natural Language Prompt Query Simulator */}
        <div className="pt-2">
          <form onSubmit={handleSimulateAi} className="relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              placeholder="Ask DataFlow AI e.g. 'Predict revenue for next quarter' or 'Show CAC anomaly'..."
              className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            <button
              type="submit"
              disabled={isQuerying}
              className="absolute right-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-all flex items-center space-x-1"
            >
              {isQuerying ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3 h-3" />
                  <span>Query AI</span>
                </>
              )}
            </button>
          </form>

          {/* AI Response Output Card */}
          <AnimatePresence>
            {aiResponse && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-3 p-3.5 rounded-xl bg-slate-950/90 border border-cyan-500/30 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-cyan-400 font-mono text-[11px]">
                  <span>Query Executed: "{aiResponse.query}"</span>
                  <span>Latency: {aiResponse.timeTaken} • Accuracy: {aiResponse.confidence}</span>
                </div>
                <p className="text-slate-200 leading-relaxed font-sans">{aiResponse.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
