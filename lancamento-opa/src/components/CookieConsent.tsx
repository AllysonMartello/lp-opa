import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';

export default function CookieConsent() {
  const t = useT();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('opa_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('opa_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl border border-[#D9D9D9]/60 shadow-2xl rounded-2xl p-5 sm:p-6 pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative">
            <div className="bg-[#0F2A44]/10 p-3 rounded-full shrink-0">
              <ShieldAlert className="w-6 h-6 text-[#0F2A44]" />
            </div>

            <div className="flex-1">
              <h3 className="text-[#0F2A44] font-sans text-lg sm:text-xl font-bold mb-1">
                {t.cookieConsent.title}
              </h3>
              <p className="text-[#2B2B2B]/80 text-sm leading-relaxed">
                {t.cookieConsent.body}
              </p>
            </div>

            <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
              <button
                onClick={acceptCookies}
                className="flex-1 sm:flex-none bg-[#0F2A44] hover:bg-[#2F5D82] text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                {t.cookieConsent.accept}
              </button>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-1.5 text-[#2B2B2B]/60 hover:text-[#2B2B2B] bg-black/5 hover:bg-black/10 rounded-full transition-colors sm:hidden"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
