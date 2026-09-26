import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vastu Philosophy', href: '#philosophy' },
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
          ? 'bg-charcoal-950/85 backdrop-blur-md border-b border-gold-500/10 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-full border border-gold-400/40 flex items-center justify-center bg-charcoal-900/60 group-hover:border-gold-400 transition-colors">
            <Compass className="w-4 h-4 text-gold-400 group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm md:text-base tracking-widest text-ivory-100 font-semibold group-hover:text-gold-300 transition-colors">
              BHRAMADANAYAK
            </span>
            <span className="text-[9px] tracking-ultra text-gold-400/70 font-mono uppercase">
              VASTU CONSULTANCY
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-xs tracking-widest uppercase font-sans font-medium text-ivory-300/80">
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

        {/* Consultation Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onBookClick}
            className="px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-semibold text-xs tracking-widest uppercase rounded-none hover:brightness-110 transition-all flex items-center space-x-2 shadow-md shadow-gold-500/10 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-ivory-200 hover:text-gold-400 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-950/95 backdrop-blur-xl border-b border-gold-500/10 px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm tracking-widest uppercase text-ivory-200 hover:text-gold-400 transition-colors py-2 border-b border-gold-500/5"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full mt-4 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-semibold text-xs tracking-widest uppercase rounded-none flex items-center justify-center space-x-2"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
};
