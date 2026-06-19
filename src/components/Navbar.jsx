import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = () => {
    // Close mobile menu if open
    setIsOpen(false);
    // Scroll to top
    scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('services'), path: '/services' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
    { name: t('faq'), path: '/faq' },
    { name: t('blog'), path: '/blog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 shadow-xl backdrop-blur-lg border-b border-primary/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Elegant Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-white/80 to-blue-100/5"
      />
      
      {/* Floating Medical Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 2, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2 left-1/4 w-3 h-3 bg-primary/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 6, 0],
            rotate: [0, -2, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-3 right-1/3 w-2 h-2 bg-blue-500/20 rounded-full"
        />
      </div>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" onClick={handleNavClick} className="flex items-center space-x-2 rtl:space-x-reverse group">
              <motion.div
                animate={{
                  rotate: [0, 2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <img 
                  src="/assets/logo.webp" 
                  alt="عناية طبيب" 
                  className="w-40 h-25 object-contain transition-all duration-300 group-hover:brightness-110"
                />
                {/* Subtle Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-primary/10 rounded-lg blur-sm -z-10"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`relative font-medium transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="relative z-10 block"
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* Hover Background */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                  />
                  
                  {/* Active Indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Subtle Glow on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-primary/10 rounded-lg blur-sm -z-20"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 rtl:space-x-reverse text-gray-700 hover:text-primary transition-all duration-300 group relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <Globe size={18} />
              </motion.div>
              <motion.span 
                className="text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {i18n.language === 'ar' ? 'EN' : 'عربي'}
              </motion.span>
              
              {/* Hover Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
              />
            </motion.button>

            {/* Call Button */}
            <motion.a
              href="tel:+966541115717"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(52, 152, 219, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated Background */}
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              
              <motion.div
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <Phone size={16} />
              </motion.div>
              <span className="text-sm font-medium relative z-10">
                {t('callNowButton')}
              </span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-all duration-300 relative group"
            >
              <motion.div
                animate={{
                  rotate: isOpen ? 90 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
              
              {/* Hover Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
              />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden bg-gradient-to-br from-white via-blue-50/30 to-white backdrop-blur-xl border-t border-primary/20 shadow-2xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233498DB' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                       backgroundSize: '40px 40px'
                     }}>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 left-4 w-3 h-3 bg-primary/20 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -3, 0],
                    opacity: [0.1, 0.25, 0.1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-8 right-6 w-2 h-2 bg-blue-500/20 rounded-full"
                />
              </div>

              <div className="relative z-10 px-6 py-6 space-y-3">
                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      className={`group relative block overflow-hidden rounded-2xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg'
                          : 'bg-white/80 hover:bg-white text-gray-700 hover:text-primary shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="relative p-4">
                        {/* Content */}
                        <div className="flex items-center justify-between">
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="relative z-10 font-semibold text-lg"
                          >
                            {item.name}
                          </motion.span>
                          
                          {/* Arrow Icon */}
                          <motion.div
                            animate={{ scale: location.pathname === item.path ? 1.1 : 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10"
                          >
                            <motion.div
                              animate={{ rotate: location.pathname === item.path ? 0 : 0 }}
                              whileHover={{ scale: 1.1 }}
                              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                location.pathname === item.path
                                  ? 'bg-white/20'
                                  : 'bg-primary/10 group-hover:bg-primary/20'
                              }`}
                            >
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-2 h-2 bg-current rounded-full"
                              />
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Animated Background */}
                        <motion.div
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />

                        {/* Active Indicator */}
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="mobileActiveTab"
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-white rounded-r-full shadow-lg"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.4 }}
                          />
                        )}

                        {/* Pulse Effect for Active Item */}
                        {location.pathname === item.path && (
                          <motion.div
                            animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Enhanced Mobile Call Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="pt-6"
                >
                  <motion.a
                    href="tel:+966541115717"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 12px 30px rgba(52, 152, 219, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative block overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-4 rounded-2xl transition-all duration-300 w-full shadow-lg hover:shadow-xl"
                  >
                    {/* Animated Background */}
                    <motion.div
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center space-x-3 rtl:space-x-reverse">
                      <motion.div
                        animate={{
                          rotate: [0, 10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      >
                        <Phone size={20} />
                      </motion.div>
                      <span className="font-bold text-lg">{t('callNowButton')}</span>
                      
                      {/* Pulse Ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                        className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                      />
                    </div>
                  </motion.a>
                </motion.div>

                {/* Language Toggle for Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="pt-4"
                >
                  <motion.button
                    onClick={toggleLanguage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse bg-white/80 hover:bg-white text-gray-700 hover:text-primary px-4 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    >
                      <Globe size={18} />
                    </motion.div>
                    <span className="font-semibold">
                      {i18n.language === 'ar' ? 'English' : 'العربية'}
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
