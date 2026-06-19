import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Baby, Wind, Activity, Stethoscope, Dumbbell, Apple, Zap, Brain, Microscope, UserCheck } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const { t } = useTranslation();
  
  const iconMap = {
    heart: Heart,
    elderly: Users,
    stroke: Brain,
    pediatric: Baby,
    respiratory: Wind,
    diabetes: Activity,
    physiotherapy: Dumbbell,
    maternity: Baby,
    nutrition: Apple,
    wound: Zap,
    psychological: Brain,
    lab: Microscope,
    companion: UserCheck,
  };

  const IconComponent = iconMap[service.icon] || Stethoscope;

  // Color mapping for each service
  const colorMap = {
    heart: {
      bg: 'from-blue-50 to-blue-100',
      icon: 'text-blue-500',
      iconBg: 'bg-blue-500/10',
      price: 'text-blue-500',
      border: 'border-blue-200',
      hover: 'hover:border-blue-300'
    },
    elderly: {
      bg: 'from-green-50 to-green-100',
      icon: 'text-green-500',
      iconBg: 'bg-green-500/10',
      price: 'text-green-500',
      border: 'border-green-200',
      hover: 'hover:border-green-300'
    },
    stroke: {
      bg: 'from-purple-50 to-purple-100',
      icon: 'text-purple-500',
      iconBg: 'bg-purple-500/10',
      price: 'text-purple-500',
      border: 'border-purple-200',
      hover: 'hover:border-purple-300'
    },
    pediatric: {
      bg: 'from-pink-50 to-pink-100',
      icon: 'text-pink-500',
      iconBg: 'bg-pink-500/10',
      price: 'text-pink-500',
      border: 'border-pink-200',
      hover: 'hover:border-pink-300'
    },
    respiratory: {
      bg: 'from-cyan-50 to-cyan-100',
      icon: 'text-cyan-500',
      iconBg: 'bg-cyan-500/10',
      price: 'text-cyan-500',
      border: 'border-cyan-200',
      hover: 'hover:border-cyan-300'
    },
    diabetes: {
      bg: 'from-orange-50 to-orange-100',
      icon: 'text-orange-500',
      iconBg: 'bg-orange-500/10',
      price: 'text-orange-500',
      border: 'border-orange-200',
      hover: 'hover:border-orange-300'
    },
    physiotherapy: {
      bg: 'from-teal-50 to-teal-100',
      icon: 'text-teal-500',
      iconBg: 'bg-teal-500/10',
      price: 'text-teal-500',
      border: 'border-teal-200',
      hover: 'hover:border-teal-300'
    },
    maternity: {
      bg: 'from-rose-50 to-rose-100',
      icon: 'text-rose-500',
      iconBg: 'bg-rose-500/10',
      price: 'text-rose-500',
      border: 'border-rose-200',
      hover: 'hover:border-rose-300'
    },
    nutrition: {
      bg: 'from-lime-50 to-lime-100',
      icon: 'text-lime-500',
      iconBg: 'bg-lime-500/10',
      price: 'text-lime-500',
      border: 'border-lime-200',
      hover: 'hover:border-lime-300'
    },
    wound: {
      bg: 'from-indigo-50 to-indigo-100',
      icon: 'text-indigo-500',
      iconBg: 'bg-indigo-500/10',
      price: 'text-indigo-500',
      border: 'border-indigo-200',
      hover: 'hover:border-indigo-300'
    },
    psychological: {
      bg: 'from-violet-50 to-violet-100',
      icon: 'text-violet-500',
      iconBg: 'bg-violet-500/10',
      price: 'text-violet-500',
      border: 'border-violet-200',
      hover: 'hover:border-violet-300'
    },
    lab: {
      bg: 'from-emerald-50 to-emerald-100',
      icon: 'text-emerald-500',
      iconBg: 'bg-emerald-500/10',
      price: 'text-emerald-500',
      border: 'border-emerald-200',
      hover: 'hover:border-emerald-300'
    },
    companion: {
      bg: 'from-blue-50 to-blue-100',
      icon: 'text-blue-500',
      iconBg: 'bg-blue-500/10',
      price: 'text-blue-500',
      border: 'border-blue-200',
      hover: 'hover:border-blue-300'
    }
  };

  const colors = colorMap[service.icon] || colorMap.heart;

  return (
    <Link to={service.link || '#'}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          boxShadow: `0 20px 40px ${colors.icon.replace('text-', '').replace('-500', '-500')}20`
        }}
        className={`card group cursor-pointer relative overflow-hidden bg-gradient-to-br ${colors.bg} border ${colors.border} ${colors.hover} transition-all duration-300`}
      >
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-blue-400/5"
      />
      
      {/* Floating Medical Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
          className="absolute top-4 right-4 text-primary/20"
        >
          <IconComponent size={16} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            opacity: [0, 0.2, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3 + 1
          }}
          className="absolute bottom-6 left-6 text-blue-500/15"
        >
          <IconComponent size={12} />
        </motion.div>
      </div>
      <div className="flex items-start space-x-4 rtl:space-x-reverse mb-4 relative z-10">
        <motion.div 
          whileHover={{ 
            scale: 1.1,
            rotate: 5
          }}
          className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center group-hover:${colors.icon.replace('text-', 'bg-').replace('-500', '-500')} group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl`}
        >
          <IconComponent size={24} className={`${colors.icon} group-hover:text-white`} />
        </motion.div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold text-gray-900 mb-2 group-hover:${colors.icon} transition-colors`}>
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-between relative z-10">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500 bg-gray-50/50 px-3 py-1 rounded-full"
        >
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Shield size={16} className={colors.icon} />
          </motion.div>
          <span className="font-medium">{t('certified')}</span>
        </motion.div>
        <motion.div
          whileHover={{ x: 5, scale: 1.05 }}
          className={`flex items-center space-x-1 rtl:space-x-reverse ${colors.icon} group-hover:${colors.icon.replace('-500', '-600')} transition-colors ${colors.iconBg} px-3 py-1 rounded-full group-hover:${colors.icon.replace('text-', 'bg-').replace('-500', '-500')}/20`}
        >
          <span className="text-sm font-medium">{t('learnMore')}</span>
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </motion.div>
      </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
