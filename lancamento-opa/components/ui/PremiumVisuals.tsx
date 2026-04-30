import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Layers, MousePointer2, Target, TrendingUp } from 'lucide-react';

export const CinematicVideoVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#050A0F] overflow-hidden rounded-2xl flex items-center justify-center group">
      {/* Static Base Text (Very faint) */}
      <div className="text-[80px] md:text-[100px] font-black text-white/[0.03] uppercase tracking-tighter select-none">
        Narrativa
      </div>

      {/* Moving Spotlight Reveal */}
      <motion.div 
        animate={{ 
          x: ['-100%', '100%'],
          y: ['-20%', '20%', '-20%']
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[300px] h-[300px] bg-white blur-[80px] opacity-20 rounded-full" />
      </motion.div>

      {/* The Revealed Text (Masked) */}
      <motion.div 
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none select-none"
        style={{
          maskImage: 'radial-gradient(circle 150px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle 150px at var(--x, 50%) var(--y, 50%), black 0%, transparent 100%)',
        }}
      >
        <motion.div
           animate={{
            "--x": ['0%', '100%', '0%'],
            "--y": ['40%', '60%', '40%']
           } as any}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="text-[80px] md:text-[100px] font-black text-white uppercase tracking-tighter"
        >
          Narrativa
        </motion.div>
      </motion.div>

      {/* Subtle Grain for Cinematic Feel */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />

      <div className="absolute bottom-8 left-8 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#2F5D82]" />
        <div className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
          A ESSÊNCIA DO LANÇAMENTO
        </div>
      </div>
    </div>
  );
};

export const VirtualTourVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#F7F6F3] overflow-hidden rounded-2xl flex items-center justify-center perspective-[1000px]">
      {/* 3D Grid */}
      <motion.div 
        style={{ rotateX: 45, rotateZ: -15 }}
        animate={{ 
          rotateZ: [-15, -10, -15],
          rotateX: [45, 48, 45]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="w-[150%] h-[150%] border border-[#2F5D82]/10 [background-image:linear-gradient(#2F5D82_1px,transparent_1px),linear-gradient(90deg,#2F5D82_1px,transparent_1px)] [background-size:40px_40px] opacity-20"
      />

      {/* Scanning Laser */}
      <motion.div 
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2F5D82] to-transparent z-10 shadow-[0_0_15px_rgba(47,93,130,0.5)]"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-[#2F5D82] rounded-full blur-xl"
          />
          <div className="relative w-20 h-20 rounded-full border border-[#2F5D82]/30 flex items-center justify-center bg-white/40 backdrop-blur-sm">
            <Layers className="text-[#2F5D82] w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 text-[10px] uppercase tracking-[0.4em] text-[#2F5D82]/40 font-bold">
        Mapeamento Espacial // Ativo
      </div>
    </div>
  );
};

export const ExclusiveSiteVisual = () => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden rounded-2xl p-8 flex items-center justify-center">
      {/* Background Dots */}
      <div className="absolute inset-0 [background-image:radial-gradient(#D9D9D9_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      {/* Floating UI Elements */}
      <div className="relative w-full max-w-[400px] h-full flex items-center justify-center">
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-48 bg-[#0F2A44] rounded-xl shadow-2xl relative z-20 flex flex-col p-6 overflow-hidden"
        >
          <div className="w-1/2 h-3 bg-white/20 rounded-full mb-4" />
          <div className="w-full h-2 bg-white/10 rounded-full mb-2" />
          <div className="w-full h-2 bg-white/10 rounded-full mb-2" />
          <div className="w-2/3 h-2 bg-white/10 rounded-full" />
          
          <div className="mt-auto flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2F5D82]" />
            <div className="w-8 h-8 rounded-lg bg-[#2F5D82]/50" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-[-10%] w-32 h-32 bg-white/60 backdrop-blur-xl border border-black/5 rounded-2xl shadow-xl z-30 p-4"
        >
          <div className="w-full aspect-square rounded-lg bg-[#F7F6F3] flex items-center justify-center">
            <MousePointer2 className="text-[#2F5D82] w-6 h-6" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/2 right-[-10%] w-36 h-40 bg-[#2F5D82]/10 backdrop-blur-lg border border-[#2F5D82]/20 rounded-2xl shadow-xl z-10 p-4"
        >
          <div className="w-8 h-8 rounded-full bg-[#2F5D82] mb-4" />
          <div className="space-y-2">
            <div className="w-full h-1.5 bg-[#0F2A44]/20 rounded-full" />
            <div className="w-full h-1.5 bg-[#0F2A44]/10 rounded-full" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.4em] text-[#0F2A44]/40 font-bold">
        Arquitetura Digital Dedicada
      </div>
    </div>
  );
};

export const SegmentedCampaignVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#F7F6F3] overflow-hidden rounded-2xl p-8 flex flex-col justify-between">
      <div className="text-[10px] uppercase tracking-[0.4em] text-[#0F2A44]/40 font-bold">
        Análise de Audiência // Segmentação
      </div>

      <div className="relative flex-grow flex items-center justify-center">
        {/* Pulsing Target */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 1,
                ease: "easeOut"
              }}
              className="absolute inset-0 border-2 border-[#2F5D82] rounded-full"
            />
          ))}
          <div className="relative z-10 w-12 h-12 rounded-full bg-[#2F5D82] flex items-center justify-center shadow-lg">
            <Target className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Growth Line Chart (Abstract) */}
        <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
          <svg viewBox="0 0 400 100" className="w-full h-full preserve-3d">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,10"
              fill="none"
              stroke="#2F5D82"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <div className="text-[10px] uppercase tracking-widest text-[#0F2A44]/60 font-bold">Alcance</div>
          <div className="text-xl font-black text-[#0F2A44]">1.2M+</div>
        </div>
        <TrendingUp className="text-[#2F5D82] w-6 h-6" />
      </div>
    </div>
  );
};
