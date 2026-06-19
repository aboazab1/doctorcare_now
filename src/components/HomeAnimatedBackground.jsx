import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HomeAnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Transform scroll values
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [0.1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main Background Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(52, 152, 219, 0.08) 0%, 
            rgba(93, 209, 195, 0.06) 25%, 
            rgba(52, 152, 219, 0.04) 50%, 
            rgba(93, 209, 195, 0.02) 75%, 
            transparent 100%)`,
          y: backgroundY,
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
      />

      {/* Floating Medical Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${30 + i * 20}px`,
            height: `${30 + i * 20}px`,
            left: `${10 + i * 12}%`,
            top: `${15 + i * 8}%`,
            background: `radial-gradient(circle, 
              rgba(52, 152, 219, ${0.1 - i * 0.01}) 0%, 
              rgba(93, 209, 195, ${0.08 - i * 0.008}) 50%, 
              transparent 70%)`,
          }}
          animate={{
            y: [0, -30 - i * 5, 0],
            x: [0, 20 + i * 3, 0],
            scale: [1, 1.2 + i * 0.1, 1],
            opacity: [0.1, 0.3 - i * 0.02, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Wave Patterns */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: `linear-gradient(${scrollY.get() * 0.1}deg, 
            rgba(52, 152, 219, 0.1) 0%, 
            rgba(93, 209, 195, 0.08) 25%, 
            rgba(52, 152, 219, 0.06) 50%, 
            rgba(93, 209, 195, 0.08) 75%, 
            rgba(52, 152, 219, 0.1) 100%)`,
        }}
        animate={{
          background: `linear-gradient(${scrollY.get() * 0.1}deg, 
            rgba(52, 152, 219, 0.1) 0%, 
            rgba(93, 209, 195, 0.08) 25%, 
            rgba(52, 152, 219, 0.06) 50%, 
            rgba(93, 209, 195, 0.08) 75%, 
            rgba(52, 152, 219, 0.1) 100%)`,
        }}
      />

      {/* Mesh Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(52, 152, 219, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(93, 209, 195, 0.1) 0px, transparent 50%),
            radial-gradient(at 40% 80%, rgba(52, 152, 219, 0.08) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(93, 209, 195, 0.08) 0px, transparent 50%),
            radial-gradient(at 80% 80%, rgba(52, 152, 219, 0.06) 0px, transparent 50%),
            radial-gradient(at 0% 0%, rgba(93, 209, 195, 0.06) 0px, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52, 152, 219, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(93, 209, 195, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Mouse Following Gradient */}
      <motion.div
        className="absolute inset-0 opacity-12"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(52, 152, 219, 0.1) 0%, 
            rgba(93, 209, 195, 0.08) 40%, 
            transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default HomeAnimatedBackground;

