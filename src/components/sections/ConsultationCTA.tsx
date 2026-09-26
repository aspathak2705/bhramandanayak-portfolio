import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ConsultationCTAProps {
  onBookClick: () => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onBookClick }) => {
  return (
    <section className="relative bg-charcoal-950 py-32 px-6 md:px-12 border-b border-gold-500/10 overflow-hidden">
      {/* Subtle ambient gold radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <span className="text-xs font-mono text-gold-400 tracking-ultra uppercase block">
          BEGIN YOUR SPATIAL JOURNEY
        </span>

        <h2 className="font-serif text-4xl md:text-6xl text-ivory-100 font-light leading-tight">
          LET YOUR SPACE TELL ITS STORY.
        </h2>

        <p className="text-ivory-300/80 text-base md:text-xl font-sans font-light max-w-2xl mx-auto leading-relaxed">
          Begin a scholarly conversation about your home, commercial plot, or architectural project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onBookClick}
            className="px-8 py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-charcoal-950 font-semibold tracking-widest text-xs uppercase rounded-none hover:brightness-110 transition-all flex items-center space-x-2 shadow-xl shadow-gold-500/20 cursor-pointer"
          >
            <span>BOOK A CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            className="px-8 py-4 border border-gold-500/30 text-ivory-100 hover:border-gold-400 font-semibold tracking-widest text-xs uppercase rounded-none transition-all"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
};
