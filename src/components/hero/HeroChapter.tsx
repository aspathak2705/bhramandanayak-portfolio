import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroChapterProps {
  onBookClick: () => void;
}

export const HeroChapter: React.FC<HeroChapterProps> = ({ onBookClick }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between p-8 md:p-16 text-ivory-100 z-10 pointer-events-none bg-transparent">
      <div className="my-auto max-w-3xl pointer-events-auto pt-20">
        <span className="text-gold-400 font-mono text-xs md:text-sm tracking-ultra uppercase block mb-4">
          BHRAMADANAYAK VASTU CONSULTANCY
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight mb-6 text-ivory-100">
          DISCOVER THE HARMONY OF SPACE
        </h1>
        <p className="text-ivory-200 text-base md:text-xl font-sans font-light max-w-xl leading-relaxed mb-8">
          The space we live in exists within a larger cosmic order. Explore the relationship between celestial geometry, natural elements, and architectural habitats.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            onClick={onBookClick}
            className="px-8 py-4 bg-transparent border border-gold-400 font-mono font-bold tracking-widest text-xs uppercase transition-all cursor-pointer flex items-center space-x-2"
          >
            <span className="!text-gold-400">BOOK A CONSULTATION</span>
            <ArrowRight className="w-4 h-4 !text-gold-400" />
          </button>
          <a
            href="#about"
            className="button-gold px-8 py-4 border border-gold-400/60 bg-transparent text-gold-400 font-mono font-semibold tracking-widest text-xs uppercase transition-all"
          >
            <span className="!text-gold-400">BEGIN JOURNEY</span>
          </a>
        </div>
      </div>

      <div className="flex justify-between items-end text-xs tracking-widest text-ivory-300 font-mono pt-12">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="uppercase text-gold-400 font-bold">CONTINUOUS FILM SCRUBBING</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-[11px]">SCROLL TO PLAY VIDEO</span>
          <div className="w-4 h-8 border border-gold-400/60 rounded-full flex justify-center p-1">
            <div className="w-1 h-2.5 bg-gold-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
