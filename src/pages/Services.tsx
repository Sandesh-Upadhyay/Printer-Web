import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Wifi, Shield, HeadphonesIcon, Monitor, UserCheck, ArrowRight, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Monitor,
      title: "Installation & Setup",
      description: "Professional installation and network configuration for new printers.",
      color: "from-blue-500 to-blue-600",
      features: ["Driver installation", "Network setup", "Wireless configuration", "Multi-device setup"]
    },
    {
      icon: HeadphonesIcon,
      title: "Quick Assistance",
      description: "Quick response time for urgent printer issues to minimize downtime.",
      color: "from-green-500 to-green-600",
      features: ["24/7 support", "Remote assistance", "Emergency service", "Same-day resolution"]
    },
    {
      icon: Settings,
      title: "Managed Print Services", 
      description: "Comprehensive print management to optimize costs and efficiency.",
      color: "from-purple-500 to-purple-600",
      features: ["Cost optimization", "Fleet management", "Usage monitoring", "Maintenance scheduling"]
    },
    {
      icon: UserCheck,
      title: "Printer Consulting",
      description: "Expert advice on printer selection and fleet optimization.",
      color: "from-orange-500 to-orange-600",
      features: ["Brand recommendations", "Cost analysis", "Technology assessment", "Migration planning"]
    }
  ];

  const brands = [
    "HP", "Canon", "Epson", "Brother", "Lexmark", "Samsung", "Xerox", "Ricoh", "Sharp", "Konica Minolta"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-16">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 font-serif">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-serif">
                We offer comprehensive printer support services for all major brands.
                Our expert technicians can help with any printer-related issues you may be experiencing.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => window.location.href = 'tel:+1-888-404-6710'}
                >
                  <motion.div 
                    className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-serif">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-serif mb-4">{service.description}</p>
                  <ul className="text-left space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-500 font-serif flex items-center">
                        <ArrowRight className="w-3 h-3 mr-1 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Brands Section */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Brands We Support</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {brands.map((brand, index) => (
                  <motion.div
                    key={brand}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-bold text-gray-700 font-serif">{brand}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              className="text-center bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <motion.div 
                  className="flex items-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'tel:+1-888-404-6710'}
                >
                  <span className="text-2xl mr-2">🇺🇸</span>
                  <span className="text-blue-600 font-bold text-xl font-serif group-hover:text-blue-700 transition-colors">
                    +1-888-404-6710
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'mailto:info@allitexpert.com'}
                >
                  <span className="text-blue-600 font-bold font-serif group-hover:text-blue-700 transition-colors">
                    ✉️ info@allitexpert.com
                  </span>
                </motion.div>
              </div>
              
              <div className="mt-6 flex justify-center items-center space-x-4">
                <div className="flex items-center text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-gray-600 font-serif">5-Star Rated Service</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
