import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { MenuItem, Category, MenuItemWithCategory } from '../types';

// Sample data for when database is not connected
const sampleCategories: Category[] = [
  { id: '1', name: 'نوشیدنی‌های گرم', created_at: '', updated_at: '' },
  { id: '2', name: 'نوشیدنی‌های سرد', created_at: '', updated_at: '' },
  { id: '3', name: 'دسرها', created_at: '', updated_at: '' },
  { id: '4', name: 'غذاهای سبک', created_at: '', updated_at: '' }
];

const sampleMenuItems: MenuItemWithCategory[] = [
  {
    id: '1',
    name: 'کاپوچینو کلاسیک',
    description: 'ترکیبی از اسپرسو، شیر داغ و کف شیر با طعم بی‌نظیر',
    price: 45000,
    image_url: 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=%DA%A9%D8%A7%D9%BE%D9%88%DA%86%DB%8C%D9%86%D9%88',
    category_id: '1',
    created_at: '',
    updated_at: '',
    category: sampleCategories[0]
  },
  {
    id: '2',
    name: 'لته وانیل',
    description: 'اسپرسو با شیر داغ و سیروپ وانیل خوشمزه',
    price: 50000,
    image_url: 'https://via.placeholder.com/400x300/D2691E/FFFFFF?text=%D9%84%D8%AA%D9%87+%D9%88%D8%A7%D9%86%DB%8C%D9%84',
    category_id: '1',
    created_at: '',
    updated_at: '',
    category: sampleCategories[0]
  },
  {
    id: '3',
    name: 'فرپه شکلات',
    description: 'نوشیدنی سرد شکلاتی با کف شیر و خامه',
    price: 55000,
    image_url: 'https://via.placeholder.com/400x300/654321/FFFFFF?text=%D9%81%D8%B1%D9%BE%D9%87+%D8%B4%DA%A9%D9%84%D8%A7%D8%AA',
    category_id: '2',
    created_at: '',
    updated_at: '',
    category: sampleCategories[1]
  },
  {
    id: '4',
    name: 'آیس کافه',
    description: 'قهوه سرد با یخ و کمی شیر',
    price: 40000,
    image_url: 'https://via.placeholder.com/400x300/4682B4/FFFFFF?text=%D8%A2%DB%8C%D8%B3+%DA%A9%D8%A7%D9%81%D9%87',
    category_id: '2',
    created_at: '',
    updated_at: '',
    category: sampleCategories[1]
  },
  {
    id: '5',
    name: 'تیرامیسو',
    description: 'دسر ایتالیایی با بیسکویت و کرم ماسکارپونه',
    price: 65000,
    image_url: 'https://via.placeholder.com/400x300/DEB887/8B4513?text=%D8%AA%DB%8C%D8%B1%D8%A7%D9%85%DB%8C%D8%B3%D9%88',
    category_id: '3',
    created_at: '',
    updated_at: '',
    category: sampleCategories[2]
  },
  {
    id: '6',
    name: 'کیک شکلاتی',
    description: 'کیک شکلاتی خوشمزه با روکش گاناش',
    price: 55000,
    image_url: 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=%DA%A9%DB%8C%DA%A9+%D8%B4%DA%A9%D9%84%D8%A7%D8%AA%DB%8C',
    category_id: '3',
    created_at: '',
    updated_at: '',
    category: sampleCategories[2]
  },
  {
    id: '7',
    name: 'کروسان کره‌ای',
    description: 'کروسان تازه با کره خالص',
    price: 35000,
    image_url: 'https://via.placeholder.com/400x300/DAA520/FFFFFF?text=%DA%A9%D8%B1%D9%88%D8%B3%D8%A7%D9%86',
    category_id: '4',
    created_at: '',
    updated_at: '',
    category: sampleCategories[3]
  },
  {
    id: '8',
    name: 'ساندویچ پنیری',
    description: 'ساندویچ گرم با پنیر و سبزیجات تازه',
    price: 45000,
    image_url: 'https://via.placeholder.com/400x300/228B22/FFFFFF?text=%D8%B3%D8%A7%D9%86%D8%AF%D9%88%DB%8C%DA%86',
    category_id: '4',
    created_at: '',
    updated_at: '',
    category: sampleCategories[3]
  }
];

export const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<MenuItemWithCategory[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('menu_items')
        .select(`
          *,
          category:categories(*)
        `)
        .order('created_at', { ascending: true });

      if (error) {
        console.warn('Database not connected, using sample data:', error.message);
        setMenuItems(sampleMenuItems);
        setCategories(sampleCategories);
        return;
      }
      setMenuItems(data || []);
    } catch (err) {
      console.warn('Using sample data due to database connection issue');
      setMenuItems(sampleMenuItems);
      setCategories(sampleCategories);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.warn('Database not connected, using sample categories');
        return;
      }
      setCategories(data || []);
    } catch (err) {
      console.warn('Using sample categories due to database connection issue');
    }
  };

  const addMenuItem = async (item: Omit<MenuItem, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .insert([item])
        .select();

      if (error) throw error;
      await fetchMenuItems();
      return data[0];
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'خطا در افزودن آیتم');
    }
  };

  const updateMenuItem = async (id: string, updates: Partial<MenuItem>) => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select();

      if (error) throw error;
      await fetchMenuItems();
      return data[0];
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'خطا در به‌روزرسانی آیتم');
    }
  };

  const deleteMenuItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchMenuItems();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'خطا در حذف آیتم');
    }
  };

  const addCategory = async (name: string) => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .insert([{ name }])
        .select();

      if (error) throw error;
      await fetchCategories();
      return data[0];
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'خطا در افزودن دسته‌بندی');
    }
  };

  const updateCategory = async (id: string, name: string) => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .update({ name, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select();

      if (error) throw error;
      await fetchCategories();
      return data[0];
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'خطا در به‌روزرسانی دسته‌بندی');
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchCategories();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'خطا در حذف دسته‌بندی');
    }
  };

  useEffect(() => {
    fetchMenuItems();
    fetchCategories();
  }, []);

  return {
    menuItems,
    categories,
    loading,
    error,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    addCategory,
    updateCategory,
    deleteCategory,
    refreshData: () => {
      fetchMenuItems();
      fetchCategories();
    }
  };
};