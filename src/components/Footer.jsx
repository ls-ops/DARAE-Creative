import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function TikTokIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.5 6.3 6.3 0 0 0 1.87-4.49V8.41a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.87.16z" />
    </svg>
  );
}

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface py-space-xxl border-t border-surface-container-high/40">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xxl">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="DARAE Creative Logo"
                className="h-8 w-auto object-contain"
                src="/images/logo.png"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">
                DARAE <span className="text-primary-container">Creative</span>
              </span>
            </div>

            <p className="text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
              We Build Digital Reality. Menghadirkan solusi digital melalui teknologi modern dan desain berkelas internasional.
            </p>

            <div className="flex items-center gap-space-sm pt-space-xs">
              <a
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high hover:text-primary transition-all border border-surface-container-high"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram DARAE Creative"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high hover:text-primary transition-all border border-surface-container-high"
                href="https://tiktok.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="TikTok DARAE Creative"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="text-xs text-primary tracking-wider uppercase font-bold mb-space-xs">
              Navigation
            </span>
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Services', href: '#services' },
              { name: 'Portfolio', href: '#portfolio' },
              { name: 'FAQ', href: '#faq' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-on-surface-variant hover:text-primary transition-colors py-0.5"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs text-primary tracking-wider uppercase font-bold mb-space-xs">
              Contact Info
            </span>
            <div className="flex items-center gap-space-sm text-sm text-on-surface-variant">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:daraectc@gmail.com" className="hover:text-primary transition-colors">
                daraectc@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-space-sm text-sm text-on-surface-variant">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <a href="tel:+6282117088846" className="hover:text-secondary transition-colors">
                +62 821 1708 8846
              </a>
            </div>
            <div className="flex items-center gap-space-sm text-sm text-on-surface-variant">
              <MapPin className="w-5 h-5 text-tertiary shrink-0" />
              <span>Bandung, Indonesia</span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-outline hover:text-primary transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg border-t border-surface-container-high/60 flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant">
          <p className="text-xs sm:text-sm">© 2026 Darae.ctc. All rights reserved.</p>
          <p className="text-xs uppercase tracking-wider text-outline font-medium">
            Bandung Digital Mastery • Creative • IT Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
