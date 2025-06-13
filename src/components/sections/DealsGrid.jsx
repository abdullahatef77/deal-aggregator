import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DealCard from '@/components/features/DealCard';
import { ShoppingCart } from 'lucide-react';

const DealsGrid = ({ filteredDeals, favorites, toggleFavorite, handleViewDeal }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence>
        {filteredDeals.map((deal, index) => (
          <DealCard
            key={deal.id}
            deal={deal}
            index={index}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            handleViewDeal={handleViewDeal}
          />
        ))}
      </AnimatePresence>
      {filteredDeals.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 md:col-span-2 lg:col-span-3"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto">
            <ShoppingCart className="w-16 h-16 text-white/70 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">No Deals Found!</h2>
            <p className="text-white/70">Try adjusting your search or filters. The perfect deal is out there!</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DealsGrid;