import React from 'react';
import Header from '../components/Header';
import FadeIn from '../components/FadeIn';
import ScrollytellingImpact from "../components/ui/ScrollytellingImpact";
import { Eye, Target, Zap, Smartphone, FileText, MousePointerClick, Layers, Search, Sparkles, Users2, Presentation, ShieldCheck, TrendingUp, Clock, Lock } from 'lucide-react';
import { CinematicVideoVisual, VirtualTourVisual, ExclusiveSiteVisual, SegmentedCampaignVisual } from '../components/ui/PremiumVisuals';


export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#F7F6F3] text-[#2B2B2B] antialiased">
      <Header />
      <main className="min-h-screen relative selection:bg-[#2F5D82]/30">
        {/* Background Subtle Architectural Line */}
        <div className="absolute top-0 right-[35%] w-px h-full bg-[#D9D9D9] opacity-[0.15] hidden lg:block z-0 pointer-events-none" />

        {/* 1. HERO */}
        <section className="relative min-h-[100svh] w-full flex items-center pt-[200px] pb-[200px] overflow-hidden">
          <img
            src="/assets/images/ilhabela-foto-de-cima-drone-opa-ilhabela.jpg"
            alt="Vista aérea de Ilhabela - Foto de Drone OPA"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0F2A44]/35" />
          
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 flex flex-col items-start justify-center text-white">
            <FadeIn className="max-w-[1000px]">
              <h2 className="font-sans text-[38px] md:text-[44px] leading-[1.1] font-extrabold tracking-tight text-white drop-shadow-md break-words sm:break-normal hyphens-auto">
                Seu imóvel ou empreendimento{' '}<br className="hidden xl:block"/>
                precisa mais do que aparecer.<br />
                <span className="opacity-95 italic font-light">Precisa ser lançado da forma certa.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2} className="max-w-2xl">
              <p className="mt-10 text-[18px] tracking-wide font-normal leading-[1.8] opacity-100 drop-shadow-sm">
                Anunciar não é lançar. Divulgar não é posicionar. Expor imóveis e empreendimentos de alto padrão sem estratégia não acelera a venda.{' '}<br className="hidden md:block"/>
                Desgasta, perde, tração, não vende! .
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="mt-16 pointer-events-auto">
              <a href="#metodo" className="group inline-flex items-center justify-center bg-[#2F5D82] text-white text-[13px] uppercase tracking-[0.3em] px-10 py-5 rounded-full hover:bg-[#0F2A44] transition-all duration-500 shadow-xl">
                Quero entender como funciona
                <span className="ml-3 transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </FadeIn>
          </div>
        </section>

        {/* 2. BLOCO DE TEXTO — O problema */}
        <section id="problema" className="py-[140px] bg-white px-6 w-full relative z-10 border-b border-[#D9D9D9]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h3 className="text-xs uppercase tracking-widest font-extrabold mb-4 text-[#2F5D82]">O Problema</h3>
                <h2 className="font-sans text-3xl md:text-5xl text-[#0F2A44] leading-[1.1] mb-8 font-bold">
                  Veja o que normalmente é feito com imóveis.
                </h2>
                <p className="text-[#2B2B2B]/90 font-normal text-base leading-relaxed max-w-md">
                  Esse é o processo padrão. E ele funciona para imóvel comum, em mercado de volume. Não para um imóvel de alto padrão como os que trabalhamos em Ilhabela.<br/><br/>
                  Seu imóvel não está sem vender por falta de divulgação. Ele apenas nunca foi apresentado ao mercado da forma correta. O comprador qualificado não age por impulso. Ele pesquisa, compara e precisa sentir o estilo de vida antes de agendar visita. Quando o ativo chega ao mercado sem narrativa e sem estratégia, ele some no barulho. E quando o comprador certo finalmente aparece, o produto já perdeu tração de ter ido ao mercado..
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Foto de celular", desc: "", icon: <Smartphone size={14} /> },
                    { title: "Descrição genérica", desc: "", icon: <FileText size={14} /> },
                    { title: "Preço jogado no portal", desc: "", icon: <MousePointerClick size={14} /> },
                    { title: "Espera", desc: "", icon: <Clock size={14} /> }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white border border-[#F2F2F2] hover:border-[#2F5D82]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-700 group rounded-3xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-full bg-[#F7F6F3] flex items-center justify-center text-[#2F5D82] opacity-40 group-hover:opacity-100 group-hover:bg-[#2F5D82]/10 transition-all duration-500">
                          {item.icon}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[#2F5D82] opacity-30 group-hover:opacity-60">0{i+1}</span>
                      </div>
                      <h4 className="text-[17px] font-bold text-[#0F2A44] mb-3 uppercase tracking-tighter">{item.title}</h4>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-[#F2F2F2]">
                  <p className="font-semibold tracking-wider uppercase text-[12px] text-[#0F2A44]">
                    O problema não é falta de exposição. É uma exposição errada.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <ScrollytellingImpact />

        {/* 3. O OLHAR */}
        <section id="olhar" className="py-[140px] px-6 w-full max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col gap-16 lg:gap-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
              <div>
                <FadeIn>
                  <h3 className="text-xs uppercase tracking-widest font-extrabold mb-4 text-[#2F5D82]">O Olhar</h3>
                  <h2 className="font-sans text-3xl md:text-5xl text-[#0F2A44] leading-[1.2] mb-8 font-bold">
                    Há 20 anos lendo o que o mercado não enxerga.
                  </h2>
                </FadeIn>
                
                <FadeIn delay={0.2} className="space-y-6 text-[#2B2B2B]/90 font-normal text-base leading-relaxed">
                  <p className="text-lg">A OPA foi construída para resolver o que a divulgação sozinha nunca resolve.</p>
                  <p>Reunimos arquitetura, mercado imobiliário e conhecimento profundo de Ilhabela em um único processo. Não lemos um imóvel somente como corretores. Lemos como quem conhece cada bairro, cada encosta, cada orientação solar da ilha, e sabe exatamente o que aquilo vale para o comprador certo.</p>
                </FadeIn>
              </div>

              <FadeIn delay={0.3} className="relative aspect-[16/10] lg:aspect-square w-full rounded-[32px] border border-[#D9D9D9] p-3 bg-white shadow-sm overflow-hidden">
                 <img
                  src="/assets/images/sobre-a-opa-imoveis-ilhabela.png"
                  alt="Sobre a OPA Imóveis Ilhabela"
                  className="w-full h-full object-cover rounded-[24px]"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
            </div>
            
            <div className="w-full">
              <FadeIn>
                <p className="tracking-wider uppercase text-[12px] text-[#0F2A44] font-extrabold mb-10 flex items-center gap-4">
                  <span className="w-12 h-px bg-[#0F2A44]/20" />
                  Nosso trabalho começa antes da divulgação
                </p>
              </FadeIn>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { title: "Leitura técnica do ativo", icon: <Search size={20} /> },
                  { title: "Vocação e potencial oculto", icon: <Sparkles size={20} /> },
                  { title: "Público ideal para aquela propriedade", icon: <Users2 size={20} /> },
                  { title: "Narrativa correta", icon: <Presentation size={20} /> },
                  { title: "Estratégia comercial", icon: <TrendingUp size={20} /> }
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 * i} className="group p-6 bg-white rounded-[24px] border border-[#F2F2F2] hover:border-[#2F5D82]/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)] transition-all duration-700 flex flex-col items-start justify-between min-h-[160px]">
                    <div className="w-12 h-12 rounded-2xl bg-[#F7F6F3] flex items-center justify-center text-[#2F5D82] mb-6 group-hover:bg-[#2F5D82] group-hover:text-white group-hover:scale-110 transition-all duration-700">
                      {item.icon}
                    </div>
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#0F2A44] leading-relaxed">{item.title}</h4>
                  </FadeIn>
                ))}
              </div>
              
              <FadeIn delay={0.5} className="mt-16 pt-10 border-t border-[#F2F2F2] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="max-w-md">
                  <h4 className="font-sans font-bold italic text-lg leading-tight mb-2 text-[#0F2A44]">
                    &quot;Ninguém olha um imóvel com o olhar que a OPA se propõe a olhar. A gente vai além das quatro paredes.&quot;
                  </h4>
                  <p className="text-[11px] uppercase tracking-widest text-[#2B2B2B]/60 font-medium">— Marco Henrique, arquiteto e sócio-fundador</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[#D9D9D9]/30" />
                  <p className="text-[#2B2B2B]/40 text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-medium">Depois disso, construímos o lançamento</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 4. O MÉTODO */}
        <section id="metodo" className="py-[140px] bg-[#FFFFFF] border-y border-[#D9D9D9] px-6 w-full relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn className="text-center mb-20 max-w-[700px] mx-auto">
              <h3 className="text-xs uppercase tracking-[0.3em] font-extrabold mb-4 text-[#2F5D82]">O Método</h3>
              <h2 className="font-sans text-4xl text-[#0F2A44] leading-[1.2] mb-6 font-bold">
                O Lançamento OPA
              </h2>
              <p className="font-light text-base text-[#2B2B2B]/80 leading-relaxed">
                Não trabalhamos com divulgação. Trabalhamos com posicionamento de ativos. Revelamos atributos que o mercado ignorou. Construímos a narrativa certa. Levamos o imóvel ou empreendimento ao comprador que enxerga valor onde outros passam.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {[
                { letter: "O", title: "Olhar", icon: <Eye size={20} />, desc: "Antes de qualquer ação, o ativo é interpretado. Arquitetura, orientação solar, vocação do terreno, comportamento do mercado local, perfil real do comprador. Essa leitura é o que separa um lançamento de um anúncio." },
                { letter: "P", title: "Posicionamento", icon: <Target size={20} />, desc: "Com a interpretação feita, definimos qual história esse imóvel conta, para qual perfil e em qual canal esse encontro acontece. Cada ativo pede um caminho próprio. Não existe modelo padrão." },
                { letter: "A", title: "Ação", icon: <Zap size={20} />, desc: "O lançamento acontece em frentes simultâneas, com acompanhamento constante e relatórios quinzenais. O proprietário sabe exatamente o que está acontecendo com o seu ativo, quem está chegando e qual a qualidade desse interesse." }
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * (i + 1)} className="bg-white p-10 lg:p-12 border border-[#F2F2F2] hover:border-[#2F5D82]/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-700 group rounded-[32px]">
                  <div className="flex justify-between items-start mb-10">
                    <div className="text-[64px] font-sans text-[#0F2A44] font-black leading-none tracking-tighter opacity-10 group-hover:opacity-100 group-hover:text-[#2F5D82] transition-all duration-700">{item.letter}</div>
                    <div className="w-12 h-12 rounded-full border border-[#D9D9D9] flex items-center justify-center text-[#0F2A44] opacity-20 group-hover:opacity-100 group-hover:border-[#2F5D82]/30 group-hover:bg-[#2F5D82]/5 transition-all duration-700">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-[13px] leading-tight font-extrabold uppercase tracking-[0.3em] text-[#0F2A44] mb-4">{item.title}</h3>
                  <p className="font-light text-[#2B2B2B]/60 leading-relaxed text-[15px]">
                    {item.desc}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 5. IMPACTO REAL */}
        <section className="py-[180px] bg-[#0F2A44] text-white px-6 w-full relative z-10 border-b border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F5D82]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2F5D82]/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-32 items-start">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <FadeIn>
                  <h3 className="text-xs uppercase tracking-widest font-extrabold mb-8 text-[#2F5D82] flex items-center gap-3">
                    <span className="w-8 h-px bg-[#2F5D82]" />
                    Impacto Real
                  </h3>
                  <h2 className="font-sans text-4xl md:text-6xl leading-[1.1] font-bold max-w-[500px] tracking-tight">
                    O que muda quando um imóvel é lançado da forma certa.
                  </h2>
                  <p className="mt-10 text-xl font-light text-white/50 leading-relaxed max-w-[450px]">
                    O cliente de alto padrão não compra operação. Ele compra resultado.
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                {[
                  { title: "Segurança de precificação", desc: "O ativo chega ao mercado no preço certo, para o comprador certo. Sem queima de produto.", icon: <ShieldCheck size={24} className="text-[#2F5D82]" /> },
                  { title: "Percepção de valor real", desc: "Imóveis e empreendimentos que passaram pelo Lançamento OPA chegam ao comprador já posicionados como produto. O desejo está construído antes da visita.", icon: <TrendingUp size={24} className="text-[#2F5D82]" /> },
                  { title: "Redução de tempo no mercado", desc: "Comprador qualificado não precisa ser convencido do valor. Ele já chegou sabendo. Isso encurta o ciclo de negociação.", icon: <Clock size={24} className="text-[#2F5D82]" /> },
                  { title: "Liquidez sem exposição desnecessária", desc: "O proprietário não abre o ativo para curiosos. Apenas compradores com intenção e perfil compatível chegam ao imóvel.", icon: <Lock size={24} className="text-[#2F5D82]" /> }
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 * i} className="group relative">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px] hover:bg-white/[0.08] hover:border-[#2F5D82]/30 transition-all duration-700 hover:-translate-y-2">
                      <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2F5D82]/10 transition-all duration-700">
                        {item.icon}
                      </div>
                      <h3 className="text-[15px] tracking-widest uppercase font-bold mb-5 text-[#F7F6F3] group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="font-light text-white/50 leading-relaxed text-[16px] group-hover:text-white/80 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. DISTRIBUIÇÃO */}
        <section className="py-[160px] bg-[#F7F6F3] px-6 w-full relative z-10 border-b border-[#D9D9D9]">
          <div className="max-w-[1200px] mx-auto text-center">
            <FadeIn className="mb-[100px] max-w-[700px] mx-auto">
              <h3 className="text-xs uppercase tracking-[0.3em] font-extrabold mb-4 text-[#2F5D82]">Distribuição</h3>
              <h2 className="font-sans text-3xl md:text-5xl text-[#0F2A44] leading-[1.2] font-bold">
                Como isso chega ao comprador
              </h2>
              <p className="mt-6 text-[#2B2B2B]/70 font-light text-[15px] uppercase tracking-wide">
                Cada imóvel ou empreendimento recebe estrutura completa de produção e distribuição:
              </p>
            </FadeIn>

            <div className="space-y-8 text-left">
              {/* Linha 1: Vídeo e Tour */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Item 1 - Vídeo */}
                <FadeIn className="bg-white p-8 md:p-10 rounded-[40px] border border-[#F2F2F2] flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-[18px] md:text-[20px] uppercase tracking-[0.15em] font-bold text-[#0F2A44] mb-4 border-b border-[#D9D9D9] pb-3 inline-block self-start">Vídeo cinematográfico</h3>
                  <p className="text-[16px] md:text-[17px] font-normal text-[#2B2B2B]/90 leading-relaxed mb-8">
                    Narrativa que desperta desejo antes da visita e cria convicção em quem já está considerando.
                  </p>
                  <div className="mt-auto relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D9D9D9] p-1 bg-[#0F2A44] shadow-sm">
                    <CinematicVideoVisual />
                  </div>
                </FadeIn>

                {/* Item 2 - Tour */}
                <FadeIn className="bg-white p-8 md:p-10 rounded-[40px] border border-[#F2F2F2] flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-[18px] md:text-[20px] uppercase tracking-[0.15em] font-bold text-[#0F2A44] mb-4 border-b border-[#D9D9D9] pb-3 inline-block self-start">Tour virtual</h3>
                  <p className="text-[16px] md:text-[17px] font-normal text-[#2B2B2B]/90 leading-relaxed mb-8">
                    O comprador percorre cada cômodo antes de agendar visita presencial. Quem chega, chega para comprar.
                  </p>
                  <div className="mt-auto relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D9D9D9] p-1 bg-[#F7F6F3] shadow-sm">
                    <VirtualTourVisual />
                  </div>
                </FadeIn>
              </div>

              {/* Linha 2: Site e Campanha */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Item 3 - Site */}
                <FadeIn className="bg-white p-8 md:p-10 rounded-[40px] border border-[#F2F2F2] flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-[18px] md:text-[20px] uppercase tracking-[0.15em] font-bold text-[#0F2A44] mb-4 border-b border-[#D9D9D9] pb-3 inline-block self-start">Site exclusivo</h3>
                  <p className="text-[16px] md:text-[17px] font-normal text-[#2B2B2B]/90 leading-relaxed mb-8">
                    Um endereço digital dedicado, com narrativa completa, à altura do que está sendo oferecido.
                  </p>
                  <div className="mt-auto relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D9D9D9] p-1 bg-white shadow-sm">
                    <ExclusiveSiteVisual />
                  </div>
                </FadeIn>

                {/* Item 4 - Campanha */}
                <FadeIn className="bg-white p-8 md:p-10 rounded-[40px] border border-[#F2F2F2] flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-[18px] md:text-[20px] uppercase tracking-[0.15em] font-bold text-[#0F2A44] mb-4 border-b border-[#D9D9D9] pb-3 inline-block self-start">Campanha segmentada</h3>
                  <p className="text-[16px] md:text-[17px] font-normal text-[#2B2B2B]/90 leading-relaxed mb-8">
                    Distribuição paga para o perfil certo de renda e intenção de compra. Onde o comprador está, nós aparecemos.
                  </p>
                  <div className="mt-auto relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D9D9D9] p-1 bg-[#F7F6F3] shadow-sm">
                    <SegmentedCampaignVisual />
                  </div>
                </FadeIn>
              </div>

              {/* Item 5 - Relatórios (Mantido como está) */}
              <div className="w-full">
                <FadeIn>
                  <div className="bg-[#0F2A44] rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden group">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2F5D82]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2F5D82]/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                      <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                          <div className="w-2 h-2 rounded-full bg-[#2F5D82] animate-pulse" />
                          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Acompanhamento Ativo</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-4xl uppercase tracking-[0.1em] font-bold text-white mb-8 leading-tight">
                          Relatórios quinzenais <br/>de acompanhamento
                        </h3>
                        
                        <p className="text-[17px] md:text-[20px] font-normal text-white/90 leading-relaxed max-w-2xl">
                          A cada duas semanas, o proprietário recebe um relatório completo: quem foi alcançado, qual o perfil de quem demonstrou interesse, como a campanha está performando e quais ajustes foram feitos. <span className="text-white font-medium">Sem achismo. Sem silêncio.</span> O ativo está sendo trabalhado e você vai saber exatamente como.
                        </p>
                        
                        <div className="mt-12 flex flex-wrap gap-6">
                          <div className="flex items-center gap-3 text-white/50 text-[11px] uppercase tracking-widest font-bold">
                            <span className="w-8 h-px bg-white/20" />
                            Transparência
                          </div>
                          <div className="flex items-center gap-3 text-white/50 text-[11px] uppercase tracking-widest font-bold">
                            <span className="w-8 h-px bg-white/20" />
                            Dados Reais
                          </div>
                          <div className="flex items-center gap-3 text-white/50 text-[11px] uppercase tracking-widest font-bold">
                            <span className="w-8 h-px bg-white/20" />
                            Ajuste de Rota
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="aspect-square w-full max-w-[300px] mx-auto border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center items-center group-hover:border-[#2F5D82]/50 transition-all duration-700">
                           <Layers size={64} className="text-[#2F5D82] mb-6 group-hover:scale-110 transition-transform duration-700" />
                           <div className="text-center">
                             <div className="text-white font-bold text-lg mb-1">Visibilidade Total</div>
                             <div className="text-white/40 text-[10px] uppercase tracking-widest">Controle do Proprietário</div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ESCASSEZ (Redesigned for Premium UI/UX) */}
        <section className="py-[160px] bg-[#FBFBFA] px-6 w-full relative z-10 border-b border-[#D9D9D9] overflow-hidden">

          
          <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="text-center mb-20">
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-[#2F5D82]/30" />
                  <h3 className="text-xs uppercase tracking-[0.4em] font-extrabold text-[#2F5D82]">Exclusividade</h3>
                  <span className="h-px w-8 bg-[#2F5D82]/30" />
                </div>
                <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-[#0F2A44] leading-[1.1] mb-10 font-bold tracking-tight">
                  O Lançamento OPA <br className="hidden md:block"/>não atende volume
                </h2>
              </FadeIn>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
              <FadeIn delay={0.2} className="space-y-8">
                <div className="p-8 md:p-10 bg-white border border-[#F2F2F2] rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.02)]">
                  <p className="text-[#2B2B2B]/80 font-light text-lg leading-relaxed mb-8">
                    Selecionamos poucos imóveis. Cada ativo recebe atenção de Marco diretamente, estratégia individual e equipe dedicada do início ao fim.
                  </p>
                  <p className="text-[#2B2B2B]/80 font-light text-lg leading-relaxed">
                    Antes de qualquer coisa, Marco avalia o ativo pessoalmente. Para nós, o lançamento é um compromisso de resultado, por isso o filtro é rigoroso.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="relative p-10 md:p-12 bg-[#0F2A44] rounded-[40px] text-white overflow-hidden group">
                  {/* Subtle inner glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F5D82]/20 blur-[50px] rounded-full" />
                  
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#2F5D82] mb-10">Critérios de Qualificação</h4>
                  
                  <div className="space-y-10">
                    {[
                      "O imóvel ou empreendimento está no preço?",
                      "Existe um comprador real para ele agora?",
                      "Ele conecta com o que a OPA se propõe a fazer?"
                    ].map((question, i) => (
                      <div key={i} className="flex gap-6 items-start group/item">
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-[#2F5D82] group-hover/item:border-[#2F5D82] transition-colors duration-500">
                          0{i+1}
                        </div>
                        <p className="text-lg md:text-xl font-medium text-white/90 group-hover/item:text-white transition-colors">
                          {question}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/5">
                    <p className="text-sm font-light text-white/40 italic">
                      Se a resposta for sim para os três, o processo começa. Se não for, somos os primeiros a dizer.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 7. CTA FINAL */}
        <section id="apply" className="py-[160px] md:py-[200px] bg-[#0F2A44] w-full text-center text-white relative z-10 overflow-hidden">
          {/* Imagem de Fundo e Grafismos */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="https://images.openai.com/static-rsc-4/TVJWhxoFqNA_fT19IqbsC-KW2BCpia3bucOpYByy8l6kex3wJdtEGd3owspydmVVST-mQoTW2f7vbebJuJynYJBToSeE0UNT_lNqrGgoUYrKSATd-K4FvLCM8QAiN_trENy2bR4uJ7EdDn8dwRT8OxCVYGkezu_soIYnECAC7ZQkFA0BJy-sIdflu4UIdqNs?purpose=fullsize"
              alt="Textura de luxo"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A44] via-transparent to-[#0F2A44]/80" />
            
            {/* Luz de Destaque */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F5D82]/20 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-[1000px] mx-auto relative z-10 px-6">
            <FadeIn>
              <div className="flex items-center justify-center gap-6 mb-12">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#2F5D82]" />
                <span className="text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-extrabold text-[#2F5D82]">O Último Passo</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#2F5D82]" />
              </div>
              
              <h2 className="font-sans text-4xl md:text-5xl lg:text-[72px] text-white leading-[1.05] mb-12 font-bold tracking-tighter drop-shadow-lg">
                Se o imóvel não vende, o problema não é o imóvel.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative mb-20 max-w-[800px] mx-auto">
              {/* Linhas Laterais de Estrutura */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
              <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
              
              <div className="md:px-14 flex flex-col items-center">
                <p className="text-white/60 font-light text-[17px] leading-[1.8] mb-8">
                  Dez corretores trabalhando no mesmo imóvel ao mesmo tempo, sem estratégia, sem narrativa. O imóvel perde tração, perde desejo, perde resultado.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-md w-full max-w-[600px] hover:border-white/20 transition-all duration-700">
                  <p className="text-[15px] text-white/80 font-light leading-relaxed">
                    O melhor momento para lançar da forma certa é antes de ir ao mercado. 
                    <span className="font-bold text-white block mt-3 text-lg">O segundo melhor momento é agora.</span>
                  </p>
                </div>

                <p className="text-white/60 font-light text-[17px] leading-[1.8]">
                  Existimos para evitar esse caminho. Um processo, um método, uma equipe dedicada do início ao fim. Uma venda eficiente, não uma exposição desgastante sem resultado.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                <button className="group relative w-full sm:w-[320px] bg-white text-[#0F2A44] px-10 py-5 text-[12px] uppercase tracking-[0.2em] font-extrabold transition-all hover:bg-transparent hover:text-white border border-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Quero aplicar meu imóvel</span>
                  <div className="absolute inset-0 h-full w-full bg-[#2F5D82] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </button>
                
                <button className="group relative w-full sm:w-[360px] bg-transparent text-white px-8 py-[19px] text-[12px] uppercase tracking-[0.15em] font-extrabold transition-all border border-[#2F5D82] rounded-full overflow-hidden shadow-[0_0_0_rgba(47,93,130,0)] hover:shadow-[0_0_30px_rgba(47,93,130,0.4)]">
                  <span className="relative z-10 transition-colors duration-500">Quero aplicar meu empreendimento</span>
                  <div className="absolute inset-0 h-full w-full bg-[#2F5D82]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </div>
              
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mt-6 flex items-center justify-center gap-2 font-medium">
                <Lock size={12} className="text-[#2F5D82]" /> Confidencialidade Absoluta em Análises Pretéritas
              </p>
            </FadeIn>
          </div>
        </section>
        
        {/* FOOTER */}
        <footer className="bg-[#0A1D30] py-24 border-t border-white/5 text-white relative z-10">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-start pb-16 border-b border-white/5">
              <div className="flex flex-col items-start lg:col-span-1">
                <img src="/assets/logo/logo-opa-nova.svg" alt="Opa Logo" className="h-10 mb-6" />
                <p className="text-[11px] text-white/40 uppercase tracking-[0.25em] leading-relaxed max-w-[200px]">
                  Arquitetura. Mercado. Ilhabela.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Navegação</h4>
                <a href="#olhar" className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-colors">O Olhar</a>
                <a href="#metodo" className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-colors">O Método</a>
                <a href="#problema" className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-colors">Distribuição</a>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Impacto</h4>
                <p className="text-[11px] text-white/70 tracking-wide">+1M Visualizações Mensais</p>
                <p className="text-[11px] text-white/70 tracking-wide">Relatórios Quinzenais</p>
                <p className="text-[11px] text-white/70 tracking-wide">Estratégia Individualizada</p>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Ação</h4>
                <a href="#apply" className="text-[11px] uppercase tracking-widest text-[#2F5D82] font-bold hover:brightness-125 transition-all">Aplicar Imóvel →</a>
                <a href="#apply" className="text-[11px] uppercase tracking-widest text-[#2F5D82] font-bold hover:brightness-125 transition-all">Aplicar Empreendimento →</a>
              </div>
            </div>
            
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} OPA. Todos os direitos reservados.
              </p>
              <div className="flex gap-6">
                 <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Design por AI Studio Build</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
