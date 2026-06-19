import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionAnimatedBackground from './SectionAnimatedBackground';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'أحمد بن سعد',
      condition: 'مريض قلب',
      rating: 5,
      text: 'الله يعطيكم العافية، الخدمة عندكم زينة والله! الممرض اللي جاني كان محترف ومتفهم، والرعاية في البيت أحسن من المستشفى بمراحل. الله يبارك فيكم',
      location: 'الرياض',
      service: 'رعاية مرضى القلب'
    },
    {
      id: 2,
      name: 'فاطمة العتيبي',
      condition: 'والدة مريض سكري',
      rating: 4,
      text: 'الحمدلله على كل حال، ابني عنده سكري والخدمة عندكم ممتازة. الممرضة تتابع معاه الدواء والطعام، وترد على استفساراتنا في أي وقت. جزاكم الله خير',
      location: 'جدة',
      service: 'رعاية مرضى السكري'
    },
    {
      id: 3,
      name: 'عبدالله الرشيد',
      condition: 'مريض علاج طبيعي',
      rating: 5,
      text: 'والله الخدمة عندكم فوق الممتاز! المعالج الطبيعي شاطر ومتابع، والحمدلله تحسنت حالتي كثير. أنصح كل واحد يحتاج علاج طبيعي يجي عندكم',
      location: 'الدمام',
      service: 'العلاج الطبيعي'
    },
    {
      id: 4,
      name: 'نورا الأحمد',
      condition: 'أم بعد الولادة',
      rating: 5,
      text: 'الله يجزاكم خير، الرعاية بعد الولادة كانت رائعة. الممرضة متخصصة في رعاية الأم والطفل، وكنت مرتاحة معاها. الله يبارك فيكم',
      location: 'الرياض',
      service: 'رعاية ما بعد الولادة'
    },
    {
      id: 5,
      name: 'محمد الشمري',
      condition: 'مريض كبار السن',
      rating: 4,
      text: 'أنا عمري 75 سنة والخدمة عندكم مناسبة لنا. الممرض محترم ومتفهم، ويساعدني في الأدوية والتمارين. الله يبارك فيكم ويطول أعماركم',
      location: 'الطائف',
      service: 'رعاية كبار السن'
    },
    {
      id: 6,
      name: 'سارة القحطاني',
      condition: 'مريضة تنفسية',
      rating: 5,
      text: 'والله الخدمة عندكم ممتازة! الممرضة متخصصة في الأمراض التنفسية، وتتابع معاي الأكسجين والأدوية. أنا مرتاحة معاها والحمدلله',
      location: 'أبها',
      service: 'الرعاية التنفسية'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <SectionAnimatedBackground sectionType="testimonials" />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100/50"
            >
              <div className="text-center">
                {/* Creative Quote Design */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="relative mb-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Quote size={36} className="text-white" />
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                  >
                    <Star size={14} className="text-white fill-current" />
                  </motion.div>
                </motion.div>

                {/* Dynamic Rating */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center space-x-1 rtl:space-x-reverse mb-8"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <Star size={24} className="text-yellow-400 fill-current drop-shadow-sm" />
                    </motion.div>
                  ))}
                  {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i + testimonials[currentIndex].rating} size={24} className="text-gray-300" />
                  ))}
                </motion.div>

                {/* Enhanced Testimonial Text */}
                <motion.blockquote 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed font-medium relative"
                >
                  <span className="text-4xl text-primary/30 absolute -top-2 -right-2">"</span>
                  {testimonials[currentIndex].text}
                  <span className="text-4xl text-primary/30 absolute -bottom-4 -left-2">"</span>
                </motion.blockquote>

                {/* Creative Author Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-primary/5 to-blue-100/20 rounded-2xl p-6 border border-primary/10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    {/* Name & Condition */}
                    <div className="text-center md:text-right">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary font-medium">
                        {testimonials[currentIndex].condition}
                      </p>
                    </div>

                    {/* Service Type */}
                    <div className="text-center">
                      <div className="bg-primary/10 rounded-full px-4 py-2 inline-block">
                        <span className="text-primary font-semibold text-sm">
                          {testimonials[currentIndex].service}
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600 font-medium">
                          {testimonials[currentIndex].location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Buttons - Fixed Position */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block absolute -left-16 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-primary to-blue-600 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 group z-10"
          >
            <ChevronLeft size={24} className="text-white group-hover:scale-110 transition-transform" />
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block absolute -right-16 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-primary to-blue-600 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 group z-10"
          >
            <ChevronRight size={24} className="text-white group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center space-x-4 rtl:space-x-reverse mt-8">
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 rtl:space-x-reverse bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft size={20} />
            <span>السابق</span>
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 rtl:space-x-reverse bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>التالي</span>
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center space-x-3 rtl:space-x-reverse mt-8 md:mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-8'
                  : 'w-3 h-3'
              }`}
            >
              <div className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-primary to-blue-600 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}>
                {index === currentIndex && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-full h-full rounded-full bg-white/20 flex items-center justify-center"
                  >
                    <Star size={12} className="text-white fill-current" />
                  </motion.div>
                )}
              </div>
              
              {/* Rating Preview */}
              {index === currentIndex && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                >
                  {testimonial.rating}/5 ⭐
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6000+</div>
            <div className="text-gray-600">{t('satisfiedClients')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">{t('availableService')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">94%</div>
            <div className="text-gray-600">{t('customerSatisfaction')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
