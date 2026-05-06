import { useState, useRef } from "react";
import { motion } from "motion/react";
import { MessageCircle, Mail, Play, Pause } from "lucide-react";

export default function MarcosView() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 bg-bg-main border-t border-border-main/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative"
          >
            <div className="absolute inset-0 bg-primary-2/5 rounded-full blur-xl -z-10"></div>
            <img 
              src="https://smabio.com.br/wp-content/uploads/2026/04/Marco-2.png" 
              alt="Marco Henrique" 
              className="w-full h-full object-cover object-top rounded-full border-2 border-white shadow-md grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary-2 uppercase mb-2 block">Atendimento</span>
              <h2 className="text-3xl font-serif text-primary-1 mb-1">Marco Henrique</h2>
              <p className="text-text-sec text-xs font-medium tracking-wider mb-8">Arquiteto · Curadoria OPA Imóveis</p>
              
              <div className="bg-bg-alt/50 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5 mb-8 border border-border-main/40">
                <audio 
                  ref={audioRef} 
                  src="/assets/siriuba-2/audio-marco.mp3" 
                  onEnded={() => setIsPlaying(false)}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                />
                <button 
                  onClick={togglePlay}
                  className="w-12 h-12 bg-primary-1 hover:bg-primary-2 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 shrink-0"
                >
                  {isPlaying ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} className="ml-0.5" />}
                </button>
                <div className="flex-1 text-left w-full">
                  <p className="text-xs font-bold text-primary-1 mb-1">Análise Técnica – Siriúba 2</p>
                  
                  {/* Waveform */}
                  <div className="flex items-center gap-0.5 h-4 w-full overflow-hidden">
                    {[...Array(40)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="w-0.5 bg-primary-1/20 rounded-full flex-shrink-0"
                        animate={{ 
                          height: isPlaying ? ["20%", "100%", "40%", "80%", "20%"] : "20%",
                          backgroundColor: isPlaying ? ["#8C6B4F", "#2A3C4F", "#8C6B4F"] : "#D1D5DB"
                        }}
                        transition={{
                          duration: 1 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.02,
                          ease: "easeInOut"
                        }}
                        style={{ height: "20%" }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-text-sec text-base font-serif italic mb-8 border-l-2 border-primary-2/20 pl-5 py-1">
                "Responsável por conduzir a visita e traduzir o que, muitas vezes, não aparece na primeira impressão."
              </div>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                <a href="#contato" className="text-sm font-bold text-primary-1 hover:text-primary-2 transition-colors flex items-center gap-2 group">
                  <MessageCircle size={18} />
                  Falar com o Marco
                </a>
                <a href="mailto:marcofilhoilha@gmail.com" className="text-xs font-medium text-text-sec hover:text-primary-1 transition-colors flex items-center gap-2">
                  <Mail size={14} />
                  Email Profissional
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
