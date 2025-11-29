import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FloatingImageProps {
  image: string;
  delay?: number;
}

export function FloatingImage({ image, delay = 0 }: FloatingImageProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay,
          },
          rotateY: {
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            delay: delay,
          },
        }}
        whileHover={{
          scale: 1.05,
          rotateZ: 5,
          transition: { duration: 0.3 },
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Shadow */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/30 rounded-full blur-xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay,
          }}
        />

        {/* Image Container */}
        <div
          className="relative rounded-lg overflow-hidden shadow-2xl"
          style={{ transform: 'translateZ(50px)' }}
        >
          <ImageWithFallback
            src={image}
            alt="Floating"
            className="w-full h-64 object-contain bg-black"
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* 3D Layers */}
        <div
          className="absolute inset-0 border-2 border-purple-400/30 rounded-lg pointer-events-none"
          style={{ transform: 'translateZ(55px)' }}
        />
        <div
          className="absolute inset-0 border-2 border-blue-400/20 rounded-lg pointer-events-none"
          style={{ transform: 'translateZ(60px)' }}
        />
      </motion.div>
    </motion.div>
  );
}