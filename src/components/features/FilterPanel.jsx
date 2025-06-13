import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { X } from 'lucide-react';
import { initialCategoriesData, initialStoresData, initialBrandsData } from '@/data/constants';

const FilterPanel = ({
  showFilters,
  setShowFilters,
  selectedCategory,
  setSelectedCategory,
  selectedStore,
  setSelectedStore,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  minDiscount,
  setMinDiscount,
  minRating,
  setMinRating,
}) => {
  if (!showFilters) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-br from-purple-700 to-indigo-800 p-6 shadow-2xl z-50 overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Filters</h2>
        <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)} className="text-white hover:bg-white/20">
          <X className="w-6 h-6" />
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-white/80 font-semibold mb-2 block">Category</Label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-pink-500 outline-none">
            {initialCategoriesData.map(cat => <option key={cat} value={cat} className="text-black">{cat}</option>)}
          </select>
        </div>
        <div>
          <Label className="text-white/80 font-semibold mb-2 block">Store</Label>
          <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)} className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-pink-500 outline-none">
            {initialStoresData.map(store => <option key={store} value={store} className="text-black">{store}</option>)}
          </select>
        </div>
        <div>
          <Label className="text-white/80 font-semibold mb-2 block">Brand</Label>
          <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-pink-500 outline-none">
            {initialBrandsData.map(brand => <option key={brand} value={brand} className="text-black">{brand}</option>)}
          </select>
        </div>
        <div>
          <Label className="text-white/80 font-semibold mb-2 block">Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
          <Slider defaultValue={[0, 1500]} max={3000} step={50} value={priceRange} onValueChange={setPriceRange} className="[&>span:first-child]:h-1 [&>span:first-child]:bg-pink-500 [&_[role=slider]]:bg-white [&_[role=slider]]:border-2 [&_[role=slider]]:border-pink-500" />
        </div>
        <div>
          <Label className="text-white/80 font-semibold mb-2 block">Minimum Discount: {minDiscount}%</Label>
          <Slider defaultValue={[0]} max={100} step={5} value={[minDiscount]} onValueChange={(val) => setMinDiscount(val[0])} className="[&>span:first-child]:h-1 [&>span:first-child]:bg-pink-500 [&_[role=slider]]:bg-white [&_[role=slider]]:border-2 [&_[role=slider]]:border-pink-500" />
        </div>
        <div>
          <Label className="text-white/80 font-semibold mb-2 block">Minimum Rating: {minRating} ★</Label>
          <Slider defaultValue={[0]} max={5} step={0.5} value={[minRating]} onValueChange={(val) => setMinRating(val[0])} className="[&>span:first-child]:h-1 [&>span:first-child]:bg-pink-500 [&_[role=slider]]:bg-white [&_[role=slider]]:border-2 [&_[role=slider]]:border-pink-500" />
        </div>
      </div>
      <Button onClick={() => setShowFilters(false)} className="w-full mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3">Apply Filters</Button>
    </motion.div>
  );
};

export default FilterPanel;