import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, User } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'services', 'portfolio', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-surface-container-high/60 shadow-lg shadow-black/20'
          : 'bg-surface/75 backdrop-blur-md'
      }`}
    >
      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-space-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          aria-label="DARAE Creative Homepage"
        >
          <img
            alt="DARAE Creative Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="/images/logo.png"
            onError={(e) => {
              // fallback if needed
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">
            DARAE <span className="text-primary-container">Creative</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1.5 p-1 bg-surface-container-lowest/60 rounded-full border border-surface-container-high/40 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`transition-all duration-200 rounded-full px-4 py-1.5 text-sm font-medium ${
                  isActive
                    ? 'bg-surface-container-high text-primary font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Avatar */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-space-lg py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-[0_0_24px_rgba(117,222,217,0.3)] hover:shadow-[0_0_30px_rgba(117,222,217,0.5)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div
            className="w-9 h-9 rounded-full bg-surface-container-high border border-primary/20 flex items-center justify-center text-primary shadow-sm"
            title="DARAE Client Portal"
            aria-hidden="true"
          >
            <User className="w-4 h-4 text-primary" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-surface-container text-on-surface hover:text-primary hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-surface/98 backdrop-blur-2xl border-b border-surface-container-high p-6 shadow-2xl transition-all duration-300 animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-surface-container-high text-primary border-l-4 border-primary'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-surface-container-high flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container py-3 rounded-xl font-bold hover:bg-primary transition-all shadow-[0_0_24px_rgba(117,222,217,0.3)]"
              >
                <span>Mulai Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
