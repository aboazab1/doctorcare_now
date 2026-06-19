import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Heart, Users } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();
  // Version number - increment this when you update the hero image to bust cache
  const IMAGE_VERSION = '2';

  const features = [
    { icon: Shield, text: t('certifiedTeam') },
    { icon: Heart, text: t('highQuality') },
    { icon: Users, text: t('service247') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-100/20">
        {/* Subtle Medical Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-300/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary/5 rounded-full blur-2xl"></div>
        </div>
        
        {/* Elegant Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233498DB' fill-opacity='0.03'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>
      </div>

      {/* Animated Waves */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave 1 */}
        <motion.div
          animate={{
            x: ['-100%', '100%'],
            y: ['0%', '-20%', '0%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 w-full h-32 opacity-10"
        >
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient1)"
            />
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3498DB" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#2B7BC7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3498DB" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Wave 2 */}
        <motion.div
          animate={{
            x: ['100%', '-100%'],
            y: ['0%', '20%', '0%']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute top-1/2 left-0 w-full h-24 opacity-8"
        >
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,80 C200,40 400,100 600,80 C800,60 1000,100 1200,80 L1200,120 L0,120 Z"
              fill="url(#waveGradient2)"
            />
            <defs>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5A5A5A" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#3498DB" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#5A5A5A" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Wave 3 */}
        <motion.div
          animate={{
            x: ['-100%', '100%'],
            y: ['0%', '-15%', '0%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 10
          }}
          className="absolute bottom-1/4 left-0 w-full h-20 opacity-6"
        >
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,100 C150,60 350,120 600,100 C850,80 1050,120 1200,100 L1200,120 L0,120 Z"
              fill="url(#waveGradient3)"
            />
            <defs>
              <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3498DB" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#2B7BC7" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3498DB" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Elegant Floating Elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-24 left-16 w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/10"
        >
          <Heart size={28} className="text-primary/40" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 12, 0],
            rotate: [0, -3, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-48 right-24 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/10"
        >
          <Shield size={24} className="text-blue-500/40" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -8, 0],
            x: [0, 8, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-40 left-1/3 w-18 h-18 bg-gradient-to-br from-secondary/10 to-gray-400/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/10"
        >
          <Users size={26} className="text-secondary/40" />
        </motion.div>

        {/* Additional Elegant Elements */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -2, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-1/3 w-12 h-12 bg-gradient-to-br from-blue-300/8 to-primary/8 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, -6, 0]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-24 right-1/4 w-14 h-14 bg-gradient-to-br from-blue-400/8 to-blue-500/8 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <div className="w-3 h-3 bg-blue-500/30 rounded-full"></div>
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {t('heroTitle')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {t('heroSubtitle')}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-2 rtl:space-x-reverse bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                >
                  <feature.icon size={18} className="text-primary" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{t('getStarted')}</span>
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.a
                href="tel:+966541115717"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Phone size={18} />
                <span>{t('callNow')}</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Hero Image */}
              <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src={`/assets/hero-image.png?v=${IMAGE_VERSION}`}
                  alt="طبيب الرعاية - الرعاية الطبية المنزلية" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Elegant Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/15 to-blue-400/15 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-lg"
              >
                <Shield size={36} className="text-primary/60" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [8, -8, 8],
                  rotate: [0, -3, 0],
                  scale: [1, 0.95, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-500/15 to-primary/15 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20 shadow-lg"
              >
                <Users size={28} className="text-blue-500/60" />
              </motion.div>

              {/* Additional Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-3 h-3 bg-primary/40 rounded-full"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 6, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 right-12 w-2 h-2 bg-blue-500/40 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
