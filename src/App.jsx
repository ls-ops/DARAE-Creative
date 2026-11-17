import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import TechStackSection from './sections/TechStackSection';
import WhyDaraeSection from './sections/WhyDaraeSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import TrustRibbonSection from './sections/TrustRibbonSection';
import CtaSection from './sections/CtaSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-surface min-h-screen text-on-surface antialiased flex flex-col w-full selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="w-full flex-1">
        <HeroSection />
        <TechStackSection />
        <WhyDaraeSection />
        <ServicesSection />
        <PortfolioSection />
        <TrustRibbonSection />
        <CtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
