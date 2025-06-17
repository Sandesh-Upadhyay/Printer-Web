import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <div className="bg-white py-4 border-t">

        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
          <motion.img 
            src="/trust-badges/ssl-secure.png" 
            alt="SSL Secure" 
            className="h-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <motion.img 
            src="/trust-badges/bbb-aplus.png" 
            alt="BBB A+" 
            className="h-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <motion.img 
            src="/trust-badges/mcafee-secure.png" 
            alt="McAfee Secure" 
            className="h-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
