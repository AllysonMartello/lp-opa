import { motion } from "motion/react";
import { Play, Eye, Maximize, Map, Navigation, Ruler } from "lucide-react";
import { useState } from "react";
import { useT } from "../i18n/LanguageContext";

const featureIcons = [Eye, Maximize, Map, Navigation, Ruler];

export default function VirtualTour() {
  const t = useT();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="tour" className="py-24 bg-primary-1 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-12"
          >
            {t.virtualTour.title}
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full max-w-4xl mx-auto aspect-video rounded-x-[2.5rem] rounded-2xl overflow-hidden shadow-2xl group border border-white/10 mb-10"
          >
            {!isPlaying ? (
              <div className="cursor-pointer h-full w-full" onClick={() => setIsPlaying(true)}>
                <img
                  src="/assets/siriuba-2/Ambientes integrados.jpg"
                  alt={t.virtualTour.previewAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/50">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <Play size={32} className="ml-2" fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                title="Tour Virtual 3D"
                width="100%"
                height="100%"
                src="https://my.matterport.com/show/?m=nNXRHwVvsxc&play=1"
                allowFullScreen
                allow="xr-spatial-tracking"
                className="w-full h-full border-0 absolute inset-0"
              ></iframe>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-10"
          >
            {t.virtualTour.features.map((feature, i) => {
              const Icon = featureIcons[i] ?? Eye;
              return (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-white/90 text-sm font-medium">
                  <Icon size={18} className="text-secondary" />
                  <span>{feature}</span>
                </div>
              );
            })}
          </motion.div>
          
          {!isPlaying && (
            <motion.button
              onClick={() => setIsPlaying(true)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl"
            >
              {t.virtualTour.button}
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
