import React from 'react';
import { Gauge, MonitorSmartphone, Zap, Sparkles, ShieldCheck, ArrowRight, Palette, Shield } from 'lucide-react';

export default function WhyDaraeSection() {
  return (
    <section className="relative w-full bg-surface-container-lowest py-space-xxl" id="about">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-semibold tracking-wider text-primary">Why Darae</span>
          <h2 className="mt-space-xs text-3xl sm:text-headline-lg font-bold text-on-surface">
            More Than Just Digital Solutions.
          </h2>
          <p className="mt-space-sm text-base text-on-surface-variant leading-relaxed">
            Kami menggabungkan kreativitas desain modern dengan fondasi engineering yang kokoh untuk menghasilkan solusi digital yang tidak hanya atraktif secara estetika, namun secara nyata menghasilkan dampak terukur pada konversi bisnis Anda.
          </p>
        </div>

        {/* Bento Grid (3 Top, 2 Bottom) */}
        <div className="mt-space-xl grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Fast Development */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container p-space-lg shadow-md border border-surface-container-high transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high hover:border-primary/40 group">
            <div>
              <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                <Gauge className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-on-surface">Fast Development</h3>
              <p className="mt-space-xs text-sm text-on-surface-variant leading-relaxed">
                Pengerjaan proyek dengan alur kerja terstruktur, agile sprint mingguan, dan pelaporan transparan untuk mendukung penyelesaian tepat waktu tanpa mengorbankan kualitas.
              </p>
            </div>
            <div className="mt-space-md flex items-center gap-space-xs text-primary font-medium text-xs uppercase tracking-wide">
              <span>Agile Iteration</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Responsive Design */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container p-space-lg shadow-md border border-surface-container-high transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high hover:border-secondary/40 group">
            <div>
              <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-secondary border border-secondary/20 group-hover:scale-110 transition-transform">
                <MonitorSmartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-on-surface">Responsive Design</h3>
              <p className="mt-space-xs text-sm text-on-surface-variant leading-relaxed">
                Website dan sistem yang dirancang fluid, adaptif di setiap skala layar smartphone, tablet, laptop, hingga layar monitor ultra-wide resolusi 4K.
              </p>
            </div>
            <div className="mt-space-md flex items-center gap-space-xs text-secondary font-medium text-xs uppercase tracking-wide">
              <span>Multi-screen Perfection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 3: High Performance */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container p-space-lg shadow-md border border-surface-container-high transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high hover:border-primary-container/40 group">
            <div>
              <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-primary-container border border-primary-container/20 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-on-surface">High Performance</h3>
              <p className="mt-space-xs text-sm text-on-surface-variant leading-relaxed">
                Optimasi performa Core Web Vitals, dynamic asset compression, dan CDN global edge caching untuk kecepatan muat sub-detik yang disukai Google.
              </p>
            </div>
            <div className="mt-space-md flex items-center gap-space-xs text-primary-container font-medium text-xs uppercase tracking-wide">
              <span>Lighthouse 95+</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Bottom 2 Wider Bento Cards */}
        <div className="mt-gutter grid grid-cols-1 gap-gutter md:grid-cols-2">
          {/* Card 4: Premium Design */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container p-space-lg shadow-md border border-surface-container-high transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high hover:border-primary/40 group">
            <div>
              <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-on-surface">Premium Design Architecture</h3>
              <p className="mt-space-xs text-sm text-on-surface-variant leading-relaxed">
                Estetika visual modern berkelas korporat internasional. Kami menyusun design system, micro-interactions, dan tipografi unik yang mempertegas otoritas merek Anda di mata target pasar.
              </p>
            </div>
            <div className="mt-space-md flex items-center justify-between text-outline border-t border-surface-container-high pt-space-sm">
              <span className="text-xs uppercase font-medium">Custom UI Components</span>
              <Palette className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Card 5: Best Value */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container p-space-lg shadow-md border border-surface-container-high transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high hover:border-secondary/40 group">
            <div>
              <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-secondary border border-secondary/20 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-on-surface">Transparent &amp; Best Value</h3>
              <p className="mt-space-xs text-sm text-on-surface-variant leading-relaxed">
                Solusi berkualitas dengan paket penawaran yang kompetitif, tanpa biaya siluman. Termasuk pelatihan pengoperasian sistem, jaminan garansi bug, serta pendampingan pasca-peluncuran.
              </p>
            </div>
            <div className="mt-space-md flex items-center justify-between text-outline border-t border-surface-container-high pt-space-sm">
              <span className="text-xs uppercase font-medium">100% Milestone Based</span>
              <Shield className="w-5 h-5 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
