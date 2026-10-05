"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import PricingSwitcher from "@/components/PricingSwitcher";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import DemoModal from "@/components/DemoModal";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenAuth = (mode: "signin" | "signup" = "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Header Navigation */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onOpenDemo={() => setDemoModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenAuth={handleOpenAuth}
          onOpenDemo={() => setDemoModalOpen(true)}
        />
        <FeaturesGrid />
        <PricingSwitcher onSelectPlan={handleSelectPlan} />
        <Testimonials />
        <CTASection onOpenAuth={handleOpenAuth} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode={authMode}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
