
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Professional
                <span className="text-blue-600 block">Printer Support</span>
                <span className="text-gray-600 text-4xl block">Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert printer troubleshooting and support services for all major brands. 
                Get step-by-step solutions for printer issues, wireless setup, and technical problems.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "All Major Printer Brands Supported",
                "Step-by-Step Troubleshooting Guide", 
                "Wireless Setup Assistance",
                "24/7 Technical Support"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1-833-712-3079
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                Get Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-lg shadow-xl p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Get Instant Help</h3>
                <p className="text-gray-600">Select your printer issue for immediate assistance</p>
                <form className="space-y-4">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select Your Printer Issue</option>
                    <option>Printer Offline</option>
                    <option>Wireless Setup</option>
                    <option>Not Printing</option>
                    <option>Blank Prints</option>
                    <option>Error Codes</option>
                    <option>Scanner Issues</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="Printer Model" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition-colors">
                    GET HELP NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
