import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Components (eager load - used on all pages)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactFloatingButton from './components/ContactFloatingButton';
import AnimatedBackground from './components/AnimatedBackground';

// Pages (lazy load - code splitting)
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const CoverageMap = lazy(() => import('./pages/CoverageMap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Language-specific pages (lazy load)
const PrivacyPolicyAr = lazy(() => import('./pages/ar/PrivacyPolicy'));
const PrivacyPolicyEn = lazy(() => import('./pages/en/PrivacyPolicy'));
const TermsOfServiceAr = lazy(() => import('./pages/ar/TermsOfService'));
const TermsOfServiceEn = lazy(() => import('./pages/en/TermsOfService'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg">جاري التحميل...</p>
    </div>
  </div>
);

// i18n
import './i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document language and direction based on current language
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen relative">
          <AnimatedBackground />
          <Navbar />
          
          <main className="bg-white/90 backdrop-blur-sm">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/coverage" element={<CoverageMap />} />
                {/* Language-specific routes */}
                <Route path="/ar/blog" element={<Blog />} />
                <Route path="/ar/blog/:slug" element={<BlogPost />} />
                <Route path="/en/blog" element={<Blog />} />
                <Route path="/en/blog/:slug" element={<BlogPost />} />
                
                {/* Privacy Policy routes */}
                <Route path="/ar/privacy-policy" element={<PrivacyPolicyAr />} />
                <Route path="/en/privacy-policy" element={<PrivacyPolicyEn />} />
                
                {/* Terms of Service routes */}
                <Route path="/ar/terms-of-service" element={<TermsOfServiceAr />} />
                <Route path="/en/terms-of-service" element={<TermsOfServiceEn />} />
                
                {/* 404 - Catch all unmatched routes */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          
          {/* Floating Contact Button */}
          <ContactFloatingButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
