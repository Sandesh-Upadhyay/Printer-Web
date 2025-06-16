
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Professional
                <span className="text-red-600 block">Printer Repair</span>
                <span className="text-gray-600 text-4xl block">Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fast, reliable printer repair services for homes and businesses. 
                Our certified technicians fix all printer brands and models with 
                guaranteed satisfaction.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Same Day Service Available",
                "All Major Brands Supported", 
                "Free Diagnosis & Estimates",
                "90-Day Service Warranty"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded font-bold text-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                Free Estimate
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Get Instant Quote</h3>
                <p className="text-gray-600">Fill out the form below for a free estimate</p>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Select Your Printer Issue</option>
                    <option>Printer Won't Turn On</option>
                    <option>Paper Jam Problems</option>
                    <option>Poor Print Quality</option>
                    <option>Connectivity Issues</option>
                    <option>Error Messages</option>
                    <option>Other Issues</option>
                  </select>
                  <button className="w-full bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition-colors">
                    GET FREE QUOTE NOW
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
