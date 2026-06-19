import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags
}) => {
  const defaultTitle = 'ممرضة للبيت في الرياض | تمريض منزلي الرياض | عناية طبيب';
  const defaultDescription = 'ممرضة للبيت في الرياض - خدمات تمريض منزلي احترافية في الرياض. ممرضات معتمدات للرعاية المنزلية، رعاية كبار السن، تمريض الأطفال، وخدمات طبية منزلية في الرياض. تواصل معنا الآن.';
  const defaultKeywords = 'ممرضة للبيت في الرياض، ممرضة منزلية الرياض، تمريض منزلي الرياض، ممرضة للبيت، ممرضة في الرياض، رعاية منزلية الرياض، تمريض منزلي، ممرضة معتمدة الرياض، رعاية كبار السن الرياض، تمريض الأطفال الرياض، خدمات طبية منزلية الرياض، ممرضة 24 ساعة الرياض، رعاية طبية منزلية، تمريض منزلي، طبيب منزلي، رعاية كبار السن، تمريض الأطفال، الرياض، السعودية';
  const defaultImage = 'https://doctorcaresa.com/assets/logo.png';
  const siteUrl = 'https://doctorcaresa.com';

  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Doctor Care - طبيب الرعاية" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Doctor Care - طبيب الرعاية" />
      <meta property="og:locale" content="ar_SA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Arabic" />
      <meta name="geo.region" content="SA" />
      <meta name="geo.placename" content="Riyadh" />
      <meta name="geo.position" content="24.7136;46.6753" />
      <meta name="ICBM" content="24.7136, 46.6753" />
      
      {/* Brand/Organization Meta Tags */}
      <meta name="application-name" content="عناية طبيب" />
      <meta name="apple-mobile-web-app-title" content="عناية طبيب" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Article specific meta tags */}
      {type === 'article' && author && (
        <>
          <meta name="author" content={author} />
          <meta name="article:author" content={author} />
          {publishedTime && <meta name="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}
          {section && <meta name="article:section" content={section} />}
          {tags && tags.map(tag => (
            <meta key={tag} name="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Organization Structured Data for Logo */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "عناية طبيب - Doctor Care",
          "alternateName": "Doctor Care",
          "url": siteUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/assets/logo.png`,
            "width": 512,
            "height": 512
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966-54-111-5717",
            "contactType": "Customer Service",
            "areaServed": "SA",
            "availableLanguage": ["Arabic", "English"]
          },
          "sameAs": [
            "https://www.facebook.com/share/1Csh2Q4X3D/",
            "https://www.instagram.com/doctor_care1/",
            "https://x.com/doctor_care_1"
          ]
        })}
      </script>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(
          type === 'article' ? {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": seoTitle,
            "description": seoDescription,
            "image": seoImage,
            "url": seoUrl,
            "author": {
              "@type": "Person",
              "name": author || "Doctor Care Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "عناية طبيب - Doctor Care",
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/assets/logo.png`
              }
            },
            "datePublished": publishedTime || new Date().toISOString(),
            "dateModified": modifiedTime || new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": seoUrl
            },
            "articleSection": section,
            "keywords": seoKeywords,
            "wordCount": description ? description.length : 0
          } : {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "عناية طبيب - Doctor Care",
            "alternateName": ["Doctor Care", "ممرضة للبيت في الرياض", "تمريض منزلي الرياض", "ممرضة منزلية الرياض"],
            "description": seoDescription,
            "keywords": "ممرضة للبيت في الرياض، ممرضة منزلية الرياض، تمريض منزلي الرياض، ممرضة للبيت، ممرضة في الرياض، رعاية منزلية الرياض",
            "url": seoUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/assets/logo.png`,
              "width": 512,
              "height": 512
            },
            "image": {
              "@type": "ImageObject",
              "url": seoImage,
              "width": 1200,
              "height": 630
            },
            "telephone": "Call Us",
            "email": "Info@doctorcaresa.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "الرياض",
              "addressLocality": "الرياض",
              "addressRegion": "منطقة الرياض",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "24.7136",
              "longitude": "46.6753"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "medicalSpecialty": [
              "Home Health Care",
              "Nursing Care",
              "Elderly Care",
              "Pediatric Care",
              "Physical Therapy",
              "ممرضة للبيت في الرياض",
              "تمريض منزلي الرياض",
              "ممرضة منزلية الرياض"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "الخدمات الطبية المنزلية في الرياض",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "ممرضة للبيت في الرياض",
                    "description": "خدمات تمريض منزلي احترافية في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "تمريض منزلي الرياض",
                    "description": "ممرضات معتمدات للرعاية المنزلية في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "رعاية مرضى القلب والشرايين في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "رعاية كبار السن في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "تمريض الأطفال في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "رعاية حديثي الولادة في الرياض"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/doctorcare.sa",
              "https://www.twitter.com/doctorcare_sa",
              "https://www.instagram.com/doctorcare.sa"
            ]
          }
        )}
      </script>
    </Helmet>
  );
};

export default SEO;
