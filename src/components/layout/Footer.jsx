import React from 'react';

const Footer = ({ handleUserAction }) => {
  return (
    <footer className="mt-16 pt-8 border-t border-white/20 text-center">
      <p className="text-white/70 text-sm">
        © {new Date().getFullYear()} DealHunter Pro. All rights reserved. Deals aggregated from various sources.
      </p>
      <p className="text-white/50 text-xs mt-2">
        Affiliate links may be used. Prices and availability are subject to change.
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <span onClick={() => handleUserAction("Privacy Policy")} className="text-white/60 hover:text-white cursor-pointer text-sm">Privacy Policy</span>
        <span onClick={() => handleUserAction("Terms of Service")} className="text-white/60 hover:text-white cursor-pointer text-sm">Terms of Service</span>
        <span onClick={() => handleUserAction("Contact Us")} className="text-white/60 hover:text-white cursor-pointer text-sm">Contact Us</span>
      </div>
    </footer>
  );
};

export default Footer;