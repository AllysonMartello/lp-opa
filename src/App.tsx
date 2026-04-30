import React from 'react';
import { Building2, Home } from 'lucide-react';
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
        className="z-10 text-center mb-16"
      >
        <img 
          src="https://smabio.com.br/wp-content/uploads/2026/04/Frame-83.png" 
          alt="Opa Logo" 
          className="h-20 mx-auto mb-8 drop-shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Exclusivo Opa Ilhabela
        </h1>
        <p className="text-lg md:text-xl text-text-sec max-w-2xl mx-auto font-light">
          Descubra os lançamentos mais exclusivos e sofisticados de Ilhabela. Escolha o seu próximo destino.
        </p>
      </motion.div>

      <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <motion.a 
          href="/composicao-opa/"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative bg-primary-2 rounded-2xl p-8 border border-white/5 hover:border-secondary/50 transition-all duration-300 overflow-hidden flex flex-col items-center text-center shadow-xl hover:shadow-secondary/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="bg-primary-1 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
            <Building2 className="w-10 h-10 text-secondary" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-3">Composição Opa</h2>
          <p className="text-text-sec mb-8">Conceito inovador de moradia em sintonia com a natureza e o design contemporâneo.</p>
          
          <span className="mt-auto inline-flex items-center text-secondary font-medium group-hover:underline underline-offset-4">
            Acessar Lançamento
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.a>

        <motion.a 
          href="/imovel-morro-da-cruz/"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="group relative bg-primary-2 rounded-2xl p-8 border border-white/5 hover:border-secondary/50 transition-all duration-300 overflow-hidden flex flex-col items-center text-center shadow-xl hover:shadow-secondary/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="bg-primary-1 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
            <Home className="w-10 h-10 text-secondary" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-3">Morro da Cruz</h2>
          <p className="text-text-sec mb-8">A exclusividade e vista definitiva do Morro da Cruz para experiências inesquecíveis.</p>
          
          <span className="mt-auto inline-flex items-center text-secondary font-medium group-hover:underline underline-offset-4">
            Acessar Lançamento
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.a>

        <motion.a 
          href="/lancamento-opa/"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="group relative bg-primary-2 rounded-2xl p-8 border border-white/5 hover:border-secondary/50 transition-all duration-300 overflow-hidden flex flex-col items-center text-center shadow-xl hover:shadow-secondary/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="bg-primary-1 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
            <Zap className="w-10 h-10 text-secondary" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-3">Lançamento OPA</h2>
          <p className="text-text-sec mb-8">O método definitivo para lançar imóveis de alto padrão com narrativa e exclusividade.</p>
          
          <span className="mt-auto inline-flex items-center text-secondary font-medium group-hover:underline underline-offset-4">
            Conhecer Método
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.a>
      </div>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-16 text-text-sec text-sm"
      >
        &copy; 2026 Opa Ilhabela. Todos os direitos reservados.
      </motion.footer>
    </div>
  );
}
