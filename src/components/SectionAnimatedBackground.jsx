import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const SectionAnimatedBackground = ({ sectionType = 'default' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

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

  // Different color schemes for different sections
  const getColorScheme = () => {
    switch (sectionType) {
      case 'hero':
        return {
          primary: 'rgba(52, 152, 219, 0.1)',
          secondary: 'rgba(93, 209, 195, 0.08)',
          accent: 'rgba(52, 152, 219, 0.06)'
        };
      case 'services':
        return {
          primary: 'rgba(93, 209, 195, 0.1)',
          secondary: 'rgba(52, 152, 219, 0.08)',
          accent: 'rgba(93, 209, 195, 0.06)'
        };
      case 'about':
        return {
          primary: 'rgba(52, 152, 219, 0.08)',
          secondary: 'rgba(93, 209, 195, 0.06)',
          accent: 'rgba(52, 152, 219, 0.04)'
        };
      case 'testimonials':
        return {
          primary: 'rgba(93, 209, 195, 0.08)',
          secondary: 'rgba(52, 152, 219, 0.06)',
          accent: 'rgba(93, 209, 195, 0.04)'
        };
      case 'contact':
        return {
          primary: 'rgba(52, 152, 219, 0.06)',
          secondary: 'rgba(93, 209, 195, 0.04)',
          accent: 'rgba(52, 152, 219, 0.02)'
        };
      default:
        return {
          primary: 'rgba(52, 152, 219, 0.05)',
          secondary: 'rgba(93, 209, 195, 0.03)',
          accent: 'rgba(52, 152, 219, 0.02)'
        };
    }
  };

  const colors = getColorScheme();

  return (
    <div ref={ref} className="relative overflow-hidden pointer-events-none">
      {/* Main Background Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
            ${colors.primary} 0%, 
            ${colors.secondary} 25%, 
            ${colors.accent} 50%, 
            transparent 75%)`,
        }}
        animate={{
          opacity: isInView ? [0.1, 0.3, 0.1] : 0,
          scale: isInView ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${20 + i * 15}px`,
            height: `${20 + i * 15}px`,
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`,
            background: `radial-gradient(circle, 
              ${colors.primary} 0%, 
              ${colors.secondary} 50%, 
              transparent 70%)`,
          }}
          animate={{
            y: isInView ? [0, -20 - i * 5, 0] : 0,
            scale: isInView ? [1, 1.1 + i * 0.05, 1] : 1,
            opacity: isInView ? [0.1, 0.3 - i * 0.02, 0.1] : 0,
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}

      {/* Wave Pattern */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: `linear-gradient(${scrollYProgress.get() * 360}deg, 
            ${colors.primary} 0%, 
            ${colors.secondary} 25%, 
            ${colors.accent} 50%, 
            ${colors.secondary} 75%, 
            ${colors.primary} 100%)`,
        }}
        animate={{
          opacity: isInView ? [0.05, 0.2, 0.05] : 0,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Mesh Gradient */}
      <motion.div
        className="absolute inset-0 opacity-8"
        style={{
          background: `
            radial-gradient(at 30% 20%, ${colors.primary} 0px, transparent 50%),
            radial-gradient(at 70% 80%, ${colors.secondary} 0px, transparent 50%),
            radial-gradient(at 20% 70%, ${colors.accent} 0px, transparent 50%),
            radial-gradient(at 80% 30%, ${colors.primary} 0px, transparent 50%)
          `,
        }}
        animate={{
          opacity: isInView ? [0.03, 0.12, 0.03] : 0,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Grid */}
      <motion.div
        className="absolute inset-0 opacity-6"
        style={{
          backgroundImage: `
            linear-gradient(${colors.primary} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.secondary} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        animate={{
          opacity: isInView ? [0.05, 0.2, 0.05] : 0,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Mouse Following Effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            ${colors.primary} 0%, 
            ${colors.secondary} 40%, 
            transparent 70%)`,
        }}
        animate={{
          scale: isInView ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default SectionAnimatedBackground;

