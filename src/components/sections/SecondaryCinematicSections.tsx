import React from 'react';

export const SecondaryCinematicSections: React.FC = () => {
  return (
    <div className="bg-transparent z-10 relative">
      {/* SECTION A: Vastu Mandala → Architectural Floor Plan */}
      <section className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 overflow-hidden bg-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 p-8 border border-gold-500/30 gold-border-glow bg-transparent">
            <span className="text-xs font-mono text-gold-400 tracking-ultra uppercase block font-bold">
              SACRED ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light leading-tight">
              From Sacred Mandala to Living Architectural Blueprint.
            </h2>
            <p className="text-ivory-200 text-base font-sans font-light leading-relaxed">
              Sacred geometry is structural grid upon which harmonious rooms, doorways, load-bearing columns, and natural ventilation corridors are mapped.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-video border border-gold-500/30 p-8 flex flex-col justify-between gold-border-glow bg-transparent">
              <div className="flex justify-between items-center text-xs font-mono text-gold-400 font-bold">
                <span>GRID ORIENTATION</span>
                <span>81-SQUARE MATRIX</span>
              </div>
              <div className="my-auto text-center space-y-2">
                <p className="font-serif text-2xl text-ivory-100 font-light">Structural Spatial Harmony</p>
                <p className="text-xs text-gold-400 font-mono font-semibold">Connecting Cardinal Bearings with Architectural Blueprint</p>
              </div>
              <div className="text-[10px] font-mono text-ivory-400 text-right">
                Vastu Vidya Blueprint Protocol
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: Panchamahabhuta → Modern Indian Home */}
      <section className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 overflow-hidden bg-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-video border border-gold-500/30 p-8 flex flex-col justify-between gold-border-glow bg-transparent">
              <div className="flex justify-between items-center text-xs font-mono text-gold-400 font-bold">
                <span>ELEMENT INTEGRATION</span>
                <span>MODERN DWELLING</span>
              </div>
              <div className="my-auto text-center">
                <p className="font-serif text-2xl text-gold-400 mb-2 font-light">Natural Light & Airflow Integration</p>
                <p className="text-xs text-ivory-300 max-w-sm mx-auto">Connecting courtyard lightwells and natural ventilation with interior spaces.</p>
              </div>
              <div className="text-[10px] font-mono text-ivory-400">
                Harmonious Living Habitat
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 p-8 border border-gold-500/30 gold-border-glow bg-transparent">
            <span className="text-xs font-mono text-gold-400 tracking-ultra uppercase block font-bold">
              ELEMENTAL EQUILIBRIUM
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light leading-tight">
              Panchamahabhuta in Modern Indian Residences.
            </h2>
            <p className="text-ivory-200 text-base font-sans font-light leading-relaxed">
              When five elements exist in calculated proportion, domestic spaces radiate quietude, natural illumination, and emotional serenity for all generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
