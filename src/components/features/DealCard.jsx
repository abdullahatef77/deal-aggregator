import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Star, Heart, ExternalLink, Store, Tag, Percent, Clock, BarChart3 } from 'lucide-react';

const DealCard = ({ deal, index, favorites, toggleFavorite, handleViewDeal }) => {
  const handlePriceHistoryClick = () => {
    toast({ 
      title: "Price History", 
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.div
      key={deal.id}
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`deal-card rounded-2xl p-6 relative overflow-hidden ${deal.featured ? 'pulse-glow border-2 border-pink-500' : ''}`}
    >
      {deal.featured && (
        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 transform bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-1.5 rounded-b-lg text-xs font-bold shadow-lg">
          🔥 TRENDING
        </div>
      )}

      <div className="flex justify-between items-start mb-3">
        <div className="store-badge flex items-center gap-1">
          <Store size={14} /> {deal.store}
        </div>
        <button
          onClick={() => toggleFavorite(deal.id)}
          className={`p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
            favorites.includes(deal.id)
              ? 'text-red-500 bg-red-100'
              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
            }`}
        >
          <Heart className={`w-5 h-5 ${favorites.includes(deal.id) ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
        <img 
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          alt={`${deal.title} product image`} src="https://images.unsplash.com/photo-1539369189415-69494ea05342" />
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">
        {deal.title}
      </h3>

      <div className="text-xs text-gray-500 mb-2 flex items-center gap-1"><Tag size={12} /> {deal.brand}</div>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700">{deal.rating}</span>
        </div>
        <span className="text-sm text-gray-500">({deal.reviews} reviews)</span>
      </div>

      <div className="flex items-baseline justify-between mb-3">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-purple-700">
            ${deal.salePrice}
          </span>
          <span className="text-md text-gray-500 line-through">
            ${deal.originalPrice}
          </span>
        </div>
        <div className="price-badge flex items-center gap-1">
          <Percent size={16} /> {deal.discount}% OFF
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-orange-600 font-medium mb-4">
        <div className="flex items-center gap-1"><Clock size={14} /> {deal.timeLeft}</div>
        <button onClick={handlePriceHistoryClick} className="text-xs text-blue-500 hover:underline flex items-center gap-1"><BarChart3 size={14} /> Price History</button>
      </div>

      <Button
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 text-base"
        onClick={() => handleViewDeal(deal.affiliateLink)}
      >
        <ExternalLink className="w-5 h-5 mr-2" />
        View Deal
      </Button>
    </motion.div>
  );
};

export default DealCard;