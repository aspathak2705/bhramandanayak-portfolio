import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  progress: number; // 0 to 100
  isReady: boolean;
  onEnter: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ progress, isReady, onEnter }) => {
  const [mounted, setMounted] = useState(true);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-charcoal-950 flex flex-col items-center justify-between p-10 transition-opacity duration-1000 ${
        isReady ? 'opacity-100' : 'opacity-100'
      }`}
    >
      <div className="w-full flex justify-between items-center text-xs tracking-widest text-gold-400 font-mono">
        <span>BHRAMADANAYAK</span>
        <span>VASTU CONSULTANCY</span>
      </div>

      <div className="flex flex-col items-center text-center space-y-8 max-w-lg">
        {/* Sacred Geometry Loader Indicator */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border border-gold-500/20 animate-[spin_10s_linear_infinite]" />
          {/* Concentric diamond ring */}
          <div className="absolute inset-3 rotate-45 border border-gold-400/40 animate-[spin_15s_linear_infinite_reverse]" />
          {/* Inner pulsating orb */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-700 via-gold-400 to-ivory-100 opacity-80 animate-pulse flex items-center justify-center shadow-lg shadow-gold-500/20">
            <span className="font-mono text-xs text-charcoal-950 font-bold">{Math.round(progress)}%</span>
          </div>
        </div>

        <div>
          <h1 className="font-serif text-2xl md:text-3xl tracking-widest text-ivory-100 mb-2">
            BHRAMADANAYAK
          </h1>
          <p className="text-xs text-gold-400/80 tracking-ultra uppercase font-mono">
            DISCOVER THE HARMONY OF SPACE
          </p>
        </div>

        {isReady ? (
          <button
            onClick={() => {
              onEnter();
              setMounted(false);
            }}
            className="px-8 py-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-charcoal-950 font-semibold tracking-widest text-xs uppercase rounded-none hover:brightness-110 transition-all shadow-lg shadow-gold-500/20 transform hover:-translate-y-0.5 cursor-pointer"
          >
            ENTER THE SPACE
          </button>
        ) : (
          <div className="text-xs text-ivory-400/60 font-mono tracking-widest animate-pulse">
            LOADING COSMIC SEQUENCE... {Math.round(progress)}%
          </div>
        )}
      </div>

      <div className="text-xs text-ivory-400/40 font-mono tracking-widest">
        COSMOS → VASTU → ARCHITECTURE → HUMAN LIFE
      </div>
    </div>
  );
};
