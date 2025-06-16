
import { Wrench, Wifi, Settings, Clock, Shield, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Hardware Repair",
      description: "Complete printer hardware diagnostics and repair for all mechanical issues and component failures."
    },
    {
      icon: Wifi,
      title: "Network Setup",
      description: "WiFi connectivity, network configuration, and wireless printing setup for home and office."
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Preventive maintenance services to keep your printer running smoothly and extend its life."
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
            We provide comprehensive printer repair and maintenance services for all major brands. 
            From simple fixes to complex repairs, our experts handle it all.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 border border-gray-200 rounded-lg hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mx-auto mb-6">
                <service.icon className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Common Issues */}
        <div className="bg-gray-50 rounded-lg p-8 lg:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Common Printer Problems We Fix
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Paper Jams",
              "Print Quality Issues", 
              "Won't Power On",
              "Error Codes",
              "Slow Printing",
              "Network Problems",
              "Ink/Toner Issues",
              "Driver Problems"
            ].map((issue, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-red-600 shadow-sm">
                <span className="text-gray-800 font-semibold">{issue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Fast Service</h4>
            <p className="text-gray-600">Same day repairs available for urgent needs</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Guaranteed Work</h4>
            <p className="text-gray-600">90-day warranty on all repairs and parts</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Award className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Expert Technicians</h4>
            <p className="text-gray-600">Certified professionals with years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
