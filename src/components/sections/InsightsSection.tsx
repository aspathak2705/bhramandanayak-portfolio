import React, { useState } from 'react';
import { BookOpen, ArrowRight, X, Clock } from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
}

const ARTICLES: Article[] = [
  {
    id: 'mandala',
    title: 'Understanding the Vastu Purusha Mandala',
    readTime: '6 MIN READ',
    category: 'SACRED GEOMETRY',
    summary: 'An architectural introduction to how traditional Vastu Vidya texts describe the relationship between spatial orientation and structural grids.',
    content: [
      'The Vastu Purusha Mandala is a foundational concept in classical Indian architecture. It serves as a geometric template for organizing built environments according to cardinal and celestial orientations.',
      'Represented traditionally as a grid of 64 or 81 squares, the mandala maps governing natural forces—such as solar paths, prevailing wind vectors, and magnetic alignments—to specific functional zones within a home or commercial building.',
      'When designing a building, the center—known as the Brahmasthan—is maintained as an open, unencumbered space. Surrounding zones are allocated to living areas, entryways, water features, and structural supports in accordance with elemental principles.',
      'Modern architectural practitioners utilize the mandala not as a rigid dogma, but as a framework for optimizing natural daylighting, cross-ventilation, and spatial proportion in contemporary habitats.'
    ]
  },
  {
    id: 'elements',
    title: 'The Five Elements in Classical Vastu',
    readTime: '8 MIN READ',
    category: 'ELEMENTAL HARMONY',
    summary: 'How Earth, Water, Fire, Air, and Space interact to inform spatial planning and interior environmental design.',
    content: [
      'Classical Vastu Vidya identifies five fundamental natural elements—Panchamahabhuta: Earth (Prithvi), Water (Jala), Fire (Agni), Air (Vayu), and Space (Akasha).',
      'Each element corresponds to specific cardinal sectors of a property. Earth governs the South-West for stability; Water aligns with the North-East for clarity; Fire occupies the South-East for energy and hearth; Air resides in the North-West for movement; and Space centers in the Brahmasthan.',
      'Balancing these elements within an architectural plan ensures that kitchens (fire), plumbing/water features (water), load-bearing walls (earth), and windows/courtyards (air and space) function in harmony with natural environmental flows.',
      'Respecting elemental sectors reduces architectural friction and creates living spaces that feel naturally balanced and comfortable.'
    ]
  },
  {
    id: 'solar',
    title: 'Why Solar & Directional Orientation Matters',
    readTime: '5 MIN READ',
    category: 'ARCHITECTURAL SCIENCE',
    summary: 'Analyzing morning ultraviolet radiation, afternoon thermal load, and compass bearings in home layout planning.',
    content: [
      'Solar radiation varies significantly throughout the day. Classical Vastu guidelines reflect a empirical understanding of solar trajectories in the Indian subcontinent.',
      'Eastern orientations receive soft, beneficial morning sunlight rich in early UV rays, making East and North-East ideal for main entrances, living rooms, and study areas.',
      'Conversely, South-Western exposures receive intense afternoon thermal radiation. Vastu Vidya recommends placing thicker walls, storage areas, and master bedrooms in the South-West to absorb heat and provide thermal buffer zones for the rest of the dwelling.',
      'By aligning room functions with daily solar movement, buildings achieve enhanced energy efficiency, reduced cooling loads, and pleasant natural illumination.'
    ]
  },
  {
    id: 'brahmasthan',
    title: 'Understanding the Sacred Brahmasthan',
    readTime: '7 MIN READ',
    category: 'SPATIAL CORE',
    summary: 'Why the central core of every home or building functions as the lung and heart of architectural design.',
    content: [
      'The Brahmasthan is the geometric and energetic center of a Vastu Purusha Mandala. In traditional Indian courtyard houses (Haveli / Nalukettu), this zone was constructed as an open skyward courtyard.',
      'In Vastu Vidya, the Brahmasthan represents the element of Space (Akasha). It should remain free of heavy structural columns, staircases, toilets, or dense furniture.',
      'An open central zone allows natural light from overhead skylights or courtyards to illuminate interior rooms, while facilitating vertical stack ventilation to purge stale air.',
      'In modern apartment layouts where an open courtyard is impractical, maintaining a clean, well-lit central hall or atrium honors the Brahmasthan principle and preserves spatial openess.'
    ]
  }
];

export const InsightsSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="insights" className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 z-10 bg-transparent">
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

        {/* High contrast translucent cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="p-8 border border-gold-500/30 hover:border-gold-400 transition-all gold-border-glow flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest mb-3">
                  <span>{art.category}</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-ivory-100 font-semibold mb-3 group-hover:text-gold-300 transition-colors">
                  {art.title}
                </h3>
                <p className="text-sm text-ivory-200 font-sans leading-relaxed mb-6 font-light">
                  {art.summary}
                </p>
              </div>
              <div className="pt-4 border-t border-gold-500/10 flex items-center space-x-2 text-xs font-mono font-bold text-gold-400 group-hover:text-gold-300">
                <span>READ FULL INSIGHT</span>
                <ArrowRight className="w-4 h-4 !text-gold-400 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="border border-gold-500/30 max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12 shadow-2xl relative gold-border-glow text-ivory-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 text-gold-400 border border-gold-500/30 bg-transparent"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 !text-gold-400" />
            </button>

            <div className="flex items-center space-x-3 text-gold-400 font-mono text-xs tracking-widest uppercase mb-4 font-bold">
              <span>{activeArticle.category}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-ivory-100 font-medium mb-6 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="w-16 h-[2px] bg-gold-400 mb-8" />

            <div className="space-y-5 text-ivory-200 font-sans text-sm md:text-base leading-relaxed font-light">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gold-500/10 flex justify-between items-center text-xs font-mono text-gold-400 font-bold">
              <span>BHRAMADANAYAK EDITORIAL</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 border border-gold-400 font-mono font-bold uppercase tracking-widest cursor-pointer"
              >
                <span className="!text-gold-400">Close Article</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
