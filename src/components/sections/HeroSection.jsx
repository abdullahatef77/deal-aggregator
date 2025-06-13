import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users, DollarSign, Star } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Package, label: "Active Deals", value: "12K+" },
    { icon: Users, label: "Happy Users", value: "60K+" },
    { icon: DollarSign, label: "Money Saved", value: "$2.5M+" },
    { icon: Star, label: "Avg. Rating", value: "4.9" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="hero-section mb-8"
    >
      <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
        Discover the hottest deals, compare prices, and save big!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {stats.map(stat => (
          <div key={stat.label} className="stats-card">
            <div className="flex items-center justify-center mb-2">
              <stat.icon className="w-6 h-6 text-pink-500" />
            </div>
            <div className="text-2xl font-bold gradient-text">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default HeroSection;