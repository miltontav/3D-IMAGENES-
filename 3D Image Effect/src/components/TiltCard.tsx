import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TiltCardProps {
  image: string;
  title: string;
}

export function TiltCard({ image, title }: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-contain bg-black"
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 pointer-events-none"
        animate={{
          opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
        }}
        style={{
          transform: `translateX(${rotateY * 2}px) translateY(${-rotateX * 2}px)`,
        }}
      />

      {/* 3D Border */}
      <div
        className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"
        style={{ transform: 'translateZ(20px)' }}
      />
    </motion.div>
  );
}