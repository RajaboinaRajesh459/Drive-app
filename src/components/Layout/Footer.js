// src/components/Layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-auto">
      <p>&copy; {new Date().getFullYear()} Folder App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
