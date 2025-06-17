import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About Our Printer Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to providing expert printer solutions and maintenance services 
            to keep your business running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Your Trusted Printer Service Partner
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With years of experience in printer troubleshooting and maintenance, 
              we've helped thousands of users resolve their printer issues quickly 
              and effectively.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Expert Technicians</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Quick Response Time</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Affordable Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Our Commitment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We understand how critical printer functionality is to your operations. 
              That's why we offer 24/7 emergency services and guarantee rapid response 
              times.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;