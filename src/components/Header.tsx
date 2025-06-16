
import { Phone, MapPin, Clock, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top info bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Serving All Areas</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>24/7 Emergency Service Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-red-600">
            PrinterFix Expert
          </div>
          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">HOME</a>
            <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">SERVICES</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">ABOUT</a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium transition-colors">TESTIMONIALS</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">CONTACT</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition-colors">
              GET FREE QUOTE
            </button>
            <Menu className="w-6 h-6 text-gray-700 lg:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
