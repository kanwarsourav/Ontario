import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FadeInSection({ children, direction = 'left' }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: '-100px 0px',
  });

  const offset = 30;

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="w-full" // ✅ prevent overflow
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
