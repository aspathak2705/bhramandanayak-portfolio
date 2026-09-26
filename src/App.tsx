import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { GlobalCinematicCanvas } from './components/hero/GlobalCinematicCanvas';
import { HeroChapter } from './components/hero/HeroChapter';
import { IntroSection } from './components/sections/IntroSection';
import { AboutSection } from './components/sections/AboutSection';
import { VastuMandala } from './components/sections/VastuMandala';
import { Panchamahabhuta } from './components/sections/Panchamahabhuta';
import { NavagrahaSection } from './components/sections/NavagrahaSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ConsultationProcess } from './components/sections/ConsultationProcess';
import { SecondaryCinematicSections } from './components/sections/SecondaryCinematicSections';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { FAQSection } from './components/sections/FAQSection';
import { ConsultationCTA } from './components/sections/ConsultationCTA';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Global window scroll progress listener (0.0 at top of document to 1.0 at absolute bottom)
  useEffect(() => {
    const handleScroll = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalScrollable));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-charcoal-950 text-ivory-100 selection:bg-gold-500/30 selection:text-gold-300">
      {/* 01 — Fixed Global Cinematic Canvas (Scrubs 240 WebP frames across 100% page scroll) */}
      <GlobalCinematicCanvas scrollProgress={scrollProgress} />

      {/* 02 — Fixed Navigation Bar */}
      <Navbar onBookClick={scrollToContact} />

      {/* 03 — Translucent Storytelling Page Overlay */}
      <main className="relative z-10">
        {/* Chapter 01: Hero Entry */}
        <HeroChapter onBookClick={scrollToContact} />

        {/* Chapter 02: Philosophy Introduction */}
        <IntroSection />

        {/* Chapter 03: About Vastu Visarad */}
        <AboutSection />

        {/* Chapter 04 & 05: Vastu Purusha Mandala */}
        <VastuMandala />

        {/* Chapter 06: Panchamahabhuta */}
        <Panchamahabhuta />

        {/* Chapter 07: Navagraha */}
        <NavagrahaSection />

        {/* Chapter 08: Services */}
        <ServicesSection />

        {/* Chapter 09: Consultation Process */}
        <ConsultationProcess />

        {/* Secondary Story Transitions */}
        <SecondaryCinematicSections />

        {/* Chapter 10: Case Studies */}
        <ProjectsSection />

        {/* Chapter 11: Insights */}
        <InsightsSection />

        {/* Chapter 12: FAQ */}
        <FAQSection />

        {/* Chapter 13: Consultation CTA */}
        <ConsultationCTA onBookClick={scrollToContact} />

        {/* Chapter 14: Contact */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
