import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle,
  AlertCircle,
  Navigation,
  Car,
  Shield
} from 'lucide-react';

const CoverageMap = () => {
  const { t } = useTranslation();
  const [selectedArea, setSelectedArea] = useState(null);

  const coverageAreas = [
    {
      id: 'north',
      name: 'المنطقة الشمالية',
      districts: ['العليا', 'النرجس', 'الورود', 'الملز', 'الربيع'],
      responseTime: '15-30 دقيقة',
      status: 'active',
      color: 'green'
    },
    {
      id: 'south',
      name: 'المنطقة الجنوبية',
      districts: ['النسيم', 'الخزامى', 'الروضة', 'السلامة', 'الزهراء'],
      responseTime: '20-35 دقيقة',
      status: 'active',
      color: 'green'
    },
    {
      id: 'east',
      name: 'المنطقة الشرقية',
      districts: ['الملز', 'الربيع', 'النسيم', 'الخزامى', 'الزهراء'],
      responseTime: '20-40 دقيقة',
      status: 'active',
      color: 'green'
    },
    {
      id: 'west',
      name: 'المنطقة الغربية',
      districts: ['العليا', 'النرجس', 'الورود', 'الروضة', 'السلامة'],
      responseTime: '25-45 دقيقة',
      status: 'limited',
      color: 'yellow'
    },
    {
      id: 'center',
      name: 'المنطقة الوسطى',
      districts: ['الملز', 'الربيع', 'النسيم', 'الخزامى', 'الزهراء'],
      responseTime: '10-20 دقيقة',
      status: 'active',
      color: 'green'
    }
  ];

  const emergencyServices = [
    {
      icon: Phone,
      title: 'طوارئ طبية',
      description: 'متاح 24/7 لجميع المناطق',
      responseTime: '15 دقيقة',
      color: 'red'
    },
    {
      icon: Car,
      title: 'تنسيق النقل',
      description: 'نساعد في ترتيب النقل للمستشفى',
      responseTime: '20 دقيقة',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'رعاية متخصصة',
      description: 'طاقم طبي متخصص',
      responseTime: '30 دقيقة',
      color: 'green'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'limited': return 'text-yellow-600 bg-yellow-100';
      case 'inactive': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'متاح';
      case 'limited': return 'محدود';
      case 'inactive': return 'غير متاح';
      default: return 'غير محدد';
    }
  };

  return (
    <>
      <SEO 
        title="خريطة التغطية"
        description="تعرف على المناطق التي نغطيها في الرياض وأوقات الاستجابة. نقدم خدمات طبية منزلية في جميع أنحاء المدينة."
        keywords="خريطة التغطية، مناطق الخدمة، الرياض، أوقات الاستجابة، رعاية طبية"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-white to-secondary relative overflow-hidden">
        {/* Interactive Waves Background */}
        <div className="absolute inset-0">
          {/* Wave 1 */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
              clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
            }}
          />
          
          {/* Wave 2 */}
          <motion.div
            animate={{
              x: ['100%', '-100%'],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute top-16 left-0 w-full h-24 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.1) 50%, transparent 100%)',
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
            }}
          />
          
          {/* Wave 3 */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 4
            }}
            className="absolute top-32 left-0 w-full h-20 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)',
              clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="absolute w-3 h-3 bg-primary/30 rounded-full"
              style={{
                left: `${15 + i * 10}%`,
                top: `${20 + i * 8}%`,
              }}
            />
          ))}
          
          {/* Ripple Effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              animate={{
                scale: [0, 2, 0],
                opacity: [0.3, 0, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut"
              }}
              className="absolute border-2 border-primary/20 rounded-full"
              style={{
                width: '100px',
                height: '100px',
                left: `${30 + i * 20}%`,
                top: `${40 + i * 10}%`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              خريطة التغطية
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم خدماتنا الطبية المنزلية في جميع أنحاء الرياض مع ضمان أوقات استجابة سريعة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              المناطق المغطاة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نغطي جميع مناطق الرياض مع ضمان وصول سريع وموثوق
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                className="card cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {area.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(area.status)}`}>
                    {getStatusText(area.status)}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                    <Clock size={18} />
                    <span className="text-sm">وقت الاستجابة: {area.responseTime}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                    <MapPin size={18} />
                    <span className="text-sm">{area.districts.length} حي</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">الأحياء المغطاة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.districts.slice(0, 3).map((district, districtIndex) => (
                      <span
                        key={districtIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {district}
                      </span>
                    ))}
                    {area.districts.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{area.districts.length - 3} أخرى
                      </span>
                    )}
                  </div>
                </div>

                {selectedArea === area.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">جميع الأحياء:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.districts.map((district, districtIndex) => (
                        <span
                          key={districtIndex}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                        >
                          {district}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدمات الطوارئ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              خدمات طوارئ متخصصة متاحة في جميع المناطق على مدار الساعة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  service.color === 'red' ? 'bg-red-100' :
                  service.color === 'blue' ? 'bg-blue-100' :
                  'bg-green-100'
                }`}>
                  <service.icon size={32} className={
                    service.color === 'red' ? 'text-red-600' :
                    service.color === 'blue' ? 'text-blue-600' :
                    'text-green-600'
                  } />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                  <Clock size={16} />
                  <span>وقت الاستجابة: {service.responseTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Visualization */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خريطة التغطية التفاعلية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              تعرف على مناطق التغطية وأوقات الاستجابة في جميع أنحاء الرياض
            </p>
          </motion.div>

          <div className="bg-gray-100 rounded-2xl p-8 mb-8">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Navigation size={48} className="text-primary mx-auto mb-4" />
                <p className="text-gray-600 font-medium">خريطة تفاعلية للمناطق المغطاة</p>
                <p className="text-gray-500 text-sm mt-2">ستكون متاحة قريباً</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-700">متاح - استجابة سريعة</span>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-gray-700">محدود - استجابة متوسطة</span>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-700">غير متاح - قيد التطوير</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Coverage */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              هل منطقتك غير مغطاة؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              تواصل معنا لطلب الخدمة في منطقتك أو للاستفسار عن التغطية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Phone size={20} />
                <span>اتصل بنا</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                اطلب الخدمة
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CoverageMap;



