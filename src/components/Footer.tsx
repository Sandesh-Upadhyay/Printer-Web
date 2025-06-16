
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">PrinterFix Expert</h3>
              <p className="text-gray-300 leading-relaxed">
                Independent printer support service provider offering comprehensive 
                troubleshooting solutions for all major printer brands.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Printer Setup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wireless Configuration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Troubleshooting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Print Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+1-833-712-3079</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>support@printerfixexpert.us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Disclaimer</h4>
            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
              PrinterFix Expert is an independent service provider. We are not affiliated with, nor endorsed by, any of the brands mentioned on this website. The content on this website is for informational purposes only.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 PrinterFix Expert. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
