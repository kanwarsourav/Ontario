import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FadeInSection({ children, direction = 'left' }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: '-100px',    // Optional: triggers a bit earlier
    // once: true removed to allow re-triggering
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
