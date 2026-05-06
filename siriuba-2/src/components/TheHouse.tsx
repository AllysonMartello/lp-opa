import InteractiveBentoGallery, { MediaItemType } from "./ui/interactive-bento-gallery";
import { UtensilsCrossed, Waves, Bath, Lightbulb, Home, Sun, Image as ImageIcon, MapPin, Wind, FileText, Anchor, Compass, CheckCircle2, Trees, Sofa } from "lucide-react";
import { motion } from "motion/react";

const exclusiveDetails = [
  { icon: Waves, text: "Vista aberta para o mar e belíssimo pôr do sol" },
  { icon: Trees, text: "Integração e relação muito bonita entre o mar e o verde" },
  { icon: Compass, text: "Norte de Ilhabela, no meio do caminho entre a Vila e a Ponta das Canas" },
  { icon: Anchor, text: "Boa relação de nível e acesso com a via principal" },
  { icon: Bath, text: "4 suítes grandes, ambientes amplos e bem resolvidos" },
  { icon: Sofa, text: "Duas salas e uma varanda desenhadas para convivência" },
  { icon: Home, text: "Dois pavimentos com núcleos independentes de sala e cozinha" },
  { icon: UtensilsCrossed, text: "Espaço gourmet com churrasqueira integrado à área externa" },
  { icon: Waves, text: "Piscina generosa integrada à área externa" },
  { icon: Wind, text: "Ar-condicionado central — casa 100% climatizada" },
  { icon: Sofa, text: "Lavabo no pavimento térreo" },
  { icon: Home, text: "Projeto contemporâneo e clean, pronto para receber" },
  { icon: Sun, text: "Energia solar instalada" },
  { icon: FileText, text: "Escritura definitiva e matrícula regular" }
];

const mediaItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Vista para o mar",
    desc: "A relação da casa com o horizonte é direta e constante.",
    url: "/assets/siriuba-2/Vista para o Mar.jpg",
    span: "col-span-1 sm:col-span-1 md:col-span-1 row-span-2 sm:row-span-2 md:row-span-3",
  },
  {
    id: 2,
    type: "image",
    title: "Piscina",
    desc: "Espaço de lazer privativo com vista privilegiada do norte da ilha.",
    url: "/assets/siriuba-2/Area Externa.jpg",
    span: "col-span-1 sm:col-span-2 md:col-span-2 row-span-2 sm:row-span-2 md:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Ambientes integrados",
    desc: "No térreo, sala, cozinha gourmet e deck funcionam como um único grande espaço com acesso direto à piscina.",
    url: "/assets/siriuba-2/Ambientes integrados.jpg",
    span: "col-span-1 sm:col-span-2 md:col-span-1 row-span-2 sm:row-span-2 md:row-span-3",
  },
  {
    id: 4,
    type: "image",
    title: "Luz natural",
    desc: "Grandes aberturas garantem iluminação durante todo o dia.",
    url: "/assets/siriuba-2/Luz natural.jpg",
    span: "col-span-1 sm:col-span-1 md:col-span-2 row-span-2 sm:row-span-2 md:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Área externa",
    desc: "Piscina, espreguiçadeiras, espaço gourmet com churrasqueira e área para refeições ao ar livre. Tudo integrado ao verde da Siriúba.",
    url: "/assets/siriuba-2/Piscina com Deck.jpg",
    span: "col-span-1 sm:col-span-1 md:col-span-1 row-span-2 sm:row-span-2 md:row-span-3",
  },
  {
    id: 6,
    type: "image",
    title: "Detalhes",
    desc: "Acabamentos contemporâneos e marcenaria funcional.",
    url: "/assets/siriuba-2/2 pavimento.jpg",
    span: "col-span-1 sm:col-span-1 md:col-span-2 row-span-2 sm:row-span-2 md:row-span-2",
  },
  {
    id: 7,
    type: "image",
    title: "Estrutura",
    desc: "Segurança e durabilidade em uma estrutura totalmente renovada.",
    url: "/assets/siriuba-2/Estrutura.jpg",
    span: "col-span-1 sm:col-span-1 md:col-span-1 row-span-2 sm:row-span-2 md:row-span-3",
  },
];

export default function TheHouse() {
  return (
    <section id="a-casa" className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="Uma casa contemporânea, ampla e pronta para receber"
          description="Essa casa tem uma proposta mais clean. Mais clara. Mais atual. São dois pavimentos completos, cada um com sala, cozinha e estar próprios. No térreo, tudo se integra com acesso direto à piscina. No superior, um segundo núcleo funciona de forma independente. Uma casa para viver com conforto, mas também para reunir."
        />

        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-2 uppercase tracking-widest text-xs font-bold mb-4 block">Diferenciais</span>
            <h3 className="text-3xl md:text-4xl font-serif text-primary-1">O que a casa oferece na prática</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exclusiveDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative bg-white/40 backdrop-blur-md p-5 rounded-2xl border border-white/60 hover:bg-white hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-2 group-hover:bg-primary-2 group-hover:text-white transition-all duration-300">
                  <detail.icon size={20} strokeWidth={1.5} />
                </div>
                <p className="text-text-sec text-sm md:text-base leading-snug">
                  {detail.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
