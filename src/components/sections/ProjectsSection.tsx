import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 z-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-4">
              <span className="w-8 h-[1px] bg-gold-400/50" />
              <span>CASE STUDIES</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light">
              Selected Consultations
            </h2>
          </div>
          <p className="text-xs font-mono text-gold-400 uppercase tracking-widest mt-4 md:mt-0 font-bold">
            ARCHITECTURAL PORTFOLIO
          </p>
        </div>

        {/* Editorial Case Study Cards with dark translucency for maximum text readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-gold-500/30 gold-border-glow flex flex-col justify-between aspect-[4/3]">
            <div>
              <span className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest block mb-2">
                RESIDENTIAL ESTATE CONSULTATION
              </span>
              <h3 className="font-serif text-2xl text-ivory-100 font-semibold mb-3">
                Harmonious Multi-Generational Villa
              </h3>
              <p className="text-xs text-ivory-200 font-sans leading-relaxed">
                Comprehensive Vastu orientation analysis and interior room re-alignment for a contemporary private residence.
              </p>
            </div>
            <div className="pt-6 border-t border-gold-500/10 flex justify-between items-center text-xs font-mono text-gold-400 font-bold">
              <span>EXPLORE CASE METHODOLOGY</span>
              <ArrowUpRight className="w-4 h-4 !text-gold-400" />
            </div>
          </div>

          <div className="p-8 border border-gold-500/30 gold-border-glow flex flex-col justify-between aspect-[4/3]">
            <div>
              <span className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest block mb-2">
                COMMERCIAL HEADQUARTERS CONSULTATION
              </span>
              <h3 className="font-serif text-2xl text-ivory-100 font-semibold mb-3">
                Corporate Workspace Spatial Audit
              </h3>
              <p className="text-xs text-ivory-200 font-sans leading-relaxed">
                Architectural blueprint Vastu review and cash flow directional optimization for corporate office premises.
              </p>
            </div>
            <div className="pt-6 border-t border-gold-500/10 flex justify-between items-center text-xs font-mono text-gold-400 font-bold">
              <span>EXPLORE CASE METHODOLOGY</span>
              <ArrowUpRight className="w-4 h-4 !text-gold-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
