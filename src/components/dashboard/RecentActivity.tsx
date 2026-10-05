"use client";

import React from "react";
import { CheckCircle2, Clock, AlertCircle, RefreshCw, Cpu, Database } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      id: "act-1",
      agent: "Postgres Optimizer Agent",
      action: "Executed vector index auto-rebuild on 1.4M rows",
      status: "COMPLETED",
      time: "Just now",
      latency: "4.2 ms"
    },
    {
      id: "act-2",
      agent: "LLM Failover Router",
      action: "Rerouted query batch from US-East-1 to EU-Central-1",
      status: "SUCCESS",
      time: "2 mins ago",
      latency: "8.1 ms"
    },
    {
      id: "act-3",
      agent: "Security Audit Worker",
      action: "Verified SOC2 Type II compliance check for API Key #84",
      status: "COMPLETED",
      time: "6 mins ago",
      latency: "1.2 ms"
    },
    {
      id: "act-4",
      agent: "Prompt Pipeline Synthesizer",
      action: "Generated fine-tuned embeddings payload for search",
      status: "IN_PROGRESS",
      time: "12 mins ago",
      latency: "15.4 ms"
    }
  ];

  return (
    <div className="rounded-2xl glass-panel p-6 border border-slate-800/80 bg-slate-900/60 shadow-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Cpu className="w-4 h-4 text-indigo-400" />
          Live Agent Activity Stream
        </h3>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
          STREAMING 120 FPS
        </span>
      </div>

      <div className="space-y-3">
        {activities.map((item) => (
          <div
            key={item.id}
            className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/30 transition-all flex items-start justify-between gap-3 text-xs"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {item.status === "IN_PROGRESS" ? (
                  <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                )}
              </div>
              <div>
                <div className="font-bold text-white flex items-center gap-2">
                  {item.agent}
                  <span className="text-[9px] font-mono text-slate-500">[{item.latency}]</span>
                </div>
                <div className="text-slate-400 text-[11px] mt-0.5">{item.action}</div>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <span
                className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md ${
                  item.status === "IN_PROGRESS"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                }`}
              >
                {item.status}
              </span>
              <div className="text-[10px] text-slate-500 mt-1">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
