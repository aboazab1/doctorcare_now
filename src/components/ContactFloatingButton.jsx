import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserMd, FaPhoneAlt, FaWhatsapp, FaFacebookMessenger, FaTimes } from 'react-icons/fa';

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

const ContactFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.floating-contact-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const contactButtons = [
    {
      icon: FaPhoneAlt,
      label: 'اتصال',
      href: 'tel:+966541115717',
      color: '#2ECC71',
      hoverColor: '#27AE60',
      delay: 0.1,
      shadowColor: 'rgba(46, 204, 113, 0.3)'
    },
    {
      icon: FaWhatsapp,
      label: 'واتساب',
      href: 'https://wa.me/966541115717',
      color: '#25D366',
      hoverColor: '#1DA851',
      delay: 0.2,
      shadowColor: 'rgba(37, 211, 102, 0.3)'
    },
    {
      icon: FaFacebookMessenger,
      label: 'فيسبوك',
      href: 'https://www.facebook.com/share/1Csh2Q4X3D/',
      color: '#1877F2',
      hoverColor: '#166FE5',
      delay: 0.3,
      shadowColor: 'rgba(24, 119, 242, 0.3)'
    },
    {
      icon: XIcon,
      label: 'X (تويتر)',
      href: 'https://x.com/doctor_care_1',
      color: '#000000',
      hoverColor: '#333333',
      delay: 0.4,
      shadowColor: 'rgba(0, 0, 0, 0.3)'
    }
  ];

  return (
    <div className="floating-contact-container fixed bottom-6 right-6 z-50">
      {/* Contact Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col-reverse space-y-reverse space-y-3 mb-4">
            {contactButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { delay: button.delay }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 20, 
                  scale: 0.8,
                  transition: { delay: button.delay * 0.5 }
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <motion.div 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 relative overflow-hidden"
                  style={{ 
                    backgroundColor: button.color,
                    boxShadow: `0 4px 15px ${button.shadowColor}`
                  }}
                  whileHover={{
                    backgroundColor: button.hoverColor,
                    boxShadow: `0 8px 25px ${button.shadowColor}`,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                    whileHover={{
                      opacity: 0.3,
                      x: ['-100%', '100%'],
                      transition: { duration: 0.6 }
                    }}
                  />
                  
                  {/* Icon */}
                  <button.icon className="text-white text-xl md:text-2xl relative z-10" />
                  
                  {/* Pulse effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                      transition: { duration: 1, repeat: Infinity }
                    }}
                  />
                </motion.div>
                
                {/* Enhanced Tooltip */}
                <motion.div 
                  className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl"
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  <span className="font-medium">{button.label}</span>
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ 
          scale: 1.15,
          y: -3,
          transition: { duration: 0.3, type: "spring", stiffness: 300 }
        }}
        whileTap={{ 
          scale: 0.9,
          transition: { duration: 0.1 }
        }}
        className="relative w-16 h-16 md:w-18 md:h-18 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        style={{
          background: isOpen 
            ? 'linear-gradient(135deg, #3498DB 0%, #5DD1C3 100%)'
            : 'linear-gradient(135deg, #3498DB 0%, #5DD1C3 100%)',
          boxShadow: isOpen 
            ? '0 8px 25px rgba(52, 152, 219, 0.4)' 
            : '0 8px 25px rgba(52, 152, 219, 0.3)'
        }}
      >
        {/* Gradient Animation Background */}
        <div className="absolute inset-0 rounded-full opacity-90">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-#3498DB via-#5DD1C3 to-#3498DB animate-gradient-shift"></div>
        </div>
        
        {/* Enhanced Shine effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          whileHover={{
            opacity: 0.6,
            x: ['-100%', '100%'],
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        />
        
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-0"
          whileHover={{
            opacity: 1,
            scale: [1, 1.1, 1],
            transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        
        {/* Icon */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <motion.div
            initial={false}
            animate={{ 
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FaTimes className="text-white text-2xl md:text-3xl" />
            ) : (
              <FaUserMd className="text-white text-2xl md:text-3xl" />
            )}
          </motion.div>
        </div>

        {/* Enhanced Pulse Animation */}
        {!isOpen && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-3 border-white"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </>
        )}

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white"
          initial={{ scale: 1, opacity: 0 }}
          animate={isOpen ? {
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
            transition: { duration: 0.6 }
          } : {}}
        />

        {/* Floating particles effect */}
        {!isOpen && (
          <>
            <motion.div
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ top: '20%', left: '30%' }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            />
            <motion.div
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ top: '60%', right: '25%' }}
              animate={{
                y: [0, -15, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
            />
            <motion.div
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ bottom: '25%', left: '40%' }}
              animate={{
                y: [0, -25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </>
        )}

        {/* Breathing effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>

    </div>
  );
};

export default ContactFloatingButton;
