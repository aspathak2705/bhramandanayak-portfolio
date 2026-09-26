import React from 'react';
import { BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Profile Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full bg-charcoal-950/80 backdrop-blur-md border border-gold-500/30 p-8 flex flex-col items-center justify-center text-center gold-border-glow">
              <div className="w-24 h-24 rounded-full border border-gold-400/40 flex items-center justify-center mb-6 bg-charcoal-900/90">
                <BookOpen className="w-10 h-10 text-gold-400" />
              </div>
              <span className="font-serif text-2xl text-ivory-100 font-semibold mb-1">[Name of Vastu Visarad]</span>
              <span className="text-xs font-mono text-gold-400 tracking-widest uppercase mb-4">VASTU VISARAD & SPATIAL CONSULTANT</span>
              <p className="text-[11px] font-mono text-ivory-300/70 uppercase tracking-widest border-t border-gold-500/10 pt-4 w-full">
                [Qualifications & Credentials]
              </p>
            </div>
          </div>

          {/* Editorial Bio Column */}
          <div className="lg:col-span-7 space-y-6 bg-charcoal-950/70 backdrop-blur-md p-8 md:p-12 border border-gold-500/20 gold-border-glow">
            <div className="flex items-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase">
              <span className="w-8 h-[1px] bg-gold-400/50" />
              <span>THE CONSULTANT</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-100 font-light leading-tight">
              Scholarly Vastu Vidya for Modern Architectural Living.
            </h2>

            <p className="text-ivory-200/90 text-base md:text-lg font-sans font-light leading-relaxed">
              With deep commitment to ancient Indian texts and modern structural principles, our lead Vastu Visarad bridges classical Vedic spatial scriptures with contemporary residential and commercial architecture.
            </p>

            <p className="text-ivory-300/80 text-sm font-sans leading-relaxed font-light">
              Every consultation proceeds with analytical precision—evaluating plot topographies, cardinal compass bearings, structural proportions, and element balancing without resort to superstitious claims or unnecessary structural destruction.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gold-500/10">
              <div>
                <span className="block font-serif text-2xl text-gold-300 mb-1">[Years of Experience]</span>
                <span className="text-xs font-mono text-ivory-400 uppercase tracking-widest">Dedicated Practice</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-gold-300 mb-1">[Expertise Areas]</span>
                <span className="text-xs font-mono text-ivory-400 uppercase tracking-widest">Residential & Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
