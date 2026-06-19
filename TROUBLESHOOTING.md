# دليل حل مشاكل MIME Type

## المشكلة الحالية
السيرفر يعيد `text/html` بدلاً من `application/javascript` لملفات JavaScript و CSS.

## الخطوات التشخيصية

### 1. تحقق من وجود الملفات على السيرفر
افتح المتصفح واذهب إلى:
- `https://doctorcaresa.com/assets/index-Bi_aRyg1.js`
- `https://doctorcaresa.com/assets/index-0z2vbycK.css`

**إذا رأيت محتوى JavaScript/CSS:** الملفات موجودة والمشكلة في MIME types
**إذا رأيت HTML أو 404:** الملفات غير موجودة في المسار الصحيح

### 2. تحقق من نوع السيرفر
- **Apache:** يستخدم ملف `.htaccess`
- **Nginx:** يحتاج إعدادات في ملف الإعدادات الرئيسي

### 3. تحقق من ملف .htaccess
- تأكد من رفع ملف `.htaccess` من مجلد `dist/` إلى الجذر
- تأكد من أن الملف موجود في نفس مجلد `index.html`

### 4. تحقق من إعدادات Apache
تأكد من تفعيل الوحدات التالية:
```bash
# في Ubuntu/Debian
sudo a2enmod rewrite
sudo a2enmod mime
sudo a2enmod headers
sudo systemctl restart apache2
```

### 5. تحقق من إعدادات Nginx
إذا كان السيرفر Nginx، استخدم ملف `nginx.conf` الموجود في `dist/` وأضف الإعدادات إلى ملف الإعدادات الرئيسي.

## الحلول المطبقة

### ✅ 1. تغيير base في vite.config.js
تم تغيير `base: './'` إلى `base: '/'` لاستخدام مسارات مطلقة.

### ✅ 2. تحسين ملف .htaccess
تم تحسين ملف `.htaccess` لمنع إعادة كتابة طلبات `/assets/` بشكل صارم.

### ✅ 3. إنشاء ملف nginx.conf
تم إنشاء ملف إعدادات Nginx.

## خطوات الحل النهائية

### إذا كان السيرفر Apache:

1. **ارفع ملف `.htaccess` من `dist/` إلى الجذر**
2. **تأكد من وجود الملفات في `/assets/` على السيرفر:**
   ```
   /
   ├── index.html
   ├── .htaccess
   └── assets/
       ├── index-Bi_aRyg1.js
       ├── index-0z2vbycK.css
       └── ...
   ```

3. **تحقق من إعدادات Apache:**
   ```apache
   <Directory /var/www/html>
       AllowOverride All
       Require all granted
   </Directory>
   ```

4. **أعد تشغيل Apache:**
   ```bash
   sudo systemctl restart apache2
   ```

### إذا كان السيرفر Nginx:

1. **استخدم ملف `nginx.conf` من `dist/`**
2. **أضف الإعدادات إلى ملف الإعدادات الرئيسي:**
   ```nginx
   location /assets/ {
       try_files $uri =404;
       expires 1M;
       add_header Cache-Control "public, immutable";
   }
   
   location ~* \.(js|mjs)$ {
       add_header Content-Type application/javascript;
   }
   
   location ~* \.css$ {
       add_header Content-Type text/css;
   }
   ```

3. **أعد تحميل Nginx:**
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## اختبار الحل

1. افتح `https://doctorcaresa.com/test-assets.html` (إذا رفعت الملف)
2. أو افتح Developer Tools → Network tab
3. حدّث الصفحة
4. تحقق من أن ملفات `.js` و `.css` تُحمّل بنجاح
5. تحقق من أن `Content-Type` في Response Headers هو:
   - `application/javascript` لملفات JS
   - `text/css` لملفات CSS

## إذا استمرت المشكلة

### المشكلة الأكثر احتمالاً:
**الملفات غير موجودة في `/assets/` على السيرفر**

**الحل:**
1. تأكد من رفع مجلد `dist/assets/` بالكامل
2. تأكد من أن الملفات موجودة في `/assets/` وليس في `/blog/assets/` أو أي مسار آخر
3. تحقق من صلاحيات الملفات (chmod 644 للملفات)

### مشاكل أخرى محتملة:
- السيرفر لا يدعم `.htaccess` (بعض الاستضافات المشتركة)
- إعدادات السيرفر تمنع استخدام `.htaccess`
- مشكلة في DNS أو CDN

## معلومات إضافية

- ملف `.htaccess` يجب أن يكون في نفس مجلد `index.html`
- المسارات في `index.html` كلها مطلقة `/assets/...`
- الملفات يجب أن تكون في `/assets/` على السيرفر



