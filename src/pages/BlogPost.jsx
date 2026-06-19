import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
import { loadBlogPost, getRelatedPosts, getRecentPosts } from '../utils/markdownLoader';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft,
  Share2,
  Heart,
  Activity,
  Baby,
  Brain,
  Shield,
  Apple,
  Dumbbell,
  Tag
} from 'lucide-react';

const BlogPost = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const loadPostData = async () => {
      setLoading(true);
      try {
        const currentLanguage = i18n.language;
        const postData = await loadBlogPost(slug, currentLanguage);
        
        if (postData) {
          setPost(postData);
          
          // Load related posts
          const related = await getRelatedPosts(slug, postData.frontMatter.category, currentLanguage);
          setRelatedPosts(related);
          
          // Load recent posts
          const recent = await getRecentPosts(currentLanguage, 3);
          setRecentPosts(recent);
        } else {
          // Post not found, redirect to blog
          navigate(`/${currentLanguage}/blog`);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        navigate(`/${i18n.language}/blog`);
      } finally {
        setLoading(false);
      }
    };

    loadPostData();
  }, [slug, i18n.language, navigate]);

  const handleShare = async () => {
    const url = window.location.href;
    const title = post?.frontMatter.title || '';
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert(t('blogLinkCopied'));
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">{t('blogLoading')}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('blogPostNotFound')}</h1>
          <Link 
            to={`/${i18n.language}/blog`}
            className="text-primary hover:text-blue-600 transition-colors"
          >
            {t('blogBackToBlog')}
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = categoryIcons[post.frontMatter.category];

  return (
    <>
      <SEO 
        title={post.frontMatter.title}
        description={post.frontMatter.description}
        keywords={`${post.frontMatter.category}, ${post.frontMatter.author}, ${t('blogKeywords')}`}
        image={post.frontMatter.image}
        url={`/${i18n.language}/blog/${post.slug}`}
        type="article"
        author={post.frontMatter.author}
        publishedTime={post.frontMatter.date}
        modifiedTime={post.frontMatter.date}
        section={post.frontMatter.category}
        tags={[post.frontMatter.category, post.frontMatter.author]}
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
          >
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 rtl:space-x-reverse mb-8">
              <Link 
                to={`/${i18n.language}/blog`}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {t('blogTitle')}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{post.frontMatter.category}</span>
            </nav>

            {/* Article Header */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 rtl:space-x-reverse">
                  {IconComponent && <IconComponent size={16} />}
                  <span>{post.frontMatter.category}</span>
                </span>
                <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-500 text-sm">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Calendar size={16} />
                    <span>{new Date(post.frontMatter.date).toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}</span>
                  </div>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <User size={16} />
                    <span>{post.frontMatter.author}</span>
                  </div>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Clock size={16} />
                    <span>{post.frontMatter.readingTime} {i18n.language === 'ar' ? 'دقائق' : 'min'}</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.frontMatter.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.frontMatter.description}
              </p>

              {/* Share Button */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 rtl:space-x-reverse bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Share2 size={16} />
                  <span>{t('blogShare')}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              {/* Featured Image */}
              <div className="mb-8">
                <LazyImage
                  src={post.frontMatter.image}
                  alt={post.frontMatter.title}
                  className="w-full h-64 md:h-96 rounded-xl object-cover"
                />
              </div>

              {/* Markdown Content */}
              <div className="markdown-content">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold text-gray-900 mb-3 mt-5">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2">{children}</ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-700">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-gray-900">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-gray-800">{children}</em>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-r-4 border-primary bg-gray-50 p-4 my-4 italic text-gray-700">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                        {children}
                      </pre>
                    )
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('blogRelatedPosts')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('blogRelatedPostsSubtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => {
                const RelatedIconComponent = categoryIcons[relatedPost.frontMatter.category];
                return (
                  <motion.article
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                  >
                    <Link to={`/${i18n.language}/blog/${relatedPost.slug}`}>
                      <LazyImage
                        src={relatedPost.frontMatter.image}
                        alt={relatedPost.frontMatter.title}
                        className="w-full h-48"
                      />
                      <div className="p-6">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 rtl:space-x-reverse">
                            {RelatedIconComponent && <RelatedIconComponent size={16} />}
                            <span>{relatedPost.frontMatter.category}</span>
                          </span>
                          <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500 text-sm">
                            <Calendar size={16} />
                            <span>{new Date(relatedPost.frontMatter.date).toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {relatedPost.frontMatter.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {relatedPost.frontMatter.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                              <User size={16} />
                              <span>{relatedPost.frontMatter.author}</span>
                            </div>
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                              <Clock size={16} />
                              <span>{relatedPost.frontMatter.readingTime} {i18n.language === 'ar' ? 'دقائق' : 'min'}</span>
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
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <Link
              to={`/${i18n.language}/blog`}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>{t('blogBackToBlog')}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
