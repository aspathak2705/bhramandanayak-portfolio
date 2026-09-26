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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 px-4 md:px-8 shadow-2xl">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        {/* LEFT: Official Brand Logo & Title */}
        <a href="#" className="flex items-center space-x-2.5 group shrink-0">
          <img
            src="/logo.jpeg"
            alt="Bhramadanayak Vastu Consultancy Logo"
            className="w-8 h-8 object-cover rounded-full border border-gold-400/60 shadow-md"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xs md:text-sm tracking-widest text-ivory-100 font-semibold group-hover:text-gold-300 transition-colors leading-none whitespace-nowrap">
              BHRAMADANAYAK
            </span>
            <span className="text-[7px] tracking-ultra text-gold-400 font-mono uppercase mt-0.5 whitespace-nowrap">
              VASTU CONSULTANCY
            </span>
          </div>
        </a>

        {/* CENTER: Desktop Navigation (Flexible container with gap safety) */}
        <div className="hidden 2xl:flex items-center space-x-5 text-[10px] tracking-wider uppercase font-mono font-medium text-ivory-200 shrink">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold-400 transition-colors py-1 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT: Primary Gold CTA */}
        <div className="hidden 2xl:flex items-center shrink-0">
          <button
            onClick={onBookClick}
            className="px-3.5 py-2 bg-gold-500/10 border border-gold-400 hover:bg-gold-500/20 font-mono font-bold text-[10px] tracking-widest uppercase transition-all flex items-center space-x-1.5 cursor-pointer shadow-lg"
          >
            <span className="!text-gold-400 whitespace-nowrap">BOOK A CONSULTATION</span>
            <ArrowRight className="w-3 h-3 !text-gold-400" />
          </button>
        </div>

        {/* Mobile / Screen Drawer Toggle (Active up to 2XL screens to eliminate overlap completely) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="2xl:hidden p-2 text-gold-400 border border-gold-500/30 bg-charcoal-950/80 shrink-0"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 !text-gold-400" /> : <Menu className="w-5 h-5 !text-gold-400" />}
        </button>
      </div>

      {/* Mobile & Laptop Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="2xl:hidden fixed inset-x-0 top-[57px] bg-charcoal-950/95 backdrop-blur-xl border-b border-gold-500/30 px-8 py-8 space-y-4 z-50 shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto">
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
            className="w-full mt-4 py-3 bg-gold-500/10 border border-gold-400 font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2"
          >
            <span className="!text-gold-400">BOOK A CONSULTATION</span>
            <ArrowRight className="w-4 h-4 !text-gold-400" />
          </button>
        </div>
      )}
    </nav>
  );
};
