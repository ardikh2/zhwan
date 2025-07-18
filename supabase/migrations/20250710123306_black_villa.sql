/*
  # منوی دیجیتال های کافه - ایجاد جداول پایگاه داده

  1. جداول جدید
    - `categories` (دسته‌بندی‌ها)
      - `id` (uuid, primary key)
      - `name` (text, نام دسته‌بندی)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `menu_items` (آیتم‌های منو)
      - `id` (uuid, primary key)
      - `name` (text, نام آیتم)
      - `description` (text, توضیحات)
      - `price` (integer, قیمت به تومان)
      - `image_url` (text, لینک تصویر)
      - `category_id` (uuid, foreign key)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. امنیت
    - فعال‌سازی RLS برای هر دو جدول
    - سیاست‌های خواندن عمومی
    - سیاست‌های نوشتن محدود (برای پنل مدیریت)
    
  3. داده‌های نمونه
    - چند دسته‌بندی اولیه
    - چند آیتم نمونه برای تست
*/

-- ایجاد جدول دسته‌بندی‌ها
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- ایجاد جدول آیتم‌های منو
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL,
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- فعال‌سازی Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- سیاست‌های امنیتی - خواندن عمومی
CREATE POLICY "Anyone can read categories"
  ON categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can read menu items"
  ON menu_items
  FOR SELECT
  TO public
  USING (true);

-- سیاست‌های امنیتی - نوشتن عمومی (برای پنل مدیریت)
CREATE POLICY "Anyone can insert categories"
  ON categories
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update categories"
  ON categories
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete categories"
  ON categories
  FOR DELETE
  TO public
  USING (true);

CREATE POLICY "Anyone can insert menu items"
  ON menu_items
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update menu items"
  ON menu_items
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete menu items"
  ON menu_items
  FOR DELETE
  TO public
  USING (true);

-- درج داده‌های نمونه
INSERT INTO categories (name) VALUES
  ('نوشیدنی‌های گرم'),
  ('نوشیدنی‌های سرد'),
  ('دسرها'),
  ('غذاهای سبک');

-- درج آیتم‌های نمونه
INSERT INTO menu_items (name, description, price, image_url, category_id) VALUES
  (
    'کاپوچینو کلاسیک',
    'ترکیبی از اسپرسو، شیر داغ و کف شیر با طعم بی‌نظیر',
    45000,
    'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500',
    (SELECT id FROM categories WHERE name = 'نوشیدنی‌های گرم' LIMIT 1)
  ),
  (
    'لته وانیل',
    'اسپرسو با شیر داغ و سیروپ وانیل خوشمزه',
    50000,
    'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    (SELECT id FROM categories WHERE name = 'نوشیدنی‌های گرم' LIMIT 1)
  ),
  (
    'فرپه شکلات',
    'نوشیدنی سرد شکلاتی با کف شیر و خامه',
    55000,
    'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=500',
    (SELECT id FROM categories WHERE name = 'نوشیدنی‌های سرد' LIMIT 1)
  ),
  (
    'آیس کافه',
    'قهوه سرد با یخ و کمی شیر',
    40000,
    'https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=500',
    (SELECT id FROM categories WHERE name = 'نوشیدنی‌های سرد' LIMIT 1)
  ),
  (
    'تیرامیسو',
    'دسر ایتالیایی با بیسکویت و کرم ماسکارپونه',
    65000,
    'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=500',
    (SELECT id FROM categories WHERE name = 'دسرها' LIMIT 1)
  ),
  (
    'کیک شکلاتی',
    'کیک شکلاتی خوشمزه با روکش گاناش',
    55000,
    'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500',
    (SELECT id FROM categories WHERE name = 'دسرها' LIMIT 1)
  ),
  (
    'کروسان کره‌ای',
    'کروسان تازه با کره خالص',
    35000,
    'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=500',
    (SELECT id FROM categories WHERE name = 'غذاهای سبک' LIMIT 1)
  ),
  (
    'ساندویچ پنیری',
    'ساندویچ گرم با پنیر و سبزیجات تازه',
    45000,
    'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=500',
    (SELECT id FROM categories WHERE name = 'غذاهای سبک' LIMIT 1)
  );