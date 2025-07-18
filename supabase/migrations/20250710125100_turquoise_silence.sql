/*
  # Fix Image Loading Issues

  1. Update all menu items with working, reliable image URLs
  2. Use high-quality food and beverage images from Unsplash
  3. Ensure all URLs are properly formatted and accessible
*/

-- Update menu items with working image URLs from Unsplash
UPDATE menu_items 
SET image_url = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&crop=center'
WHERE name = 'کاپوچینو کلاسیک';

UPDATE menu_items 
SET image_url = 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&crop=center'
WHERE name = 'لته وانیل';

UPDATE menu_items 
SET image_url = 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop&crop=center'
WHERE name = 'فرپه شکلات';

UPDATE menu_items 
SET image_url = 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=400&fit=crop&crop=center'
WHERE name = 'آیس کافه';

UPDATE menu_items 
SET image_url = 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop&crop=center'
WHERE name = 'تیرامیسو';

UPDATE menu_items 
SET image_url = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&crop=center'
WHERE name = 'کیک شکلاتی';

UPDATE menu_items 
SET image_url = 'https://images.unsplash.com/photo-1555507036-ab794f4afe5e?w=600&h=400&fit=crop&crop=center'
WHERE name = 'کروسان کره‌ای';

UPDATE menu_items 
SET image_url = 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&h=400&fit=crop&crop=center'
WHERE name = 'ساندویچ پنیری';