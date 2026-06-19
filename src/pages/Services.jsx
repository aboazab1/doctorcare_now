import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Activity, 
  Users, 
  Baby, 
  Heart, 
  Clock,
  Shield,
  Phone,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Pill,
  Syringe,
  Zap,
  Thermometer,
  Microscope
} from 'lucide-react';

const Services = () => {
  const { t, i18n } = useTranslation();

  // Function to generate WhatsApp message for each service
  const generateWhatsAppMessage = (service) => {
    const currentLanguage = i18n.language;
    console.log('Current language:', currentLanguage);
    console.log('Service data:', service);
    
    if (currentLanguage === 'ar') {
      return `مرحباً! أود الاستفسار عن خدمة ${service.title}

الأسئلة المتوقعة:
• ما هي أسعار هذه الخدمة؟
• ما هي مدة الجلسة؟
• هل يمكن تحديد موعد مناسب؟
• ما هي المتطلبات المسبقة؟
• هل الخدمة متاحة في منطقتي؟

شكراً لكم!`;
    } else {
      return `Hello! I would like to inquire about ${service.titleEn || service.title}

Expected Questions:
• What are the prices for this service?
• What is the session duration?
• Can I schedule a convenient appointment?
• What are the prerequisites?
• Is the service available in my area?

Thank you!`;
    }
  };

  // Function to handle WhatsApp click
  const handleWhatsAppClick = (service) => {
    console.log('WhatsApp button clicked for service:', service.title);
    const message = generateWhatsAppMessage(service);
    console.log('Generated message:', message);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/966541115717?text=${encodedMessage}`;
    console.log('Opening WhatsApp URL:', whatsappUrl);
    
    // Try multiple methods to open WhatsApp
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Fallback: try direct window.location
      window.location.href = whatsappUrl;
    }
  };

  // Mouse tracking for interactive background (removed global mouse tracking)

  // Physical Therapy Services
  const physicalTherapyServices = [
    {
      id: 'single-session',
      title: t('singleSessionPackage'),
      titleEn: 'Single Session Package',
      description: t('singleSessionDesc'),
      descriptionEn: 'Professional physical therapy session with comprehensive assessment and treatment',
      icon: Activity,
      color: 'blue',
      features: [
        t('comprehensiveAssessment'),
        t('personalizedTreatment'),
        t('exerciseGuidance'),
        t('progressTracking')
      ]
    },
    {
      id: 'three-sessions',
      title: t('threeSessionPackage'),
      titleEn: 'Three Session Package',
      description: t('threeSessionDesc'),
      descriptionEn: 'Comprehensive 3-session physical therapy program for optimal recovery',
      icon: Activity,
      color: 'green',
      features: [
        t('initialAssessment'),
        t('treatmentPlan'),
        t('followUpSessions'),
        t('homeExerciseProgram')
      ]
    },
    {
      id: 'six-sessions',
      title: t('sixSessionPackage'),
      titleEn: 'Six Session Package',
      description: t('sixSessionDesc'),
      descriptionEn: 'Extended 6-session program for comprehensive rehabilitation and recovery',
      icon: Activity,
      color: 'purple',
      features: [
        t('detailedAssessment'),
        t('progressiveTreatment'),
        t('regularMonitoring'),
        t('comprehensiveRecovery')
      ]
    },
    {
      id: 'ten-sessions',
      title: t('tenSessionPackage'),
      titleEn: 'Ten Session Package',
      description: t('tenSessionDesc'),
      descriptionEn: 'Complete 10-session intensive program for full rehabilitation and wellness',
      icon: Activity,
      color: 'orange',
      features: [
        t('comprehensiveEvaluation'),
        t('intensiveTreatment'),
        t('continuousMonitoring'),
        t('completeRehabilitation')
      ]
    }
  ];

  // Health Companionship Services
  const healthCompanionshipServices = [
    {
      id: 'maternity-companion',
      title: t('maternityCompanion'),
      titleEn: 'Maternity and Newborn Health Companion',
      description: t('maternityCompanionDesc'),
      descriptionEn: 'Specialized health companion for mothers and newborns with expert care',
      icon: Baby,
      color: 'pink',
      features: [
        t('newbornCare'),
        t('maternalSupport'),
        t('feedingGuidance'),
        t('healthMonitoring')
      ]
    },
    {
      id: 'post-surgery-companion',
      title: t('postSurgeryCompanion'),
      titleEn: 'Post-Surgical Health Companion',
      description: t('postSurgeryCompanionDesc'),
      descriptionEn: 'Professional health companion for patients recovering from surgical procedures',
      icon: Heart,
      color: 'red',
      features: [
        t('woundCare'),
        t('medicationManagement'),
        t('mobilitySupport'),
        t('recoveryMonitoring')
      ]
    },
    {
      id: 'elderly-companion',
      title: t('elderlyCompanion'),
      titleEn: 'Elderly Health Companion',
      description: t('elderlyCompanionDesc'),
      descriptionEn: 'Compassionate health companion for elderly patients with specialized care',
      icon: Users,
      color: 'teal',
      features: [
        t('dailyAssistance'),
        t('medicationSupport'),
        t('mobilityAid'),
        t('companionship')
      ]
    }
  ];

  // Color mapping
  const colorMap = {
    blue: {
      bg: 'from-blue-50 to-blue-100',
      icon: 'text-blue-500',
      iconBg: 'bg-blue-500/10',
      border: 'border-blue-200',
      hover: 'hover:border-blue-300'
    },
    green: {
      bg: 'from-green-50 to-green-100',
      icon: 'text-green-500',
      iconBg: 'bg-green-500/10',
      border: 'border-green-200',
      hover: 'hover:border-green-300'
    },
    purple: {
      bg: 'from-purple-50 to-purple-100',
      icon: 'text-purple-500',
      iconBg: 'bg-purple-500/10',
      border: 'border-purple-200',
      hover: 'hover:border-purple-300'
    },
    orange: {
      bg: 'from-orange-50 to-orange-100',
      icon: 'text-orange-500',
      iconBg: 'bg-orange-500/10',
      border: 'border-orange-200',
      hover: 'hover:border-orange-300'
    },
    pink: {
      bg: 'from-pink-50 to-pink-100',
      icon: 'text-pink-500',
      iconBg: 'bg-pink-500/10',
      border: 'border-pink-200',
      hover: 'hover:border-pink-300'
    },
    red: {
      bg: 'from-red-50 to-red-100',
      icon: 'text-red-500',
      iconBg: 'bg-red-500/10',
      border: 'border-red-200',
      hover: 'hover:border-red-300'
    },
    teal: {
      bg: 'from-teal-50 to-teal-100',
      icon: 'text-teal-500',
      iconBg: 'bg-teal-500/10',
      border: 'border-teal-200',
      hover: 'hover:border-teal-300'
    }
  };

  // Function to get button gradient colors based on card color
  const getButtonGradient = (color) => {
    const gradients = {
      blue: '#3B82F6, #1D4ED8',
      green: '#10B981, #059669',
      purple: '#8B5CF6, #7C3AED',
      orange: '#F59E0B, #D97706',
      pink: '#EC4899, #DB2777',
      red: '#EF4444, #DC2626',
      teal: '#14B8A6, #0D9488'
    };
    return gradients[color] || gradients.blue;
  };

  const ServiceCard = ({ service, index }) => {
    const colors = colorMap[service.color];
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.15,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          y: -10,
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        className={`bg-white rounded-2xl shadow-xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 overflow-hidden group relative pointer-events-auto`}
      >
        {/* Background Glow Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
        />
        
        {/* Floating Medical Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
                x: [0, Math.sin(i) * 8, 0],
                opacity: [0, 0.2, 0],
                scale: [0, 0.8, 0]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className={`absolute w-3 h-3 ${colors.icon.replace('text-', 'text-').replace('-500', '-300')} rounded-full`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
            />
          ))}
        </div>
        
        <div className={`p-8 bg-gradient-to-br ${colors.bg} relative z-10 pointer-events-auto`}>
          <div className="flex items-start justify-between mb-6">
            <motion.div 
              className={`w-20 h-20 ${colors.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <service.icon size={40} className={colors.icon} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ArrowRight size={24} className={colors.icon} />
            </motion.div>
          </div>
          
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
          >
            {service.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 mb-6 leading-relaxed"
          >
            {service.description}
          </motion.p>
          
          <div className="space-y-3">
            {service.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 rtl:space-x-reverse group/feature"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle size={18} className={colors.icon} />
                </motion.div>
                <span className="text-sm text-gray-700 group-hover/feature:text-gray-900 transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="p-6 bg-white relative z-50 pointer-events-auto">
          <motion.button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleWhatsAppClick(service);
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleWhatsAppClick(service);
            }}
            onMouseEnter={() => console.log('Mouse entered button')}
            onMouseLeave={() => console.log('Mouse left button')}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`w-full flex items-center justify-center space-x-3 rtl:space-x-reverse relative overflow-hidden group/btn rounded-xl font-semibold text-lg py-4 px-6 transition-all duration-300 ${colors.iconBg} ${colors.icon} hover:shadow-lg pointer-events-auto hover:opacity-90 active:opacity-75`}
            style={{
              background: `linear-gradient(135deg, ${getButtonGradient(service.color)})`,
              color: 'white',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              zIndex: 50
            }}
          >
            {/* Animated Background Shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Pulsing Ring Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-white/30 pointer-events-none"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Icon with Animation */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 pointer-events-none"
            >
              <Phone size={22} />
            </motion.div>
            
            {/* Text with Better Visibility */}
            <motion.span 
              className="relative z-10 font-bold pointer-events-none"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {t('bookNow')}
            </motion.span>
            
            {/* WhatsApp Icon */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 pointer-events-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <SEO 
        title="ممرضة للبيت في الرياض | خدمات تمريض منزلي الرياض | عناية طبيب"
        description="ممرضة للبيت في الرياض - خدمات تمريض منزلي احترافية في الرياض. نقدم ممرضات معتمدات للرعاية المنزلية، رعاية كبار السن، تمريض الأطفال، علاج طبيعي، وخدمات طبية منزلية متخصصة في الرياض. تواصل معنا الآن."
        keywords="ممرضة للبيت في الرياض، ممرضة منزلية الرياض، تمريض منزلي الرياض، ممرضة للبيت، ممرضة في الرياض، رعاية منزلية الرياض، تمريض منزلي، ممرضة معتمدة الرياض، رعاية كبار السن الرياض، تمريض الأطفال الرياض، خدمات طبية منزلية الرياض، ممرضة 24 ساعة الرياض، علاج طبيعي الرياض، مرافقة صحية الرياض"
      />
      
      {/* Hero Section */}
        <motion.section 
          className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-100/30 relative overflow-hidden"
        >
        {/* Interactive Medical Background */}
        <div className="absolute inset-0">
          {/* Large Medical Icons */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
              className="absolute top-16 left-20 w-24 h-24 text-primary/15"
          >
            <Stethoscope size={96} />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -8, 0],
              opacity: [0.08, 0.25, 0.08],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
              className="absolute top-32 right-24 w-20 h-20 text-blue-400/15"
          >
            <Pill size={80} />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 12, 0],
              opacity: [0.12, 0.28, 0.12],
              scale: [1, 1.08, 1]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
              className="absolute bottom-24 left-32 w-16 h-16 text-secondary/15"
          >
            <Syringe size={64} />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 18, 0],
              rotate: [0, -6, 0],
              opacity: [0.09, 0.22, 0.09],
              scale: [1, 1.12, 1]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
              className="absolute bottom-32 right-16 w-18 h-18 text-primary/12"
          >
            <Zap size={72} />
          </motion.div>
          
          {/* Large Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.sin(i) * 40, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 5 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
                className="absolute w-4 h-4 bg-primary/30 rounded-full"
                style={{
                  left: `${8 + i * 6}%`,
                  top: `${20 + i * 5}%`,
                }}
            />
          ))}
          
          {/* Large Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
              className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-primary/15 to-blue-400/15 rounded-full blur-2xl"
          />
          
          <motion.div
            animate={{
              scale: [2, 1, 2],
              opacity: [0.08, 0.25, 0.08]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
              className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-primary/15 rounded-full blur-xl"
          />
          
          {/* Large Pulse Rings */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              animate={{
                scale: [0, 4, 0],
                opacity: [0.2, 0, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeOut"
              }}
                className="absolute border-2 border-primary/20 rounded-full"
                style={{
                  width: '80px',
                  height: '80px',
                  left: `${15 + i * 12}%`,
                  top: `${25 + i * 8}%`,
                }}
            />
          ))}
          
          {/* Interactive Wave Pattern */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.03, 0.12, 0.03]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
              className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-primary/8 to-transparent"
              style={{
                clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
              }}
          />
          
          {/* Static Glow Effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/5 via-blue-400/3 to-transparent rounded-full blur-3xl pointer-events-none"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              {t('ourSpecializedServices')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {t('servicesSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Physical Therapy Services */}
      <section className="section-padding relative overflow-hidden">
        {/* Beautiful Background for Physical Therapy */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/50">
          {/* Floating Medical Elements */}
          <div className="absolute inset-0">
            {/* Large Medical Icons */}
                  <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-16 w-16 h-16 text-blue-400/20"
            >
              <Activity size={64} />
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
                opacity: [0.08, 0.15, 0.08],
                scale: [1, 1.08, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-32 right-20 w-12 h-12 text-blue-500/20"
            >
              <Stethoscope size={48} />
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 4, 0],
                opacity: [0.12, 0.18, 0.12],
                scale: [1, 1.06, 1]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
              className="absolute bottom-32 left-24 w-14 h-14 text-blue-600/20"
            >
              <Heart size={56} />
                  </motion.div>
            
            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 15, 0],
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-blue-300/30 rounded-full"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${25 + i * 8}%`,
                }}
              />
            ))}
            
            {/* Gradient Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-blue-300/20 rounded-full blur-2xl"
            />
            
            <motion.div
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.08, 0.18, 0.08]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
              className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-r from-blue-300/20 to-blue-400/20 rounded-full blur-xl"
            />
            
            {/* Subtle Wave Pattern */}
            <motion.div
              animate={{
                x: ['-100%', '100%'],
                opacity: [0.02, 0.08, 0.02]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-transparent via-blue-300/10 to-transparent"
              style={{
                clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
              }}
            />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('physicalTherapyServices')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('physicalTherapyDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {physicalTherapyServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Health Companionship Services */}
      <section className="section-padding relative overflow-hidden">
        {/* Beautiful Background for Health Companionship */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100/50">
          {/* Floating Medical Elements */}
          <div className="absolute inset-0">
            {/* Large Medical Icons */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-16 w-16 h-16 text-green-400/20"
            >
              <Users size={64} />
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
                opacity: [0.08, 0.15, 0.08],
                scale: [1, 1.08, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-32 right-20 w-12 h-12 text-green-500/20"
            >
              <Heart size={48} />
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 4, 0],
                opacity: [0.12, 0.18, 0.12],
                scale: [1, 1.06, 1]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
              className="absolute bottom-32 left-24 w-14 h-14 text-green-600/20"
            >
              <Baby size={56} />
            </motion.div>
            
            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 15, 0],
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-green-300/30 rounded-full"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${25 + i * 8}%`,
                }}
              />
            ))}
            
            {/* Gradient Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-green-200/20 to-green-300/20 rounded-full blur-2xl"
            />
            
            <motion.div
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.08, 0.18, 0.08]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
              className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-r from-green-300/20 to-green-400/20 rounded-full blur-xl"
            />
            
            {/* Subtle Wave Pattern */}
            <motion.div
              animate={{
                x: ['-100%', '100%'],
                opacity: [0.02, 0.08, 0.02]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-transparent via-green-300/10 to-transparent"
              style={{
                clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
              }}
            />
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('healthCompanionshipServices')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('healthCompanionshipDesc')}
                </p>
              </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthCompanionshipServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg relative overflow-hidden">
        {/* Interactive Medical Visual Effects */}
        <div className="absolute inset-0">
          {/* Medical Icons Floating */}
          {[...Array(8)].map((_, i) => {
            const icons = ['🩺', '💊', '🩹', '💉', '🫀', '🧠', '🦴', '👁️'];
            return (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  rotate: [0, 360, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
                className="absolute text-4xl"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + i * 8}%`,
                }}
              >
                {icons[i]}
              </motion.div>
            );
          })}
          
          {/* Floating Medical Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.cos(i) * 25, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${15 + i * 6}%`,
                top: `${30 + i * 5}%`,
              }}
            />
          ))}
          
          {/* Pulsing Medical Rings */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              animate={{
                scale: [0, 3, 0],
                opacity: [0.4, 0, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut"
              }}
              className="absolute border border-white/30 rounded-full"
              style={{
                width: '100px',
                height: '100px',
                left: `${20 + i * 15}%`,
                top: `${40 + i * 10}%`,
              }}
            />
          ))}
          
          {/* Gradient Medical Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-white/10 to-blue-200/20 rounded-full blur-3xl"
          />
          
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-100/15 to-white/20 rounded-full blur-2xl"
          />
          
          {/* Medical Wave Pattern */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
            }}
          />
          
          <motion.div
            animate={{
              x: ['100%', '-100%'],
              opacity: [0.08, 0.25, 0.08]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: 5
            }}
            className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-r from-transparent via-white/15 to-transparent"
            style={{
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
            }}
          />
          
          {/* Interactive Glow Effect */}
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-200/10"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+966541115717"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Phone size={20} />
                <span>{t('callNow')}</span>
              </motion.a>
              <motion.a
                href="https://wa.me/966541115717"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Shield size={20} />
                <span>{t('whatsappButton')}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;