import { motion } from "motion/react";
import { useT } from "../i18n/LanguageContext";

export default function TheOPA() {
  const t = useT();
  return (
    <section className="py-24 md:py-32 bg-bg-main relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-2/20 to-transparent"></div>
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary-1/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-square w-full max-w-[400px] mx-auto">
              {/* Outer rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border border-primary-2/10 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-primary-1/10 rounded-full"
              />
              
              {/* Main Image Container */}
              <div className="w-full h-full rounded-2xl md:rounded-[3rem] shadow-[0_20px_50px_rgba(42,60,79,0.15)] bg-white p-2 relative z-10 group">
                <div className="w-full h-full rounded-xl md:rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary-1/10 group-hover:bg-transparent transition-colors duration-700"></div>
                  <img
                    src="https://smabio.com.br/wp-content/uploads/2026/04/Frame-83.png"
                    alt={t.theOPA.logoAlt}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-primary-1 text-white p-6 rounded-2xl shadow-xl hidden md:block"
                >
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-70">{t.theOPA.badgeLabel}</p>
                  <p className="text-2xl font-serif">{t.theOPA.badgeValue}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Content Side */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-primary-2"></div>
                <span className="text-primary-2 uppercase tracking-[0.3em] text-[10px] font-black">{t.theOPA.eyebrow}</span>
              </div>

              <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif text-primary-1 mb-8 leading-[1.1]">
                {t.theOPA.titleStart} <span className="italic">{t.theOPA.titleEnd}</span>
              </h2>

              <div className="space-y-8">
                {t.theOPA.paragraphs.map((p, i) => (
                  <p key={i} className="text-text-sec text-lg leading-relaxed font-light max-w-2xl">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
