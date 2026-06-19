import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send
} from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Phone,
      title: t('callUs'),
      description: t('callUsDesc'),
      value: '+966 54 111 5717',
      href: 'tel:+966541115717',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Mail,
      title: t('emailUs'),
      description: t('emailUsDesc'),
      value: 'Info@doctorcaresa.com',
      href: 'mailto:Info@doctorcaresa.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MessageCircle,
      title: t('whatsapp'),
      description: t('whatsappDesc'),
      value: '+966 54 111 5717',
      href: 'https://wa.me/966541115717',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const workingHours = [
    { day: t('saturdayThursday'), hours: t('morningHours') },
    { day: t('friday'), hours: t('fridayHours') },
    { day: t('emergency'), hours: t('emergencyHours') }
  ];

  const faqs = [
    {
      question: t('responseTime'),
      answer: t('responseTimeAnswer')
    },
    {
      question: t('serviceCoverage'),
      answer: t('serviceCoverageAnswer')
    },
    {
      question: t('consultationCost'),
      answer: t('consultationCostAnswer')
    },
    {
      question: t('advanceBooking'),
      answer: t('advanceBookingAnswer')
    }
  ];

  return (
    <>
      <SEO 
        title="اتصل بنا"
        description="تواصل مع طبيب الرعاية للحصول على أفضل الخدمات الطبية المنزلية. متاحون 24/7 لخدمتك."
        keywords="اتصل بنا، تواصل، طبيب الرعاية، خدمة عملاء، استشارة طبية"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-100/30 relative overflow-hidden">
        {/* Enhanced Interactive Waves Background */}
        <div className="absolute inset-0">
          {/* Logo-colored Shadow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5"></div>
          
          {/* Wave 1 - Primary Blue */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
              clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
            }}
          />
          
          {/* Wave 2 - Secondary Blue */}
          <motion.div
            animate={{
              x: ['100%', '-100%'],
              opacity: [0.12, 0.3, 0.12]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 3
            }}
            className="absolute top-20 left-0 w-full h-32 bg-gradient-to-r from-transparent via-blue-300/18 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.15) 50%, transparent 100%)',
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
            }}
          />
          
          {/* Wave 3 - Light Blue */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.08, 0.25, 0.08]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: 6
            }}
            className="absolute top-40 left-0 w-full h-28 bg-gradient-to-r from-transparent via-blue-200/15 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.12) 50%, transparent 100%)',
              clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
            }}
          />
          
          {/* Wave 4 - Subtle Blue */}
          <motion.div
            animate={{
              x: ['100%', '-100%'],
              opacity: [0.06, 0.2, 0.06]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 9
            }}
            className="absolute bottom-20 left-0 w-full h-24 bg-gradient-to-r from-transparent via-blue-100/12 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(191, 219, 254, 0.1) 50%, transparent 100%)',
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
            }}
          />
          
          {/* Gentle Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -25, 0],
                x: [0, Math.sin(i) * 15, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              className="absolute w-3 h-3 bg-blue-400/40 rounded-full"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + i * 6}%`,
              }}
            />
          ))}
          
          {/* Soft Ripple Effects */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              animate={{
                scale: [0, 2.5, 0],
                opacity: [0.3, 0, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut"
              }}
              className="absolute border-2 border-blue-300/30 rounded-full"
              style={{
                width: '120px',
                height: '120px',
                left: `${25 + i * 15}%`,
                top: `${35 + i * 12}%`,
              }}
            />
          ))}
          
          {/* Subtle Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-300/15 to-blue-400/15 rounded-full blur-3xl"
          />
          
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.06, 0.18, 0.06]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-gradient-to-r from-blue-400/15 to-blue-500/15 rounded-full blur-2xl"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('contactSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-100/30 relative overflow-hidden">
        {/* Enhanced Interactive Waves Background */}
        <div className="absolute inset-0">
          {/* Logo-colored Shadow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5"></div>
          
          {/* Wave 1 - Primary Blue */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.12, 0.3, 0.12]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.15) 50%, transparent 100%)',
              clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
            }}
          />
          
          {/* Wave 2 - Secondary Blue */}
          <motion.div
            animate={{
              x: ['100%', '-100%'],
              opacity: [0.08, 0.22, 0.08]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
              delay: 4
            }}
            className="absolute top-16 left-0 w-full h-28 bg-gradient-to-r from-transparent via-blue-300/12 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.12) 50%, transparent 100%)',
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
            }}
          />
          
          {/* Wave 3 - Light Blue */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.06, 0.18, 0.06]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: 8
            }}
            className="absolute bottom-16 left-0 w-full h-24 bg-gradient-to-r from-transparent via-blue-200/10 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.1) 50%, transparent 100%)',
              clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
            }}
          />
          
          {/* Gentle Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.sin(i) * 12, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 0.8, 0]
              }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-blue-400/35 rounded-full"
              style={{
                left: `${15 + i * 10}%`,
                top: `${25 + i * 8}%`,
              }}
            />
          ))}
          
          {/* Soft Ripple Effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              animate={{
                scale: [0, 2, 0],
                opacity: [0.25, 0, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut"
              }}
              className="absolute border border-blue-300/25 rounded-full"
              style={{
                width: '100px',
                height: '100px',
                left: `${30 + i * 20}%`,
                top: `${40 + i * 15}%`,
              }}
            />
          ))}
          
          {/* Subtle Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.04, 0.12, 0.04]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-300/12 to-blue-400/12 rounded-full blur-2xl"
          />
          
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-gradient-to-r from-blue-400/12 to-blue-500/12 rounded-full blur-xl"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contactMethods')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contactMethodsDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${method.bgColor} rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon size={32} className={method.color} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {method.description}
                </p>
                <p className={`font-semibold ${method.color}`}>
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>

      {/* Working Hours */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-100/30 relative overflow-hidden">
        {/* Enhanced Interactive Waves Background */}
        <div className="absolute inset-0">
          {/* Logo-colored Shadow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5"></div>
          
          {/* Wave 1 - Primary Blue */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.1, 0.28, 0.1]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-full h-30 bg-gradient-to-r from-transparent via-blue-400/14 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.14) 50%, transparent 100%)',
              clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
            }}
          />
          
          {/* Wave 2 - Secondary Blue */}
          <motion.div
            animate={{
              x: ['100%', '-100%'],
              opacity: [0.07, 0.2, 0.07]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 5
            }}
            className="absolute top-20 left-0 w-full h-26 bg-gradient-to-r from-transparent via-blue-300/11 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.11) 50%, transparent 100%)',
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
            }}
          />
          
          {/* Wave 3 - Light Blue */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.05, 0.16, 0.05]
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "linear",
              delay: 10
            }}
            className="absolute bottom-20 left-0 w-full h-22 bg-gradient-to-r from-transparent via-blue-200/9 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.09) 50%, transparent 100%)',
              clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
            }}
          />
          
          {/* Gentle Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -18, 0],
                x: [0, Math.sin(i) * 10, 0],
                opacity: [0, 0.45, 0],
                scale: [0, 0.7, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
          
          {/* Soft Ripple Effects */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              animate={{
                scale: [0, 1.8, 0],
                opacity: [0.2, 0, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2.5,
                ease: "easeOut"
              }}
              className="absolute border border-blue-300/20 rounded-full"
              style={{
                width: '80px',
                height: '80px',
                left: `${35 + i * 30}%`,
                top: `${45 + i * 20}%`,
              }}
            />
          ))}
          
          {/* Subtle Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.03, 0.1, 0.03]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-28 h-28 bg-gradient-to-r from-blue-300/10 to-blue-400/10 rounded-full blur-xl"
          />
          
          <motion.div
            animate={{
              scale: [1.05, 1, 1.05],
              opacity: [0.04, 0.12, 0.04]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-full blur-lg"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('workingHours')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('workingHoursDesc')}
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock size={32} className="text-primary" />
                </div>
              </div>
              
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="font-semibold text-gray-900">
                      {schedule.day}
                    </span>
                    <span className="text-primary font-medium">
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('faq')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('faqDesc')}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
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
              {t('medicalEmergency')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('medicalEmergencyDesc')}
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
                <Send size={20} />
                <span>{t('whatsappButton')}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;


