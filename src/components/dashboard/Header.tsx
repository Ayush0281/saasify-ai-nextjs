"use client";

import React, { useState } from "react";
import { Search, Bell, Plus, Shield, Sparkles, SlidersHorizontal, RefreshCw } from "lucide-react";

interface HeaderProps {
  timeframe: string;
  setTimeframe: (tf: string) => void;
  onNewAgent: () => void;
}

export default function Header({ timeframe, setTimeframe, onNewAgent }: HeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const notifications = [
    { title: "Agent #12 Shard Rebalanced", time: "2m ago", type: "success" },
    { title: "Vector Cache Hit Ratio > 99%", time: "15m ago", type: "info" },
    { title: "SOC2 Audit Log Generated", time: "1h ago", type: "system" }
  ];

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-30">
      {/* Search Input */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search agents, metrics, logs, or prompt histories..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Timeframe Switcher */}
        <div className="hidden sm:flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
          {["24h", "7d", "30d", "1y"].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                timeframe === tf
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white relative transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 z-50 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-white border-b border-slate-800 pb-2">
                <span>System Notifications</span>
                <span className="text-[10px] text-cyan-400 font-mono">3 New</span>
              </div>
              <div className="space-y-2">
                {notifications.map((n, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                    <div className="text-slate-200 font-medium">{n.title}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* New Agent Button */}
        <button
          onClick={onNewAgent}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Deploy Agent</span>
        </button>
      </div>
    </header>
  );
}
