import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { ChevronDown, Search, Phone, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: t('faqGeneral'),
      questions: [
        {
          question: t('faqServicesQuestion'),
          answer: t('faqServicesAnswer')
        },
        {
          question: t('faqCoverageQuestion'),
          answer: t('faqCoverageAnswer')
        },
        {
          question: t('faqResponseQuestion'),
          answer: t('faqResponseAnswer')
        },
        {
          question: t('faqCostQuestion'),
          answer: t('faqCostAnswer')
        }
      ]
    },
    {
      category: t('faqBooking'),
      questions: [
        {
          question: t('faqBookingQuestion'),
          answer: t('faqBookingAnswer')
        },
        {
          question: t('faqAdvanceBookingQuestion'),
          answer: t('faqAdvanceBookingAnswer')
        },
        {
          question: t('faqCancelQuestion'),
          answer: t('faqCancelAnswer')
        },
        {
          question: t('faqHoursQuestion'),
          answer: t('faqHoursAnswer')
        }
      ]
    },
    {
      category: t('faqMedical'),
      questions: [
        {
          question: t('faqCertifiedQuestion'),
          answer: t('faqCertifiedAnswer')
        },
        {
          question: t('faqSpecialtiesQuestion'),
          answer: t('faqSpecialtiesAnswer')
        },
        {
          question: t('faqChooseDoctorQuestion'),
          answer: t('faqChooseDoctorAnswer')
        },
        {
          question: t('faqArabicQuestion'),
          answer: t('faqArabicAnswer')
        }
      ]
    },
    {
      category: t('faqPayment'),
      questions: [
        {
          question: t('faqPaymentMethodsQuestion'),
          answer: t('faqPaymentMethodsAnswer')
        },
        {
          question: t('faqInsuranceQuestion'),
          answer: t('faqInsuranceAnswer')
        },
        {
          question: t('faqExtraFeesQuestion'),
          answer: t('faqExtraFeesAnswer')
        },
        {
          question: t('faqInstallmentsQuestion'),
          answer: t('faqInstallmentsAnswer')
        }
      ]
    },
    {
      category: t('faqEmergency'),
      questions: [
        {
          question: t('faqEmergencyActionQuestion'),
          answer: t('faqEmergencyActionAnswer')
        },
        {
          question: t('faqEmergencyTypesQuestion'),
          answer: t('faqEmergencyTypesAnswer')
        },
        {
          question: t('faqHospitalQuestion'),
          answer: t('faqHospitalAnswer')
        },
        {
          question: t('faqTransferQuestion'),
          answer: t('faqTransferAnswer')
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO 
        title={t('faqTitle')}
        description={t('faqSubtitle')}
        keywords="أسئلة شائعة، FAQ، استفسارات، طبيب الرعاية، خدمات طبية"
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
              {t('faqTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('faqSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-100/30 relative overflow-hidden">
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute right-4 rtl:right-4 rtl:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t('faqSearchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {filteredFaqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: questionIndex * 0.05 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className="w-full p-6 text-right rtl:text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 flex-1">
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: openIndex === globalIndex ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={20} className="text-gray-500" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {openIndex === globalIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <p className="text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {searchTerm && filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 mb-4">
                {t('faqNoResults')} "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-primary hover:text-blue-600 transition-colors"
              >
                {t('faqClearSearch')}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
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
              {t('faqNotFound')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('faqContactDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+966541115717"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Phone size={20} />
                <span>{t('faqCallUs')}</span>
              </motion.a>
              <motion.a
                href="https://wa.me/966541115717"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <MessageCircle size={20} />
                <span>{t('faqWhatsapp')}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;


