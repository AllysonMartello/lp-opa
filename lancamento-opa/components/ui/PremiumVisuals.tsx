import React from 'react';
import { motion } from 'framer-motion';
import { Play, Layers, Globe, Target, TrendingUp } from 'lucide-react';

// Common animation for icons
const iconPulse = {
  scale: [1, 1.05, 1],
  opacity: [0.8, 1, 0.8],
};

const glowPulse = {
  scale: [1, 1.2, 1],
  opacity: [0.3, 0.5, 0.3],
};

export const CinematicVideoVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#050A0F] overflow-hidden rounded-2xl flex flex-col items-center justify-center p-6">
      {/* Background Glow */}
      <motion.div 
        animate={glowPulse}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-40 h-40 bg-[#2F5D82]/30 blur-[60px] rounded-full"
      />
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div 
          animate={iconPulse}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md"
        >
          <Play className="text-white fill-white/20 w-8 h-8 ml-1" />
        </motion.div>
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#2F5D82] font-black mb-1">Narrativa</div>
          <div className="text-[8px] uppercase tracking-[0.2em] text-white/30 font-bold">Produção Audiovisual OPA</div>
        </div>
      </div>

      {/* REC Indicator */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <motion.div 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "steps(1)" }}
          className="w-2 h-2 rounded-full bg-red-500"
        />
        <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">REC</span>
      </div>
    </div>
  );
};

export const VirtualTourVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#F7F6F3] overflow-hidden rounded-2xl flex flex-col items-center justify-center p-6 border border-black/[0.03]">
      <motion.div 
        animate={glowPulse}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-40 h-40 bg-[#2F5D82]/10 blur-[50px] rounded-full"
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div 
          animate={iconPulse}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-2xl border border-black/5 flex items-center justify-center bg-white shadow-sm"
        >
          <Layers className="text-[#2F5D82] w-8 h-8" />
        </motion.div>
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#0F2A44]/40 font-black mb-1">Mapeamento</div>
          <div className="text-[8px] uppercase tracking-[0.2em] text-[#0F2A44]/20 font-bold">Tour Virtual 3D Ativo</div>
        </div>
      </div>

      {/* Scanning Line - Simplified */}
      <motion.div 
        animate={{ top: ['20%', '80%', '20%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2F5D82]/40 to-transparent"
      />
    </div>
  );
};

export const ExclusiveSiteVisual = () => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden rounded-2xl flex flex-col items-center justify-center p-6">
      <div className="absolute inset-0 [background-image:radial-gradient(#D9D9D9_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div 
          animate={iconPulse}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-2xl border border-[#0F2A44]/5 flex items-center justify-center bg-[#0F2A44] shadow-xl"
        >
          <Globe className="text-white w-8 h-8" />
        </motion.div>
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#0F2A44]/40 font-black mb-1">Digital</div>
          <div className="text-[8px] uppercase tracking-[0.2em] text-[#0F2A44]/20 font-bold">Site Exclusivo Dedicado</div>
        </div>
      </div>
    </div>
  );
};

export const SegmentedCampaignVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#F7F6F3] overflow-hidden rounded-2xl flex flex-col items-center justify-center p-6 border border-black/[0.03]">
      <div className="relative z-10 flex flex-col items-center gap-8 w-full">
        <div className="relative">
          {[...Array(2)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1.5 }}
              className="absolute inset-0 border border-[#2F5D82] rounded-full"
            />
          ))}
          <div className="w-16 h-16 rounded-full bg-[#2F5D82] flex items-center justify-center shadow-lg relative z-10">
            <Target className="text-white w-6 h-6" />
          </div>
        </div>

        <div className="w-full max-w-[200px] space-y-2">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] uppercase tracking-widest text-[#0F2A44] font-black">Alcance em regiões</div>
            <div className="text-[9px] uppercase tracking-widest text-[#2F5D82] font-bold">de alto impacto</div>
          </div>
          <div className="w-full h-1 bg-[#0F2A44]/5 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: ['0%', '95%'] }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="h-full bg-[#2F5D82]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
