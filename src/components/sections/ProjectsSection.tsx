import React from 'react';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section className="relative bg-charcoal-950 py-28 px-6 md:px-12 border-b border-gold-500/10">
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
          <p className="text-xs font-mono text-ivory-400/60 uppercase tracking-widest mt-4 md:mt-0">
            [Authentic Case Studies & Portfolio]
          </p>
        </div>

        {/* Editorial Case Study Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-charcoal-900 border border-gold-500/20 gold-border-glow flex flex-col justify-between aspect-[4/3]">
            <div>
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2">
                RESIDENTIAL ESTATE • [LOCATION]
              </span>
              <h3 className="font-serif text-2xl text-ivory-100 font-semibold mb-3">
                [Project Title Placeholder]
              </h3>
              <p className="text-xs text-ivory-300/70 font-sans leading-relaxed">
                Comprehensive Vastu orientation analysis and interior re-alignment for a modern multi-generational residence.
              </p>
            </div>
            <div className="pt-6 border-t border-gold-500/10 flex justify-between items-center text-xs font-mono text-gold-400">
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="p-8 bg-charcoal-900 border border-gold-500/20 gold-border-glow flex flex-col justify-between aspect-[4/3]">
            <div>
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2">
                COMMERCIAL HEADQUARTERS • [LOCATION]
              </span>
              <h3 className="font-serif text-2xl text-ivory-100 font-semibold mb-3">
                [Project Title Placeholder]
              </h3>
              <p className="text-xs text-ivory-300/70 font-sans leading-relaxed">
                Architectural blueprint Vastu review and cash flow directional optimization for corporate workspace premises.
              </p>
            </div>
            <div className="pt-6 border-t border-gold-500/10 flex justify-between items-center text-xs font-mono text-gold-400">
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
