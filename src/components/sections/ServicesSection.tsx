import React from 'react';
import { Home, Building2, DraftingCompass, ScrollText, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    icon: Home,
    title: 'RESIDENTIAL VASTU',
    subtitle: 'Homes, Apartments & Private Estates',
    items: [
      'New Home Vastu Consultation',
      'Existing Home Diagnostic Analysis',
      'Floor Plan & Directional Review',
      'Entrance & Main Door Alignment',
      'Master Bedroom & Kitchen Positioning',
    ],
  },
  {
    icon: Building2,
    title: 'COMMERCIAL VASTU',
    subtitle: 'Offices, Workspaces & Industrial Sites',
    items: [
      'Corporate Headquarters Spatial Planning',
      'Commercial Property & Shop Analysis',
      'Executive Desk & Cash Desk Orientation',
      'Factory & Machinery Placement Review',
      'Workspace Flow & Team Vitality',
    ],
  },
  {
    icon: DraftingCompass,
    title: 'SITE & ARCHITECTURAL CONSULTATION',
    subtitle: 'Pre-Construction & Master Planning',
    items: [
      'Plot Soil & Topography Analysis',
      'Site Magnetic Orientation Verification',
      'Architectural Blueprint Co-Design',
      'Structural Grid & Elevation Review',
      'Land Boundary Geometry',
    ],
  },
  {
    icon: ScrollText,
    title: 'TRADITIONAL VASTU GUIDANCE',
    subtitle: 'Vedic Scriptures & Mandala Science',
    items: [
      'Vastu Purusha Mandala Placement',
      'Panchamahabhuta Balancing',
      'Directional & Celestial Alignments',
      'Non-Destructive Vastu Remedies',
      'Traditional Spatial Guidance',
    ],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative bg-charcoal-900/40 py-28 px-6 md:px-12 border-b border-gold-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-4">
            <span className="w-8 h-[1px] bg-gold-400/50" />
            <span>CONSULTANCY OFFERINGS</span>
            <span className="w-8 h-[1px] bg-gold-400/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light mb-4">
            Services Architecture
          </h2>
          <p className="text-ivory-300/80 text-base font-sans font-light">
            Comprehensive Vastu Vidya evaluations for new architectural builds, existing properties, and corporate spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((s) => {
            const IconComp = s.icon;
            return (
              <div
                key={s.title}
                className="p-8 bg-charcoal-950 border border-gold-500/10 hover:border-gold-500/30 transition-all gold-border-glow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center bg-charcoal-900">
                      <IconComp className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-ivory-100 font-semibold">{s.title}</h3>
                      <p className="text-xs text-gold-400/80 font-mono tracking-wide">{s.subtitle}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start space-x-3 text-xs text-ivory-200/80 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-gold-400/70 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gold-500/10 flex justify-between items-center text-[10px] font-mono text-ivory-400/60 uppercase tracking-widest">
                  <span>Vastu Vidya Protocol</span>
                  <span className="text-gold-400 font-semibold">Consultation Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
