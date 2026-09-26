import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PHILOSOPHY', href: '#philosophy' },
    { name: 'MANDALA', href: '#mandala' },
    { name: 'ELEMENTS', href: '#elements' },
    { name: 'NAVAGRAHA', href: '#navagraha' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROCESS', href: '#process' },
    { name: 'INSIGHTS', href: '#insights' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-gold-500/20 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT: Official Brand Logo from assets/ */}
        <a href="#" className="flex items-center space-x-3 group">
          <img
            src="/logo.jpeg"
            alt="Bhramadanayak Vastu Consultancy Logo"
            className="w-10 h-10 object-contain rounded-full border border-gold-400/50"
          />
          <div className="flex flex-col">
            <span className="font-serif text-sm md:text-base tracking-widest text-ivory-100 font-semibold group-hover:text-gold-300 transition-colors">
              BHRAMADANAYAK
            </span>
            <span className="text-[8px] tracking-ultra text-gold-400 font-mono uppercase">
              VASTU CONSULTANCY
            </span>
          </div>
        </a>

        {/* CENTER: Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-7 text-xs tracking-widest uppercase font-mono font-medium text-ivory-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT: Primary Gold CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onBookClick}
            className="px-5 py-2.5 bg-transparent border border-gold-400 hover:bg-gold-500/10 font-mono font-bold text-xs tracking-widest uppercase transition-all flex items-center space-x-2 cursor-pointer"
          >
            <span className="!text-gold-400">BOOK A CONSULTATION</span>
            <ArrowRight className="w-3.5 h-3.5 !text-gold-400" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gold-400 border border-gold-500/30 bg-transparent"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 !text-gold-400" /> : <Menu className="w-6 h-6 !text-gold-400" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer (Transparent background) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-transparent border-b border-gold-500/30 px-8 py-8 space-y-4 z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm tracking-widest font-mono uppercase text-ivory-100 hover:text-gold-400 py-2 border-b border-gold-500/10"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full mt-4 py-3 bg-transparent border border-gold-400 font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2"
          >
            <span className="!text-gold-400">BOOK A CONSULTATION</span>
            <ArrowRight className="w-4 h-4 !text-gold-400" />
          </button>
        </div>
      )}
    </nav>
  );
};
