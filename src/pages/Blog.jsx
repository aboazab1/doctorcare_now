import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
import { loadBlogPosts, searchBlogPosts, getBlogCategories } from '../utils/markdownLoader';
import { 
  Calendar, 
  User, 
  Clock, 
  Search, 
  Filter,
  Heart,
  Activity,
  Baby,
  Brain,
  Shield,
  Apple,
  Dumbbell
} from 'lucide-react';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load blog posts when component mounts or language changes
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const currentLanguage = i18n.language;
        const posts = await loadBlogPosts(currentLanguage);
        const postCategories = await getBlogCategories(currentLanguage);
        
        setBlogPosts(posts);
        setCategories(postCategories);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [i18n.language]);

  const categoryIcons = {
    'صحة القلب': Heart,
    'مرض السكري': Activity,
    'صحة الأطفال': Baby,
    'صحة كبار السن': Brain,
    'اللياقة البدنية': Dumbbell,
    'السلامة الطبية': Shield,
    'Heart Health': Heart,
    'Diabetes': Activity,
    'Children\'s Health': Baby,
    'Elderly Health': Brain,
    'Fitness': Dumbbell,
    'Medical Safety': Shield
  };

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.frontMatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.frontMatter.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.frontMatter.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.slice(0, 2); // First 2 posts as featured


  return (
    <>
      <SEO 
        title={t('blogTitle')}
        description={t('blogSubtitle')}
        keywords="مقالات طبية، نصائح صحية، صحة القلب، مرض السكري، رعاية الأطفال، صحة كبار السن"
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
              {t('blogTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('blogSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('blogFeaturedTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('blogFeaturedSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => {
              const IconComponent = categoryIcons[post.frontMatter.category];
              return (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card group cursor-pointer"
                >
                  <Link to={`/${i18n.language}/blog/${post.slug}`}>
                    <LazyImage
                      src={post.frontMatter.image}
                      alt={post.frontMatter.title}
                      className="w-full h-48 rounded-lg mb-6"
                    />
                    <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 rtl:space-x-reverse">
                        {IconComponent && <IconComponent size={16} />}
                        <span>{post.frontMatter.category}</span>
                      </span>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500 text-sm">
                        <Calendar size={16} />
                        <span>{new Date(post.frontMatter.date).toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {post.frontMatter.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.frontMatter.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <User size={16} />
                          <span>{post.frontMatter.author}</span>
                        </div>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <Clock size={16} />
                          <span>{post.frontMatter.readingTime} {i18n.language === 'ar' ? 'دقائق' : 'min'}</span>
                        </div>
                      </div>
                      <span className="text-primary font-medium group-hover:text-blue-600 transition-colors">
                        {t('blogReadMore')}
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-4 rtl:right-4 rtl:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t('blogSearchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-12 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                <option value="all">{t('blogAllArticles')}</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* All Posts */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">{t('blogLoading')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const IconComponent = categoryIcons[post.frontMatter.category];
                return (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                  >
                    <Link to={`/${i18n.language}/blog/${post.slug}`}>
                      <LazyImage
                        src={post.frontMatter.image}
                        alt={post.frontMatter.title}
                        className="w-full h-48"
                      />
                      <div className="p-6">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 rtl:space-x-reverse">
                            {IconComponent && <IconComponent size={16} />}
                            <span>{post.frontMatter.category}</span>
                          </span>
                          <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500 text-sm">
                            <Calendar size={16} />
                            <span>{new Date(post.frontMatter.date).toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {post.frontMatter.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {post.frontMatter.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                              <User size={16} />
                              <span>{post.frontMatter.author}</span>
                            </div>
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                              <Clock size={16} />
                              <span>{post.frontMatter.readingTime} {i18n.language === 'ar' ? 'دقائق' : 'min'}</span>
                            </div>
                          </div>
                          <span className="text-primary font-medium group-hover:text-blue-600 transition-colors text-sm">
                            {t('blogReadMore')}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          )}

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 mb-4">
                {t('blogNoResults')}
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-primary hover:text-blue-600 transition-colors"
              >
                {t('blogClearFilters')}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Health Tips & Quick Actions */}
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
            className="text-center text-white mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('healthTipsTitle')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t('healthTipsSubtitle')}
            </p>
          </motion.div>

          {/* Health Tips Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Tip 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t('heartHealthTip')}
                </h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                {t('heartHealthTipDesc')}
              </p>
            </motion.div>

            {/* Tip 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Activity className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t('exerciseTip')}
                </h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                {t('exerciseTipDesc')}
              </p>
            </motion.div>

            {/* Tip 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Apple className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t('nutritionTip')}
                </h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                {t('nutritionTipDesc')}
              </p>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('quickActionsTitle')}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <motion.a
                href="tel:+966541115717"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Heart size={20} />
                <span>{t('emergencyCall')}</span>
              </motion.a>
              <motion.a
                href="https://wa.me/966541115717"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Shield size={20} />
                <span>{t('consultation')}</span>
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Dumbbell size={20} />
                <span>{t('bookService')}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
