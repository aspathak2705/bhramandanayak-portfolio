import React from 'react';
import { Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-950 py-16 px-6 md:px-12 border-t border-gold-500/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center bg-charcoal-900">
            <Compass className="w-4 h-4 text-gold-400" />
          </div>
          <div>
            <span className="font-serif text-sm tracking-widest text-ivory-100 font-semibold block">
              BHRAMADANAYAK
            </span>
            <span className="text-[8px] tracking-ultra text-gold-400/70 font-mono uppercase block">
              VASTU CONSULTANCY
            </span>
          </div>
        </div>

        <div className="text-center font-serif text-xs italic text-gold-400/80">
          "Space. Direction. Harmony."
        </div>

        <div className="flex space-x-6 text-xs text-ivory-400/60 font-mono">
          <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gold-500/5 text-center text-[10px] font-mono text-ivory-400/40">
        © {new Date().getFullYear()} Bhramadanayak Vastu Consultancy. All Rights Reserved. Sacred Vastu Vidya & Architectural Guidance.
      </div>
    </footer>
  );
};
