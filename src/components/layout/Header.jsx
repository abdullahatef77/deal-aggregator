import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bell, UserCircle, LogIn } from 'lucide-react';

const Header = ({ handleUserAction }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black gradient-text mb-2">
          DealHunter Pro
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-medium">
          Your Ultimate Deal Aggregator
        </p>
      </div>
      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <Button variant="ghost" size="icon" onClick={() => handleUserAction("Notifications")} className="text-white hover:bg-white/20 relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-purple-700 bg-pink-500" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => handleUserAction("User Profile")} className="text-white hover:bg-white/20">
          <UserCircle className="w-6 h-6" />
        </Button>
        <Button onClick={() => handleUserAction("Login/Register")} className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold">
          <LogIn className="w-4 h-4 mr-2" /> Login
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;