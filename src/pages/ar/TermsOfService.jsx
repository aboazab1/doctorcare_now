import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const TermsOfService = () => {
  return (
    <>
      <SEO 
        title="شروط الخدمة | عناية الطبيب"
        description="تعرف على شروط الخدمة الخاصة بخدمات عناية الطبيب للرعاية الطبية المنزلية في الرياض. شروط واضحة ومفهومة لضمان أفضل تجربة خدمة."
        keywords="شروط الخدمة، عناية الطبيب، الرعاية الطبية المنزلية، الرياض، شروط الاستخدام، سياسة الخدمة"
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
              شروط الخدمة
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              شروط واضحة ومفهومة لضمان أفضل تجربة خدمة رعاية طبية منزلية
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
                  مرحباً بك في "عناية الطبيب". هذه الشروط تحكم استخدامك لخدماتنا الطبية المنزلية في مدينة الرياض. باستخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  ننصحك بقراءة هذه الشروط بعناية قبل استخدام خدماتنا.
                </p>
              </div>

              {/* Service Definition */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">تعريف الخدمة</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "عناية الطبيب" تقدم خدمات الرعاية الطبية المنزلية التالية في مدينة الرياض فقط:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>إرسال ممرضات متخصصات للرعاية المنزلية</li>
                  <li>تقديم الخدمات الطبية الأساسية في المنزل</li>
                  <li>متابعة الحالات الصحية للمرضى</li>
                  <li>تقديم النصائح الطبية والإرشادات</li>
                  <li>الاستجابة للطوارئ الطبية المنزلية</li>
                  <li>التنسيق مع المستشفيات عند الحاجة</li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>ملاحظة مهمة:</strong> خدماتنا متاحة فقط داخل مدينة الرياض، المملكة العربية السعودية.
                </p>
              </div>

              {/* Liability Limits */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">حدود المسؤولية</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نحن ملتزمون بتقديم أفضل الخدمات الطبية، ولكن هناك حدود لمسؤوليتنا:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>لا نتحمل مسؤولية الاستخدام غير الصحيح لتوصياتنا الطبية بعد انتهاء الزيارة</li>
                  <li>لا نتحمل مسؤولية الحالات الطبية التي تتطلب تدخل جراحي فوري</li>
                  <li>لا نتحمل مسؤولية عدم اتباع المريض للتعليمات الطبية المقدمة</li>
                  <li>لا نتحمل مسؤولية الحالات الطبية الطارئة التي تتطلب نقل فوري للمستشفى</li>
                  <li>لا نتحمل مسؤولية أي أضرار ناتجة عن عدم توفير بيئة آمنة في المنزل</li>
                </ul>
              </div>

              {/* Appointments and Cancellation */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">المواعيد والإلغاء</h2>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">سياسات الحجز:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>يجب الحجز مسبقاً قبل 24 ساعة على الأقل</li>
                  <li>للطوارئ، يمكن الحجز فوراً مع رسوم إضافية</li>
                  <li>يتم تأكيد الموعد عبر الهاتف أو الرسائل النصية</li>
                  <li>يجب توفير معلومات دقيقة عن الحالة الصحية</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">سياسات الإلغاء:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>يمكن الإلغاء قبل 4 ساعات من الموعد بدون رسوم</li>
                  <li>الإلغاء خلال 4 ساعات يخضع لرسوم إلغاء 50%</li>
                  <li>عدم الحضور بدون إشعار مسبق يخضع لرسوم كاملة</li>
                  <li>للطوارئ، يمكن إلغاء الموعد في أي وقت</li>
                </ul>
              </div>

              {/* Pricing and Payments */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">الأسعار والمدفوعات</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  سياسات الأسعار والدفع:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>يتم الاتفاق على الأسعار مسبقاً مع العميل قبل تقديم الخدمة</li>
                  <li>الأسعار تشمل الخدمة الطبية والنقل داخل الرياض</li>
                  <li>رسوم إضافية للزيارات خارج ساعات العمل العادية</li>
                  <li>رسوم إضافية للطوارئ والزيارات العاجلة</li>
                  <li>يمكن الدفع نقداً أو بالتحويل البنكي</li>
                  <li>يتم إصدار فاتورة رسمية لكل خدمة</li>
                </ul>
              </div>

              {/* Client Obligations */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">التزامات العميل</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  يتعهد العميل بما يلي:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>توفير بيئة آمنة ومناسبة للفريق الطبي</li>
                  <li>تقديم معلومات طبية دقيقة وصحيحة</li>
                  <li>الالتزام بالتعليمات الطبية المقدمة</li>
                  <li>توفير الوثائق الطبية المطلوبة</li>
                  <li>إعلامنا بأي تغييرات في الحالة الصحية</li>
                  <li>السماح للفريق الطبي بالوصول للمريض</li>
                  <li>توفير بيئة نظيفة ومناسبة للرعاية</li>
                </ul>
              </div>

              {/* Company Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">حقوق الشركة</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  تحتفظ الشركة بالحقوق التالية:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>رفض تقديم الخدمة في حال وجود مخاطر صحية أو أمنية</li>
                  <li>إنهاء الخدمة فوراً في حال عدم الالتزام بالشروط</li>
                  <li>طلب نقل المريض للمستشفى في الحالات الطارئة</li>
                  <li>رفض الخدمة في حال عدم توفير البيئة المناسبة</li>
                  <li>تعديل أوقات الخدمة حسب الحاجة الطبية</li>
                  <li>طلب مساعدة إضافية من أفراد العائلة عند الحاجة</li>
                </ul>
              </div>

              {/* Medical Emergency */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">الطوارئ الطبية</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  في حالات الطوارئ الطبية:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>نقوم بالاستجابة الفورية للطوارئ</li>
                  <li>ننسق مع المستشفيات القريبة عند الحاجة</li>
                  <li>نقدم الإسعافات الأولية اللازمة</li>
                  <li>نرافق المريض للمستشفى إذا لزم الأمر</li>
                  <li>نواصل المتابعة مع العائلة</li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <p className="text-red-800 font-semibold">
                    <strong>تنبيه:</strong> في حالات الطوارئ الخطيرة، قد نطلب نقل فوري للمستشفى. هذا قرار طبي لا يمكن تجاوزه.
                  </p>
                </div>
              </div>

              {/* Confidentiality */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">السرية والخصوصية</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نحن ملتزمون بالحفاظ على سرية وخصوصية معلوماتك الطبية:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>جميع المعلومات الطبية محمية بسرية تامة</li>
                  <li>لا نشارك المعلومات إلا مع المختصين الطبيين</li>
                  <li>نحافظ على سرية الحالة الصحية للمريض</li>
                  <li>نلتزم بالقوانين الطبية والأخلاقية</li>
                  <li>نحافظ على سرية بيانات العائلة</li>
                </ul>
              </div>

              {/* Service Updates */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">تحديثات الخدمة</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نحتفظ بالحق في:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>تعديل هذه الشروط في أي وقت</li>
                  <li>تطوير وتحسين خدماتنا</li>
                  <li>إضافة خدمات جديدة</li>
                  <li>تعديل الأسعار مع إشعار مسبق</li>
                  <li>تحديث سياسات العمل</li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  سيتم إشعار العملاء بأي تغييرات مهمة عبر الموقع أو الهاتف.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">معلومات الاتصال</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  للاستفسارات أو الشكاوى، يرجى التواصل معنا:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">عناية الطبيب</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>الهاتف:</strong> اتصل بنا</p>
                    <p><strong>البريد الإلكتروني:</strong> Info@doctorcaresa.com</p>
                    <p><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</p>
                    <p><strong>ساعات العمل:</strong> 24/7 للطوارئ</p>
                    <p><strong>الطوارئ:</strong> اتصل بنا</p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">الخلاصة</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  هذه الشروط تم وضعها لضمان تقديم أفضل خدمات الرعاية الطبية المنزلية في مدينة الرياض. نحن ملتزمون بتقديم خدمة متميزة وآمنة لجميع عملائنا.
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

export default TermsOfService;
