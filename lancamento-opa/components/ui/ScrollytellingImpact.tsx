"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ScrollytellingImpact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phrase1Ref = useRef<HTMLDivElement>(null);
  const phrase2Ref = useRef<HTMLDivElement>(null);
  const phrase3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // 300vh duration
        pin: true,
        scrub: 1.5,
        // markers: true, // For debugging if needed
      }
    });

    // Initial state for P1: slightly brighter/clearer
    gsap.set(phrase1Ref.current, { opacity: 1, y: 0, scale: 1 });

    // First transition: P1 out, P2 in
    tl.to(phrase1Ref.current, {
      opacity: 0,
      y: -100,
      scale: 0.95,
      filter: "blur(20px)",
      duration: 1,
      ease: "power2.inOut"
    }, 1)
    .fromTo(phrase2Ref.current, {
      opacity: 0,
      y: 100,
      scale: 1.05,
      filter: "blur(20px)",
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out"
    }, 1.2)
    
    // Second transition: P2 out, P3 in
    .to(phrase2Ref.current, {
      opacity: 0,
      y: -100,
      scale: 0.95,
      filter: "blur(20px)",
      duration: 1,
      ease: "power2.inOut"
    }, 3)
    .fromTo(phrase3Ref.current, {
      opacity: 0,
      y: 100,
      scale: 1.05,
      filter: "blur(20px)",
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out"
    }, 3.2);

    // Final buffer to hold P3
    tl.to({}, { duration: 1.5 });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#0F2A44] overflow-hidden flex items-center justify-center">
      {/* Background Decorative Element - Increased opacity and spread for a deeper look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#2F5D82]/50 rounded-full blur-[180px] pointer-events-none md:opacity-70" />
      
      {/* Second subtle glow for more "respiro" depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FFFFFF]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1200px] w-full px-8 md:px-16 text-center relative h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
        
        {/* Phrase 1 */}
        <div 
          ref={phrase1Ref}
          className="absolute inset-0 flex items-center justify-center p-4"
        >
          <p className="font-sans font-extrabold italic text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            Um imóvel mal precificado perde força.
          </p>
        </div>

        {/* Phrase 2 */}
        <div 
          ref={phrase2Ref}
          className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none p-4"
        >
          <p className="font-sans font-extrabold italic text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            Um imóvel mal comunicado perde desejo.
          </p>
        </div>

        {/* Phrase 3 */}
        <div 
          ref={phrase3Ref}
          className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none p-4"
        >
          <p className="font-sans font-extrabold italic text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            Um imóvel mal interpretado perde valor.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white">Continue</span>
        <div className="w-px h-12 bg-white" />
      </div>
    </div>
  );
};

export default ScrollytellingImpact;
