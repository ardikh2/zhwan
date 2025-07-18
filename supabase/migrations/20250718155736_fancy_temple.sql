/*
  # به‌روزرسانی تصاویر نمونه با لینک‌های معتبر

  1. تغییرات
    - به‌روزرسانی تصاویر آیتم‌های منو با لینک‌های معتبر از Pexels
    - اطمینان از نمایش صحیح تصاویر

  2. تصاویر
    - استفاده از تصاویر واقعی و زیبا از Pexels
    - تصاویر مناسب برای هر دسته‌بندی
*/

-- به‌روزرسانی تصاویر آیتم‌های منو
UPDATE menu_items SET 
  image_url = 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  updated_at = now()
WHERE name = 'کاپوچینو کلاسیک';

UPDATE menu_items SET 
  image_url = 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  updated_at = now()
WHERE name = 'لته وانیل';

UPDATE menu_items SET 
  image_url = 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  updated_at = now()
WHERE name = 'فرپه شکلات';

UPDATE menu_items SET 
  image_url = 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  updated_at = now()
WHERE name = 'آیس کافه';

UPDATE menu_items SET 
  image_url = 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  updated_at = now()
WHERE name = 'تیرامیسو';

UPDATE menu_items SET 
  image_url = 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  updated_at = now()
WHERE name = 'کیک شکلاتی';

UPDATE menu_items SET 
  image_url = 'https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  updated_at = now()
WHERE name = 'کروسان کره‌ای';

UPDATE menu_items SET 
  image_url = 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  updated_at = now()
WHERE name = 'ساندویچ پنیری';