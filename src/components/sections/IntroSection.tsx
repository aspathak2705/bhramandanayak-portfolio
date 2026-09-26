import React from 'react';
import { Compass, Sparkles, Scale, ShieldCheck } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative bg-charcoal-950 py-24 md:py-36 px-6 md:px-12 border-b border-gold-500/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-6">
          <span className="w-8 h-[1px] bg-gold-400/50" />
          <span>WHERE SPACE MEETS HARMONY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-ivory-100 font-light leading-tight mb-8">
              Bhramadanayak Vastu Consultancy approaches Vastu Vidya as a timeless relationship between space, direction, elemental forces, and human life.
            </h2>
            <p className="text-ivory-300/80 text-base md:text-xl font-sans font-light leading-relaxed mb-6">
              Vastu Vidya is not superstition or arbitrary rules; it is the ancient architectural wisdom of cosmic geometry. By aligning built environments with natural magnetic orientation and elemental energy flows, spaces transition from mere structures into living sanctuaries of peace and vitality.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6 pt-4">
            <div className="p-6 bg-charcoal-900/60 border border-gold-500/10 rounded-none gold-border-glow">
              <Compass className="w-6 h-6 text-gold-400 mb-4" />
              <h3 className="font-serif text-lg text-ivory-100 mb-2">Sacred Orientation</h3>
              <p className="text-xs text-ivory-400/80 leading-relaxed font-sans">
                Aligning floor plans with cardinal and ordinal directions to maximize natural solar radiation and magnetic wellness.
              </p>
            </div>

            <div className="p-6 bg-charcoal-900/60 border border-gold-500/10 rounded-none gold-border-glow">
              <Scale className="w-6 h-6 text-gold-400 mb-4" />
              <h3 className="font-serif text-lg text-ivory-100 mb-2">Elemental Equilibrium</h3>
              <p className="text-xs text-ivory-400/80 leading-relaxed font-sans">
                Harmonizing Earth, Water, Fire, Air, and Space within rooms to support physical vitality and clear mental focus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
