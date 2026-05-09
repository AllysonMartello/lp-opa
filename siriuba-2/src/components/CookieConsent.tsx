import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';

const STORAGE_KEY = 'opa_cookie_consent_v2';

type ConsentValue = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const updateConsent = (value: ConsentValue) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
};

export default function CookieConsent() {
  const t = useT();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
    if (consent === 'accepted') updateConsent('granted');
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    updateConsent('granted');
    setIsVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    updateConsent('denied');
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
          role="dialog"
          aria-live="polite"
          aria-label={t.cookieConsent.title}
        >
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl border border-border-main/50 shadow-2xl rounded-2xl p-5 sm:p-6 pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative">
            <div className="bg-primary-1/10 p-3 rounded-full shrink-0">
              <ShieldAlert className="w-6 h-6 text-primary-1" aria-hidden="true" />
            </div>

            <div className="flex-1">
              <h3 className="text-primary-1 font-serif text-lg sm:text-xl font-medium mb-1">
                {t.cookieConsent.title}
              </h3>
              <p className="text-text-sec text-sm leading-relaxed">
                {t.cookieConsent.body}{' '}
                <a
                  href="https://opailhabela.com.br/politica-de-privacidade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary-1"
                >
                  {t.cookieConsent.policyLink ?? 'Política de Privacidade'}
                </a>
              </p>
            </div>

            <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
              <button
                onClick={accept}
                className="flex-1 sm:flex-none bg-primary-1 hover:bg-primary-2 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 shadow-md active:scale-95"
              >
                {t.cookieConsent.accept}
              </button>
              <button
                onClick={reject}
                className="flex-1 sm:flex-none border border-border-main text-text-sec hover:text-primary-1 hover:border-primary-1 px-6 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 active:scale-95"
              >
                {t.cookieConsent.reject ?? 'Recusar'}
              </button>
            </div>

            <button
              onClick={reject}
              aria-label={t.cookieConsent.reject ?? 'Recusar'}
              className="absolute top-3 right-3 p-1.5 text-text-sec/60 hover:text-text-sec bg-black/5 hover:bg-black/10 rounded-full transition-colors sm:hidden"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
