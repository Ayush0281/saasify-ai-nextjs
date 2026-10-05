"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, RefreshCw, Cpu, Activity, Zap, CheckCircle } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Initializing Autonomous Agent Hub", detail: "Spawning multi-modal worker nodes across 4 global regions...", latency: "4.2ms" },
    { title: "Ingesting Enterprise Context", detail: "Vectorizing database schemas and indexing REST endpoints...", latency: "12.8ms" },
    { title: "Executing Neural Workflow Pipeline", detail: "Running automated query optimizer with LLM fallbacks...", latency: "8.1ms" },
    { title: "Task Completion & Output Sync", detail: "Generated optimized response payload and cached result.", latency: "3.5ms" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl glass-panel border border-slate-700/80 bg-slate-950 p-6 shadow-2xl"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  AI
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    SaaSify AI Product Walkthrough
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE SIMULATION
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">Interactive preview of multi-agent autonomous execution</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video / Interactive Simulation Screen */}
            <div className="relative rounded-xl border border-slate-800 bg-slate-900/90 overflow-hidden min-h-[320px] flex flex-col justify-between p-6">
              {/* Background ambient mesh */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

              {/* Simulation Steps */}
              <div className="space-y-4 z-10">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-indigo-400 animate-pulse" />
                    Agent Runtime Engine v2.4.0
                  </span>
                  <span className="flex items-center gap-2 text-cyan-400">
                    <Activity className="w-4 h-4" />
                    Active Node Latency: {steps[currentStep].latency}
                  </span>
                </div>

                <div className="grid gap-3">
                  {steps.map((step, idx) => {
                    const isActive = idx === currentStep;
                    const isDone = idx < currentStep;
                    return (
                      <div
                        key={idx}
                        onClick={() => setCurrentStep(idx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                          isActive
                            ? "bg-slate-800/80 border-indigo-500/60 shadow-lg shadow-indigo-950/40"
                            : isDone
                            ? "bg-slate-900/50 border-slate-800/80 opacity-75"
                            : "bg-slate-950/40 border-slate-800/40 opacity-40"
                        }`}
                      >
                        <div className="mt-0.5">
                          {isDone ? (
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                          ) : isActive ? (
                            <Zap className="w-5 h-5 text-cyan-400 animate-bounce" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] text-slate-500">
                              {idx + 1}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                            <span className="text-[10px] font-mono text-slate-400">{step.latency}</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">{step.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Simulation Player Controls */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-2 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? "Pause Stream" : "Resume Stream"}
                  </button>

                  <button
                    onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Next Step
                  </button>
                </div>

                <div className="text-xs text-slate-400">
                  Step <span className="text-white font-semibold">{currentStep + 1}</span> of {steps.length}
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>Ready to automate your workflows?</span>
              <button
                onClick={() => {
                  onClose();
                  // prompt user
                }}
                className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-2"
              >
                Start Free Trial Now →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
