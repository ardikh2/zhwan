import React from 'react';
import { MenuItemWithCategory } from '../types';

interface MenuItemCardProps {
  item: MenuItemWithCategory;
  viewMode: 'grid' | 'list';
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, viewMode }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    // Create a better fallback with the item name
    const encodedName = encodeURIComponent(item.name);
    target.src = `https://via.placeholder.com/400x300/8B4513/FFFFFF?text=${encodedName}`;
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-zhuan-dark-brown rounded-xl overflow-hidden hover-lift animate-fade-in mx-1 md:mx-0 max-w-full shadow-lg-gold border border-zhuan-gold/20">
        <div className="flex">
          <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-full object-cover"
              onError={handleImageError}
              loading="lazy"
            />
          </div>
          <div className="flex-1 p-3 md:p-4 min-w-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm md:text-lg font-semibold text-zhuan-light leading-tight truncate ml-2 flex-1 min-w-0">
                {item.name}
              </h3>
              <span className="text-xs md:text-base font-bold text-zhuan-gold whitespace-nowrap flex-shrink-0">
                {formatPrice(item.price)} تومان
              </span>
            </div>
            <p className="text-zhuan-light/70 text-xs md:text-sm leading-relaxed mb-2 line-clamp-2">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-zhuan-gold bg-black/20 px-2 py-1 rounded-full">
                {item.category.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zhuan-dark-brown rounded-xl overflow-hidden hover-lift animate-fade-in mx-1 md:mx-0 max-w-full shadow-lg-gold border border-zhuan-gold/20">
      <div className="aspect-[4/3] sm:aspect-square">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-zhuan-light leading-tight mb-2">{item.name}</h3>
          <span className="text-xl font-bold text-zhuan-gold block">
            {formatPrice(item.price)} تومان
          </span>
        </div>
        <p className="text-zhuan-light/70 text-sm mb-4 leading-relaxed">
          {item.description}
        </p>
        <div className="flex justify-start">
          <span className="text-xs text-zhuan-gold bg-black/20 px-3 py-1 rounded-full">
            {item.category.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
