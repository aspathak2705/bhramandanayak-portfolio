import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Globe, Share2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative bg-charcoal-900/40 py-28 px-6 md:px-12 border-b border-gold-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center space-x-3 text-gold-400 font-mono text-xs tracking-ultra uppercase mb-4">
                <span className="w-8 h-[1px] bg-gold-400/50" />
                <span>INQUIRIES</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-ivory-100 font-light mb-4">
                Get in Touch
              </h2>
              <p className="text-ivory-300/80 text-sm font-sans font-light leading-relaxed">
                Connect with Bhramadanayak Vastu Consultancy for residential, commercial, or pre-construction blueprint assessments.
              </p>
            </div>

            <div className="space-y-6 border-t border-gold-500/10 pt-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-charcoal-950 shrink-0">
                  <Phone className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ivory-400 uppercase tracking-widest block">Phone</span>
                  <span className="text-sm font-sans text-ivory-200">[Phone Number Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-charcoal-950 shrink-0">
                  <MessageSquare className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ivory-400 uppercase tracking-widest block">WhatsApp</span>
                  <span className="text-sm font-sans text-ivory-200">[WhatsApp Contact Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-charcoal-950 shrink-0">
                  <Mail className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ivory-400 uppercase tracking-widest block">Email</span>
                  <span className="text-sm font-sans text-ivory-200">[Email Address Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-charcoal-950 shrink-0">
                  <MapPin className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ivory-400 uppercase tracking-widest block">Office Location</span>
                  <span className="text-sm font-sans text-ivory-200">[Office Address & Location Placeholder]</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4 text-gold-400">
              <a href="#" className="p-2 border border-gold-500/20 hover:border-gold-400 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-gold-500/20 hover:border-gold-400 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={(e) => e.preventDefault()} className="p-8 bg-charcoal-950 border border-gold-500/20 gold-border-glow space-y-6">
              <h3 className="font-serif text-2xl text-ivory-100 font-medium mb-2">Send Consultation Inquiry</h3>
              <p className="text-xs text-ivory-400/80 mb-6 font-sans">Complete details below to schedule an initial evaluation.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-charcoal-900 border border-gold-500/20 px-4 py-3 text-xs text-ivory-100 focus:outline-none focus:border-gold-400 font-sans"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-charcoal-900 border border-gold-500/20 px-4 py-3 text-xs text-ivory-100 focus:outline-none focus:border-gold-400 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full bg-charcoal-900 border border-gold-500/20 px-4 py-3 text-xs text-ivory-100 focus:outline-none focus:border-gold-400 font-sans"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2">Property Type</label>
                  <select className="w-full bg-charcoal-900 border border-gold-500/20 px-4 py-3 text-xs text-ivory-100 focus:outline-none focus:border-gold-400 font-sans">
                    <option>Residential Property</option>
                    <option>Commercial Property</option>
                    <option>Architectural Plot / Pre-Build</option>
                    <option>General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2">Message / Spatial Requirements</label>
                <textarea
                  rows={4}
                  placeholder="Describe your site, property details, or questions..."
                  className="w-full bg-charcoal-900 border border-gold-500/20 px-4 py-3 text-xs text-ivory-100 focus:outline-none focus:border-gold-400 font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-charcoal-950 font-semibold tracking-widest text-xs uppercase hover:brightness-110 transition-all shadow-md shadow-gold-500/10 cursor-pointer"
              >
                SUBMIT CONSULTATION REQUEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
