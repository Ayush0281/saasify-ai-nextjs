"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  BarChart3,
  GitBranch,
  ShieldCheck,
  Sparkles,
  Globe,
  ArrowUpRight,
  CheckCircle,
  Zap,
  Lock,
  Layers,
  RefreshCw
} from "lucide-react";

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  metric: string;
  gradient: string;
}

export default function FeaturesGrid() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features: FeatureItem[] = [
    {
      id: "multi-agent",
      title: "Autonomous Multi-Agent Engine",
      subtitle: "Multi-Model Orchestration",
      description:
        "Orchestrate complex LLM agent clusters with dynamic load balancing, automated failovers, and sub-10ms inter-agent routing.",
      icon: Cpu,
      badge: "Core AI Architecture",
      metric: "< 8.4ms execution",
      gradient: "from-indigo-500 to-cyan-500"
    },
    {
      id: "analytics",
      title: "Real-Time Streaming Analytics",
      subtitle: "Sub-Second Telemetry",
      description:
        "Stream token throughput, active agent states, error logs, and vector store queries in real-time with zero buffer lag.",
      icon: BarChart3,
      badge: "Live Telemetry",
      metric: "120 FPS Data Feed",
      gradient: "from-cyan-500 to-sky-500"
    },
    {
      id: "workflow",
      title: "Neural Pipeline Visualizer",
      subtitle: "Drag & Drop Agent Workflows",
      description:
        "Visually construct multi-step agent pipelines with conditional branching, fallback rules, and custom TypeScript handlers.",
      icon: GitBranch,
      badge: "Visual Builder",
      metric: "100+ Pre-built Templates",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: "security",
      title: "Enterprise Governance & RBAC",
      subtitle: "SOC2 Type II & Encryption",
      description:
        "Complete data sovereignty with AES-256 encryption at rest, TLS 1.3 in transit, and role-based policy enforcement.",
      icon: ShieldCheck,
      badge: "Enterprise Security",
      metric: "100% Compliant",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: "predictive",
      title: "Predictive AI Optimization",
      subtitle: "Proactive Database Tuning",
      description:
        "Autonomous agents continuously analyze query patterns, auto-indexing vector databases before bottlenecks occur.",
      icon: Sparkles,
      badge: "Auto-Tuning",
      metric: "40% Resource Savings",
      gradient: "from-cyan-400 to-indigo-500"
    },
    {
      id: "api",
      title: "Universal API & Webhooks",
      subtitle: "One-Click Integrations",
      description:
        "Connect SaaSify AI to over 200+ developer tools including Postgres, Snowflake, Slack, GitHub, and custom REST APIs.",
      icon: Globe,
      badge: "Developer First",
      metric: "SDKs for 6 Languages",
      gradient: "from-sky-400 to-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            ENGINEERED FOR SCALE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Next-Generation AI Capabilities for <br className="hidden sm:inline" />
            <span className="text-gradient">Modern Tech Stacks</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Everything your engineering team needs to orchestrate autonomous AI workloads, enforce data security, and track real-time ROI.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isSelected = activeFeature === feature.id;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
                className={`relative rounded-2xl glass-panel p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isSelected
                    ? "border-indigo-500/60 bg-slate-900/90 shadow-2xl shadow-indigo-950/60 scale-[1.02]"
                    : "border-slate-800/80 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/70"
                }`}
              >
                {/* Top Bar inside Card */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.gradient} p-0.5 shadow-lg shadow-indigo-500/10`}
                    >
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium mt-1">{feature.subtitle}</p>

                  <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    {feature.metric}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-indigo-600 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
