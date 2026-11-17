import React from 'react';
import {
  Code2,
  Box,
  Binary,
  Palette,
  Smartphone,
  Layers,
  FileCode,
  Server,
  Database,
  Frame,
  Brush,
} from 'lucide-react';

export default function TechStackSection() {
  const techStack = [
    { name: 'Next.js', icon: Code2, color: 'text-primary' },
    { name: 'React', icon: Box, color: 'text-primary' },
    { name: 'TypeScript', icon: Binary, color: 'text-secondary' },
    { name: 'Tailwind', icon: Palette, color: 'text-primary-container' },
    { name: 'Flutter', icon: Smartphone, color: 'text-primary' },
    { name: 'Laravel', icon: Layers, color: 'text-secondary' },
    { name: 'JavaScript', icon: FileCode, color: 'text-primary' },
    { name: 'Node.js', icon: Server, color: 'text-secondary' },
    { name: 'Supabase', icon: Database, color: 'text-primary' },
    { name: 'Figma', icon: Frame, color: 'text-secondary' },
    { name: 'Canva', icon: Brush, color: 'text-primary' },
  ];

  return (
    <section className="relative w-full bg-surface-container-low py-space-xl border-y border-surface-container-high/40">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col items-start md:items-center justify-between gap-space-sm md:flex-row">
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-primary">Our Stack</span>
            <h2 className="text-2xl sm:text-headline-md font-semibold text-on-surface mt-1">
              Powered by the Right Technology
            </h2>
          </div>
          <p className="max-w-md text-sm text-on-surface-variant">
            Pondasi teknologi teruji untuk memastikan skalabilitas, keamanan tingkat tinggi, dan kemudahan perawatan kode jangka panjang.
          </p>
        </div>

        {/* Tech Badges Flow */}
        <div className="mt-space-lg grid grid-cols-2 gap-space-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center gap-space-xs rounded-xl bg-surface-container p-space-md shadow-sm border border-surface-container-high transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
              >
                <Icon className={`w-7 h-7 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                <span className="text-xs font-semibold text-on-surface group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
