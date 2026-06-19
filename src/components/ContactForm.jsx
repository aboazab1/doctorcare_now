import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `مرحباً، أريد التواصل معكم:

الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
الهاتف: ${formData.phone || 'لم يتم إدخال رقم الهاتف'}
الرسالة: ${formData.message}

شكراً لكم`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/966541115717?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone'),
      value: '+966 54 111 5717',
      href: 'tel:+966541115717',
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      value: '+966 54 111 5717',
      href: 'https://wa.me/966541115717',
    },
    {
      icon: Mail,
      title: t('email'),
      value: 'Info@doctorcaresa.com',
      href: 'mailto:Info@doctorcaresa.com',
    },
    {
      icon: MapPin,
      title: t('address'),
      value: t('addressValue'),
      href: 'https://share.google/L7LlP0sJaIQsyYFk3',
    },
    {
      icon: Clock,
      title: t('workingHours'),
      value: t('workingHoursValue'),
      href: '#',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contactTitle')}</h3>
        <p className="text-gray-600 mb-8">{t('contactSubtitle')}</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('name')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder={t('namePlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder={t('emailPlaceholder')}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              {t('phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder={t('phonePlaceholder')}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {t('message')} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
              placeholder={t('messagePlaceholder')}
            />
          </div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            <MessageCircle size={18} />
            <span>إرسال عبر الواتساب</span>
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('contactInfo')}</h3>
          <p className="text-gray-600 mb-8">
            {t('contactInfoDesc')}
          </p>
        </div>
        
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 rtl:space-x-reverse p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {info.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-red-50 border border-red-200 rounded-lg p-6"
        >
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Phone size={16} className="text-red-600" />
            </div>
            <h4 className="font-semibold text-red-900">{t('emergency24')}</h4>
          </div>
          <p className="text-red-700 text-sm mb-3">
            {t('emergencyDesc')}
          </p>
          <a
            href="tel:+966541115717"
            className="text-red-600 font-semibold hover:text-red-700 transition-colors"
          >
            +966 54 111 5717
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;


