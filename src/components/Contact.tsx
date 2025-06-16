
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Fix Your Printer?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Contact us today for fast, professional printer repair services. 
            We're here to help get your printer working perfectly again.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-blue-100">(555) 123-4567</p>
                  <p className="text-blue-200 text-sm">Call for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-blue-100">service@techfixpro.com</p>
                  <p className="text-blue-200 text-sm">We'll respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Service Area</h4>
                  <p className="text-blue-100">Metro Area & Surrounding Cities</p>
                  <p className="text-blue-200 text-sm">Free on-site service available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Business Hours</h4>
                  <p className="text-blue-100">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-blue-100">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-blue-200 text-sm">Emergency service available</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3">Emergency Service</h4>
              <p className="text-blue-100 mb-4">
                Need urgent printer repair? We offer 24/7 emergency service for critical business needs.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Call Emergency Line
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Service</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Service Type</option>
                <option>Printer Won't Print</option>
                <option>Paper Jam Issues</option>
                <option>Poor Print Quality</option>
                <option>Network/WiFi Problems</option>
                <option>Error Messages</option>
                <option>Maintenance Service</option>
                <option>Other Issue</option>
              </select>

              <textarea 
                placeholder="Describe your printer problem..." 
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>

              <button className="w-full bg-blue-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Send Service Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
