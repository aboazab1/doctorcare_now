import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Static Background for Testing */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, 
            rgba(52, 152, 219, 0.1) 0%, 
            rgba(93, 209, 195, 0.1) 50%, 
            rgba(52, 152, 219, 0.1) 100%)`
        }}
      />
      {/* Primary Wave */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(52, 152, 219, 0.3) 0%, 
            rgba(93, 209, 195, 0.2) 25%, 
            rgba(52, 152, 219, 0.1) 50%, 
            transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary Wave */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
            rgba(93, 209, 195, 0.4) 0%, 
            rgba(52, 152, 219, 0.2) 30%, 
            rgba(93, 209, 195, 0.1) 60%, 
            transparent 80%)`,
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Tertiary Wave */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `conic-gradient(from ${scrollY * 0.1}deg at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(52, 152, 219, 0.2) 0deg, 
            rgba(93, 209, 195, 0.3) 90deg, 
            rgba(52, 152, 219, 0.1) 180deg, 
            rgba(93, 209, 195, 0.2) 270deg, 
            rgba(52, 152, 219, 0.2) 360deg)`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${20 + i * 15}px`,
            height: `${20 + i * 15}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
            background: `radial-gradient(circle, 
              rgba(52, 152, 219, ${0.3 - i * 0.05}) 0%, 
              rgba(93, 209, 195, ${0.2 - i * 0.03}) 50%, 
              transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Scroll-based Wave */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: `linear-gradient(${scrollY * 0.1}deg, 
            rgba(52, 152, 219, 0.1) 0%, 
            rgba(93, 209, 195, 0.2) 25%, 
            rgba(52, 152, 219, 0.1) 50%, 
            rgba(93, 209, 195, 0.1) 75%, 
            rgba(52, 152, 219, 0.1) 100%)`,
        }}
        animate={{
          y: scrollY * 0.1,
        }}
      />

      {/* Mouse-following Gradient */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(52, 152, 219, 0.15) 0%, 
            rgba(93, 209, 195, 0.1) 40%, 
            transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52, 152, 219, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(93, 209, 195, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
