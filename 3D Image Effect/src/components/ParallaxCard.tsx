import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ParallaxCardProps {
  image: string;
  title: string;
  subtitle: string;
}

export function ParallaxCard({ image, title, subtitle }: ParallaxCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-96 rounded-2xl overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          translateX: mouseXSpring,
          translateY: mouseYSpring,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-contain bg-black"
        />
      </motion.div>

      {/* Middle Layer - Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"
        style={{
          translateX: mouseXSpring,
          translateY: mouseYSpring,
          scale: isHovered ? 1.05 : 1,
        }}
      />

      {/* Light Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + (mouseXSpring.get() * 100)}% ${50 + (mouseYSpring.get() * 100)}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none" />
    </motion.div>
  );
}