import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Website Development', value: 'web' },
    { label: 'IT Solutions', value: 'it' },
    { label: 'Digital Creative', value: 'creative' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Artisan Roastery E-Commerce',
      category: 'web',
      categoryBadge: 'Web • Next.js',
      badgeColor: 'text-primary',
      image: '/images/project-1-artisan.jpg',
      alt: 'Artisan Roastery E-Commerce Storefront',
      description:
        'Custom storefront e-commerce lengkap dengan dynamic coffee taste configurator, multi-currency checkout, dan integrasi WhatsApp auto-order.',
      tags: ['Tailwind CSS', 'Stripe / Midtrans', 'Supabase'],
    },
    {
      id: 2,
      title: 'Nusantara Logistics Tracker',
      category: 'it',
      categoryBadge: 'IT System • Flutter',
      badgeColor: 'text-secondary',
      image: '/images/project-2-logistics.jpg',
      alt: 'Nusantara Logistics Realtime Telematics Tracker',
      description:
        'Sistem pelacakan armada logistik real-time terintegrasi dengan modul inventori gudang bertingkat dan push-notification status pengiriman.',
      tags: ['Flutter Mobile', 'Node.js API', 'WebSockets'],
    },
    {
      id: 3,
      title: 'Kinetik Studio Rebrand & UI Kit',
      category: 'creative',
      categoryBadge: 'Creative • Design System',
      badgeColor: 'text-primary-container',
      image: '/images/project-3-kinetik.jpg',
      alt: 'Kinetik Studio Rebrand and UI Tokens',
      description:
        'Penyusunan identitas visual komprehensif, desain typography guidelines, aset promosi digital interaktif, dan library komponen Figma siap pakai.',
      tags: ['Figma Tokens', 'Brand Guidelines', 'Motion Graphics'],
    },
    {
      id: 4,
      title: 'SaaS Analytics Portal',
      category: 'web',
      categoryBadge: 'Web • Web App',
      badgeColor: 'text-primary',
      image: '/images/project-4-analytics.jpg',
      alt: 'SaaS Analytics B2B Portal',
      description:
        'Portal analitik data B2B dengan visualisasi real-time, manajemen hak akses multi-tenant, dan arsitektur serverless berskala tinggi.',
      tags: ['TypeScript', 'Next.js 14', 'Tailwind'],
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="relative w-full bg-surface-container-lowest py-space-xxl" id="portfolio">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-tablet lg:px-margin">
        {/* Header with Filter Controls */}
        <div className="flex flex-col items-start justify-between gap-space-lg lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-md py-space-xs border border-surface-container-high">
              <span className="text-xs uppercase font-semibold tracking-wider text-primary">Our Masterpiece</span>
            </div>
            <h2 className="mt-space-xs text-3xl sm:text-headline-lg font-bold text-on-surface">Selected Works.</h2>
            <p className="mt-space-xs max-w-xl text-base text-on-surface-variant leading-relaxed">
              Setiap proyek merupakan sinergi antara riset bisnis, rekayasa perangkat lunak modern, dan visual berkelas dunia.
            </p>
          </div>

          {/* Filter Buttons Container */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface-container-low rounded-full border border-surface-container-high">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full px-4 py-1.5 text-xs sm:text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-bold shadow-md shadow-primary-container/20'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                  aria-pressed={isActive}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Works Grid */}
        <div className="mt-space-xl grid grid-cols-1 gap-gutter md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl bg-surface-container shadow-md border border-surface-container-high transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high hover:border-primary/40 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-surface-container-highest">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
                <div className="absolute top-space-md left-space-md rounded-full bg-surface/85 px-space-md py-1 backdrop-blur-md border border-surface-container-highest">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${project.badgeColor}`}>
                    {project.categoryBadge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-space-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-space-xs text-sm text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-space-md flex flex-wrap gap-2 pt-2 border-t border-surface-container-high/60">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md bg-surface-container-highest px-2.5 py-1 text-xs text-outline font-medium border border-surface-container-high"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
