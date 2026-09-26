import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Mandala', href: '#mandala' },
    { name: 'Elements', href: '#elements' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-gold-500/15 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full border border-gold-400/50 flex items-center justify-center bg-charcoal-900/80 group-hover:border-gold-400 transition-colors">
            <Compass className="w-5 h-5 text-gold-400 group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base tracking-widest text-ivory-100 font-semibold group-hover:text-gold-300 transition-colors">
              BHRAMADANAYAK
            </span>
            <span className="text-[9px] tracking-ultra text-gold-400/80 font-mono uppercase">
              VASTU CONSULTANCY
            </span>
          </div>
        </a>

        {/* Desktop Links - Generous spacing & clean typography */}
        <div className="hidden lg:flex items-center space-x-8 text-xs tracking-widest uppercase font-sans font-medium text-ivory-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Consultation Button - High contrast text */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onBookClick}
            className="px-6 py-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-charcoal-950 font-bold text-xs tracking-widest uppercase rounded-none hover:brightness-110 transition-all flex items-center space-x-2 shadow-lg shadow-gold-500/20 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-ivory-100 hover:text-gold-400 transition-colors border border-gold-500/20 bg-charcoal-900/80"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6 text-gold-400" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-charcoal-950/98 backdrop-blur-2xl border-b border-gold-500/20 px-8 py-8 space-y-5 shadow-2xl z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base tracking-widest uppercase font-serif text-ivory-100 hover:text-gold-300 transition-colors py-2.5 border-b border-gold-500/10"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full mt-6 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-bold text-xs tracking-widest uppercase rounded-none flex items-center justify-center space-x-2 shadow-lg shadow-gold-500/20"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
};
