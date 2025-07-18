/*
  # اضافه کردن داده‌های نمونه

  1. داده‌های نمونه
    - 4 دسته‌بندی: نوشیدنی‌های گرم، نوشیدنی‌های سرد، دسرها، غذاهای سبک
    - 8 آیتم منو با تصاویر و قیمت‌های مناسب

  2. نکات
    - استفاده از تصاویر placeholder با متن فارسی
    - قیمت‌ها به تومان
    - توضیحات کامل برای هر آیتم
*/

-- اضافه کردن دسته‌بندی‌ها
INSERT INTO public.categories (name) VALUES
  ('نوشیدنی‌های گرم'),
  ('نوشیدنی‌های سرد'),
  ('دسرها'),
  ('غذاهای سبک')
ON CONFLICT DO NOTHING;

-- اضافه کردن آیتم‌های منو
INSERT INTO public.menu_items (name, description, price, image_url, category_id) VALUES
  (
    'کاپوچینو کلاسیک',
    'ترکیبی از اسپرسو، شیر داغ و کف شیر با طعم بی‌نظیر',
    45000,
    'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    (SELECT id FROM public.categories WHERE name = 'نوشیدنی‌های گرم' LIMIT 1)
  ),
  (
    'لته وانیل',
    'اسپرسو با شیر داغ و سیروپ وانیل خوشمزه',
    50000,
    'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    (SELECT id FROM public.categories WHERE name = 'نوشیدنی‌های گرم' LIMIT 1)
  ),
  (
    'فرپه شکلات',
    'نوشیدنی سرد شکلاتی با کف شیر و خامه',
    55000,
    'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400',
    (SELECT id FROM public.categories WHERE name = 'نوشیدنی‌های سرد' LIMIT 1)
  ),
  (
    'آیس کافه',
    'قهوه سرد با یخ و کمی شیر',
    40000,
    'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=400',
    (SELECT id FROM public.categories WHERE name = 'نوشیدنی‌های سرد' LIMIT 1)
  ),
  (
    'تیرامیسو',
    'دسر ایتالیایی با بیسکویت و کرم ماسکارپونه',
    65000,
    'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
    (SELECT id FROM public.categories WHERE name = 'دسرها' LIMIT 1)
  ),
  (
    'کیک شکلاتی',
    'کیک شکلاتی خوشمزه با روکش گاناش',
    55000,
    'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    (SELECT id FROM public.categories WHERE name = 'دسرها' LIMIT 1)
  ),
  (
    'کروسان کره‌ای',
    'کروسان تازه با کره خالص',
    35000,
    'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400',
    (SELECT id FROM public.categories WHERE name = 'غذاهای سبک' LIMIT 1)
  ),
  (
    'ساندویچ پنیری',
    'ساندویچ گرم با پنیر و سبزیجات تازه',
    45000,
    'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
    (SELECT id FROM public.categories WHERE name = 'غذاهای سبک' LIMIT 1)
  )
ON CONFLICT DO NOTHING;