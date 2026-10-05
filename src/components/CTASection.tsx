"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Shield, Cpu } from "lucide-react";

interface CTASectionProps {
  onOpenAuth: (mode?: "signin" | "signup") => void;
}

export default function CTASection({ onOpenAuth }: CTASectionProps) {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl glass-panel p-8 sm:p-14 overflow-hidden border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 shadow-2xl">
          {/* Ambient Glow mesh inside card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              JOIN 10,000+ AI ENGINEERING TEAMS
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Accelerate Your <br className="hidden sm:inline" />
              <span className="text-gradient">AI Autonomous Stack?</span>
            </h2>

            <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Get started with 14 days of free Pro access. No credit card required, instant API key generation, full feature access.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenAuth("signup")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>Create Free Account</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Checklist */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 14-Day Free Trial
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-indigo-400" /> Instant API Provisioning
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cyan-400" /> Cancel Anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
