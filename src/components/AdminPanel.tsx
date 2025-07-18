import React, { useState } from 'react';
import { X, Plus, Edit, Trash2, Save, Ambulance as Cancel, ChevronUp } from 'lucide-react';
import { useMenuItems } from '../hooks/useMenuItems';
import { MenuItem, Category } from '../types';

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const {
    menuItems,
    categories,
    loading,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    addCategory,
    updateCategory,
    deleteCategory
  } = useMenuItems();

  const [activeTab, setActiveTab] = useState<'items' | 'categories'>('items');
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [showAddItem, setShowAddItem] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);

  // Form states
  const [itemForm, setItemForm] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
    category_id: ''
  });

  const [categoryForm, setCategoryForm] = useState({
    name: ''
  });
  
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addMenuItem({
        name: itemForm.name,
        description: itemForm.description,
        price: parseInt(itemForm.price),
        image_url: itemForm.image_url,
        category_id: itemForm.category_id
      });
      setItemForm({ name: '', description: '', price: '', image_url: '', category_id: '' });
      setShowAddItem(false);
      alert('آیتم با موفقیت اضافه شد');
    } catch (error) {
      alert('خطا در افزودن آیتم');
    }
  };

  const handleEditItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    
    try {
      await updateMenuItem(editingItem.id, {
        name: itemForm.name,
        description: itemForm.description,
        price: parseInt(itemForm.price),
        image_url: itemForm.image_url,
        category_id: itemForm.category_id
      });
      setEditingItem(null);
      setItemForm({ name: '', description: '', price: '', image_url: '', category_id: '' });
      alert('آیتم با موفقیت به‌روزرسانی شد');
    } catch (error) {
      alert('خطا در به‌روزرسانی آیتم');
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (confirm('آیا مطمئن هستید که می‌خواهید این آیتم را حذف کنید؟')) {
      try {
        await deleteMenuItem(id);
        alert('آیتم با موفقیت حذف شد');
      } catch (error) {
        alert('خطا در حذف آیتم');
      }
    }
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addCategory(categoryForm.name);
      setCategoryForm({ name: '' });
      setShowAddCategory(false);
      alert('دسته‌بندی با موفقیت اضافه شد');
    } catch (error) {
      alert('خطا در افزودن دسته‌بندی');
    }
  };

  const handleEditCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory) return;
    
    try {
      await updateCategory(editingCategory.id, categoryForm.name);
      setEditingCategory(null);
      setCategoryForm({ name: '' });
      alert('دسته‌بندی با موفقیت به‌روزرسانی شد');
    } catch (error) {
      alert('خطا در به‌روزرسانی دسته‌بندی');
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (confirm('آیا مطمئن هستید که می‌خواهید این دسته‌بندی را حذف کنید؟')) {
      try {
        await deleteCategory(id);
        alert('دسته‌بندی با موفقیت حذف شد');
      } catch (error) {
        alert('خطا در حذف دسته‌بندی');
      }
    }
  };

  const startEditItem = (item: MenuItem) => {
    setEditingItem(item);
    setItemForm({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      image_url: item.image_url,
      category_id: item.category_id
    });
    setShowAddItem(true);
  };

  const startEditCategory = (category: Category) => {
    setEditingCategory(category);
    setCategoryForm({ name: category.name });
    setShowAddCategory(true);
  };

  const resetForms = () => {
    setItemForm({ name: '', description: '', price: '', image_url: '', category_id: '' });
    setCategoryForm({ name: '' });
    setEditingItem(null);
    setEditingCategory(null);
    setShowAddItem(false);
    setShowAddCategory(false);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    // Create a better fallback
    target.src = 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=%D8%AA%D8%B5%D9%88%DB%8C%D8%B1';
  };

  const scrollToTop = () => {
    const adminPanel = document.querySelector('.admin-panel-content');
    if (adminPanel) {
      adminPanel.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setShowScrollToTop(target.scrollTop > 300);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass-card rounded-xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">پنل مدیریت</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('items')}
            className={`px-6 py-4 font-medium transition-colors ${
              activeTab === 'items'
                ? 'text-cafe-600 border-b-2 border-cafe-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            آیتم‌های منو
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-6 py-4 font-medium transition-colors ${
              activeTab === 'categories'
                ? 'text-cafe-600 border-b-2 border-cafe-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            دسته‌بندی‌ها
          </button>
        </div>

        <div 
          className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] admin-panel-content relative"
          onScroll={handleScroll}
        >
          {activeTab === 'items' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">مدیریت آیتم‌های منو</h3>
                <button
                  onClick={() => setShowAddItem(true)}
                  className="flex items-center space-x-2 space-x-reverse bg-cafe-500 text-white px-4 py-2 rounded-lg hover:bg-cafe-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>افزودن آیتم جدید</span>
                </button>
              </div>

              {showAddItem && (
                <div className="glass-card rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-4">
                    {editingItem ? 'ویرایش آیتم' : 'افزودن آیتم جدید'}
                  </h4>
                  <form onSubmit={editingItem ? handleEditItem : handleAddItem}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          نام آیتم
                        </label>
                        <input
                          type="text"
                          value={itemForm.name}
                          onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500 persian-input text-gray-900"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          قیمت (تومان)
                        </label>
                        <input
                          type="number"
                          value={itemForm.price}
                          onChange={(e) => setItemForm({ ...itemForm, price: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500 persian-input text-gray-900"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          دسته‌بندی
                        </label>
                        <select
                          value={itemForm.category_id}
                          onChange={(e) => setItemForm({ ...itemForm, category_id: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500 persian-input text-gray-900"
                          required
                        >
                          <option value="">انتخاب دسته‌بندی</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          لینک تصویر
                        </label>
                        <input
                          type="url"
                          value={itemForm.image_url}
                          onChange={(e) => setItemForm({ ...itemForm, image_url: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500 persian-input text-gray-900"
                          placeholder="https://example.com/image.jpg"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        توضیحات
                      </label>
                      <textarea
                        value={itemForm.description}
                        onChange={(e) => setItemForm({ ...itemForm, description: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500 persian-input text-gray-900"
                        required
                      />
                    </div>
                    <div className="flex space-x-3 space-x-reverse mt-6">
                      <button
                        type="submit"
                        className="flex items-center space-x-2 space-x-reverse bg-cafe-500 text-white px-4 py-2 rounded-lg hover:bg-cafe-600 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        <span>{editingItem ? 'به‌روزرسانی' : 'افزودن'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={resetForms}
                        className="flex items-center space-x-2 space-x-reverse bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <Cancel className="w-4 h-4" />
                        <span>انصراف</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map((item) => (
                  <div key={item.id} className="glass-card rounded-lg overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-32 object-cover"
                      onError={handleImageError}
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <p className="text-cafe-600 font-bold mb-2">
                        {new Intl.NumberFormat('fa-IR').format(item.price)} تومان
                      </p>
                      <p className="text-xs text-gray-500 mb-3">{item.category.name}</p>
                      <div className="flex space-x-2 space-x-reverse">
                        <button
                          onClick={() => startEditItem(item)}
                          className="flex items-center space-x-1 space-x-reverse bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                        >
                          <Edit className="w-3 h-3" />
                          <span>ویرایش</span>
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="flex items-center space-x-1 space-x-reverse bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>حذف</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">مدیریت دسته‌بندی‌ها</h3>
                <button
                  onClick={() => setShowAddCategory(true)}
                  className="flex items-center space-x-2 space-x-reverse bg-cafe-500 text-white px-4 py-2 rounded-lg hover:bg-cafe-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>افزودن دسته‌بندی جدید</span>
                </button>
              </div>

              {showAddCategory && (
                <div className="glass-card rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-4">
                    {editingCategory ? 'ویرایش دسته‌بندی' : 'افزودن دسته‌بندی جدید'}
                  </h4>
                  <form onSubmit={editingCategory ? handleEditCategory : handleAddCategory}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        نام دسته‌بندی
                      </label>
                      <input
                        type="text"
                        value={categoryForm.name}
                        onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500 persian-input text-gray-900"
                        required
                      />
                    </div>
                    <div className="flex space-x-3 space-x-reverse">
                      <button
                        type="submit"
                        className="flex items-center space-x-2 space-x-reverse bg-cafe-500 text-white px-4 py-2 rounded-lg hover:bg-cafe-600 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        <span>{editingCategory ? 'به‌روزرسانی' : 'افزودن'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={resetForms}
                        className="flex items-center space-x-2 space-x-reverse bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <Cancel className="w-4 h-4" />
                        <span>انصراف</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <div key={category.id} className="glass-card rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-2">{category.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {menuItems.filter(item => item.category_id === category.id).length} آیتم
                    </p>
                    <div className="flex space-x-2 space-x-reverse">
                      <button
                        onClick={() => startEditCategory(category)}
                        className="flex items-center space-x-1 space-x-reverse bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                      >
                        <Edit className="w-3 h-3" />
                        <span>ویرایش</span>
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="flex items-center space-x-1 space-x-reverse bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>حذف</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Scroll to top button for admin panel */}
          {showScrollToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 left-6 z-[60] w-12 h-12 bg-cafe-500 hover:bg-cafe-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-fade-in md:hidden"
              aria-label="برگشت به بالا"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
