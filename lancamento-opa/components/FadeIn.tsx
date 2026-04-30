'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

export default function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1], 
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
