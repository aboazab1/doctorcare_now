import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import HomeAnimatedBackground from '../components/HomeAnimatedBackground';
import SectionAnimatedBackground from '../components/SectionAnimatedBackground';
import { 
  Heart, 
  Users, 
  Brain, 
  Baby, 
  Wind, 
  Activity, 
  Dumbbell, 
  Apple, 
  Zap, 
  Microscope,
  Shield,
  Clock,
  Award,
  Phone
} from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'physiotherapy',
      title: t('physicalTherapyServices'),
      description: t('physicalTherapyDesc'),
      link: '/services'
    },
    {
      icon: 'companion',
      title: t('healthCompanionshipServices'),
      description: t('healthCompanionshipDesc'),
      link: '/services'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: t('certifiedTeam'),
      description: t('certifiedTeamDesc'),
    },
    {
      icon: Clock,
      title: t('service247'),
      description: t('service247Desc'),
    },
    {
      icon: Award,
      title: t('highQuality'),
      description: t('highQualityDesc'),
    },
  ];

  return (
    <>
      <SEO 
        title="ممرضة للبيت في الرياض | تمريض منزلي الرياض"
        description="ممرضة للبيت في الرياض - خدمات تمريض منزلي احترافية في الرياض. ممرضات معتمدات للرعاية المنزلية، رعاية كبار السن، تمريض الأطفال، وخدمات طبية منزلية في الرياض. تواصل معنا الآن للحصول على أفضل خدمات التمريض المنزلي في الرياض."
        keywords="ممرضة للبيت في الرياض، ممرضة منزلية الرياض، تمريض منزلي الرياض، ممرضة للبيت، ممرضة في الرياض، رعاية منزلية الرياض، تمريض منزلي، ممرضة معتمدة الرياض، رعاية كبار السن الرياض، تمريض الأطفال الرياض، خدمات طبية منزلية الرياض، ممرضة 24 ساعة الرياض"
      />
      
      <HomeAnimatedBackground />
      <HeroSection />
      
      {/* Services Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <SectionAnimatedBackground sectionType="services" />
        {/* Medical Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-blue-300/20 rounded-full blur-xl"></div>
        </div>
        
        {/* Medical Icons Floating */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-32 left-16 text-primary/10"
          >
            <Heart size={40} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-48 right-24 text-blue-500/10"
          >
            <Microscope size={35} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-32 left-20 text-cyan-400/10"
          >
            <Activity size={32} />
          </motion.div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('ourSpecializedServices')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-blue-100/20 relative overflow-hidden">
        {/* Medical Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233498DB' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
        
        {/* Floating Medical Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              x: [0, 10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-12 text-primary/15"
          >
            <Shield size={50} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              x: [0, -15, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-32 right-16 text-blue-500/15"
          >
            <Clock size={45} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              x: [0, 8, 0],
              rotate: [0, 6, 0]
            }}
            transition={{ 
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-24 left-20 text-cyan-400/15"
          >
            <Award size={42} />
          </motion.div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('featuresTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('featuresSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-r from-white via-blue-50/20 to-blue-100/30 relative overflow-hidden">
        <SectionAnimatedBackground sectionType="about" />
        {/* Medical DNA Helix Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-blue-300/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating Medical Icons - Hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 12, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-16 right-20 text-primary/12"
          >
            <Users size={55} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 18, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 left-16 text-blue-500/12"
          >
            <Heart size={48} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute top-1/3 left-1/4 text-cyan-400/12"
          >
            <Brain size={40} />
          </motion.div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('aboutDescription')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">{t('aboutPoint1')}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">{t('aboutPoint2')}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">{t('aboutPoint3')}</span>
                </div>
              </div>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary mt-8 inline-block"
              >
                {t('learnMore')}
              </motion.a>
            </motion.div>

            {/* Mobile Team Images - Simple Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden mt-8"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/assets/us1.webp", alt: "فريقنا الطبي المتميز" },
                  { src: "/assets/us2.webp", alt: "عضو فريق طبي" },
                  { src: "/assets/us3.webp", alt: "عضو فريق طبي" },
                  { src: "/assets/us4.webp", alt: "عضو فريق طبي" }
                ].map((image, index) => (
                  <motion.a
                    key={index}
                    href="/about"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group overflow-hidden rounded-xl shadow-lg"
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                        فريقنا الطبي
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative hidden lg:block"
            >
              {/* Innovative Hexagonal Team Gallery */}
              <div className="relative">
                {/* Central Featured Image (us1) - Hexagonal Design */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                  whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative z-20 flex justify-center mb-8"
                >
                  <motion.a
                    href="/about"
                    whileHover={{ 
                      scale: 1.08,
                      rotateY: 5,
                      transition: { duration: 0.4 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group cursor-pointer block"
                  >
                    <div className="relative">
                      {/* Hexagonal Container */}
                      <div className="w-80 h-80 relative overflow-hidden" 
                           style={{
                             clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                             background: 'linear-gradient(135deg, #3498DB, #2B7BC7)'
                           }}>
                        <img 
                          src="/assets/us1.webp"
                          alt="فريقنا الطبي المتميز - الصورة الرئيسية"
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                      </div>
                      
                      {/* Floating Medical Badge */}
                      <motion.div
                        animate={{ 
                          y: [0, -12, 0],
                          rotate: [0, 8, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl"
                      >
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Heart size={16} />
                          <span>فريقنا المتميز</span>
                        </div>
                      </motion.div>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full"
                        style={{
                          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                        }}
                      >
                        <div className="text-center text-white">
                          <Users size={32} className="mx-auto mb-2" />
                          <p className="text-sm font-semibold">تعرف على فريقنا</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.a>
                </motion.div>

                {/* Circular Arrangement of Secondary Images */}
                <div className="relative w-96 h-96 mx-auto">
                  {[
                    { src: "/assets/us2.webp", alt: "عضو فريق طبي", angle: 0, delay: 0.4 },
                    { src: "/assets/us3.webp", alt: "عضو فريق طبي", angle: 72, delay: 0.6 },
                    { src: "/assets/us4.webp", alt: "عضو فريق طبي", angle: 144, delay: 0.8 },
                    { src: "/assets/us5.webp", alt: "عضو فريق طبي", angle: 216, delay: 1.0 }
                  ].map((image, index) => {
                    const radius = 140;
                    const x = Math.cos((image.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((image.angle * Math.PI) / 180) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ 
                          scale: 0,
                          opacity: 0,
                          x: 0,
                          y: 0
                        }}
                        whileInView={{ 
                          scale: 1,
                          opacity: 1,
                          x: x,
                          y: y
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: image.delay,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.15,
                          z: 50,
                          transition: { duration: 0.3 }
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                        }}
                      >
                        <motion.a
                          href="/about"
                          whileTap={{ scale: 0.9 }}
                          className="relative group cursor-pointer block"
                        >
                          <div className="relative">
                            {/* Circular Image Container */}
                            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl border-4 border-white group-hover:border-primary transition-colors duration-300">
                              <img 
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                              />
                            </div>
                            
                            {/* Connecting Line */}
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 1, delay: image.delay + 0.3 }}
                              className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary/60 to-transparent origin-left"
                              style={{
                                transform: `translate(-50%, -50%) rotate(${image.angle}deg)`
                              }}
                            />

                            {/* Floating Icon */}
                            <motion.div
                              animate={{
                                y: [0, -8, 0],
                                rotate: [0, 360, 0]
                              }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.5
                              }}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs shadow-lg"
                            >
                              <Users size={12} />
                            </motion.div>

                            {/* Hover Effect */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                              className="absolute inset-0 rounded-full bg-primary/20 flex items-center justify-center"
                            >
                              <div className="text-primary text-xs font-bold">عضو فريق</div>
                            </motion.div>
                          </div>
                        </motion.a>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Central Connecting Hub */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Heart size={24} className="text-white" />
                  </motion.div>
                </motion.div>

                {/* Floating Medical Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 -left-8 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-primary/20 rounded-full flex items-center justify-center"
                >
                  <Shield size={20} className="text-primary/60" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center"
                >
                  <Users size={16} className="text-blue-500/60" />
                </motion.div>

                {/* Dynamic Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.sin(i) * 20, 0],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                    className="absolute w-3 h-3 bg-primary/50 rounded-full"
                    style={{
                      top: `${15 + i * 10}%`,
                      left: `${20 + i * 8}%`
                    }}
                  />
                ))}
              </div>
            </motion.div>
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
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{t('bookAppointment')}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Home;
