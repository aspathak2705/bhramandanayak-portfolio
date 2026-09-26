import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CinematicHero } from './components/hero/CinematicHero';
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
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory-100 selection:bg-gold-500/30 selection:text-gold-300">
      <Navbar onBookClick={scrollToContact} />

      <main>
        {/* 01 — Cinematic Hero (Scroll-driven HTML Canvas Frame Sequence) */}
        <CinematicHero />

        {/* 02 — Philosophy Introduction */}
        <IntroSection />

        {/* 03 — About the Vastu Vidyar */}
        <AboutSection />

        {/* 04 & 05 — Vastu Philosophy & Vastu Purusha Mandala */}
        <VastuMandala />

        {/* 06 — Panchamahabhuta */}
        <Panchamahabhuta />

        {/* 07 — Navagraha */}
        <NavagrahaSection />

        {/* 08 — Services */}
        <ServicesSection />

        {/* 09 — Consultation Process */}
        <ConsultationProcess />

        {/* Secondary Cinematic Sections: Cosmos -> Vastu -> Architecture -> Human Life */}
        <SecondaryCinematicSections />

        {/* 10 — Projects / Case Studies */}
        <ProjectsSection />

        {/* 11 — Insights */}
        <InsightsSection />

        {/* 13 — FAQ */}
        <FAQSection />

        {/* 14 — Consultation CTA */}
        <ConsultationCTA onBookClick={scrollToContact} />

        {/* 15 — Contact */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
