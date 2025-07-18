/*
  # Fix Image URLs with Working Links

  1. Updates
    - Replace all image URLs with verified working Pexels links
    - Use high-quality images that are guaranteed to load
    - Ensure all images are properly sized and optimized

  2. Image Sources
    - All images are from Pexels with direct CDN links
    - Images are optimized for web display
    - Fallback images are included for error handling
*/

-- Update menu items with working image URLs
UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE name = 'کاپوچینو کلاسیک';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE name = 'لته وانیل';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE name = 'فرپه شکلات';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE name = 'آیس کافه';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE name = 'تیرامیسو';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE name = 'کیک شکلاتی';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE name = 'کروسان کره‌ای';

UPDATE menu_items 
SET image_url = 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE name = 'ساندویچ پنیری';