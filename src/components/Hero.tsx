"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Play,
  Activity,
  Cpu,
  Zap,
  TrendingUp,
  Shield,
  Layers,
  Database,
  Terminal,
  CheckCircle2,
  Lock,
  Globe
} from "lucide-react";

interface HeroProps {
  onOpenAuth: (mode?: "signin" | "signup") => void;
  onOpenDemo: () => void;
}

export default function Hero({ onOpenAuth, onOpenDemo }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"agents" | "analytics" | "terminal">("agents");
  const [demoQuery, setDemoQuery] = useState("Optimize vector search latency across 12 nodes");
  const [queryRunning, setQueryRunning] = useState(false);
  const [outputLog, setOutputLog] = useState<string[]>([
    "✓ Initialized multi-agent cluster [Node-US-East-1]",
    "✓ Vector cache hit ratio: 99.4%",
    "⚡ Autonomous agent optimized index routing in 6.4ms"
  ]);

  const handleRunQuery = () => {
    if (queryRunning) return;
    setQueryRunning(true);
    const newLog = [
      `> Ingesting user prompt: "${demoQuery}"`,
      "🧠 Allocating LLM worker pool (4 nodes)...",
      "⚡ Executed dynamic shard balancing",
      "✓ Completed task: Latency reduced by 34%"
    ];
    let step = 0;
    const interval = setInterval(() => {
      if (step < newLog.length) {
        setOutputLog((prev) => [...prev, newLog[step]]);
        step++;
      } else {
        setQueryRunning(false);
        clearInterval(interval);
      }
    }, 600);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-slate-950">
      {/* Glow Mesh Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Banner Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs text-slate-300 backdrop-blur-md shadow-lg shadow-indigo-950/40">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold text-cyan-400">SaaSify AI 2.0 Released</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Autonomous Agent Workflows</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Build & Scale Autonomous <br className="hidden sm:inline" />
            <span className="text-gradient">AI Agent Workflows</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Deploy autonomous agents, monitor real-time inference latency, and automate enterprise operations with sub-second execution speeds.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAuth("signup")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-semibold text-base shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-base backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:border-cyan-500/40"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>Watch Interactive Demo</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-indigo-400" /> SOC2 Type II Certified
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" /> Sub-10ms Latency
            </span>
          </div>
        </motion.div>

        {/* Interactive Simulated Preview Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl glass-panel p-2 sm:p-4 border border-slate-700/60 bg-slate-950/90 shadow-2xl shadow-indigo-950/50">
            {/* Ambient Corner Glows */}
            <div className="absolute -top-1 -left-1 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl pointer-events-none" />

            {/* Mockup Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 rounded-xl border border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline">
                  https://app.saasify.ai/agent-hub/v2
                </span>
              </div>

              {/* Interactive Mockup Tabs */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab("agents")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "agents"
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 inline mr-1" />
                  Agents
                </button>
                <button
                  onClick={() => setActiveTab("analytics")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "analytics"
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 inline mr-1" />
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab("terminal")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "terminal"
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 inline mr-1" />
                  Console
                </button>
              </div>
            </div>

            {/* Mockup Dynamic Content */}
            <div className="p-4 sm:p-6 bg-slate-900/60 rounded-xl border border-slate-800/80 min-h-[360px]">
              {activeTab === "agents" && (
                <div className="space-y-6">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400">Active AI Agents</div>
                        <div className="text-2xl font-bold text-white mt-1">1,482</div>
                        <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3 h-3" /> +28.4% this week
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <Cpu className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400">Avg Inference Speed</div>
                        <div className="text-2xl font-bold text-white mt-1">6.2 ms</div>
                        <div className="text-[11px] text-cyan-400 flex items-center gap-1 mt-0.5">
                          <Zap className="w-3 h-3" /> Ultra-fast LLM routing
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400">Monthly Success Rate</div>
                        <div className="text-2xl font-bold text-white mt-1">99.98%</div>
                        <div className="text-[11px] text-indigo-400 flex items-center gap-1 mt-0.5">
                          <Shield className="w-3 h-3" /> Zero failover drops
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Interactive Prompt Runner */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
                      <span>Test SaaSify AI Command Engine</span>
                      <span className="text-[11px] text-cyan-400 font-mono">Status: READY</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        value={demoQuery}
                        onChange={(e) => setDemoQuery(e.target.value)}
                        className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        placeholder="Type agent instruction..."
                      />
                      <button
                        onClick={handleRunQuery}
                        disabled={queryRunning}
                        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                      >
                        {queryRunning ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Execute Agent</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Real-time Stream Output */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1.5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-slate-900">
                      Live Output Logs
                    </div>
                    {outputLog.map((log, idx) => (
                      <div key={idx} className="text-cyan-300/90 leading-relaxed">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Throughput & Latency Spectrum</h4>
                      <p className="text-xs text-slate-400">Real-time model responses across regions</p>
                    </div>
                    <div className="text-xs text-indigo-400 font-mono">Live Sync: 120 FPS</div>
                  </div>

                  {/* Visual Chart Graphic */}
                  <div className="h-48 bg-slate-950 rounded-xl border border-slate-800 p-4 flex items-end justify-between gap-2">
                    {[45, 60, 38, 75, 90, 82, 95, 110, 88, 120, 140, 135, 160, 180].map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                        <div
                          style={{ height: `${(val / 180) * 100}%` }}
                          className="w-full bg-gradient-to-t from-indigo-600 via-indigo-500 to-cyan-400 rounded-t-sm group-hover:from-indigo-400 group-hover:to-cyan-300 transition-all cursor-pointer"
                        />
                        <span className="text-[9px] text-slate-600 font-mono">{i + 1}h</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                      <span className="text-slate-400">Total Tokens Processed</span>
                      <div className="text-lg font-bold text-white mt-1">48.2M / day</div>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                      <span className="text-slate-400">Failover Latency</span>
                      <div className="text-lg font-bold text-cyan-400 mt-1">1.8 ms (Global)</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "terminal" && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between text-slate-500 text-[11px] pb-2 border-b border-slate-900">
                    <span>saasify-cli v2.4.0</span>
                    <span className="text-emerald-400">STATUS: CONNECTED</span>
                  </div>
                  <p className="text-indigo-400">$ saasify deploy --model gpt-4o-mini --agents 12</p>
                  <p className="text-slate-400">[INFO] Provisioning 12 containerized worker nodes...</p>
                  <p className="text-slate-400">[INFO] Attaching PostgreSQL vector embeddings store...</p>
                  <p className="text-emerald-400">✓ Deployment successful in 0.84s! Endpoint: https://api.saasify.ai/v1/agents</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
