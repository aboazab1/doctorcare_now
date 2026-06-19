/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // الألوان الأساسية المحدثة لتتناسب مع لوجو "عناية طبيب"
        primary: '#3498DB',        // الأزرق الفيروزي من حرف "D" وسماعة الطبيب
        secondary: '#5A5A5A',      // الرمادي الغامق من كلمة "عناية طبيب"
        background: '#FFFFFF',     // الأبيض النقي للخلفيات الرئيسية
        
        // ألوان النصوص
        'text-primary': '#5A5A5A',   // النص الرئيسي
        'text-secondary': '#888888', // النص الثانوي
        
        // درجات الأزرق المحدثة
        blue: {
          50: '#EBF8FF',
          100: '#BEE3F8',
          200: '#90CDF4',
          300: '#63B3ED',
          400: '#4299E1',
          500: '#3498DB',  // اللون الأساسي
          600: '#2B7BC7',
          700: '#2C5F8B',
          800: '#2A4A6B',
          900: '#1E3A52',
        },
        
        // درجات الرمادي المحدثة
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#5A5A5A',  // اللون الثانوي
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        
        // ألوان طبية متدرجة
        medical: {
          50: '#EBF8FF',
          100: '#BEE3F8',
          200: '#90CDF4',
          300: '#63B3ED',
          400: '#4299E1',
          500: '#3498DB',
          600: '#2B7BC7',
          700: '#2C5F8B',
          800: '#2A4A6B',
          900: '#1E3A52',
        }
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}



