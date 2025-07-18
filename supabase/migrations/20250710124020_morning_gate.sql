/*
  # به‌روزرسانی لینک‌های تصاویر منو

  1. تغییرات
    - به‌روزرسانی لینک‌های تصاویر آیتم‌های منو با تصاویر معتبر از Pexels
    - اطمینان از کارکرد صحیح تصاویر در وب‌سایت

  2. تصاویر جدید
    - تصاویر با کیفیت بالا از Pexels
    - لینک‌های مستقیم و قابل اعتماد
*/

-- به‌روزرسانی تصاویر آیتم‌های منو
UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE name = 'کاپوچینو کلاسیک';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE name = 'لته وانیل';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE name = 'فرپه شکلات';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE name = 'آیس کافه';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE name = 'تیرامیسو';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE name = 'کیک شکلاتی';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=800'
WHERE name = 'کروسان کره‌ای';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE name = 'ساندویچ پنیری';