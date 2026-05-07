import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('opa_cookie_consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
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
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl border border-border-main/50 shadow-2xl rounded-2xl p-5 sm:p-6 pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="bg-primary-1/10 p-3 rounded-full shrink-0">
              <ShieldAlert className="w-6 h-6 text-primary-1" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-primary-1 font-serif text-lg sm:text-xl font-medium mb-1">
                Privacidade e Cookies
              </h3>
              <p className="text-text-sec text-sm leading-relaxed">
                Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência, analisar o tráfego do site e personalizar conteúdo e anúncios (Meta Ads, Google, etc). Ao continuar navegando, você concorda com a nossa política de privacidade e uso de cookies em conformidade com a LGPD.
              </p>
            </div>
            
            <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
              <button
                onClick={acceptCookies}
                className="flex-1 sm:flex-none bg-primary-1 hover:bg-primary-2 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                Aceitar e fechar
              </button>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-1.5 text-text-sec/60 hover:text-text-sec bg-black/5 hover:bg-black/10 rounded-full transition-colors sm:hidden"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
