import React from 'react';
import { Compass, Scale } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 z-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-6">
          <span className="w-8 h-[1px] bg-gold-400/50" />
          <span>WHERE SPACE MEETS HARMONY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 p-8 md:p-12 border border-gold-500/30 gold-border-glow bg-transparent">
            <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light leading-tight mb-8">
              Bhramadanayak Vastu Consultancy approaches Vastu Vidya as a timeless relationship between space, direction, elemental forces, and human life.
            </h2>
            <p className="text-ivory-200 text-base md:text-lg font-sans font-light leading-relaxed mb-6">
              Vastu Vidya is classical architectural wisdom. By aligning built environments with natural solar radiation and elemental energy flows, physical structures transition into living sanctuaries of peace and vitality.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 border border-gold-500/30 gold-border-glow bg-transparent">
              <Compass className="w-6 h-6 text-gold-400 mb-4" />
              <h3 className="font-serif text-lg text-ivory-100 mb-2">Sacred Orientation</h3>
              <p className="text-xs text-ivory-300 leading-relaxed font-sans font-light">
                Aligning floor plans with cardinal compass bearings to maximize natural solar radiation and wellness.
              </p>
            </div>

            <div className="p-6 border border-gold-500/30 gold-border-glow bg-transparent">
              <Scale className="w-6 h-6 text-gold-400 mb-4" />
              <h3 className="font-serif text-lg text-ivory-100 mb-2">Elemental Equilibrium</h3>
              <p className="text-xs text-ivory-300 leading-relaxed font-sans font-light">
                Harmonizing Earth, Water, Fire, Air, and Space within rooms to support physical and mental focus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
