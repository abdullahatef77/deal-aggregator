import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { initialCategoriesData } from '@/data/constants';

const ControlsSection = ({ 
  searchTerm, 
  setSearchTerm, 
  sortBy, 
  setSortBy, 
  selectedCategory, 
  setSelectedCategory, 
  setShowFilters 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 search-container">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-white/70" />
            <input
              type="text"
              placeholder="Search deals, products, brands, or stores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-lg"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="glass-effect text-white border-white/30 hover:bg-white/20 font-semibold"
            onClick={() => setShowFilters(true)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="glass-effect text-white border-white/30 rounded-lg px-4 py-2 bg-transparent outline-none font-semibold"
          >
            <option value="featured" className="text-black">✨ Featured</option>
            <option value="discount" className="text-black">📉 Best Discount</option>
            <option value="price_asc" className="text-black">💲 Price: Low to High</option>
            <option value="price_desc" className="text-black">💲 Price: High to Low</option>
            <option value="rating" className="text-black">⭐ Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {initialCategoriesData.slice(0, 6).map((category) => (
          <button
            key={category}
            onClick={() => { setSelectedCategory(category); setShowFilters(false); }}
            className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
        <button onClick={() => setShowFilters(true)} className="category-chip">More Categories...</button>
      </div>
    </motion.div>
  );
};

export default ControlsSection;