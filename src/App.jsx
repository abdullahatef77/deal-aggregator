
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

import Header from '@/components/layout/Header.jsx';
import HeroSection from '@/components/sections/HeroSection.jsx';
import ControlsSection from '@/components/sections/ControlsSection.jsx';
import FilterPanel from '@/components/features/FilterPanel.jsx';
import DealsGrid from '@/components/sections/DealsGrid.jsx';
import Footer from '@/components/layout/Footer.jsx';

import { mockDealsData, initialCategoriesData, initialStoresData, initialBrandsData } from '@/data/constants.js';

function App() {
  const [deals, setDeals] = useState(() => {
    const savedDeals = localStorage.getItem('deals');
    return savedDeals ? JSON.parse(savedDeals) : mockDealsData;
  });
  const [filteredDeals, setFilteredDeals] = useState(deals);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStore, setSelectedStore] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [minDiscount, setMinDiscount] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    localStorage.setItem('deals', JSON.stringify(deals));
  }, [deals]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    let tempDeals = [...deals];

    if (selectedCategory !== "All") {
      tempDeals = tempDeals.filter(deal => deal.category === selectedCategory);
    }
    if (selectedStore !== "All") {
      tempDeals = tempDeals.filter(deal => deal.store === selectedStore);
    }
    if (selectedBrand !== "All") {
      tempDeals = tempDeals.filter(deal => deal.brand === selectedBrand);
    }
    tempDeals = tempDeals.filter(deal => deal.salePrice >= priceRange[0] && deal.salePrice <= priceRange[1]);
    tempDeals = tempDeals.filter(deal => deal.discount >= minDiscount);
    tempDeals = tempDeals.filter(deal => deal.rating >= minRating);

    if (searchTerm) {
      tempDeals = tempDeals.filter(deal =>
        deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortBy) {
      case "discount":
        tempDeals.sort((a, b) => b.discount - a.discount);
        break;
      case "price_asc":
        tempDeals.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price_desc":
        tempDeals.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "rating":
        tempDeals.sort((a, b) => b.rating - a.rating);
        break;
      default: 
        tempDeals.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? -1 : 1);
    }
    setFilteredDeals(tempDeals);
  }, [deals, selectedCategory, selectedStore, selectedBrand, priceRange, minDiscount, minRating, searchTerm, sortBy]);

  const toggleFavorite = (dealId) => {
    const newFavorites = favorites.includes(dealId)
      ? favorites.filter(id => id !== dealId)
      : [...favorites, dealId];
    setFavorites(newFavorites);
    toast({
      title: favorites.includes(dealId) ? "Removed from favorites" : "Added to favorites!",
      description: "Your favorite deals are saved locally. For cloud sync, please log in.",
    });
  };

  const handleViewDeal = (affiliateLink) => {
    toast({
      title: "Redirecting to store...",
      description: "Affiliate link tracking would be implemented here. 🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };
  
  const handleUserAction = (action) => {
     toast({
      title: `User Action: ${action}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header handleUserAction={handleUserAction} />
        <HeroSection />
        <ControlsSection 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setShowFilters={setShowFilters}
        />
        <AnimatePresence>
          {showFilters && (
            <FilterPanel
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedStore={selectedStore}
              setSelectedStore={setSelectedStore}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              minDiscount={minDiscount}
              setMinDiscount={setMinDiscount}
              minRating={minRating}
              setMinRating={setMinRating}
            />
          )}
        </AnimatePresence>
        <DealsGrid 
          filteredDeals={filteredDeals}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          handleViewDeal={handleViewDeal}
        />
        <Footer handleUserAction={handleUserAction} />
      </div>
      <Toaster />
    </div>
  );
}

export default App;