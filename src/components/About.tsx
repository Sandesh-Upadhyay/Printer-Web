
import { CheckCircle, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Why Choose TechFix Pro?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 15 years of experience in printer repair and maintenance, 
                we're the trusted choice for thousands of satisfied customers across the metro area.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Certified technicians with extensive training",
                "Support for all major printer brands and models",
                "Fast, same-day service available",
                "Competitive pricing with no hidden fees",
                "90-day warranty on all repairs",
                "Free diagnostics and estimates"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">5000+</div>
                <div className="text-gray-600">Repairs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">4.9</div>
                <div className="text-gray-600 flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  Rating
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Contact Us", desc: "Call or schedule online" },
                  { step: "2", title: "Diagnosis", desc: "Free assessment of your printer" },
                  { step: "3", title: "Repair", desc: "Professional repair with quality parts" },
                  { step: "4", title: "Testing", desc: "Thorough testing before return" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-blue-100">{item.desc}</p>
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
