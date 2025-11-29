import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  title: string;
}

export function FlipCard({ frontImage, backImage, title }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-80 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <ImageWithFallback
            src={frontImage}
            alt={title}
            className="w-full h-full object-contain bg-black"
          />
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <ImageWithFallback
            src={backImage}
            alt={`${title} - Back`}
            className="w-full h-full object-contain bg-black"
          />
        </div>
      </motion.div>
    </div>
  );
}