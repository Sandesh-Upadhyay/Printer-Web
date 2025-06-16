
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Why Choose Us For Printer Repair?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 15 years of experience in printer repair, we are the most trusted 
                printer service provider in the area. Our expert technicians are trained to 
                handle all types of printer problems.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Certified and experienced technicians",
                "Support for all major printer brands",
                "Same-day service available", 
                "Transparent pricing with no hidden costs",
                "90-day warranty on all repairs",
                "Free pickup and delivery service"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">5000+</div>
                <div className="text-gray-600">Repairs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-red-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Repair Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Contact Us", desc: "Call or book online appointment" },
                  { step: "02", title: "Diagnosis", desc: "Free inspection and estimate" },
                  { step: "03", title: "Repair", desc: "Professional repair with quality parts" },
                  { step: "04", title: "Testing", desc: "Complete testing before delivery" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-red-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
