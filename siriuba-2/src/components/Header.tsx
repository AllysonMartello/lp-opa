import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useT } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-[background,padding] duration-300 ${
          scrolled ? "bg-bg-main/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center z-50 relative" aria-label="OPA Imóveis - Início">
            <img
              src="https://smabio.com.br/wp-content/uploads/2026/04/Logo_OPA-1.png"
              alt="OPA Imóveis"
              width={96}
              height={32}
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              className={`h-8 w-auto transition-[filter] duration-300 ${scrolled || mobileMenuOpen ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#a-casa" className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}>{t.header.nav.house}</a>
            <a href="#experiencia" className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}>{t.header.nav.experience}</a>
            <a href="#tour" className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}>{t.header.nav.tour}</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher variant={scrolled ? "header-dark" : "header-light"} />
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form"))}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-secondary text-white hover:bg-blue-700"
                  : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30"
              }`}
            >
              {t.header.cta}
            </button>
          </div>

          <button
            className={`md:hidden z-50 relative p-2 rounded-full transition-colors ${scrolled || mobileMenuOpen ? 'text-text-main hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t.header.toggleMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-main pt-24 px-6 pb-8 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              <a href="#a-casa" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-primary-1 border-b border-border-main pb-4">{t.header.nav.house}</a>
              <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-primary-1 border-b border-border-main pb-4">{t.header.nav.experience}</a>
              <a href="#tour" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-primary-1 border-b border-border-main pb-4">{t.header.nav.tour}</a>
            </nav>
            <div className="mt-8">
              <LanguageSwitcher variant="mobile" />
            </div>
            <div className="mt-auto pb-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent("open-lead-form"));
                }}
                className="w-full block text-center bg-secondary text-white px-6 py-4 rounded-full text-lg font-medium"
              >
                {t.header.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
