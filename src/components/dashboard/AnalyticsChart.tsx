"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart2, TrendingUp, Cpu, Zap, Activity, Filter, Download } from "lucide-react";

interface AnalyticsChartProps {
  timeframe: string;
}

export default function AnalyticsChart({ timeframe }: AnalyticsChartProps) {
  const [metricTab, setMetricTab] = useState<"revenue" | "users" | "tokens" | "latency">("revenue");
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Generate chart data points based on timeframe & tab
  const getChartData = () => {
    const pointsCount = timeframe === "24h" ? 12 : timeframe === "7d" ? 7 : timeframe === "30d" ? 15 : 12;
    const baseMult = metricTab === "revenue" ? 80 : metricTab === "users" ? 120 : metricTab === "tokens" ? 45 : 12;

    return Array.from({ length: pointsCount }, (_, i) => {
      const val = Math.floor(baseMult + Math.sin(i * 0.8) * 35 + (i * 4));
      return {
        label: timeframe === "24h" ? `${i * 2}h` : timeframe === "7d" ? `Day ${i + 1}` : `P${i + 1}`,
        value: Math.max(10, val)
      };
    });
  };

  const data = getChartData();
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="rounded-2xl glass-panel p-6 border border-slate-800/80 bg-slate-900/60 shadow-xl space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            Performance & Revenue Analytics
          </h3>
          <p className="text-xs text-slate-400">
            Real-time multi-agent telemetry for timeframe <span className="text-indigo-400 font-mono">{timeframe}</span>
          </p>
        </div>

        {/* Metric Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          {[
            { id: "revenue", label: "Revenue" },
            { id: "users", label: "Active Users" },
            { id: "tokens", label: "Token Stream" },
            { id: "latency", label: "Latency (ms)" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setMetricTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                metricTab === tab.id
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Visual Surface */}
      <div className="relative pt-6 pb-2">
        {/* Tooltip display */}
        {hoveredPoint !== null && (
          <div className="absolute top-0 right-4 px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-mono font-bold shadow-lg z-20">
            {data[hoveredPoint].label}: {data[hoveredPoint].value}{" "}
            {metricTab === "revenue" ? "$" : metricTab === "latency" ? "ms" : "units"}
          </div>
        )}

        {chartType === "bar" ? (
          <div className="h-64 flex items-end justify-between gap-2 border-b border-slate-800 pb-2 pt-8">
            {data.map((item, idx) => {
              const heightPercent = (item.value / maxValue) * 100;
              const isHovered = hoveredPoint === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredPoint(idx)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end"
                >
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full rounded-t-md transition-all duration-300 ${
                      isHovered
                        ? "bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-x-105"
                        : "bg-gradient-to-t from-indigo-600 via-indigo-500 to-cyan-400 opacity-85 group-hover:opacity-100"
                    }`}
                  />
                  <span className="text-[10px] text-slate-500 font-mono">{item.label}</span>
                </div>
              );
            })}
          </div>
        ) : (
          /* Line chart representation */
          <div className="h-64 flex items-end justify-between border-b border-slate-800 pb-2 relative">
            <svg className="w-full h-full overflow-visible">
              <polyline
                fill="none"
                stroke="url(#chartGradient)"
                strokeWidth="3"
                points={data
                  .map((d, i) => {
                    const x = (i / (data.length - 1)) * 100;
                    const y = 100 - (d.value / maxValue) * 80;
                    return `${x}%,${y}%`;
                  })
                  .join(" ")}
              />
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </div>

      {/* Footer info */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Primary Node Stream
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Vector Cache Hit Rate
          </span>
        </div>

        <button
          onClick={() => setChartType(chartType === "bar" ? "line" : "bar")}
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
        >
          Switch to {chartType === "bar" ? "Line" : "Bar"} Chart
        </button>
      </div>
    </div>
  );
}
