"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Cpu,
  BarChart3,
  Terminal,
  Settings,
  Shield,
  Sparkles,
  ChevronRight,
  LogOut,
  HelpCircle,
  Database,
  ArrowLeft
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "agents", label: "Agent Hub", icon: Cpu, badge: "14 Active" },
    { id: "analytics", label: "Telemetry & Logs", icon: BarChart3 },
    { id: "prompt", label: "AI Playground", icon: Terminal, badge: "Live" },
    { id: "database", label: "Vector Index", icon: Database },
    { id: "security", label: "Security & Audit", icon: Shield },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900/90 border-r border-slate-800/80 flex flex-col justify-between p-4 hidden md:flex min-h-screen sticky top-0">
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="text-base font-extrabold text-white tracking-tight">
              SaaSify <span className="text-gradient">AI</span>
            </span>
          </Link>

          <Link
            href="/"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-xs transition-colors flex items-center gap-1"
            title="Back to Landing Page"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* System Health Badge */}
        <div className="px-3 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Cluster Alpha</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400">99.98%</span>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
            Main Workspace
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-950/50"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Profile Footer */}
      <div className="pt-4 border-t border-slate-800/80 space-y-3">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-950/60 border border-slate-800">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="User"
            className="w-8 h-8 rounded-full object-cover border border-cyan-400/50"
          />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate">Alex Chen</div>
            <div className="text-[10px] text-slate-400 truncate">VP of AI • Pro Plan</div>
          </div>
          <Link href="/" className="text-slate-500 hover:text-rose-400 transition-colors p-1" title="Sign Out">
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
