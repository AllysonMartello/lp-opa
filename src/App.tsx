import React from 'react';
import { Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background ambient effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#64FFDA]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0A192F]/50 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center mb-12 mt-8"
      >
        <img 
          src="/assets/logo/logo-opa-nova.svg" 
          alt="Opa Logo" 
          className="h-24 mx-auto mb-6 drop-shadow-lg"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          Opa Ilhabela
        </h1>
        <p className="text-md md:text-lg text-text-sec max-w-xl mx-auto font-light">
          Acesse nossos canais oficiais e fique por dentro das novidades.
        </p>
      </motion.div>

      <div className="z-10 flex flex-col gap-6 w-full max-w-md">
        <motion.a 
          href="https://opailhabela.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative bg-primary-2 rounded-2xl p-6 border border-white/5 hover:border-secondary/50 transition-all duration-300 overflow-hidden flex items-center shadow-xl hover:shadow-secondary/20 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="bg-primary-1 p-3 rounded-full mr-5 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-secondary/30">
            <Globe className="w-7 h-7 text-secondary" />
          </div>
          
          <div className="flex-1 text-left">
            <h2 className="text-xl font-bold text-white mb-1">Site Oficial</h2>
            <p className="text-text-sec text-sm">Conheça nossos imóveis e serviços</p>
          </div>
          
          <svg className="w-6 h-6 text-text-sec group-hover:text-secondary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>

        <motion.a 
          href="https://opailhabela.com.br/blog"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="group relative bg-primary-2 rounded-2xl p-6 border border-white/5 hover:border-secondary/50 transition-all duration-300 overflow-hidden flex items-center shadow-xl hover:shadow-secondary/20 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="bg-primary-1 p-3 rounded-full mr-5 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-secondary/30">
            <BookOpen className="w-7 h-7 text-secondary" />
          </div>
          
          <div className="flex-1 text-left">
            <h2 className="text-xl font-bold text-white mb-1">Nosso Blog</h2>
            <p className="text-text-sec text-sm">Acompanhe dicas e novidades</p>
          </div>
          
          <svg className="w-6 h-6 text-text-sec group-hover:text-secondary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-auto pt-16 text-text-sec text-sm z-10"
      >
        &copy; {new Date().getFullYear()} Opa Ilhabela. Todos os direitos reservados.
      </motion.footer>
    </div>
  );
}
