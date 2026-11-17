import React from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function CtaSection() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-surface py-space-xxl">
      {/* Centered Ambient Radial Pulse */}
      <div className="pointer-events-none absolute inset-x-1/4 top-1/2 h-96 -translate-y-1/2 rounded-full bg-primary-container/10 blur-[130px]" />

      <div className="relative mx-auto max-w-4xl px-margin-mobile text-center md:px-margin-tablet">
        <span className="text-xs uppercase font-semibold tracking-widest text-primary">Get Started Today</span>

        <h2 className="mt-space-sm text-3xl sm:text-5xl lg:text-headline-xl font-extrabold text-on-surface leading-tight">
          Have an Idea? <br />
          <span className="bg-gradient-to-r from-on-surface via-primary to-secondary bg-clip-text text-transparent">
            Let's Make It Real.
          </span>
        </h2>

        <p className="mx-auto mt-space-md max-w-2xl text-base sm:text-body-lg text-on-surface-variant leading-relaxed">
          Setiap bisnis memiliki keunikan dan tantangannya tersendiri. Diskusikan rencana digitalisasi Anda bersama tim engineering &amp; desain DARAE untuk solusi yang tepat sasaran.
        </p>

        <div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-md">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center justify-center gap-space-xs rounded-full bg-primary-container px-space-xl py-space-md text-sm font-bold text-on-primary-container shadow-[0_0_24px_rgba(117,222,217,0.4)] transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-on-primary active:scale-95"
          >
            <span>Start Your Project</span>
            <Send className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/6282117088846?text=Halo%20DARAE%20Creative%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek%20digital."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-space-xs rounded-full bg-surface-container px-space-xl py-space-md text-sm font-bold text-on-surface shadow-sm border border-surface-container-high transition-all duration-300 hover:bg-surface-container-high hover:text-primary hover:border-primary/40"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
            <span>WhatsApp Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
