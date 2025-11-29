import { useState } from 'react';
import { FlipCard } from './components/FlipCard';
import { TiltCard } from './components/TiltCard';
import { FloatingImage } from './components/FloatingImage';
import { ParallaxCard } from './components/ParallaxCard';

// Importar las imágenes personalizadas
import image1 from 'figma:asset/f9b65c3b1eca87dee84a99b88f3d089ffa2907e3.png'; // Brazillian
import image2 from 'figma:asset/27c75f30486fa6c083c5aa207a646b2ed2d204a9.png'; // Beele
import image3 from 'figma:asset/c27946a6720d699a20aa17285f582562ef7301b6.png'; // Floyymenor & Cris MJ
import image4 from 'figma:asset/4dd969b58f38a3d2ccc36cb6e710252f2e0e4e16.png'; // TT PROD
import image5 from 'figma:asset/1b3b70bdb0914415c7ca718db0f50954cc4fd258.png'; // JER
import image6 from 'figma:asset/7132f09462d15b68514e7495ecf40c1cf70f3eea.png'; // JT PRODUCCIÓN
import image7 from 'figma:asset/37ca6fee3b6c273a26dd046bb4948dfbb5afa246.png'; // JT PRODUCTION
import image8 from 'figma:asset/f8f29fd950d5d8cb7f3bfc9e0ce0f07669af1c98.png'; // JT PRO (colaboración)

// Nuevas imágenes para las tarjetas FLIP (frente y reverso)
import flipFront1 from 'figma:asset/4c546354aae40b41dd0fd352cd39814bf126d82f.png'; // Letra J dorada
import flipBack1 from 'figma:asset/8818bae944b0b2bedd6fda6050932ae715684ff7.png'; // Yailin - La Mas Viral
import flipFront2 from 'figma:asset/d935ca7ca62720e12a191fbd2f30ac53d33c5f30.png'; // JT Producción

// Nuevas imágenes para reemplazar 9 y 10
import image9 from 'figma:asset/f4bfb971ee114ff3a846edafa14e82c0fcdd123d.png'; // JT Production by Jire Taveras
import image10 from 'figma:asset/77295c0d521d76303533817ae24541b9271d506f.png'; // La Perversa JRT PRO

// ========================================
// 📸 CAMBIA TUS IMÁGENES AQUÍ
// ========================================
// Simplemente reemplaza estas URLs con las URLs de tus propias imágenes
// Puedes usar imágenes de:
// - Imgur (sube tu imagen y copia el enlace directo)
// - Google Drive (hazla pública y usa el enlace directo)
// - Tu propio servidor web
// - Cualquier URL de imagen pública

const IMAGES = {
  // Tarjetas con Flip 3D (Posiciones 1, 2, 3)
  flip1: image1, // Brazillian
  flip2: image2, // Beele
  flip3: image3, // Floyymenor & Cris MJ
  
  // Tarjetas con Inclinación 3D
  tilt1: image4, // TT PROD
  tilt2: image5, // JER
  
  // Imágenes Flotantes 3D
  float1: image6, // JT PRODUCCIÓN
  float2: image7, // JT PRODUCTION
  float3: image8, // JT PRO Colaboración
  
  // Tarjetas Parallax 3D (imágenes 9 y 10)
  parallax1: image9, // JT Production by Jire Taveras
  parallax2: image10, // La Perversa JRT PRO
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Flip Cards Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FlipCard
              frontImage={flipFront1}
              backImage={flipBack1}
              title=""
            />
            <FlipCard
              frontImage={flipFront2}
              backImage={image4}
              title=""
            />
            <FlipCard
              frontImage={image1}
              backImage={image2}
              title=""
            />
          </div>
        </section>

        {/* Tilt Cards Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TiltCard
              image={IMAGES.tilt1}
              title=""
            />
            <TiltCard
              image={IMAGES.tilt2}
              title=""
            />
          </div>
        </section>

        {/* Floating Images Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingImage
              image={IMAGES.float1}
              delay={0}
            />
            <FloatingImage
              image={IMAGES.float2}
              delay={0.2}
            />
            <FloatingImage
              image={IMAGES.float3}
              delay={0.4}
            />
          </div>
        </section>

        {/* Parallax Cards Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ParallaxCard
              image={IMAGES.parallax1}
              title=""
              subtitle=""
            />
            <ParallaxCard
              image={IMAGES.parallax2}
              title=""
              subtitle=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}