import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home, ArrowRight, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('pageNotFound') || '404 - الصفحة غير موجودة'}
        description={t('pageNotFoundDesc') || 'الصفحة التي تبحث عنها غير موجودة'}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100/30 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <AlertCircle size={64} className="text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
          >
            {t('pageNotFound') || 'الصفحة غير موجودة'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            {t('pageNotFoundDesc') || 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="btn-primary flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Home size={20} />
              <span>{t('backToHome') || 'العودة للرئيسية'}</span>
            </Link>

            <Link
              to="/services"
              className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>{t('ourServices') || 'خدماتنا'}</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              {t('home') || 'الرئيسية'}
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
              {t('services') || 'الخدمات'}
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              {t('about') || 'من نحن'}
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
              {t('contact') || 'اتصل بنا'}
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;










