import React, { useState } from 'react';

interface ZoneInfo {
  code: string;
  name: string;
  deity: string;
  element: string;
  attributes: string;
}

const ZONES: Record<string, ZoneInfo> = {
  NE: {
    code: 'NE',
    name: 'North-East (Ishan)',
    deity: 'Ishana / Water Element',
    element: 'Water & Space',
    attributes: 'Clarity of thought, spiritual connection, wisdom, and health. Best for meditation and entrance.',
  },
  E: {
    code: 'E',
    name: 'East (Indra)',
    deity: 'Indra / Solar Force',
    element: 'Sun & Air',
    attributes: 'Social connectivity, growth, vitality, and enlightenment. Best for main doors and living rooms.',
  },
  SE: {
    code: 'SE',
    name: 'South-East (Agneya)',
    deity: 'Agni / Fire Element',
    element: 'Fire',
    attributes: 'Transformation, energy, cash flow, and passion. Ideal location for kitchen and electrical centers.',
  },
  S: {
    code: 'S',
    name: 'South (Yama)',
    deity: 'Yama / Stability',
    element: 'Earth',
    attributes: 'Fame, relaxation, peace of mind, and discipline. Suitable for master bedrooms.',
  },
  SW: {
    code: 'SW',
    name: 'South-West (Nairritya)',
    deity: 'Nairriti / Heavy Stability',
    element: 'Earth & Stability',
    attributes: 'Mastery, skill, strength, and family stability. Ideal for head of family bedroom and heavy storage.',
  },
  W: {
    code: 'W',
    name: 'West (Varuna)',
    deity: 'Varuna / Water & Gains',
    element: 'Space & Water',
    attributes: 'Monetary gains, profitability, execution, and fulfillment of desires. Ideal for dining and study rooms.',
  },
  NW: {
    code: 'NW',
    name: 'North-West (Vayavya)',
    deity: 'Vayu / Air Element',
    element: 'Air',
    attributes: 'Movement, banking, relationships, and supportive energy. Best for guest rooms and garage.',
  },
  N: {
    code: 'N',
    name: 'North (Kubera)',
    deity: 'Kubera / Treasure',
    element: 'Water & Wealth',
    attributes: 'Opportunities, wealth creation, career advancement, and prosperity. Best for home offices.',
  },
  CENTER: {
    code: 'CENTER',
    name: 'Brahmasthan (Cosmic Center)',
    deity: 'Brahma / Pure Ether',
    element: 'Space (Akasha)',
    attributes: 'The sacred heart of the structure. Must remain open, clutter-free, and well-lit to distribute vital energy.',
  },
};

export const VastuMandala: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<ZoneInfo>(ZONES.CENTER);

  return (
    <section id="mandala" className="relative bg-charcoal-950 py-28 px-6 md:px-12 border-b border-gold-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-4">
            <span className="w-8 h-[1px] bg-gold-400/50" />
            <span>SACRED GEOMETRY</span>
            <span className="w-8 h-[1px] bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light mb-4">
            The Vastu Purusha Mandala
          </h2>
          <p className="text-ivory-300/80 text-base font-sans font-light">
            Interactive sacred energy matrix. Select directions to reveal spatial associations and elemental forces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Mandala Grid */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-charcoal-900 border border-gold-500/20 p-4 shadow-2xl gold-border-glow">
              {/* Corner Direction Labels */}
              <span className="absolute top-2 left-2 text-[10px] font-mono text-gold-400/60">NW</span>
              <span className="absolute top-2 right-2 text-[10px] font-mono text-gold-400/60">NE</span>
              <span className="absolute bottom-2 left-2 text-[10px] font-mono text-gold-400/60">SW</span>
              <span className="absolute bottom-2 right-2 text-[10px] font-mono text-gold-400/60">SE</span>

              <div className="grid grid-cols-3 grid-rows-3 w-full h-full gap-2">
                <button
                  onClick={() => setSelectedZone(ZONES.NW)}
                  className={`border p-2 flex flex-col items-center justify-center transition-all ${
                    selectedZone.code === 'NW'
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 scale-[1.02]'
                      : 'border-gold-500/10 bg-charcoal-950/60 hover:border-gold-400/40 text-ivory-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">NW</span>
                  <span className="text-[10px] text-ivory-400/80">Vayavya</span>
                </button>

                <button
                  onClick={() => setSelectedZone(ZONES.N)}
                  className={`border p-2 flex flex-col items-center justify-center transition-all ${
                    selectedZone.code === 'N'
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 scale-[1.02]'
                      : 'border-gold-500/10 bg-charcoal-950/60 hover:border-gold-400/40 text-ivory-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">NORTH</span>
                  <span className="text-[10px] text-ivory-400/80">Kubera</span>
                </button>

                <button
                  onClick={() => setSelectedZone(ZONES.NE)}
                  className={`border p-2 flex flex-col items-center justify-center transition-all ${
                    selectedZone.code === 'NE'
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 scale-[1.02]'
                      : 'border-gold-500/10 bg-charcoal-950/60 hover:border-gold-400/40 text-ivory-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">NE</span>
                  <span className="text-[10px] text-ivory-400/80">Ishan</span>
                </button>

                <button
                  onClick={() => setSelectedZone(ZONES.W)}
                  className={`border p-2 flex flex-col items-center justify-center transition-all ${
                    selectedZone.code === 'W'
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 scale-[1.02]'
                      : 'border-gold-500/10 bg-charcoal-950/60 hover:border-gold-400/40 text-ivory-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">WEST</span>
                  <span className="text-[10px] text-ivory-400/80">Varuna</span>
                </button>

                {/* Center Brahmasthan */}
                <button
                  onClick={() => setSelectedZone(ZONES.CENTER)}
                  className={`border p-2 flex flex-col items-center justify-center transition-all ${
                    selectedZone.code === 'CENTER'
                      ? 'bg-gold-500/30 border-gold-400 text-gold-300 scale-[1.02]'
                      : 'border-gold-400/30 bg-gold-900/10 hover:border-gold-400/60 text-gold-300'
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-gold-300">BRAHMASTHAN</span>
                  <span className="text-[9px] text-gold-400/80 uppercase tracking-tighter">Cosmic Core</span>
                </button>

                <button
                  onClick={() => setSelectedZone(ZONES.E)}
                  className={`border p-2 flex flex-col items-center justify-center transition-all ${
                    selectedZone.code === 'E'
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 scale-[1.02]'
                      : 'border-gold-500/10 bg-charcoal-950/60 hover:border-gold-400/40 text-ivory-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">EAST</span>
                  <span className="text-[10px] text-ivory-400/80">Indra</span>
                </button>

                <button
                  onClick={() => setSelectedZone(ZONES.SW)}
                  className={`border p-2 flex flex-col items-center justify-center transition-all ${
                    selectedZone.code === 'SW'
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 scale-[1.02]'
                      : 'border-gold-500/10 bg-charcoal-950/60 hover:border-gold-400/40 text-ivory-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">SW</span>
                  <span className="text-[10px] text-ivory-400/80">Nairritya</span>
                </button>

                <button
                  onClick={() => setSelectedZone(ZONES.S)}
                  className={`border p-2 flex flex-col items-center justify-center transition-all ${
                    selectedZone.code === 'S'
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 scale-[1.02]'
                      : 'border-gold-500/10 bg-charcoal-950/60 hover:border-gold-400/40 text-ivory-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">SOUTH</span>
                  <span className="text-[10px] text-ivory-400/80">Yama</span>
                </button>

                <button
                  onClick={() => setSelectedZone(ZONES.SE)}
                  className={`border p-2 flex flex-col items-center justify-center transition-all ${
                    selectedZone.code === 'SE'
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 scale-[1.02]'
                      : 'border-gold-500/10 bg-charcoal-950/60 hover:border-gold-400/40 text-ivory-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">SE</span>
                  <span className="text-[10px] text-ivory-400/80">Agneya</span>
                </button>
              </div>
            </div>
          </div>

          {/* Details Card Column */}
          <div className="lg:col-span-5">
            <div className="p-8 bg-charcoal-900 border border-gold-500/20 rounded-none gold-border-glow">
              <span className="text-xs font-mono text-gold-400 tracking-widest uppercase block mb-2">
                ZONE INSIGHT
              </span>
              <h3 className="font-serif text-2xl text-ivory-100 font-semibold mb-4">
                {selectedZone.name}
              </h3>

              <div className="space-y-4 mb-6 border-y border-gold-500/10 py-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-ivory-400 font-mono uppercase">Governing Deity / Force:</span>
                  <span className="text-gold-300 font-medium">{selectedZone.deity}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-ivory-400 font-mono uppercase">Primary Element:</span>
                  <span className="text-gold-300 font-medium">{selectedZone.element}</span>
                </div>
              </div>

              <p className="text-ivory-200/80 text-sm font-sans leading-relaxed">
                {selectedZone.attributes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
