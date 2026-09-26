import React from 'react';
import { Mountain, Droplets, Flame, Wind, Eye } from 'lucide-react';

const ELEMENTS = [
  {
    icon: Mountain,
    title: 'PRITHVI',
    name: 'Earth Element',
    zone: 'South-West',
    desc: 'Brings heavy stability, structural grounding, physical endurance, and patience. Governs foundational walls and structural support.',
  },
  {
    icon: Droplets,
    title: 'JALA',
    name: 'Water Element',
    zone: 'North-East',
    desc: 'Governs emotional fluidity, spiritual purity, mental clarity, and prosperity flow. Inspires clean water features and reflection pools.',
  },
  {
    icon: Flame,
    title: 'AGNI',
    name: 'Fire Element',
    zone: 'South-East',
    desc: 'Drives digestive vitality, financial momentum, energy transformation, and warmth. Aligned with hearths, kitchens, and electrical hubs.',
  },
  {
    icon: Wind,
    title: 'VAYU',
    name: 'Air Element',
    zone: 'North-West',
    desc: 'Controls spatial ventilation, mobility, communication, social relationships, and fresh ideas. Optimized by cross-ventilation corridors.',
  },
  {
    icon: Eye,
    title: 'AKASHA',
    name: 'Space Element',
    zone: 'Brahmasthan (Center)',
    desc: 'The unmanifest expanse that contains all other forces. Provides room for expansion, light, sound resonance, and spiritual peace.',
  },
];

export const Panchamahabhuta: React.FC = () => {
  return (
    <section id="elements" className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 z-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 p-8 border border-gold-500/30 gold-border-glow bg-transparent">
          <div className="flex items-center justify-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-4">
            <span className="w-8 h-[1px] bg-gold-400/50" />
            <span>ELEMENTAL EQUILIBRIUM</span>
            <span className="w-8 h-[1px] bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light mb-4">
            Panchamahabhuta
          </h2>
          <p className="text-ivory-200 text-base font-sans font-light">
            The five fundamental cosmic building blocks that form the fabric of living architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ELEMENTS.map((el, i) => {
            const IconComponent = el.icon;
            return (
              <div
                key={el.title}
                className="p-6 border border-gold-500/30 hover:border-gold-400 transition-all group flex flex-col justify-between gold-border-glow bg-transparent"
              >
                <div>
                  <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 bg-transparent group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest block mb-1">
                    {el.zone}
                  </span>
                  <h3 className="font-serif text-xl text-ivory-100 font-semibold mb-1">
                    {el.title}
                  </h3>
                  <p className="text-xs text-gold-400 font-medium mb-4">{el.name}</p>
                  <p className="text-xs text-ivory-300 font-sans leading-relaxed">
                    {el.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gold-500/10 text-[10px] font-mono text-ivory-400">
                  0{i + 1} / 05
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
