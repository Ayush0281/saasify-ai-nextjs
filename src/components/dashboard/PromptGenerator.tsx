"use client";

import React, { useState } from "react";
import { Sparkles, Terminal, Send, Copy, Check, Zap, Play } from "lucide-react";

export default function PromptGenerator() {
  const [prompt, setPrompt] = useState("Analyze vector embedding clustering efficiency for user dataset #9281");
  const [isExecuting, setIsExecuting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<string | null>(
    "✓ Vector Shard Clustering Score: 0.984\n✓ Recommended Index: HNSW with Cosine Distance\n✓ Estimated Query Latency: 4.1ms\n✓ Token Consumption: 142 tokens"
  );

  const handleRunPrompt = () => {
    if (!prompt.trim() || isExecuting) return;
    setIsExecuting(true);
    setResult("⚡ Allocating LLM worker nodes... Ingesting prompt vector...");

    setTimeout(() => {
      setResult(
        `✓ AI Execution Completed in 6.4ms\n----------------------------------------\n[Output Payload]\nTask: ${prompt}\nStatus: SUCCESS\nSuggested Action: Auto-scaled 3 worker nodes.\nMemory Allocation: 512MB RAM`
      );
      setIsExecuting(false);
    }, 900);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-2xl glass-panel p-6 border border-slate-800/80 bg-slate-900/60 shadow-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          Interactive AI Agent Playground
        </h3>
        <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/30">
          MODEL: SaaSify-Llama3-70B
        </span>
      </div>

      {/* Input Form */}
      <div className="space-y-3">
        <label className="block text-xs font-medium text-slate-300">
          Agent Command Prompt
        </label>
        <div className="relative">
          <textarea
            rows={3}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono transition-colors resize-none"
            placeholder="Type your autonomous agent instruction..."
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
            <Zap className="w-3.5 h-3.5 text-cyan-400" /> Max Latency Ceiling: 20ms
          </div>

          <button
            onClick={handleRunPrompt}
            disabled={isExecuting}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-indigo-500/20 disabled:opacity-50"
          >
            {isExecuting ? (
              <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Run Agent Prompt</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output Console Box */}
      {result && (
        <div className="relative p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between text-[10px] text-slate-500 pb-2 border-b border-slate-900 mb-2">
            <span>Agent Output Payload</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <pre className="whitespace-pre-wrap text-cyan-300/90 leading-relaxed font-mono">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}
