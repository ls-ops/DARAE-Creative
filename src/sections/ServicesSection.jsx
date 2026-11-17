import React from 'react';
import { Monitor, Terminal, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Website Development',
      icon: Monitor,
      iconColor: 'text-primary',
      hoverBg: 'group-hover:bg-primary group-hover:text-on-primary',
      accentColor: 'text-primary',
      description:
        'Website profesional yang dirancang responsif, super cepat, serta berorientasi pada konversi penjualan dan kredibilitas brand Anda.',
      features: [
        'Company Profile Korporat',
        'E-Commerce & Payment Gateway',
        'High-Converting Landing Pages',
        'Custom CMS & Web Portals',
        'Technical On-Page SEO Standard',
      ],
      ctaText: 'Explore Service',
      ctaColor: 'text-primary hover:text-primary-container',
    },
    {
      title: 'Application & IT Solutions',
      icon: Terminal,
      iconColor: 'text-secondary',
      hoverBg: 'group-hover:bg-secondary group-hover:text-on-secondary',
      accentColor: 'text-secondary',
      description:
        'Pengembangan aplikasi mobile native/hybrid dan sistem digital terintegrasi untuk mengotomatisasi operasional bisnis Anda.',
      features: [
        'Mobile Apps (Android & iOS)',
        'Internal ERP & Management Dashboard',
        'Third-Party API & Webhook Integration',
        'Cloud Server Setup & Maintenance',
        'Database Architecture & Security',
      ],
      ctaText: 'Explore Service',
      ctaColor: 'text-secondary hover:text-secondary-fixed',
    },
    {
      title: 'Digital Creative',
      icon: Sparkles,
      iconColor: 'text-tertiary',
      hoverBg: 'group-hover:bg-tertiary-container group-hover:text-on-tertiary-container',
      accentColor: 'text-tertiary',
      description:
        'Solusi desain visual dan identitas brand konsisten yang membedakan produk Anda dari kompetitor di pasar digital.',
      features: [
        'Brand Identity, Guidelines & Logo',
        'UI/UX Prototyping & Design Systems',
        'Social Media Content Creative Kits',
        'Marketing Deck & Pitch Assets',
        'Interactive Web Motion Micro-Assets',
      ],
      ctaText: 'Explore Service',
      ctaColor: 'text-tertiary hover:text-on-surface',
    },
  ];

  return (
    <section className="relative w-full bg-surface-container-low py-space-xxl" id="services">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col items-start justify-between gap-space-md lg:flex-row lg:items-end">
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-primary">What We Do</span>
            <h2 className="mt-space-xs text-3xl sm:text-headline-lg font-bold text-on-surface">
              Digital Solutions for Every Stage of Your Business
            </h2>
          </div>
          <p className="max-w-md text-base text-on-surface-variant leading-relaxed">
            Temukan layanan yang sesuai dengan roadmap pertumbuhan bisnis Anda, mulai dari prototipe web perdana hingga ekosistem IT skala enterprise.
          </p>
        </div>

        {/* Services 3-Column Grid */}
        <div className="mt-space-xl grid grid-cols-1 gap-gutter lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl bg-surface-container p-space-xl shadow-lg border border-surface-container-high transition-all duration-300 hover:-translate-y-2 hover:bg-surface-container-high hover:border-primary/30"
              >
                <div>
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container-high ${service.iconColor} ${service.hoverBg} border border-surface-container-highest transition-all duration-300 shadow-md`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="mt-space-lg text-2xl font-semibold text-on-surface">{service.title}</h3>

                  <p className="mt-space-sm text-sm text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Bullet List */}
                  <ul className="mt-space-lg space-y-space-xs">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-space-xs text-sm text-on-surface">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${service.accentColor}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className={`mt-space-xl inline-flex items-center gap-space-xs text-sm font-bold ${service.ctaColor} transition-colors group-hover:underline`}
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
