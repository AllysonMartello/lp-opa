import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ScrollytellingImpact from "@/components/ui/ScrollytellingImpact";
import { Eye, Target, Zap, Smartphone, FileText, MousePointerClick, Layers, Search, Sparkles, Users2, Presentation, ShieldCheck, TrendingUp, Clock, Lock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-[#2F5D82]/30">
      {/* Background Subtle Architectural Line */}
      <div className="absolute top-0 right-[35%] w-px h-full bg-[#D9D9D9] opacity-[0.15] hidden lg:block z-0 pointer-events-none" />

      {/* 1. HERO */}
      <section className="relative min-h-[100svh] w-full flex items-center pt-[200px] pb-[200px] overflow-hidden">
        <Image
          src="https://images.openai.com/static-rsc-4/HRE6Tpjva07ForOwnDsh97YsvMYUy814NtFdNtP2EKTa5StOhroolOyHLlr06q6Tff9fvKmy0new8KNP7HacKiQHA6n3hPjzBzPwYGmxHkD1bG9dx07xwwKBJpW8L6Inqhkpj1siWVKiD5L4lhCbUfZYcNGn_GODPdigKzJWe3GP3xhDSbY-40vv0TKBQ665?purpose=fullsize"
          alt="Vista luxuosa de uma propriedade em Ilhabela com luz natural"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0F2A44]/35" /> {/* Slightly lighter overlay for more natural light */}
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 flex flex-col items-start justify-center text-white">
          <FadeIn className="max-w-[1000px]">
            <h2 className="font-sans text-[38px] md:text-[44px] leading-[1.1] font-extrabold tracking-tight text-white drop-shadow-md break-words sm:break-normal hyphens-auto">
              Seu imóvel ou empreendimento{' '}<br className="hidden xl:block"/>
              precisa mais do que aparecer.<br />
              <span className="opacity-95 italic font-light">Precisa ser lançado da forma certa.</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="max-w-2xl">
            <p className="mt-10 text-[18px] tracking-wide font-light leading-[1.8] opacity-90 drop-shadow-sm">
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
              <p className="text-[#2B2B2B]/70 font-light text-base leading-relaxed max-w-md">
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
                    {item.desc && <p className="text-[15px] text-[#2B2B2B]/60 font-light leading-relaxed">{item.desc}</p>}
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

      {/* 2b. IMPACT SECTION — Animated & Modern GSAP */}
      <ScrollytellingImpact />

      {/* 3. O OLHAR (Imagem + Texto) */}
      <section id="olhar" className="py-[140px] px-6 w-full max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col gap-16 lg:gap-20">
          {/* TEXTO EM CIMA */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
            <div>
              <FadeIn>
                <h3 className="text-xs uppercase tracking-widest font-extrabold mb-4 text-[#2F5D82]">O Olhar</h3>
                <h2 className="font-sans text-3xl md:text-5xl text-[#0F2A44] leading-[1.2] mb-8 font-bold">
                  Há 20 anos lendo o que o mercado não enxerga.
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2} className="space-y-6 text-[#2B2B2B]/80 font-light text-base leading-relaxed">
                <p className="text-lg">A OPA foi construída para resolver o que a divulgação sozinha nunca resolve.</p>
                <p>Reunimos arquitetura, mercado imobiliário e conhecimento profundo de Ilhabela em um único processo. Não lemos um imóvel somente como corretores. Lemos como quem conhece cada bairro, cada encosta, cada orientação solar da ilha, e sabe exatamente o que aquilo vale para o comprador certo.</p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} className="relative aspect-[16/10] lg:aspect-square w-full rounded-[32px] border border-[#D9D9D9] p-3 bg-white shadow-sm overflow-hidden">
               <Image
                src="https://images.openai.com/static-rsc-4/TVJWhxoFqNA_fT19IqbsC-KW2BCpia3bucOpYByy8l6kex3wJdtEGd3owspydmVVST-mQoTW2f7vbebJuJynYJBToSeE0UNT_lNqrGgoUYrKSATd-K4FvLCM8QAiN_trENy2bR4uJ7EdDn8dwRT8OxCVYGkezu_soIYnECAC7ZQkFA0BJy-sIdflu4UIdqNs?purpose=fullsize"
                alt="Arquitetura integrada com natureza"
                fill
                className="object-cover rounded-[24px]"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
          
          {/* QUADRADOS EMBAIXO */}
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
                <p className="text-[#2B2B2B]/40 text-[11px] uppercase tracking-[0.4em] font-medium whitespace-nowrap">Depois disso, construímos o lançamento</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. GRID (3 colunas) — O Método */}
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

      {/* 5. SEÇÃO ESCURA — O que o proprietário conquista */}
      <section className="py-[180px] bg-[#0F2A44] text-white px-6 w-full relative z-10 border-b border-white/10 overflow-hidden">
        {/* Decorative background elements */}
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
                { 
                  title: "Segurança de precificação", 
                  desc: "O ativo chega ao mercado no preço certo, para o comprador certo. Sem queima de produto.",
                  icon: <ShieldCheck size={24} className="text-[#2F5D82]" />
                },
                { 
                  title: "Percepção de valor real", 
                  desc: "Imóveis e empreendimentos que passaram pelo Lançamento OPA chegam ao comprador já posicionados como produto. O desejo está construído antes da visita.",
                  icon: <TrendingUp size={24} className="text-[#2F5D82]" />
                },
                { 
                  title: "Redução de tempo no mercado", 
                  desc: "Comprador qualificado não precisa ser convencido do valor. Ele já chegou sabendo. Isso encurta o ciclo de negociação.",
                  icon: <Clock size={24} className="text-[#2F5D82]" />
                },
                { 
                  title: "Liquidez sem exposição desnecessária", 
                  desc: "O proprietário não abre o ativo para curiosos. Apenas compradores com intenção e perfil compatível chegam ao imóvel.",
                  icon: <Lock size={24} className="text-[#2F5D82]" />
                }
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

      {/* COMO ISSO CHEGA AO COMPRADOR — Imagem + Texto alternados */}
      <section className="py-[160px] bg-[#F7F6F3] px-6 w-full relative z-10 border-b border-[#D9D9D9]">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn className="text-center mb-[100px] max-w-[700px] mx-auto">
            <h3 className="text-xs uppercase tracking-[0.3em] font-extrabold mb-4 text-[#2F5D82]">Distribuição</h3>
            <h2 className="font-sans text-3xl md:text-5xl text-[#0F2A44] leading-[1.2] font-bold">
              Como isso chega ao comprador
            </h2>
            <p className="mt-6 text-[#2B2B2B]/70 font-light text-[15px] uppercase tracking-wide">
              Cada imóvel ou empreendimento recebe estrutura completa de produção e distribuição:
            </p>
          </FadeIn>

          <div className="space-y-[120px]">
            {/* Item 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
              <FadeIn className="order-2 lg:order-1">
                <h3 className="text-[18px] md:text-[22px] uppercase tracking-[0.15em] font-bold text-[#0F2A44] mb-5 border-b border-[#D9D9D9] pb-3 inline-block">Vídeo cinematográfico</h3>
                <p className="text-[17px] md:text-[19px] font-light text-[#2B2B2B]/80 leading-relaxed mt-2">
                  Narrativa que desperta desejo antes da visita e cria convicção em quem já está considerando.
                </p>
                <div className="mt-8">
                  <a href="#apply" className="text-[12px] uppercase tracking-widest text-[#2F5D82] font-bold hover:brightness-125 transition-all inline-flex items-center gap-2">
                    Confira completo &rarr;
                  </a>
                </div>
              </FadeIn>
              <FadeIn className="order-1 lg:order-2 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D9D9D9] p-2 bg-white shadow-sm">
                <Image
                  src="https://images.openai.com/static-rsc-4/H0LcV4rAfIUeuDo0JpzqCwHXWH_CVQsSbTvqCPa_Xrv3_iSv4JUjUY-rEQvkoOSK-szS2iO1V94VVeTsTs-u9tyCJ6si_bRucLYF9OF9-FE-uMEZsjkOLFx3t3sLa5X_SwIV8qf4-uhj7hb23nOJGlEXjRJiY9GUycsk8xyZ6ZMckl4G-9Q0jpZnl-Ftzcw0?purpose=fullsize"
                  alt="Vídeo cinematográfico"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
              <FadeIn className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D9D9D9] p-2 bg-white shadow-sm">
                <Image
                  src="https://images.openai.com/static-rsc-4/ONd65rFcdYLhvojtt07JtNCD9gKb9ExOQOGwk8VxxuVvM_eM5xheTsgqYr91kVyuN8TAjkVTi7cp-veTgbIq08DooXeX5UP9hvd9fBUsPEM-w_fBy_ZkacKVAwRcEPFnNx-umpVH5VJrVe3tLNd5t1zY3EmtyUhSjA-ge40xC84y6CLaGzRpxJD_URXkY2e0?purpose=fullsize"
                  alt="Tour virtual de alta fidelidade"
                  fill
                  className="object-cover p-2"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
              <FadeIn>
                <h3 className="text-[18px] md:text-[22px] uppercase tracking-[0.15em] font-bold text-[#0F2A44] mb-5 border-b border-[#D9D9D9] pb-3 inline-block">Tour virtual de alta fidelidade</h3>
                <p className="text-[17px] md:text-[19px] font-light text-[#2B2B2B]/80 leading-relaxed mt-2">
                  O comprador de São Paulo, Rio ou do exterior percorre cada cômodo antes de agendar visita presencial. Quem chega, chega para comprar.
                </p>
                <div className="mt-8">
                  <a href="#apply" className="text-[12px] uppercase tracking-widest text-[#2F5D82] font-bold hover:brightness-125 transition-all inline-flex items-center gap-2">
                    Confira completo &rarr;
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Item 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
              <FadeIn className="order-2 lg:order-1">
                <h3 className="text-[18px] md:text-[22px] uppercase tracking-[0.15em] font-bold text-[#0F2A44] mb-5 border-b border-[#D9D9D9] pb-3 inline-block">Site exclusivo do imóvel</h3>
                <p className="text-[17px] md:text-[19px] font-light text-[#2B2B2B]/80 leading-relaxed mt-2">
                  Não um link de portal. Um endereço digital dedicado, com narrativa completa, à altura do que está sendo oferecido.
                </p>
                <div className="mt-8">
                  <a href="#apply" className="text-[12px] uppercase tracking-widest text-[#2F5D82] font-bold hover:brightness-125 transition-all inline-flex items-center gap-2">
                    Confira completo &rarr;
                  </a>
                </div>
              </FadeIn>
              <FadeIn className="order-1 lg:order-2 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D9D9D9] p-2 bg-white shadow-sm">
                <Image
                  src="https://images.openai.com/static-rsc-4/c8JbxHA4b4jyqySOTGD-kfJeCVIm_43h3ILN6RMCA6YScDS_qvoZlJALjRR6xT-e_-0iqiRaSTbDJLt7CK3Megxmhz1ljez8uFmJCBGsMisQjmSitc_W8rkGe1vCywgAPRXR3Lo3iQHQ04wOS68OpoSiAUPz2a_KV8kTRI2HPLct6tfFLybsbms6utV_AHjs?purpose=fullsize"
                  alt="Site exclusivo"
                  fill
                  className="object-cover object-center p-2"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
            </div>

            {/* Item 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
              <FadeIn className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D9D9D9] p-2 bg-white shadow-sm">
                <Image
                  src="https://images.openai.com/static-rsc-4/XKkb9MEf5YPqpRO50EuR2xC1H_KvUFPW6rI87r1kL354L-2nt9n4IS003S_gCUVW3QzT1yMkSwDkQHUSbjPbhRJuKsRD-tsHl5KDnV85wM9fhRLRNCCPmQypOMp4QbVSk4JCRmAgkAcEVnr65pS5jdZaOareyfAAhIoMua3oK9NDdRl6uUx6wvCoTpJFEG2y?purpose=fullsize"
                  alt="Campanha segmentada"
                  fill
                  className="object-cover p-2"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
              <FadeIn>
                <h3 className="text-[18px] md:text-[22px] uppercase tracking-[0.15em] font-bold text-[#0F2A44] mb-5 border-b border-[#D9D9D9] pb-3 inline-block">Campanha segmentada</h3>
                <p className="text-[17px] md:text-[19px] font-light text-[#2B2B2B]/80 leading-relaxed mt-2">
                  Mais de 1 milhão de visualizações orgânicas por mês nos canais da OPA, combinado com distribuição paga para o perfil certo de renda e intenção de compra.
                </p>
                <div className="mt-8">
                  <a href="#apply" className="text-[12px] uppercase tracking-widest text-[#2F5D82] font-bold hover:brightness-125 transition-all inline-flex items-center gap-2">
                    Confira completo &rarr;
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Item 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
              <FadeIn className="order-2 lg:order-1">
                <h3 className="text-[18px] md:text-[22px] uppercase tracking-[0.15em] font-bold text-[#0F2A44] mb-5 border-b border-[#D9D9D9] pb-3 inline-block">Relatórios quinzenais de acompanhamento</h3>
                <p className="text-[17px] md:text-[19px] font-light text-[#2B2B2B]/80 leading-relaxed mt-2">
                  A cada duas semanas, o proprietário recebe um relatório completo: quem foi alcançado, qual o perfil de quem demonstrou interesse, como a campanha está performando e quais ajustes foram feitos. Sem achismo. Sem silêncio. O ativo está sendo trabalhado e você vai saber exatamente como.
                </p>
                <div className="mt-8">
                  <a href="#apply" className="text-[12px] uppercase tracking-widest text-[#2F5D82] font-bold hover:brightness-125 transition-all inline-flex items-center gap-2">
                    Confira completo &rarr;
                  </a>
                </div>
              </FadeIn>
              <FadeIn className="order-1 lg:order-2 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-white border border-[#D9D9D9] p-2 shadow-sm">
                <Image
                  src="https://images.openai.com/static-rsc-4/SPBuSnbTZdQ91GSZdb_DgaBoAqQx6RKj1cMj4UkAf-d27WRcWiFI3cjyp5AflM5gEcmnilGodadiIH1lMVJhmI3WAB5s0AUkbsujDQslu-gN3t0FruUZDRsxHQDOvhAxE57shuhsxL_vlcx1Qi2y55mGhw-52zQWWOEV19iE61AfsA2G6fD3gJrRbGbPJJKq?purpose=fullsize"
                  alt="Relatórios quinzenais"
                  fill
                  className="object-cover object-bottom p-2"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. ESCASSEZ */}
      <section className="py-[140px] bg-[#FFFFFF] px-6 w-full relative z-10 border-b border-[#D9D9D9]">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeIn>
            <h3 className="text-xs uppercase tracking-[0.3em] font-extrabold mb-6 text-[#2F5D82]">Exclusividade</h3>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl text-[#0F2A44] leading-[1.3] mb-10 font-bold">
              O Lançamento OPA <br className="hidden md:block"/>não atende volume
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="space-y-8 text-[#2B2B2B]/80 font-light text-base leading-relaxed">
            <p>
              Selecionamos poucos imóveis. Cada ativo recebe atenção de Marco diretamente, estratégia individual e equipe dedicada do início ao fim.
            </p>
            <p>
              Antes de qualquer coisa, Marco avalia o ativo pessoalmente. O imóvel ou empreendimento está no preço? Existe um comprador real para ele agora? Ele conecta com o que a OPA se propõe a fazer? Se a resposta for sim para os três, o processo começa. Se não for, somos os primeiros a dizer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section id="apply" className="py-[160px] md:py-[200px] bg-[#0F2A44] w-full text-center text-white relative z-10 overflow-hidden">
        {/* Imagem de Fundo e Grafismos */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.openai.com/static-rsc-4/TVJWhxoFqNA_fT19IqbsC-KW2BCpia3bucOpYByy8l6kex3wJdtEGd3owspydmVVST-mQoTW2f7vbebJuJynYJBToSeE0UNT_lNqrGgoUYrKSATd-K4FvLCM8QAiN_trENy2bR4uJ7EdDn8dwRT8OxCVYGkezu_soIYnECAC7ZQkFA0BJy-sIdflu4UIdqNs?purpose=fullsize"
            alt="Textura de luxo"
            fill
            className="object-cover opacity-[0.07] mix-blend-overlay"
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
              <span className="text-3xl font-sans font-black tracking-tighter mb-4">OPA<span className="text-[#2F5D82]">.</span></span>
              <p className="text-[11px] text-white/40 uppercase tracking-[0.25em] leading-relaxed max-w-[200px]">
                Arquitetura. Mercado. Ilhabela.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Navegação</h4>
              <a href="#" className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-colors">O Olhar</a>
              <a href="#metodo" className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-colors">O Método</a>
              <a href="#" className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-colors">Distribuição</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Impacto</h4>
              <p className="text-[11px] text-white/70 tracking-wide">+1M Visualizações Mensais</p>
              <p className="text-[11px] text-white/70 tracking-wide">Relatórios Quinzenais</p>
              <p className="text-[11px] text-white/70 tracking-wide">Estratégia Individualizada</p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Ação</h4>
              <a href="#" className="text-[11px] uppercase tracking-widest text-[#2F5D82] font-bold hover:brightness-125 transition-all">Aplicar Imóvel →</a>
              <a href="#" className="text-[11px] uppercase tracking-widest text-[#2F5D82] font-bold hover:brightness-125 transition-all">Aplicar Empreendimento →</a>
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
  );
}
