
import { Wrench, Zap, Shield, Clock, Users, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Hardware Repair",
      description: "Complete printer hardware diagnostics and repair services for all mechanical issues."
    },
    {
      icon: Zap,
      title: "Connectivity Issues",
      description: "Fix WiFi, USB, and network connectivity problems to get your printer online."
    },
    {
      icon: Shield,
      title: "Maintenance Service",
      description: "Regular maintenance to prevent issues and extend your printer's lifespan."
    }
  ];

  const features = [
    { icon: Clock, title: "Same Day Service", description: "Quick turnaround times" },
    { icon: Users, title: "Expert Technicians", description: "Certified professionals" },
    { icon: Award, title: "90-Day Warranty", description: "Quality guaranteed" }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Printer Repair Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We fix all types of printer problems with fast, professional service. 
            From paper jams to complete hardware failures, we've got you covered.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Common Issues */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Common Printer Problems We Fix
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Paper Jams",
              "Poor Print Quality",
              "Won't Turn On",
              "Error Messages",
              "Slow Printing",
              "Network Issues",
              "Ink/Toner Problems",
              "Driver Issues"
            ].map((issue, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">{issue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4">
                <feature.icon className="w-10 h-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
