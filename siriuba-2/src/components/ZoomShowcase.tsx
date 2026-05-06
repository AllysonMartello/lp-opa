import { ZoomParallax } from "./ui/zoom-parallax";

const parallaxImages = [
  {
    src: "/assets/siriuba-2/imagem-efeito-1.jpg",
    alt: "Sala Integrada",
  },
  {
    src: "/assets/siriuba-2/imagem-efeito-2.jpg",
    alt: "Área Externa Piscina",
  },
  {
    src: "/assets/siriuba-2/imagem-efeito-3.jpg",
    alt: "Suíte Master",
  },
  {
    src: "/assets/siriuba-2/imagem-efeito-4.jpg",
    alt: "Quarto Escritório",
  },
  {
    src: "/assets/siriuba-2/imagem-efeito-5.jpg",
    alt: "Cozinha Gourmet",
  },
  {
    src: "/assets/siriuba-2/imagem-efeito-6.jpg",
    alt: "Banheiro Duplo",
  },
  {
    src: "/assets/siriuba-2/imagem-efeito-7.jpg",
    alt: "Quarto Vista Externa",
  },
];

export default function ZoomShowcase() {
  return (
    <section id="visao-geral" className="relative z-10">
      <ZoomParallax images={parallaxImages} />
    </section>
  );
}
