"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images. Only the first one is rendered with a soft zoom effect. */
  images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const first = images[0];
  if (!first) return null;

  return (
    <div ref={container} className="relative h-[80vh] md:h-screen bg-bg-alt overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ scale }}
        className="relative w-[88vw] h-[60vh] md:w-[70vw] md:h-[80vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl will-change-transform"
      >
        <picture className="block w-full h-full">
          <source
            type="image/avif"
            srcSet={`${first.src}-mobile.avif 640w, ${first.src}-desktop.avif 1280w`}
            sizes="(max-width: 768px) 88vw, 70vw"
          />
          <source
            type="image/webp"
            srcSet={`${first.src}-mobile.webp 640w, ${first.src}-desktop.webp 1280w`}
            sizes="(max-width: 768px) 88vw, 70vw"
          />
          <img
            src={`${first.src}-desktop.jpg`}
            srcSet={`${first.src}-mobile.jpg 640w, ${first.src}-desktop.jpg 1280w`}
            sizes="(max-width: 768px) 88vw, 70vw"
            alt={first.alt || "Imagem"}
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </motion.div>
    </div>
  );
}
