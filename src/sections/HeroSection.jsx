import React from 'react';
import { ArrowRight, Eye, Lock, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-space-xxl pt-28 lg:pt-36" id="home">
      {/* Ambient Radial Teal Background Flares */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary-container/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-secondary-container/20 blur-[160px]" />

      <div className="relative mx-auto max-w-[1440px] px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-gutter">
          {/* Left Column: Editorial & Value Pitch */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-7">
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-md py-space-xs shadow-sm border border-surface-container-high">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-primary">
                Creative Digital &amp; IT Solutions
              </span>
            </div>

            {/* Hero Display Typography */}
            <h1 className="mt-space-md font-headline-xl text-3xl sm:text-5xl lg:text-headline-xl text-on-surface font-extrabold tracking-tight leading-tight">
              We Build <br />
              <span className="bg-gradient-to-r from-on-surface via-primary to-primary-container bg-clip-text text-transparent">
                Digital Reality.
              </span>
            </h1>

            <p className="mt-space-sm text-lg sm:text-headline-sm font-semibold text-secondary">
              Turn Your Ideas Into Powerful Digital Experiences.
            </p>

            <p className="mt-space-md max-w-xl text-base sm:text-body-lg text-on-surface-variant leading-relaxed">
              Kami menghadirkan solusi digital melalui pengembangan teknologi modern dan desain kreatif kelas enterprise yang dirancang presisi untuk membantu bisnis Anda berekspansi secara eksponensial.
            </p>

            {/* CTAs */}
            <div className="mt-space-xl flex flex-wrap items-center gap-space-md">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-space-xs rounded-full bg-primary-container px-space-xl py-space-md text-sm font-bold text-on-primary-container shadow-[0_0_24px_rgba(117,222,217,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_32px_rgba(117,222,217,0.5)] active:translate-y-0"
              >
                <span>Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                onClick={(e) => handleScrollTo(e, '#portfolio')}
                className="inline-flex items-center justify-center gap-space-xs rounded-full bg-surface-container-high px-space-xl py-space-md text-sm font-bold text-on-surface shadow-sm border border-surface-container-highest transition-all duration-300 hover:bg-surface-variant hover:text-primary hover:border-primary/40"
              >
                <span>Lihat Portfolio</span>
                <Eye className="w-4 h-4 text-primary" />
              </a>
            </div>

            {/* Trust Badges & Bandung Tech Hub Signature */}
            <div className="mt-space-xl grid grid-cols-3 gap-space-md pt-space-lg text-left border-t border-surface-container-high/50 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">10+</span>
                <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                  Klien Puas
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-secondary">100%</span>
                <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                  Tailored Build
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-tertiary">BDG</span>
                <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                  Bandung, ID
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Showcase Mockup System */}
          <div className="relative flex justify-center lg:col-span-6 xl:col-span-5">
            <div className="relative w-full max-w-[520px]">
              {/* Desktop Browser Shell Simulation */}
              <div className="relative rounded-2xl bg-surface-container-high p-space-md shadow-2xl backdrop-blur-xl border border-surface-container-highest">
                {/* Window Toolbar */}
                <div className="mb-space-md flex items-center justify-between pb-space-xs border-b border-surface-container">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-error-container" />
                    <div className="h-3 w-3 rounded-full bg-secondary-container" />
                    <div className="h-3 w-3 rounded-full bg-primary-container" />
                  </div>
                  <div className="rounded-full bg-surface-container px-space-md py-0.5 text-center text-xs text-on-surface-variant border border-surface-container-highest/60 font-mono">
                    darae-dashboard.cloud
                  </div>
                  <Lock className="w-4 h-4 text-outline" />
                </div>

                {/* Internal Browser Canvas: Visual Metric Graph & KPIs */}
                <div className="space-y-space-md rounded-xl bg-surface-container-lowest p-space-md border border-surface-container">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary font-medium">Realtime Metric</p>
                      <p className="text-base sm:text-headline-sm font-semibold text-on-surface">Client Ecosystem Yield</p>
                    </div>
                    <span className="rounded-full bg-surface-container px-space-sm py-1 text-xs font-semibold text-primary border border-primary/20 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +34.8% MoM
                    </span>
                  </div>

                  {/* Inline Vector Sparkline Visualization */}
                  <div className="h-28 w-full rounded-lg bg-surface-container p-space-xs overflow-hidden border border-surface-container-high/40">
                    <svg className="h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 90">
                      <defs>
                        <linearGradient id="cyanSparkle" x1="0%" x2="0%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#75ded9" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#75ded9" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,70 Q 40,65 70,40 T 140,48 T 210,18 T 280,32 T 340,12 L 380,8 L 380,90 L 0,90 Z"
                        fill="url(#cyanSparkle)"
                      />
                      <path
                        d="M0,70 Q 40,65 70,40 T 140,48 T 210,18 T 280,32 T 340,12 L 380,8"
                        fill="none"
                        stroke="#92fbf5"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>

                  {/* Quick Tech Health Status Grid */}
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="rounded-lg bg-surface-container p-space-sm border border-surface-container-high">
                      <span className="text-xs uppercase text-outline font-medium">API Uptime</span>
                      <p className="text-lg font-bold text-primary">99.98%</p>
                    </div>
                    <div className="rounded-lg bg-surface-container p-space-sm border border-surface-container-high">
                      <span className="text-xs uppercase text-outline font-medium">TTFB Latency</span>
                      <p className="text-lg font-bold text-secondary">38ms</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Mobile App Floating Pod */}
              <div className="-mt-10 -ml-4 sm:-ml-6 w-60 rounded-2xl bg-surface-container p-space-sm shadow-xl backdrop-blur-2xl border border-primary/20">
                <div className="flex items-center gap-space-xs">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-on-primary-container shadow-md">
                    <ShieldCheck className="w-5 h-5 text-on-primary-container" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs sm:text-sm font-bold text-on-surface">Clean Code Audit</p>
                    <p className="text-xs text-primary font-medium">Zero Vulnerability</p>
                  </div>
                </div>
              </div>

              {/* Floating Micro Tag Pill */}
              <div className="absolute -right-3 top-1/4 rounded-full bg-surface-container-highest px-space-md py-1.5 shadow-lg backdrop-blur-md border border-primary/30">
                <div className="flex items-center gap-1.5 text-primary">
                  <Zap className="w-4 h-4 fill-primary" />
                  <span className="text-xs font-semibold tracking-wide text-on-surface">Sub-second Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
