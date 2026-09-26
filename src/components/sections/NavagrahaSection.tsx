import React, { useState } from 'react';

const PLANETS = [
  { name: 'Surya', symbol: 'Sun', role: 'Vitality & Vision', direction: 'East', detail: 'Governs enlightenments, leadership, health, and natural solar ingress.' },
  { name: 'Chandra', symbol: 'Moon', role: 'Mind & Intuition', direction: 'North-West', detail: 'Controls emotional serenity, fluid circulation, and psychological equilibrium.' },
  { name: 'Mangala', symbol: 'Mars', role: 'Energy & Courage', direction: 'South', detail: 'Governs physical drive, stamina, protective boundaries, and vigor.' },
  { name: 'Budha', symbol: 'Mercury', role: 'Intellect & Speech', direction: 'North', detail: 'Influences commercial acuity, communication channels, and clear thought.' },
  { name: 'Brihaspati', symbol: 'Jupiter', role: 'Wisdom & Growth', direction: 'North-East', detail: 'Associated with spiritual insight, abundance, prosperity, and higher knowledge.' },
  { name: 'Shukra', symbol: 'Venus', role: 'Harmony & Beauty', direction: 'South-East', detail: 'Reflects artistic balance, aesthetic refined living, and spatial comfort.' },
  { name: 'Shani', symbol: 'Saturn', role: 'Discipline & Order', direction: 'West', detail: 'Governs structural endurance, patience, longevity, and steady progress.' },
  { name: 'Rahu', symbol: 'North Node', role: 'Expansion & Worldly Focus', direction: 'South-West', detail: 'Relates to strategic material orientation and heavy corner anchors.' },
  { name: 'Ketu', symbol: 'South Node', role: 'Liberation & Inner Insight', direction: 'North-East Core', detail: 'Supports deep contemplative focus, liberation from clutter, and spiritual purity.' },
];

export const NavagrahaSection: React.FC = () => {
  const [activePlanet, setActivePlanet] = useState(PLANETS[0]);

  return (
    <section id="navagraha" className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 z-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 p-8 border border-gold-500/30 gold-border-glow bg-transparent">
          <div className="flex items-center justify-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-4">
            <span className="w-8 h-[1px] bg-gold-400/50" />
            <span>CELESTIAL INFLUENCES</span>
            <span className="w-8 h-[1px] bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light mb-4">
            Navagraha — Nine Celestial Forces
          </h2>
          <p className="text-ivory-200 text-base font-sans font-light">
            Traditional spatial cosmology recognizes how orbital celestial dynamics correspond with room orientations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Planet Selection Grid (Subtle dark background rgba(6,7,9,0.85) to make 9 boxes clearly visible over bright video frames) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PLANETS.map((p) => (
              <button
                key={p.name}
                onClick={() => setActivePlanet(p)}
                className={`p-3.5 sm:p-4 text-left border backdrop-blur-md transition-all cursor-pointer ${
                  activePlanet.name === p.name
                    ? 'border-gold-400 bg-black/85 text-gold-300 scale-[1.03] shadow-xl shadow-gold-500/20'
                    : 'border-gold-500/30 bg-black/75 text-ivory-100 hover:border-gold-400/70 hover:bg-black/85'
                }`}
              >
                <div className="text-[10px] font-mono !text-gold-400 font-bold mb-1 tracking-wider uppercase">{p.symbol}</div>
                <div className="font-serif text-sm sm:text-base font-semibold truncate text-ivory-100">{p.name}</div>
                <div className="text-[10px] text-ivory-300 font-mono truncate">{p.direction}</div>
              </button>
            ))}
          </div>

          {/* Planet Detail Panel */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 border border-gold-500/30 rounded-none gold-border-glow bg-transparent">
              <span className="text-xs font-mono text-gold-400 tracking-widest uppercase block mb-2 font-bold">
                CELESTIAL ARCHETYPE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 font-semibold mb-1">
                {activePlanet.name}
              </h3>
              <p className="text-xs font-mono !text-gold-400 font-bold mb-6">{activePlanet.symbol} • {activePlanet.role}</p>

              <div className="mb-6 pb-4 border-b border-gold-500/10">
                <span className="text-[10px] font-mono text-ivory-400 uppercase tracking-widest block mb-1">
                  Cardinal Direction Link:
                </span>
                <span className="text-sm font-sans text-ivory-100 font-medium">{activePlanet.direction}</span>
              </div>

              <p className="text-ivory-200 text-sm font-sans leading-relaxed font-light">
                {activePlanet.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
