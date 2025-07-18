import React from 'react';
import { MenuItemWithCategory } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuGridProps {
  items: MenuItemWithCategory[];
  viewMode: 'grid' | 'list';
}

const MenuGrid: React.FC<MenuGridProps> = ({ items, viewMode }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="glass-card rounded-xl p-8 max-w-md mx-auto">
          <p className="text-gray-600 text-lg mb-2">هیچ آیتمی یافت نشد</p>
          <p className="text-gray-500 text-sm">لطفاً جستجوی خود را تغییر دهید</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${
      viewMode === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 max-w-full' 
        : 'space-y-2 md:space-y-4 max-w-full'
    } overflow-hidden`}>
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default MenuGrid;