import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'UNDERSTAND',
    desc: 'Initial dialogue regarding property history, occupant priorities, architectural blueprints, and lifestyle goals.',
  },
  {
    num: '02',
    title: 'ANALYZE',
    desc: 'Precise compass bearing calculation, topologic mapping, element balance verification, and structural grid auditing.',
  },
  {
    num: '03',
    title: 'INTERPRET',
    desc: 'Synthesis of classical Vastu scriptures with current floor plans to isolate spatial frictions and energy blocks.',
  },
  {
    num: '04',
    title: 'GUIDE',
    desc: 'Delivery of non-destructive, practical recommendations, interior repositioning, and elemental remedies.',
  },
  {
    num: '05',
    title: 'IMPLEMENT',
    desc: 'Step-by-step implementation oversight to ensure spatial harmony is flawlessly realized in physical reality.',
  },
];

export const ConsultationProcess: React.FC = () => {
  return (
    <section id="process" className="relative bg-charcoal-950 py-28 px-6 md:px-12 border-b border-gold-500/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-4">
            <span className="w-8 h-[1px] bg-gold-400/50" />
            <span>METHODOLOGY</span>
            <span className="w-8 h-[1px] bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light mb-4">
            5-Step Consultation Journey
          </h2>
          <p className="text-ivory-300/80 text-base font-sans font-light">
            A structured, scholarly methodology ensuring clarity, precision, and respectful spatial transformation.
          </p>
        </div>

        {/* Horizontal Process Grid on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-charcoal-900/60 border border-gold-500/10 hover:border-gold-500/30 transition-all gold-border-glow flex flex-col justify-between group"
            >
              <div>
                <span className="font-serif text-4xl text-gold-400/40 group-hover:text-gold-300 transition-colors block mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg text-ivory-100 font-semibold mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-ivory-300/70 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-gold-500/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
