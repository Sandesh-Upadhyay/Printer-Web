
import { Settings, Wifi, Shield, HeadphonesIcon, Monitor, UserCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Installation & Setup",
      description: "Professional installation and network configuration for new printers."
    },
    {
      icon: HeadphonesIcon,
      title: "Quick Assistance",
      description: "Quick response time for urgent printer issues to minimize downtime."
    },
    {
      icon: Settings,
      title: "Managed Print Services", 
      description: "Comprehensive print management to optimize costs and efficiency."
    },
    {
      icon: UserCheck,
      title: "Printer Consulting",
      description: "Expert advice on printer selection and fleet optimization."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Printer Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive printer solutions to keep your business running smoothly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6">
                <service.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🇺🇸</span>
              <span className="text-blue-600 font-bold text-xl">+1-833-712-3079</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 font-bold">✉️ support@printerfixexpert.us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
