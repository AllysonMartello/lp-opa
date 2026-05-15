import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import CookieConsent from '@/src/components/CookieConsent';

const tabs = [
  { id: 'imoveis', label: 'Imóveis exclusivos' },
  { id: 'acessos', label: 'Nossos acessos' },
] as const;

type Tab = typeof tabs[number]['id'];

// ── ícones SVG com stroke animável ──────────────────────────────────────────

function IconGlobe({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 icon-draw">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconBook({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 icon-draw">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function IconYoutube({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 icon-draw">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function IconHome({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 icon-draw">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconInstagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 icon-draw">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// ── WhatsApp flutuante ───────────────────────────────────────────────────────

const WA_HREF = `https://wa.me/5512974068058?text=${encodeURIComponent('Olá! Gostaria de falar com a OPA Ilhabela.')}`;

function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // balão aparece 2.5s após o botão entrar (botão entra em ~1s)
    const show = setTimeout(() => setShowBubble(true), 2500);
    // some depois de 4s visível
    const hide = setTimeout(() => setShowBubble(false), 6500);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 340, damping: 26 }}
            className="relative bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-xl whitespace-nowrap"
          >
            Entre em contato conosco
            <span className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-white" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 1 }}
        whileHover={{ scale: 1.12, rotate: 8 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: '#25D366' }}
      >
        {/* anel pulsando */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: '#25D366' }}
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', repeatDelay: 1 }}
        />
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.878L.057 23.57a.75.75 0 0 0 .92.919l5.763-1.476A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 0 1-5.077-1.384l-.364-.216-3.773.967.995-3.688-.236-.38A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </motion.a>
    </div>
  );
}

// ── dados dos cards de acesso ────────────────────────────────────────────────

const acessos = [
  {
    href: 'https://opailhabela.com.br/',
    Icon: IconGlobe,
    title: 'Site Oficial',
    desc: 'Conheça nossos imóveis e serviços',
    color: '#0071C6',
  },
  {
    href: 'https://opailhabela.com.br/blog',
    Icon: IconBook,
    title: 'Nosso Blog',
    desc: 'Acompanhe dicas e novidades',
    color: '#3B9ED4',
  },
  {
    href: 'https://www.youtube.com/@marcohenriqueilhabela',
    Icon: IconYoutube,
    title: 'YouTube',
    desc: 'Vídeos e tours pelos nossos imóveis',
    color: '#FF5252',
  },
  {
    href: 'https://www.instagram.com/opaimoveisilhabela/',
    Icon: IconInstagram,
    title: 'Instagram',
    desc: 'Siga e acompanhe nossos bastidores',
    color: '#E1306C',
  },
  {
    href: 'https://opailhabela.com.br/anuncie-seu-imovel/',
    Icon: IconHome,
    title: 'Cadastre seu imóvel',
    desc: 'Anuncie conosco em Ilhabela',
    color: '#1E90C4',
  },
];

// ── card de imóvel ───────────────────────────────────────────────────────────

function ImovelCard({
  href, img, badge, badgePulse, title, description, location, index,
}: {
  href: string; img: string; badge: string; badgePulse?: boolean;
  title: string; description: string; location: string; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-primary-2 rounded-2xl overflow-hidden border border-white/8 hover:border-secondary/30 transition-colors duration-300 shadow-xl flex flex-col sm:flex-row"
    >
      {/* imagem — esquerda */}
      <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden shrink-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-2/60 hidden sm:block" />
      </div>

      {/* conteúdo — direita */}
      <div className="flex flex-col justify-between gap-4 p-5 flex-1">
        <div className="flex flex-col gap-3">
          {/* badge */}
          <div className="flex items-center">
            <span className="inline-flex items-center gap-1.5 bg-secondary/15 border border-secondary/30 text-secondary text-xs px-2.5 py-1 rounded-full uppercase tracking-widest">
              {badgePulse && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
                </span>
              )}
              {badge}
            </span>
          </div>

          {/* título e localização */}
          <div>
            <h3 className="text-white font-bold text-lg leading-snug">{title}</h3>
            <p className="text-text-sec text-xs mt-0.5">{location}</p>
          </div>

          {/* descrição */}
          <p className="text-text-sec text-sm leading-relaxed">{description}</p>
        </div>

        {/* botão */}
        <a
          href={href}
          className="self-start inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-secondary/20 group/btn"
        >
          Conheça o imóvel
          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

// ── card de acesso com stagger + ícone se desenhando ────────────────────────

function AccessCard({ item, index }: { item: typeof acessos[number]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      // 5. stagger: cada card entra com delay baseado no index
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-primary-2 rounded-2xl p-6 sm:p-7 border border-white/5 overflow-hidden flex items-center gap-5 shadow-xl cursor-pointer"
    >
      {/* glow radial */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse at 20% 50%, ${item.color}28 0%, transparent 65%)`,
        }}
      />
      {/* borda colorida */}
      <div
        className="absolute inset-0 rounded-2xl border-2 pointer-events-none transition-opacity duration-300"
        style={{ borderColor: item.color + '55', opacity: hovered ? 1 : 0 }}
      />

      {/* ícone se desenhando ao entrar na tela */}
      <div
        className="relative z-10 shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: item.color + '1A' }}
      >
        <div style={{ '--dash': inView ? '0' : '200' } as React.CSSProperties}>
          <style>{`
            .icon-draw path, .icon-draw circle, .icon-draw polygon, .icon-draw polyline, .icon-draw rect {
              stroke-dasharray: 200;
              stroke-dashoffset: var(--dash, 200);
              transition: stroke-dashoffset 0.7s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
          <item.Icon color={item.color} />
        </div>
      </div>

      {/* texto */}
      <div className="relative z-10 flex-1 min-w-0">
        <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.title}</h3>
        <p className="text-text-sec text-sm leading-snug truncate">{item.desc}</p>
      </div>

      {/* seta */}
      <div
        className="relative z-10 shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: item.color + '2A',
          color: item.color,
          transform: hovered ? 'translateX(3px)' : 'translateX(0)',
        }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  );
}

// ── efeito de luz seguindo o cursor ─────────────────────────────────────────

function CursorLight() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: useTransform(
          [springX, springY],
          ([lx, ly]) =>
            `radial-gradient(400px circle at ${lx}px ${ly}px, #0071C614 0%, transparent 70%)`
        ),
      }}
    />
  );
}

// ── app ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('imoveis');

  // 2. parallax: referência da seção hero
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="min-h-screen bg-bg-main flex flex-col overflow-x-hidden">

      {/* 4. luz seguindo o cursor */}
      <CursorLight />

      {/* HERO */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 2. parallax na foto */}
        <motion.img
          src="/assets/images/ilhabela-foto-de-cima-drone-opa-ilhabela.jpg"
          alt="Ilhabela vista do drone"
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center text-center px-6"
        >
          <div className="relative mb-8">
            {/* glow pulsando atrás da logo */}
            <motion.div
              aria-hidden
              className="absolute inset-0 -z-10 blur-2xl"
              style={{ background: 'radial-gradient(circle, #0071C655 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* logo: entrada com scale + spring, depois flutuação contínua */}
            <motion.img
              src="/assets/logo/logo-opa-nova.svg"
              alt="Opa Ilhabela"
              className="h-20 md:h-28 drop-shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.55, y: -40, rotate: -8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
                rotate: 0,
              }}
              transition={{
                opacity: { duration: 0.9, ease: 'easeOut' },
                scale: { type: 'spring', stiffness: 180, damping: 14, delay: 0.1 },
                rotate: { duration: 0.9, ease: 'easeOut', delay: 0.1 },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 },
              }}
              whileHover={{ scale: 1.06, rotate: 2, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10 flex flex-col items-center gap-4"
        >
          <p className="text-white/90 text-lg md:text-2xl font-light tracking-widest uppercase">
            Confira todos os acessos
          </p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
            className="flex flex-col items-center gap-0.5"
          >
            <span className="block w-0.5 h-5 rounded-full bg-white/60" />
            <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 20 20">
              <path d="M10 3v11M4 9l6 7 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTENT SWITCHER */}
      <section className="pt-16 pb-20 px-6 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <span className="text-white/60 text-sm flex items-center gap-2">
            <span>👆</span> Selecione uma opção
          </span>
          <div className="flex bg-primary-2 border border-white/10 rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id ? 'text-bg-main' : 'text-text-sec hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-secondary rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* PAINÉIS */}
        <AnimatePresence mode="wait">
          {activeTab === 'imoveis' && (
            <motion.div
              key="imoveis"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-4"
            >
              <ImovelCard
                href="/siriuba-2/"
                img="/assets/siriuba-2/hero-desktop.avif"
                badge="Lançamento"
                badgePulse
                title="Residência Siriúba 2"
                location="Siriúba, Ilhabela — SP"
                description="Residência contemporânea com arquitetura integrada à natureza, amplas áreas externas e vista privilegiada. Projeto exclusivo em lançamento."
                index={0}
              />
            </motion.div>
          )}

          {activeTab === 'acessos' && (
            <motion.div
              key="acessos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {/* 5. stagger controlado dentro do AccessCard via inView + delay por index */}
              {acessos.map((item, i) => (
                <AccessCard key={item.href} item={item} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center py-10 text-text-sec text-sm"
      >
        &copy; {new Date().getFullYear()} Opa Ilhabela. Todos os direitos reservados.
      </motion.footer>

      <CookieConsent />
      <WhatsAppButton />
    </div>
  );
}
