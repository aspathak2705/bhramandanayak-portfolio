import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    title: 'Understanding the Vastu Purusha Mandala',
    excerpt: 'An architectural exploration of how the sacred 81-grid matrix maps physical rooms to celestial directional forces.',
    readTime: '6 MIN READ',
  },
  {
    title: 'The Five Elements in Classical Vastu',
    excerpt: 'How Earth, Water, Fire, Air, and Space interact to define thermal, emotional, and physical equilibrium in home design.',
    readTime: '8 MIN READ',
  },
  {
    title: 'Why Solar Orientation Matters in Built Spaces',
    excerpt: 'Analyzing solar radiation paths from East to South-West to design energy-efficient and health-supportive habitats.',
    readTime: '5 MIN READ',
  },
  {
    title: 'Understanding the Sacred Brahmasthan',
    excerpt: 'Why the central core of every home or building must remain open, uncluttered, and bathed in natural zenith light.',
    readTime: '7 MIN READ',
  },
];

export const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="relative bg-charcoal-900/60 py-28 px-6 md:px-12 border-b border-gold-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-4">
              <span className="w-8 h-[1px] bg-gold-400/50" />
              <span>EDITORIAL KNOWLEDGE</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light">
              Vastu Vidya Insights
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((art) => (
            <div
              key={art.title}
              className="p-8 bg-charcoal-950 border border-gold-500/10 hover:border-gold-500/30 transition-all gold-border-glow flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-3">
                  {art.readTime}
                </span>
                <h3 className="font-serif text-2xl text-ivory-100 font-semibold mb-3 group-hover:text-gold-300 transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-ivory-300/70 font-sans leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-gold-500/10 flex items-center space-x-2 text-xs font-mono text-gold-400">
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
