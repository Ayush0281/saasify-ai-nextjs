"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

interface PricingSwitcherProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingSwitcher({ onSelectPlan }: PricingSwitcherProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      name: "Starter",
      tagline: "For early stage startups & indie hackers building MVP agents.",
      monthlyPrice: 19,
      yearlyPrice: 190,
      popular: false,
      features: [
        "Up to 5 Autonomous Agent Pipelines",
        "100,000 API Inference Requests / mo",
        "Sub-15ms Agent Routing",
        "Standard PostgreSQL Vector Storage",
        "Community & Discord Support",
        "Standard SLA Guarantee"
      ],
      cta: "Start 14-Day Free Trial",
      gradient: "border-slate-800 bg-slate-900/40 hover:border-slate-700"
    },
    {
      name: "Pro",
      tagline: "For growing teams scaling multi-agent production workloads.",
      monthlyPrice: 49,
      yearlyPrice: 490,
      popular: true,
      badge: "MOST POPULAR",
      features: [
        "Up to 25 Autonomous Agent Pipelines",
        "1,000,000 API Inference Requests / mo",
        "Sub-8ms Agent Routing & Failovers",
        "High-Performance Vector Cache (250GB)",
        "Fine-tuning & Custom Prompt Templates",
        "Priority 24/7 Slack & Email Support",
        "SOC2 Type II Audit Logs"
      ],
      cta: "Claim 14-Day Pro Trial",
      gradient: "border-indigo-500/80 bg-slate-900/90 shadow-2xl shadow-indigo-950/80"
    },
    {
      name: "Enterprise",
      tagline: "Dedicated infrastructure, custom SLAs, and custom LLM tuning.",
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: false,
      features: [
        "Unlimited Agent Pipelines",
        "Unlimited API Inference Requests",
        "Dedicated Private VPC Clusters",
        "Custom Fine-Tuned Llama / GPT Models",
        "Custom Data Residency (EU, US, APAC)",
        "Dedicated Solutions Engineer & SLA",
        "24/7 Security Operations Center"
      ],
      cta: "Contact Enterprise Team",
      gradient: "border-slate-800 bg-slate-900/40 hover:border-slate-700"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            TRANSPARENT PRICING
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Flexible Plans tailored for <br className="hidden sm:inline" />
            <span className="text-gradient">Every Scale of AI Workload</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Start with our 14-day free trial. Upgrade or downgrade anytime without hidden fees.
          </p>

          {/* Monthly / Yearly Switcher Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <div className="relative flex items-center bg-slate-900 p-1.5 rounded-full border border-slate-800 shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly Billing
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  billingCycle === "yearly"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>Yearly Billing</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-extrabold border border-emerald-500/30">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
            const period = billingCycle === "yearly" ? "/ yr" : "/ mo";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-3xl glass-panel p-8 border flex flex-col justify-between transition-all duration-300 ${plan.gradient}`}
              >
                {/* Popular Glow Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white text-[11px] font-extrabold tracking-wider uppercase shadow-lg shadow-indigo-500/40 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    {plan.popular && (
                      <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <Zap className="w-5 h-5" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{plan.tagline}</p>

                  {/* Price Header */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-sm text-slate-400 font-semibold">{period}</span>
                    {billingCycle === "yearly" && (
                      <span className="ml-2 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-md">
                        Billed annually
                      </span>
                    )}
                  </div>

                  <div className="my-6 border-t border-slate-800" />

                  {/* Features List */}
                  <div className="space-y-3.5">
                    <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 text-emerald-400">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-8">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white shadow-xl shadow-indigo-500/30 hover:scale-[1.02]"
                        : "bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
