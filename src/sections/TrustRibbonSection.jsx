import React from 'react';
import { Users, Smartphone, Rocket, Network } from 'lucide-react';

export default function TrustRibbonSection() {
  const trustStats = [
    {
      title: '10+ Klien Puas',
      subtitle: 'Kepercayaan UMKM hingga Korporasi',
      icon: Users,
      color: 'text-primary',
    },
    {
      title: 'Responsive Dev',
      subtitle: 'Optimal di Semua Resolusi Layar',
      icon: Smartphone,
      color: 'text-secondary',
    },
    {
      title: 'High Performance',
      subtitle: 'Optimalisasi Akses Super Cepat',
      icon: Rocket,
      color: 'text-primary-container',
    },
    {
      title: 'Bandung Hub',
      subtitle: 'Tim Kreatif & Technical Lokal',
      icon: Network,
      color: 'text-tertiary',
    },
  ];

  return (
    <section className="relative w-full bg-surface-container py-space-xl border-y border-surface-container-high/40">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-space-md rounded-xl bg-surface-container-high p-space-md shadow-sm border border-surface-container-highest transition-all duration-300 hover:border-primary/30"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container ${stat.color} border border-surface-container-high`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-base sm:text-headline-sm font-bold text-on-surface">{stat.title}</p>
                  <p className="text-xs text-on-surface-variant">{stat.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
