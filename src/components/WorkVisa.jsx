import { motion } from 'framer-motion';
import cloud from '../assets/images/cloud.svg';
import centerImg from '../assets/images/aeroimg.svg';

export default function WorkVisa() {
  return (
    <div className="max-w-7xl mx-auto px-4 relative flex items-center justify-center overflow-hidden">
      
   
      <img
        src={centerImg}
        alt="Center"
        className="relative w-[90%] max-w-4xl z-10"
      />

      <motion.img
        src={cloud}
        alt="Cloud"
        className="absolute top-1/2 left-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 z-0 opacity-80"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
