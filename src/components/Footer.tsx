import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-gold-500/20 z-10 relative bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.jpeg"
            alt="Bhramadanayak Vastu Consultancy Logo"
            className="w-8 h-8 object-contain rounded-full border border-gold-400/50"
          />
          <div>
            <span className="font-serif text-sm tracking-widest text-ivory-100 font-semibold block">
              BHRAMADANAYAK
            </span>
            <span className="text-[8px] tracking-ultra text-gold-400 font-mono uppercase block">
              VASTU CONSULTANCY
            </span>
          </div>
        </div>

        <div className="text-center font-serif text-xs italic text-gold-400 font-semibold">
          "Space. Direction. Harmony."
        </div>

        <div className="flex space-x-6 text-xs text-ivory-300 font-mono">
          <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gold-500/10 text-center text-[10px] font-mono text-ivory-400">
        © {new Date().getFullYear()} Bhramadanayak Vastu Consultancy. All Rights Reserved. Sacred Vastu Vidya & Architectural Guidance.
      </div>
    </footer>
  );
};
