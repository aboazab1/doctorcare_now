# إعداد BIMI (Brand Indicators for Message Identification)

## ما هو BIMI؟
BIMI يسمح بعرض شعار علامتك التجارية في رسائل البريد الإلكتروني التي ترسلها، مما يعزز الثقة والمصداقية.

---

## المتطلبات الأساسية

### 1. ملف SVG للشعار
- ✅ الملف موجود: `bimi-logo.svg`
- 📋 **مهم**: يجب استبدال هذا الملف بشعارك الرسمي بتنسيق SVG
- 📐 الحجم الموصى به: 200x200 بكسل (مربع)
- 🎨 يجب أن يكون الشعار بسيط وواضح
- 🔍 يجب أن يكون قابل للتكبير (vector format)

### 2. شهادة VMC (اختياري لكن مطلوبة لـ Gmail)
- 🔒 شهادة Verified Mark Certificate (VMC)
- 💰 تتطلب شراء من جهة معتمدة (حوالي $1300-2000 سنوياً)
- 📄 ملف PEM الخاص بالشهادة

---

## خطوات الإعداد

### الخطوة 1: تحضير ملف SVG

#### خيار أ: تحويل logo.png إلى SVG
1. استخدم إحدى الأدوات التالية:
   - https://convertio.co/png-svg/
   - https://www.vectorizer.io/
   - Adobe Illustrator
   - Inkscape (مجاني)

2. احفظ الملف باسم `bimi-logo.svg` في مجلد `public/brand/`

3. تأكد من:
   - الحجم: 200x200 بكسل
   - الخلفية: شفافة أو بيضاء
   - التنسيق: SVG فقط

#### خيار ب: إنشاء شعار SVG جديد
- استخدم Adobe Illustrator أو Inkscape
- احفظه باسم `bimi-logo.svg`

---

### الخطوة 2: رفع الملف إلى السيرفر

بعد رفع المشروع:
- الملف يجب أن يكون متاحاً على: `https://doctorcaresa.com/brand/bimi-logo.svg`
- تأكد من أن الملف قابل للوصول علناً (public)

---

### الخطوة 3: إضافة سجل DNS TXT

#### أ. سجل BIMI مع شهادة VMC (لـ Gmail)

اذهب إلى موفر نطاقك (مثل GoDaddy, Hostinger, etc.) وأضف سجل TXT:

**إعدادات السجل:**
```
Type: TXT
Host: default._bimi.doctorcaresa.com
Value: v=BIMI1;l=https://doctorcaresa.com/brand/bimi-logo.svg;a=https://doctorcaresa.com/brand/certificate.pem
TTL: 3600 (1 hour)
```

**ملاحظة مهمة:**
- `l=` = رابط ملف SVG
- `a=` = رابط شهادة VMC (PEM file)
- استبدل `doctorcaresa.com` بعنوان نطاقك الفعلي إذا كان مختلفاً

---

#### ب. سجل BIMI بدون شهادة VMC (للمزودات الأخرى غير Gmail)

**إعدادات السجل:**
```
Type: TXT
Host: default._bimi.doctorcaresa.com
Value: v=BIMI1;l=https://doctorcaresa.com/brand/bimi-logo.svg
TTL: 3600 (1 hour)
```

---

### الخطوة 4: التحقق من الإعداد

بعد إضافة السجل (قد يستغرق 48 ساعة):

1. **فحص DNS:**
   ```
   nslookup -type=TXT default._bimi.doctorcaresa.com
   ```
   أو استخدم: https://mxtoolbox.com/TXTLookup.aspx

2. **فحص ملف SVG:**
   - افتح: https://doctorcaresa.com/brand/bimi-logo.svg
   - يجب أن يظهر الشعار بشكل صحيح

3. **اختبار BIMI:**
   - أرسل رسالة بريد إلكتروني من نطاقك
   - تحقق من ظهور الشعار في صندوق الوارد

---

## معلومات إضافية

### موفرو البريد المدعومون حالياً:
- ✅ Gmail (يتطلب VMC)
- ✅ Yahoo Mail (يدعم بدون VMC)
- ✅ Apple Mail (يدعم بدون VMC)
- ✅ Outlook.com (في التطوير)

### تكلفة شهادة VMC:
- حوالي $1,300 - $2,000 سنوياً
- موفرو VMC:
  - Entrust Datacard
  - DigiCert
  - GlobalSign

### بدون VMC:
- BIMI سيعمل مع معظم مزودي البريد (عدا Gmail)
- مجاني تماماً
- سهل الإعداد

---

## دعم

إذا واجهت مشاكل:
1. تأكد من أن ملف SVG متاح علناً
2. تحقق من صحة سجل DNS (قد يستغرق 48 ساعة)
3. استخدم أدوات فحص DNS للتحقق
4. راجع: https://bimigroup.org/

---

## الخطوات التالية

1. ✅ إنشاء/تحويل ملف SVG
2. ⏳ رفع المشروع إلى السيرفر
3. ⏳ إضافة سجل DNS TXT
4. ⏳ انتظار 48 ساعة للتفعيل
5. ⏳ اختبار بإرسال بريد إلكتروني

---

**تاريخ الإنشاء:** 2024-12-19
**النطاق:** doctorcaresa.com





