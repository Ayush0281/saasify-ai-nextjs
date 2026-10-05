"use client";

import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import MetricsGrid from "@/components/dashboard/MetricsGrid";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import PromptGenerator from "@/components/dashboard/PromptGenerator";
import AuthModal from "@/components/AuthModal";
import { Cpu, Plus, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeframe, setTimeframe] = useState("7d");
  const [deployModalOpen, setDeployModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          timeframe={timeframe}
          setTimeframe={setTimeframe}
          onNewAgent={() => setDeployModalOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-8 space-y-8 overflow-y-auto">
          {/* Welcome Banner */}
          <div className="rounded-2xl glass-panel p-6 border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 relative overflow-hidden shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                SaaSify AI Control Tower
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Welcome back, <span className="text-gradient">Alex Chen</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Your 14 autonomous agent worker nodes are operating at optimal sub-10ms performance.
              </p>
            </div>

            <button
              onClick={() => setDeployModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all hover:scale-105 z-10 flex-shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Deploy New Agent Node</span>
            </button>
          </div>

          {/* Metrics Grid */}
          <MetricsGrid timeframe={timeframe} />

          {/* Analytics Chart & Activity Stream Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              <AnalyticsChart timeframe={timeframe} />
              <PromptGenerator />
            </div>

            <div className="space-y-8">
              <RecentActivity />

              {/* System Cluster Card */}
              <div className="rounded-2xl glass-panel p-6 border border-slate-800/80 bg-slate-900/60 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    Cluster Shards Health
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono">100% HEALTH</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-slate-300">US-East-1 (Virginia)</span>
                    <span className="text-cyan-400 font-mono">4.2 ms • 6 Nodes</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-slate-300">EU-Central-1 (Frankfurt)</span>
                    <span className="text-cyan-400 font-mono">8.1 ms • 4 Nodes</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-slate-300">AP-Northeast-1 (Tokyo)</span>
                    <span className="text-cyan-400 font-mono">11.4 ms • 4 Nodes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Deploy Agent Modal */}
      <AuthModal
        isOpen={deployModalOpen}
        onClose={() => setDeployModalOpen(false)}
        defaultMode="signup"
      />
    </div>
  );
}
