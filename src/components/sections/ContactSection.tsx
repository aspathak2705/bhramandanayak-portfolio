import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Globe, Share2, CheckCircle, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Residential Property',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 border-b border-gold-500/10 z-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8 bg-black/40 backdrop-blur-md p-8 border border-gold-500/20 gold-border-glow">
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
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-black/60 shrink-0">
                  <Phone className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ivory-400 uppercase tracking-widest block">Phone</span>
                  <span className="text-sm font-sans text-ivory-200">[Phone Number Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-black/60 shrink-0">
                  <MessageSquare className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ivory-400 uppercase tracking-widest block">WhatsApp</span>
                  <span className="text-sm font-sans text-ivory-200">[WhatsApp Contact Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-black/60 shrink-0">
                  <Mail className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ivory-400 uppercase tracking-widest block">Email</span>
                  <span className="text-sm font-sans text-ivory-200">[Email Address Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-black/60 shrink-0">
                  <MapPin className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ivory-400 uppercase tracking-widest block">Office Location</span>
                  <span className="text-sm font-sans text-ivory-200">[Office Address & Location Placeholder]</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4 text-gold-400">
              <a href="#" className="p-2.5 border border-gold-500/20 hover:border-gold-400 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 border border-gold-500/20 hover:border-gold-400 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 bg-black/50 backdrop-blur-md border border-gold-500/30 text-center space-y-4 gold-border-glow">
                <CheckCircle className="w-12 h-12 text-gold-400 mx-auto" />
                <h3 className="font-serif text-2xl text-ivory-100 font-semibold">Consultation Request Received</h3>
                <p className="text-sm text-ivory-200/80 font-sans max-w-md mx-auto">
                  Thank you. Your consultation inquiry has been recorded. Our spatial team will review your property details and contact you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 border border-gold-400 bg-gold-500/10 font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer"
                >
                  <span className="!text-gold-400">Send Another Request</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-black/50 backdrop-blur-md border border-gold-500/20 gold-border-glow space-y-6">
                <h3 className="font-serif text-2xl text-ivory-100 font-medium mb-2">Send Consultation Inquiry</h3>
                <p className="text-xs text-ivory-300/80 mb-6 font-sans">Complete details below to schedule an initial evaluation.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full bg-black/60 border border-gold-500/20 px-4 py-3.5 text-sm text-ivory-100 placeholder-ivory-400/40 focus:outline-none focus:border-gold-400 font-sans"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email address"
                      className="w-full bg-black/60 border border-gold-500/20 px-4 py-3.5 text-sm text-ivory-100 placeholder-ivory-400/40 focus:outline-none focus:border-gold-400 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2 font-semibold">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter phone number"
                      className="w-full bg-black/60 border border-gold-500/20 px-4 py-3.5 text-sm text-ivory-100 placeholder-ivory-400/40 focus:outline-none focus:border-gold-400 font-sans"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2 font-semibold">Property Type</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-black/60 border border-gold-500/20 px-4 py-3.5 text-sm text-ivory-100 focus:outline-none focus:border-gold-400 font-sans"
                    >
                      <option className="bg-charcoal-950">Residential Property</option>
                      <option className="bg-charcoal-950">Commercial Property</option>
                      <option className="bg-charcoal-950">Architectural Plot / Pre-Build</option>
                      <option className="bg-charcoal-950">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2 font-semibold">Message / Spatial Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your site, property details, or spatial questions..."
                    className="w-full bg-black/60 border border-gold-500/20 px-4 py-3.5 text-sm text-ivory-100 placeholder-ivory-400/40 focus:outline-none focus:border-gold-400 font-sans"
                  />
                </div>

                {/* Explicit Gold Text Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gold-500/10 border border-gold-400 font-bold tracking-widest text-xs uppercase hover:bg-gold-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span className="!text-gold-400">SEND CONSULTATION REQUEST</span>
                  <ArrowRight className="w-4 h-4 !text-gold-400" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
