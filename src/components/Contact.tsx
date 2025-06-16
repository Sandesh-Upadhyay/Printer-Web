
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contact Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to get your printer fixed? Contact us now for fast, professional 
            printer repair services. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Call Us</h4>
                  <p className="text-red-600 text-xl font-semibold">(555) 123-4567</p>
                  <p className="text-gray-600">Call now for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Email Us</h4>
                  <p className="text-gray-700">info@printerfixexpert.com</p>
                  <p className="text-gray-600">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Service Area</h4>
                  <p className="text-gray-700">All Metro Areas</p>
                  <p className="text-gray-600">On-site service available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Business Hours</h4>
                  <p className="text-gray-700">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Emergency service available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Service</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <select className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option>Select Service Type</option>
                <option>Printer Not Working</option>
                <option>Paper Jam Issues</option>
                <option>Print Quality Problems</option>
                <option>Network/WiFi Issues</option>
                <option>Error Messages</option>
                <option>Maintenance Service</option>
                <option>Other Issue</option>
              </select>

              <textarea 
                placeholder="Describe your printer problem in detail..." 
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
              ></textarea>

              <button className="w-full bg-red-600 text-white px-6 py-4 rounded font-bold hover:bg-red-700 transition-colors">
                SEND REQUEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
