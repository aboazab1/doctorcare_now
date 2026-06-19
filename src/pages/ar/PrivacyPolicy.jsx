import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="سياسة الخصوصية | عناية الطبيب"
        description="تعرف على سياسة الخصوصية الخاصة بخدمات عناية الطبيب للرعاية الطبية المنزلية في الرياض. نحمي خصوصيتك وبياناتك الشخصية بأعلى معايير الأمان."
        keywords="سياسة الخصوصية، عناية الطبيب، الرعاية الطبية المنزلية، الرياض، حماية البيانات، الخصوصية"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-white to-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              سياسة الخصوصية
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نلتزم بحماية خصوصيتك وبياناتك الشخصية بأعلى معايير الأمان والسرية
            </p>
            <p className="text-sm text-gray-500 mt-4">
              آخر تحديث: يناير 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">مقدمة</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  في شركة "عناية الطبيب"، ندرك أهمية خصوصيتك وثقتك في خدماتنا. هذه السياسة توضح كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند استخدام خدمات الرعاية الطبية المنزلية التي نقدمها في مدينة الرياض.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نحن ملتزمون بحماية خصوصيتك وضمان أمان بياناتك الشخصية وفقاً لأعلى المعايير الطبية والأخلاقية.
                </p>
              </div>

              {/* Information Collection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">جمع المعلومات</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نجمع المعلومات التالية لتقديم أفضل خدمات الرعاية الطبية المنزلية:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>البيانات الشخصية:</strong> الاسم الكامل، رقم الهاتف، البريد الإلكتروني، العنوان، العمر، الجنس</li>
                  <li><strong>البيانات الطبية:</strong> التاريخ المرضي، الأدوية الحالية، الحساسيات، الحالة الصحية الحالية</li>
                  <li><strong>بيانات الطوارئ:</strong> معلومات الاتصال في حالات الطوارئ</li>
                  <li><strong>بيانات الموقع:</strong> عنوان المنزل للوصول إليك</li>
                  <li><strong>بيانات الدفع:</strong> معلومات الفواتير والدفع (محفوظة بأمان)</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">كيفية استخدام المعلومات</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نستخدم معلوماتك الشخصية للأغراض التالية:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>تقديم خدمات الرعاية الطبية المنزلية المطلوبة</li>
                  <li>تنسيق المواعيد والزيارات الطبية</li>
                  <li>التواصل معك حول حالتك الصحية ومواعيدك</li>
                  <li>توفير الدعم الطبي في حالات الطوارئ</li>
                  <li>تحسين جودة خدماتنا وتطويرها</li>
                  <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">حماية البيانات</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نطبق أعلى معايير الأمان لحماية معلوماتك:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>التشفير:</strong> جميع البيانات محمية بتشفير متقدم</li>
                  <li><strong>الوصول المحدود:</strong> فقط الفريق الطبي المختص يمكنه الوصول لبياناتك</li>
                  <li><strong>النسخ الاحتياطية:</strong> نسخ احتياطية آمنة ومشفرة</li>
                  <li><strong>التدريب المستمر:</strong> فريقنا مدرب على حماية الخصوصية</li>
                  <li><strong>المراجعة الدورية:</strong> مراجعة دورية لأنظمة الأمان</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">مشاركة البيانات</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نحن لا نبيع أو نؤجر معلوماتك الشخصية لأي طرف ثالث. قد نشارك معلوماتك فقط في الحالات التالية:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>عند الحاجة الطبية العاجلة لإنقاذ الحياة</li>
                  <li>بموافقة صريحة منك</li>
                  <li>عندما يتطلب القانون ذلك</li>
                  <li>مع مقدمي الخدمات الطبية المعتمدين (مع ضمان السرية)</li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">ملفات تعريف الارتباط (Cookies)</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>تذكر تفضيلاتك اللغوية</li>
                  <li>تحسين أداء الموقع</li>
                  <li>تحليل استخدام الموقع (بشكل مجهول)</li>
                  <li>توفير تجربة مستخدم أفضل</li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  يمكنك إدارة ملفات تعريف الارتباط من خلال إعدادات المتصفح.
                </p>
              </div>

              {/* User Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">حقوقك</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>الوصول:</strong> طلب نسخة من بياناتك الشخصية</li>
                  <li><strong>التصحيح:</strong> تصحيح أي معلومات غير دقيقة</li>
                  <li><strong>الحذف:</strong> طلب حذف بياناتك (مع مراعاة المتطلبات القانونية)</li>
                  <li><strong>الحد من المعالجة:</strong> طلب تقييد استخدام بياناتك</li>
                  <li><strong>الاعتراض:</strong> الاعتراض على معالجة بياناتك</li>
                  <li><strong>النقل:</strong> نقل بياناتك إلى خدمة أخرى</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">معلومات الاتصال</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية أو تريد ممارسة أي من حقوقك، يرجى التواصل معنا:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">عناية الطبيب</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>الهاتف:</strong> اتصل بنا</p>
                    <p><strong>البريد الإلكتروني:</strong> privacy@doctorcare.sa</p>
                    <p><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</p>
                    <p><strong>ساعات العمل:</strong> 24/7 للطوارئ</p>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">تحديثات السياسة</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>إشعار على موقعنا الإلكتروني</li>
                  <li>رسالة نصية أو بريد إلكتروني</li>
                  <li>مكالمة هاتفية للطوارئ</li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  ننصحك بمراجعة هذه السياسة بانتظام للاطلاع على أي تحديثات.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">الخلاصة</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  في "عناية الطبيب"، نؤمن بأن خصوصيتك هي حق أساسي. نحن ملتزمون بحماية معلوماتك الشخصية وتقديم خدمات رعاية طبية منزلية آمنة وموثوقة في مدينة الرياض.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  شكراً لثقتك في خدماتنا. نحن هنا لخدمتك ورعايتك.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
