# دليل إعداد BIMI خطوة بخطوة - بالعربية

## 📧 ما هو BIMI؟

BIMI (Brand Indicators for Message Identification) يسمح بعرض شعار علامتك التجارية بجانب رسائل البريد الإلكتروني في صندوق الوارد، مما يعزز الثقة والمصداقية.

---

## 📋 المتطلبات

### 1. ملف SVG للشعار ✅
- الملف موجود: `bimi-logo.svg`
- **يجب استبداله بشعارك الرسمي**

### 2. شهادة VMC (اختياري)
- مطلوبة فقط لـ **Gmail**
- تكلفة: ~$1,300-2,000 سنوياً
- بدونها: BIMI سيعمل مع Yahoo و Apple Mail و Outlook

---

## 🔧 خطوات الإعداد

### الخطوة 1: تحضير ملف SVG

#### الطريقة الأسهل:
1. اذهب إلى: https://convertio.co/png-svg/
2. ارفع `logo.png` من `public/assets/logo.png`
3. حمّل الملف المحوّل
4. احفظه باسم `bimi-logo.svg` في `public/brand/`

**متطلبات ملف SVG:**
- الحجم: 200x200 بكسل (مربع)
- الخلفية: شفافة أو بيضاء
- بسيط وواضح

---

### الخطوة 2: رفع المشروع

1. شغّل `npm run build`
2. ارفع محتويات `dist/` إلى السيرفر
3. تأكد من أن الملف متاح على:
   ```
   https://doctorcaresa.com/brand/bimi-logo.svg
   ```

---

### الخطوة 3: إضافة سجل DNS

اذهب إلى لوحة تحكم موفر النطاق (GoDaddy, Hostinger, etc.)

#### أ. إذا كان لديك شهادة VMC (لـ Gmail):

**إضافة سجل TXT:**

| الحقل | القيمة |
|------|--------|
| **Type** | TXT |
| **Host** | `default._bimi.doctorcaresa.com` |
| **Value** | `v=BIMI1;l=https://doctorcaresa.com/brand/bimi-logo.svg;a=https://doctorcaresa.com/brand/certificate.pem` |
| **TTL** | 3600 |

---

#### ب. بدون شهادة VMC (للمزودات الأخرى):

**إضافة سجل TXT:**

| الحقل | القيمة |
|------|--------|
| **Type** | TXT |
| **Host** | `default._bimi.doctorcaresa.com` |
| **Value** | `v=BIMI1;l=https://doctorcaresa.com/brand/bimi-logo.svg` |
| **TTL** | 3600 |

---

### الخطوة 4: التحقق

#### 1. فحص ملف SVG:
افتح في المتصفح:
```
https://doctorcaresa.com/brand/bimi-logo.svg
```
يجب أن يظهر الشعار بشكل صحيح.

---

#### 2. فحص سجل DNS:

استخدم: https://mxtoolbox.com/TXTLookup.aspx

أدخل:
```
default._bimi.doctorcaresa.com
```

يجب أن يظهر سجل TXT الذي أضفته.

---

#### 3. اختبار BIMI:

1. أرسل رسالة بريد إلكتروني من `@doctorcaresa.com`
2. افتح الرسالة في:
   - Yahoo Mail (يدعم بدون VMC)
   - Apple Mail (يدعم بدون VMC)
   - Gmail (يتطلب VMC)

3. يجب أن يظهر الشعار بجانب اسم المرسل.

---

## ⏰ المدة الزمنية

- **DNS**: قد يستغرق 24-48 ساعة حتى يبدأ العمل
- **BIMI**: بعد تفعيل DNS، قد يستغرق ساعات إضافية

---

## 🔍 استكشاف الأخطاء

### المشكلة: ملف SVG لا يظهر
- ✅ تأكد من أن الملف موجود على السيرفر
- ✅ تأكد من أن الملف متاح علناً (public)
- ✅ جرب فتح الرابط مباشرة في المتصفح

### المشكلة: BIMI لا يعمل
- ✅ تحقق من صحة سجل DNS (انتظر 48 ساعة)
- ✅ تأكد من صحة تنسيق السجل (انتبه للأحرف: 1, I, l)
- ✅ تحقق من أن ملف SVG بتنسيق صحيح

### المشكلة: Gmail لا يظهر الشعار
- ℹ️ Gmail يتطلب شهادة VMC
- ℹ️ بدون VMC، BIMI سيعمل مع مزودي بريد آخرين

---

## 📞 الموارد الإضافية

- موقع BIMI الرسمي: https://bimigroup.org/
- أداة فحص DNS: https://mxtoolbox.com/
- أداة تحويل PNG إلى SVG: https://convertio.co/png-svg/

---

## ✅ قائمة التحقق النهائية

- [ ] ملف SVG جاهز في `public/brand/bimi-logo.svg`
- [ ] تم رفع المشروع إلى السيرفر
- [ ] ملف SVG متاح على: `https://doctorcaresa.com/brand/bimi-logo.svg`
- [ ] تم إضافة سجل DNS TXT
- [ ] تم التحقق من سجل DNS (بعد 48 ساعة)
- [ ] تم اختبار إرسال بريد إلكتروني
- [ ] الشعار يظهر في صندوق الوارد ✅

---

**جاهز للاستخدام! 🎉**





