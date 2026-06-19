import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Heart, 
  Shield, 
  Award, 
  Users, 
  Clock, 
  Target,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  MessageCircle
} from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Heart,
      title: t('careFirst'),
      description: t('careFirstDesc')
    },
    {
      icon: Shield,
      title: t('safetyTrust'),
      description: t('safetyTrustDesc')
    },
    {
      icon: Award,
      title: t('professionalExcellence'),
      description: t('professionalExcellenceDesc')
    },
    {
      icon: Users,
      title: t('teamwork'),
      description: t('teamworkDesc')
    }
  ];


  const achievements = [
    { number: '6000+', label: t('satisfiedClients') },
    { number: '1000+', label: t('treatedCases') },
    { number: '24/7', label: t('availableService') },
    { number: '94%', label: t('customerSatisfaction') }
  ];

  return (
    <div className="overflow-x-hidden">
      <SEO 
        title="من نحن"
        description="تعرف على قصة طبيب الرعاية وفريقنا الطبي المتميز. نقدم رعاية طبية منزلية عالية الجودة في الرياض."
        keywords="من نحن، فريق طبي، طبيب الرعاية، رعاية منزلية، الرياض"
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
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('aboutDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('missionVision')}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Target size={24} className="text-primary ml-2 rtl:ml-0 rtl:mr-2" />
                    {t('ourVision')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('visionText')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Heart size={24} className="text-primary ml-2 rtl:ml-0 rtl:mr-2" />
                    {t('ourMission')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('aboutDescription')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Advanced Visual Effects Container */}
              <div className="relative">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-blue-400/30 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tr from-blue-500/30 to-blue-300/30 rounded-full blur-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl"></div>
                  </motion.div>
                </div>

                {/* Main Images Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                  {/* Vision Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden">
                        <img 
                          src="/assets/about1.jpeg"
                          alt="رؤيتنا الطبية"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Floating Particles */}
                        <div className="absolute inset-0">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-white/40 rounded-full"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            <h3 className="text-2xl font-bold text-white mb-2">{t('visionImageTitle')}</h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                              {t('visionImageDesc')}
                            </p>
                          </motion.div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary/30 rounded-full blur-sm"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-secondary/30 rounded-full blur-sm"></div>
                  </motion.div>

                  {/* Mission Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden">
                        <img 
                          src="/assets/about2.jpeg"
                          alt="رسالتنا الطبية"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Floating Particles */}
                        <div className="absolute inset-0">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-white/40 rounded-full"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >
                            <h3 className="text-2xl font-bold text-white mb-2">{t('missionImageTitle')}</h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                              {t('missionImageDesc')}
                            </p>
                          </motion.div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary/30 rounded-full blur-sm"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-secondary/30 rounded-full blur-sm"></div>
                  </motion.div>

                  {/* Values Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden">
                        <img 
                          src="/assets/about3.jpeg"
                          alt="قيمنا الطبية"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Floating Particles */}
                        <div className="absolute inset-0">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-white/40 rounded-full"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                          >
                            <h3 className="text-2xl font-bold text-white mb-2">{t('valuesImageTitle')}</h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                              {t('valuesImageDesc')}
                            </p>
                          </motion.div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                  </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary/30 rounded-full blur-sm"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-secondary/30 rounded-full blur-sm"></div>
                  </motion.div>
                </div>

                {/* Advanced Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-blue-500/20 to-blue-300/20 rounded-full blur-lg"></div>
                <div className="absolute top-1/2 left-4 w-8 h-8 bg-primary/30 rounded-full blur-md"></div>
                <div className="absolute top-1/4 right-4 w-10 h-10 bg-secondary/30 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('coreValues')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('valuesDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('ourTeam')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('teamDescription')}
            </p>
          </motion.div>

              <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/assets/team.png"
                alt="فريقنا الطبي المتميز"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-secondary/20 rounded-full"></div>
            <div className="absolute top-1/2 left-4 w-4 h-4 bg-primary/30 rounded-full"></div>
            <div className="absolute top-1/4 right-4 w-5 h-5 bg-secondary/30 rounded-full"></div>
              </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('achievements')}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t('achievementsDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/90">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyChooseUs')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('whyChooseUsDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('certifiedTeam')}
              </h3>
              <p className="text-gray-600">
                {t('certifiedTeamDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('service247')}
              </h3>
              <p className="text-gray-600">
                {t('service247Desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('highQuality')}
              </h3>
              <p className="text-gray-600">
                {t('highQualityDesc')}
              </p>
            </motion.div>
          </div>
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
              {t('joinFamily')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('joinFamilyDesc')}
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
                <MessageCircle size={20} />
                <span>{t('bookConsultation')}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
