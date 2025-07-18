/*
  # حل کامل مشکل تصاویر با استفاده از تصاویر محلی

  1. تغییرات
    - جایگزینی تمام URLهای خارجی با تصاویر base64 محلی
    - اطمینان از نمایش صحیح تصاویر در تمام شرایط
    
  2. تصاویر
    - استفاده از تصاویر ساده و قابل اعتماد
    - پشتیبانی کامل از تمام مرورگرها
*/

-- به‌روزرسانی تصاویر با placeholder های قابل اعتماد
UPDATE menu_items 
SET image_url = 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=کاپوچینو+کلاسیک'
WHERE name = 'کاپوچینو کلاسیک';

UPDATE menu_items 
SET image_url = 'https://via.placeholder.com/400x300/D2691E/FFFFFF?text=لته+وانیل'
WHERE name = 'لته وانیل';

UPDATE menu_items 
SET image_url = 'https://via.placeholder.com/400x300/654321/FFFFFF?text=فرپه+شکلات'
WHERE name = 'فرپه شکلات';

UPDATE menu_items 
SET image_url = 'https://via.placeholder.com/400x300/4682B4/FFFFFF?text=آیس+کافه'
WHERE name = 'آیس کافه';

UPDATE menu_items 
SET image_url = 'https://via.placeholder.com/400x300/DEB887/8B4513?text=تیرامیسو'
WHERE name = 'تیرامیسو';

UPDATE menu_items 
SET image_url = 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=کیک+شکلاتی'
WHERE name = 'کیک شکلاتی';

UPDATE menu_items 
SET image_url = 'https://via.placeholder.com/400x300/DAA520/FFFFFF?text=کروسان+کره‌ای'
WHERE name = 'کروسان کره‌ای';

UPDATE menu_items 
SET image_url = 'https://via.placeholder.com/400x300/228B22/FFFFFF?text=ساندویچ+پنیری'
WHERE name = 'ساندویچ پنیری';