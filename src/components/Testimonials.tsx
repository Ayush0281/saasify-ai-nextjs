"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, Building2, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  category: "all" | "engineering" | "founders" | "research";
  rating: number;
  quote: string;
  metrics: string;
}

export default function Testimonials() {
  const [filter, setFilter] = useState<"all" | "engineering" | "founders" | "research">("all");

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Elena Rostova",
      role: "VP of Autonomous Systems",
      company: "ScaleTech Cloud",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      category: "engineering",
      rating: 5,
      quote:
        "SaaSify AI transformed our multi-agent inference pipeline overnight. We cut model latency from 180ms down to 12ms while reducing infrastructure spend by 42%.",
      metrics: "Reduced latency by 93%"
    },
    {
      id: 2,
      name: "Marcus Vance",
      role: "Co-Founder & CTO",
      company: "Synthetix Dynamics",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      category: "founders",
      rating: 5,
      quote:
        "The visual neural pipeline builder saved our engineering team 4 months of building custom orchestration code. It's hands down the best AI SaaS platform available.",
      metrics: "Saved 4 months dev time"
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      role: "Lead AI Researcher",
      company: "Nexus Labs AI",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      category: "research",
      rating: 5,
      quote:
        "The real-time telemetry stream gave us granular visibility into model failovers and token usage that no other tool provided out of the box.",
      metrics: "100% Vector Uptime"
    },
    {
      id: 4,
      name: "David Kormann",
      role: "Head of Infrastructure",
      company: "Vortex Data",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      category: "engineering",
      rating: 5,
      quote:
        "SOC2 compliance and zero-retention data privacy were mandatory for our enterprise enterprise clients. SaaSify AI checked every single box seamlessly.",
      metrics: "Enterprise SOC2 Verified"
    },
    {
      id: 5,
      name: "Jessica Chen",
      role: "Founder & CEO",
      company: "HyperFlow AI",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      category: "founders",
      rating: 5,
      quote:
        "We scaled from 10k to 10M API requests per month without changing a single line of backend logic. The autoscaling agent nodes are magic.",
      metrics: "Scaled 1,000x seamlessly"
    },
    {
      id: 6,
      name: "Professor Julian Thorne",
      role: "Principal AI Architect",
      company: "OmniMind Corp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      category: "research",
      rating: 5,
      quote:
        "SaaSify AI's predictive vector index optimizer eliminated cold starts for our fine-tuned models completely. Highly recommended!",
      metrics: "0ms Cold Starts"
    }
  ];

  const filtered =
    filter === "all" ? testimonials : testimonials.filter((t) => t.category === filter);

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow mesh */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            CUSTOMER STORIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Engineering Leaders at <br className="hidden sm:inline" />
            <span className="text-gradient">Fast-Growing AI Companies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            See how top startups and enterprises rely on SaaSify AI for mission-critical multi-agent automation.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Stories" },
              { id: "engineering", label: "Engineering Leads" },
              { id: "founders", label: "Founders & CTOs" },
              { id: "research", label: "AI Researchers" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800/80 bg-slate-900/50 hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-500/30 group-hover:text-indigo-400/60 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* User Bio & Metric */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {item.metrics}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-indigo-500/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role} • <span className="text-slate-300 font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
