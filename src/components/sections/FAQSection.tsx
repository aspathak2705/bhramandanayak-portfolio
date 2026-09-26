import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What is Vastu Vidya?',
    a: 'Vastu Vidya is the classical Indian science of architecture, spatial design, and spatial geometry. It studies how orientation, magnetism, solar rays, and five natural elements influence human health, peace, and domestic vitality.',
  },
  {
    q: 'What is a Vastu Purusha Mandala?',
    a: 'The Vastu Purusha Mandala is a sacred 81 or 64-square energy grid that models the cosmic human (Vastu Purusha) embedded within architectural boundaries. It assigns governing deities, cardinal directions, and elemental forces to specific zones of a floor plan.',
  },
  {
    q: 'Can Vastu principles be considered during modern architectural planning?',
    a: 'Yes. Vastu Vidya integrates seamlessly with modern blueprints prior to construction. By collaborating directly with architects, floor plans can be aligned with cardinal compass bearings without sacrificing modern structural aesthetics.',
  },
  {
    q: 'Can an existing completed home or office be analyzed?',
    a: 'Yes. For existing structures, consultations focus on non-destructive remedies—adjusting room usage, interior furniture placement, element balancing, and color harmony to correct energetic imbalances.',
  },
  {
    q: 'What information is needed for a Vastu consultation?',
    a: 'A consultation requires accurate architectural floor plans, precise cardinal compass directions (or site coordinates), plot orientation details, and background on how each room is utilized by occupants.',
  },
  {
    q: 'How does a Vastu consultation work?',
    a: 'The process involves 5 steps: initial goal alignment, detailed site analysis and directional mapping, scriptural and grid interpretation, practical guidance delivery, and implementation support.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 z-10 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 p-8 border border-gold-500/30 gold-border-glow bg-transparent">
          <div className="flex items-center justify-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-4">
            <span className="w-8 h-[1px] bg-gold-400/50" />
            <span>CLARITY & GUIDANCE</span>
            <span className="w-8 h-[1px] bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-ivory-200 text-sm font-sans font-light">
            Modest, factual answers to common inquiries regarding Vastu Vidya and spatial consultations.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.q}
              className="border border-gold-500/30 overflow-hidden gold-border-glow bg-transparent"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center space-x-4 cursor-pointer bg-transparent"
              >
                <span className="font-serif text-lg text-ivory-100 font-medium">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 !text-gold-400 shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 border-t border-gold-500/10 text-xs text-ivory-200 leading-relaxed font-sans bg-transparent">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
