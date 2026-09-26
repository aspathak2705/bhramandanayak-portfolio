import React from 'react';
import { Layers, Compass } from 'lucide-react';

export const SecondaryCinematicSections: React.FC = () => {
  return (
    <div className="bg-charcoal-950">
      {/* SECTION A: Vastu Mandala → Architectural Floor Plan */}
      <section className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-gold-400 tracking-ultra uppercase block">
              CINEMATIC TRANSITION A
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light leading-tight">
              From Sacred Mandala to Living Architectural Blueprint.
            </h2>
            <p className="text-ivory-300/80 text-base font-sans font-light leading-relaxed">
              Sacred geometry is not abstract symbolism—it is the literal structural grid upon which harmonious rooms, doorways, load-bearing columns, and natural ventilation corridors are mapped.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-video bg-charcoal-900 border border-gold-500/20 p-8 flex flex-col justify-between gold-border-glow">
              <div className="flex justify-between items-center text-xs font-mono text-gold-400/80">
                <span>GRID ALIGNMENT</span>
                <span>81-PADAM MATRIX</span>
              </div>
              <div className="my-auto flex flex-col items-center justify-center text-center space-y-3">
                <Compass className="w-12 h-12 text-gold-400 animate-spin-slow" />
                <span className="font-serif text-lg text-ivory-100">Mandala Overlay active</span>
              </div>
              <div className="text-[10px] font-mono text-ivory-400/50 text-right">
                [Architectural Plan Blueprint Overlay]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: Panchamahabhuta → Modern Indian Home */}
      <section className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 overflow-hidden bg-charcoal-900/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-video bg-charcoal-950 border border-gold-500/20 p-8 flex flex-col justify-between gold-border-glow">
              <div className="flex justify-between items-center text-xs font-mono text-gold-400/80">
                <span>ELEMENT BALANCE</span>
                <span>HUMAN HABITAT</span>
              </div>
              <div className="my-auto text-center">
                <p className="font-serif text-2xl text-gold-300 mb-2 font-light">Natural Light & Airflow Integration</p>
                <p className="text-xs text-ivory-300/70 max-w-sm mx-auto">Connecting courtyard lightwells and water reservoirs with interior living areas.</p>
              </div>
              <div className="text-[10px] font-mono text-ivory-400/50">
                [Modern Living Sanctuary]
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-mono text-gold-400 tracking-ultra uppercase block">
              CINEMATIC TRANSITION B
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light leading-tight">
              Panchamahabhuta in Modern Indian Residences.
            </h2>
            <p className="text-ivory-300/80 text-base font-sans font-light leading-relaxed">
              When five elements exist in calculated proportion, domestic spaces radiate serene quietude, thermal comfort, and emotional safety for all generations of the household.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION C: Cosmic Scale → Human Home */}
      <section className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center max-w-3xl">
          <span className="text-xs font-mono text-gold-400 tracking-ultra uppercase block mb-4">
            CINEMATIC TRANSITION C
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light mb-6">
            As Above, So Below — Cosmic Scale to Human Home.
          </h2>
          <p className="text-ivory-300/80 text-base font-sans font-light leading-relaxed mb-8">
            The same physical principles governing planetary rotations and solar trajectories guide the airflow, temperature gradient, and psychological comfort inside your living room.
          </p>
          <div className="inline-block p-4 border border-gold-500/20 bg-charcoal-900 font-serif text-gold-300 text-sm">
            "Every home exists within a greater order."
          </div>
        </div>
      </section>
    </div>
  );
};
