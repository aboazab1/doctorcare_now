import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Use absolute paths for deployment
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  assetsInclude: ['**/*.md'],
  define: {
    global: 'globalThis',
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            // React core
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            // Framer Motion (large library)
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            // Router
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            // i18n
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'vendor-i18n';
            }
            // Markdown parser
            if (id.includes('react-markdown') || id.includes('remark') || id.includes('rehype')) {
              return 'vendor-markdown';
            }
            // Icons
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'vendor-icons';
            }
            // Other node_modules
            return 'vendor-other';
          }
          
          // Page chunks - split large pages
          if (id.includes('/pages/')) {
            if (id.includes('Services')) {
              return 'pages-services';
            }
            if (id.includes('About')) {
              return 'pages-about';
            }
            if (id.includes('Blog')) {
              return 'pages-blog';
            }
            if (id.includes('Contact')) {
              return 'pages-contact';
            }
            if (id.includes('FAQ')) {
              return 'pages-faq';
            }
            if (id.includes('Home')) {
              return 'pages-home';
            }
            return 'pages-other';
          }
          
          // Component chunks
          if (id.includes('/components/')) {
            if (id.includes('Testimonials') || id.includes('HeroSection')) {
              return 'components-featured';
            }
            return 'components-other';
          }
        },
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
  }
})



