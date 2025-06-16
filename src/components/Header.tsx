
import { Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top info bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Serving Metro Area</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            TechFix Pro
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-900 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
          </nav>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
