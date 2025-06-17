import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Disclaimer Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">Disclaimer</h2>
          <p className="text-center text-gray-600 max-w-4xl mx-auto">
            Printer Fix is an independent service provider. We are not affiliated with, nor endorsed by, any of the brands mentioned on this website. The content on printerdoctor.info is designed to offer general troubleshooting steps and expert advice to assist users with common printer-related issues.
          </p>
        </div>

        {/* Copyright and Links */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">© 2024 Printer Fix. All Rights Reserved.</p>
          
          <div className="flex justify-center items-center flex-wrap gap-4 text-gray-600">
            <Link to="/about-us" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/contact-us" className="hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              Terms & condition
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/refund-policy" className="hover:text-blue-600 transition-colors">
              Cancellation & Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
