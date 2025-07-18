/*
  # ایجاد جداول categories و menu_items

  1. جداول جدید
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    - `menu_items`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `description` (text, not null)
      - `price` (integer, not null)
      - `image_url` (text, not null)
      - `category_id` (uuid, foreign key to categories)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. امنیت
    - فعال‌سازی RLS برای هر دو جدول
    - اضافه کردن policy برای دسترسی عمومی به خواندن، نوشتن، به‌روزرسانی و حذف

  3. روابط
    - foreign key بین menu_items.category_id و categories.id
    - cascade delete برای حذف آیتم‌های منو هنگام حذف دسته‌بندی
*/

-- ایجاد جدول categories
CREATE TABLE IF NOT EXISTS public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- ایجاد جدول menu_items
CREATE TABLE IF NOT EXISTS public.menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL,
  category_id uuid NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- فعال‌سازی Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;

-- ایجاد policy برای جدول categories
CREATE POLICY "Anyone can read categories"
  ON public.categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert categories"
  ON public.categories
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update categories"
  ON public.categories
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete categories"
  ON public.categories
  FOR DELETE
  TO public
  USING (true);

-- ایجاد policy برای جدول menu_items
CREATE POLICY "Anyone can read menu items"
  ON public.menu_items
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert menu items"
  ON public.menu_items
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update menu items"
  ON public.menu_items
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete menu items"
  ON public.menu_items
  FOR DELETE
  TO public
  USING (true);