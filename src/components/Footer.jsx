import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, Star, Shield, Award, MessageCircle, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Icons Components
const XIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const ThreadsIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.518.85-6.372 2.495-8.423C5.845 1.205 8.598.024 12.179 0h.007c3.581.024 6.334 1.205 8.184 3.509C22.35 5.56 23.5 8.414 23.5 11.932c0 3.518-.85 6.372-2.495 8.423C19.155 22.795 16.402 23.976 12.821 24h-.007zm-.007-1.5c2.96.02 5.291-.785 6.808-2.408 1.517-1.623 2.264-3.867 2.264-6.524s-.747-4.901-2.264-6.524c-1.517-1.623-3.848-2.428-6.808-2.408s-5.291.785-6.808 2.408C3.658 7.067 2.911 9.311 2.911 11.968s.747 4.901 2.264 6.524c1.517 1.623 3.848 2.428 6.808 2.408z"/>
  </svg>
);

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const footerLinks = {
    quickLinks: [
      { name: t('home'), path: '/' },
      { name: t('services'), path: '/services' },
      { name: t('about'), path: '/about' },
      { name: t('contact'), path: '/contact' },
    ],
    services: [
      { name: t('heartCare'), path: '/services#heart' },
      { name: t('elderlyCare'), path: '/services#elderly' },
      { name: t('pediatricCare'), path: '/services#pediatric' },
      { name: t('physiotherapy'), path: '/services#physio' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1Csh2Q4X3D/', label: 'Facebook', color: '#1877F2', hoverColor: '#166FE5' },
    { icon: Instagram, href: 'https://www.instagram.com/doctor_care1/', label: 'Instagram', color: '#E4405F', hoverColor: '#D62976' },
    { icon: XIcon, href: 'https://x.com/doctor_care_1', label: 'X (Twitter)', color: '#000000', hoverColor: '#333333' },
    { icon: ThreadsIcon, href: 'https://www.threads.com/@doctor_care1?xmt=AQF0wvmsQmvG3LZsNNoRGNzMmD9sQ7dPxb_LMuZO1CtO9Bg', label: 'Threads', color: '#6366F1', hoverColor: '#4F46E5' },
    { icon: MessageCircle, href: 'https://wa.me/966541115717', label: 'WhatsApp', color: '#25D366', hoverColor: '#1DA851' },
  ];

  const stats = [
    { icon: Heart, value: '6000+', label: t('satisfiedPatients') },
    { icon: Star, value: '4.9', label: t('customerRating') },
    { icon: Shield, value: '24/7', label: t('emergencyService') },
    { icon: Award, value: '15+', label: t('yearsExperience') },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 border-b border-gray-700/50 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center group cursor-pointer"
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center"
                    whileHover={{
                      background: 'linear-gradient(135deg, #3498DB, #5DD1C3)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <stat.icon className="text-primary group-hover:text-white transition-colors" size={24} />
                  </motion.div>
                  <motion.div
                    className="text-2xl font-bold text-white mb-1"
                    whileHover={{ color: '#3498DB' }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 group"
          >
            <motion.div 
              className="flex items-center space-x-3 rtl:space-x-reverse mb-6"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <img 
                  src="/assets/logo.png" 
                  alt="عناية طبيب" 
                  className="w-40 h-25 object-contain filter drop-shadow-lg"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                whileHover={{ color: '#3498DB' }}
              >
                {t('companyName')}
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              whileHover={{ color: '#E5E7EB' }}
            >
              {t('companyDescription')}
            </motion.p>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => setHoveredSocial(index)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden group"
                  style={{ 
                    backgroundColor: hoveredSocial === index ? social.hoverColor : '#374151',
                    boxShadow: hoveredSocial === index ? `0 8px 25px ${social.color}40` : '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                  aria-label={social.label}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                    whileHover={{
                      opacity: 0.3,
                      x: ['-100%', '100%'],
                      transition: { duration: 0.6 }
                    }}
                  />
                  <social.icon 
                    size={20} 
                    className="text-white relative z-10"
                    style={{ color: hoveredSocial === index ? 'white' : '#9CA3AF' }}
                  />
                  
                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredSocial === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap"
                      >
                        {social.label}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
          >
            <motion.h3 
              className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{ color: '#3498DB' }}
            >
              {t('quickLinks')}
            </motion.h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  onHoverStart={() => setHoveredLink(index)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="group/link"
                >
                  <Link
                    to={link.path}
                    className="relative flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    <motion.span
                      className="relative"
                      whileHover={{ color: '#3498DB' }}
                    >
                      {link.name}
                    </motion.span>
                    <motion.div
                      className="absolute left-0 rtl:right-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                      style={{ width: '0%' }}
                      whileHover={{ width: '100%' }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <motion.h3 
              className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{ color: '#3498DB' }}
            >
              {t('services')}
            </motion.h3>
            <ul className="space-y-4">
              {footerLinks.services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group/service"
                >
                  <Link
                    to={service.path}
                    className="relative flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover/service:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                    />
                    <motion.span
                      className="relative"
                      whileHover={{ color: '#3498DB' }}
                    >
                      {service.name}
                    </motion.span>
                    <motion.div
                      className="absolute left-0 rtl:right-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/service:opacity-100 transition-opacity duration-300"
                      style={{ width: '0%' }}
                      whileHover={{ width: '100%' }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group"
          >
            <motion.h3 
              className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{ color: '#3498DB' }}
            >
              {t('contactInfo')}
            </motion.h3>
            <div className="space-y-6">
              <motion.a 
                href="https://share.google/L7LlP0sJaIQsyYFk3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 rtl:space-x-reverse group/contact"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover/contact:from-primary group-hover/contact:to-secondary transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin size={18} className="text-primary group-hover/contact:text-white transition-colors" />
                </motion.div>
                <motion.span 
                  className="text-gray-300 group-hover/contact:text-white transition-colors"
                  whileHover={{ color: '#E5E7EB' }}
                >
                  {t('address')}
                </motion.span>
              </motion.a>
              
              <motion.div 
                className="flex items-center space-x-4 rtl:space-x-reverse group/contact"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover/contact:from-primary group-hover/contact:to-secondary transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Phone size={18} className="text-primary group-hover/contact:text-white transition-colors" />
                </motion.div>
                <motion.a
                  href="tel:+966541115717"
                  className="text-gray-300 hover:text-white transition-colors relative"
                  whileHover={{ color: '#3498DB' }}
                >
                  <span className="relative">
                    +966 54 111 5717
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 rtl:space-x-reverse group/contact"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover/contact:from-primary group-hover/contact:to-secondary transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail size={18} className="text-primary group-hover/contact:text-white transition-colors" />
                </motion.div>
                <motion.a
                  href="mailto:Info@doctorcaresa.com"
                  className="text-gray-300 hover:text-white transition-colors relative"
                  whileHover={{ color: '#3498DB' }}
                >
                  <span className="relative">
                    Info@doctorcaresa.com
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative border-t border-gray-700/50 py-8"
        >
          {/* Gradient line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 rtl:space-x-reverse"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span 
                className="text-gray-400 text-sm"
                whileHover={{ color: '#E5E7EB' }}
              >
                © 2024 {t('companyName')}. {t('allRightsReserved')}.
              </motion.span>
              <motion.div
                className="w-1 h-1 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <div className="flex space-x-8 rtl:space-x-reverse text-sm">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={`/${i18n.language}/privacy-policy`} 
                  className="relative text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative z-10">{t('privacyPolicy')}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={`/${i18n.language}/terms-of-service`} 
                  className="relative text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative z-10">{t('termsOfService')}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
