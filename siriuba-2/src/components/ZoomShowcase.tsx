import { ZoomParallax } from "./ui/zoom-parallax";
import { useT } from "../i18n/LanguageContext";

const parallaxSrcs = [
  "/assets/siriuba-2/imagem-efeito-1.jpg",
  "/assets/siriuba-2/imagem-efeito-2.jpg",
  "/assets/siriuba-2/imagem-efeito-3.jpg",
  "/assets/siriuba-2/imagem-efeito-4.jpg",
  "/assets/siriuba-2/imagem-efeito-5.jpg",
  "/assets/siriuba-2/imagem-efeito-6.jpg",
  "/assets/siriuba-2/imagem-efeito-7.jpg",
];

export default function ZoomShowcase() {
  const t = useT();
  const parallaxImages = parallaxSrcs.map((src, i) => ({
    src,
    alt: [
      t.zoom.altSala,
      t.zoom.altPiscina,
      t.zoom.altSuite,
      t.zoom.altQuartoEscritorio,
      t.zoom.altCozinha,
      t.zoom.altBanheiro,
      t.zoom.altQuartoVista,
    ][i] ?? "",
  }));

  return (
    <section id="visao-geral" className="relative z-10">
      <ZoomParallax images={parallaxImages} />
    </section>
  );
}
