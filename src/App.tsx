import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ViewToggle from './components/ViewToggle';
import MenuGrid from './components/MenuGrid';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { useMenuItems } from './hooks/useMenuItems';

function App() {
  const { menuItems, categories, loading, error } = useMenuItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [loginError, setLoginError] = useState('');

  const filteredItems = useMemo(() => {
    let filtered = menuItems;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(item => item.category_id === selectedCategory);
    }

    return filtered;
  }, [menuItems, searchTerm, selectedCategory]);

  const handleAdminLogin = (password: string) => {
    if (password === 'modir1234') {
      setShowAdminLogin(false);
      setShowAdminPanel(true);
      setLoginError('');
    } else {
      setLoginError('رمز عبور اشتباه است');
    }
  };

  const handleAdminClose = () => {
    setShowAdminPanel(false);
    setShowAdminLogin(false);
    setLoginError('');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cafe-50 to-coffee-50 flex items-center justify-center">
        <div className="glass-card rounded-xl p-8 max-w-md mx-4">
          <h2 className="text-xl font-bold text-orange-600 mb-4">اطلاعیه</h2>
          <p className="text-gray-700 mb-4">در حال استفاده از داده‌های نمونه</p>
          <p className="text-sm text-gray-600">
            برای استفاده کامل، لطفاً دیتابیس را متصل کنید.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onAdminClick={() => setShowAdminLogin(true)} />
      
      <main className="container mx-auto px-1 md:px-4 py-6 md:py-8 max-w-full overflow-hidden bg-zhuan-dark-green">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        
        <div className="px-1 md:px-0 max-w-full">
          <MenuGrid items={filteredItems} viewMode={viewMode} />
        </div>
      </main>

      <Footer />

      {showAdminLogin && (
        <AdminLogin
          onLogin={handleAdminLogin}
          onClose={() => setShowAdminLogin(false)}
          error={loginError}
        />
      )}

      {showAdminPanel && (
        <AdminPanel onClose={handleAdminClose} />
      )}

      <ScrollToTop />
    </div>
  );
}

export default App;
