"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Cpu, Zap, TrendingUp, Users, Activity, CheckCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface MetricsGridProps {
  timeframe: string;
}

export default function MetricsGrid({ timeframe }: MetricsGridProps) {
  // Multipliers based on timeframe for dynamic feel
  const multiplier =
    timeframe === "24h" ? 0.2 : timeframe === "7d" ? 0.5 : timeframe === "30d" ? 1 : 4.2;

  const metrics = [
    {
      title: "Monthly Recurring Revenue",
      value: `$${(128450 * multiplier).toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
      change: "+14.2%",
      isPositive: true,
      subtext: "vs previous period",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-500",
      badge: "MRR Growth"
    },
    {
      title: "Active AI Inference Nodes",
      value: (1482 * (multiplier > 1 ? 1.8 : 1)).toFixed(0),
      change: "+28.4%",
      isPositive: true,
      subtext: "99.99% operational",
      icon: Cpu,
      color: "from-indigo-500 to-cyan-500",
      badge: "Cluster Grid"
    },
    {
      title: "Avg Inference Latency",
      value: `${(14.2 / (multiplier > 1 ? 1.2 : 1)).toFixed(1)} ms`,
      change: "-12.5%",
      isPositive: true, // latency reduction is positive
      subtext: "Sub-20ms SLA met",
      icon: Zap,
      color: "from-cyan-500 to-sky-500",
      badge: "Ultra-Fast"
    },
    {
      title: "User Conversion Rate",
      value: "4.85%",
      change: "+2.1%",
      isPositive: true,
      subtext: "Free trial to Pro",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
      badge: "Funnel Rate"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {metrics.map((metric, idx) => {
        const Icon = metric.icon;

        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="rounded-2xl glass-panel p-5 border border-slate-800/80 bg-slate-900/60 hover:border-indigo-500/40 transition-all group relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-400">{metric.title}</span>
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${metric.color} p-[1px] shadow-md`}
              >
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>

            {/* Value */}
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {metric.value}
            </div>

            {/* Change Badge & Subtext */}
            <div className="mt-3 flex items-center justify-between text-xs">
              <span
                className={`inline-flex items-center gap-0.5 font-bold px-2 py-0.5 rounded-full ${
                  metric.isPositive
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                }`}
              >
                {metric.isPositive ? (
                  <ArrowUpRight className="w-3.5 h-3.5" />
                ) : (
                  <ArrowDownRight className="w-3.5 h-3.5" />
                )}
                {metric.change}
              </span>
              <span className="text-slate-500 text-[11px] font-mono">{metric.subtext}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
