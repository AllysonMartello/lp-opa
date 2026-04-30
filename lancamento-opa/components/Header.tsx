"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Problema', href: '#problema' },
    { name: 'Nosso Olhar', href: '#olhar' },
    { name: 'Método', href: '#metodo' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      <div className={cn(
        "mx-auto transition-all duration-500 flex items-center justify-between",
        isScrolled 
          ? "max-w-[1200px] mt-4 px-6 md:px-8 py-3 bg-white/80 backdrop-blur-md rounded-full border border-[#D9D9D9]/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mx-4 md:mx-auto" 
          : "max-w-full px-6 md:px-12 py-8 bg-transparent"
      )}>
        {/* LOGO */}
        <a href="/" className="flex items-center group">
          <img 
            src="https://smabio.com.br/wp-content/uploads/2026/04/Frame-83.png" 
            alt="Opa Logo" 
            className={cn(
              "transition-all duration-500",
              isScrolled ? "h-8" : "h-12"
            )}
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-[11px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 hover:text-[#2F5D82]",
                isScrolled ? "text-[#0F2A44]/70" : "text-white/80"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#apply"
            className={cn(
              "px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500",
              isScrolled 
                ? "bg-[#0F2A44] text-white hover:bg-[#2F5D82]" 
                : "bg-white text-[#0F2A44] hover:bg-[#F2F2F2]"
            )}
          >
            Aplicar Imóvel
          </a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button 
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-[#0F2A44]" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-[#F2F2F2] shadow-xl p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest font-bold text-[#0F2A44]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#apply"
              className="bg-[#0F2A44] text-white text-center py-4 rounded-xl text-[12px] uppercase tracking-[0.2em] font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Aplicar Imóvel
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
