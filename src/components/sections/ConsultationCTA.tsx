import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ConsultationCTAProps {
  onBookClick: () => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onBookClick }) => {
  return (
    <section className="relative py-32 px-6 md:px-12 border-b border-gold-500/10 overflow-hidden bg-transparent z-10">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 bg-black/40 backdrop-blur-md p-10 md:p-16 border border-gold-500/25 gold-border-glow">
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
            className="px-8 py-4 bg-gold-500/10 border border-gold-400 font-bold tracking-widest text-xs uppercase transition-all flex items-center space-x-2 shadow-xl shadow-gold-500/20 cursor-pointer"
          >
            <span className="!text-gold-400">BOOK A CONSULTATION</span>
            <ArrowRight className="w-4 h-4 !text-gold-400" />
          </button>

          <a
            href="#contact"
            className="button-gold px-8 py-4 border border-gold-400/60 bg-transparent text-gold-400 font-bold tracking-widest text-xs uppercase transition-all"
          >
            <span className="!text-gold-400">CONTACT US</span>
          </a>
        </div>
      </div>
    </section>
  );
};
