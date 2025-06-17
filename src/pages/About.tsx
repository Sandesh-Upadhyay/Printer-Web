import React from 'react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Printer Fix</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in printer solutions and maintenance
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Our Mission */}
            <section className="text-center">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At PrinterDoctor, we're dedicated to providing comprehensive printer support and solutions. 
                We understand that printer issues can be frustrating and time-consuming, which is why we're 
                here to offer expert guidance and support for all printer makes and models.
              </p>
            </section>

            {/* What We Do */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">What We Do</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Expert Troubleshooting</h3>
                  <p className="text-gray-600">
                    Our team provides detailed, easy-to-follow solutions for all printer-related issues, 
                    from basic paper jams to complex network connectivity problems.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600">
                    Access to round-the-clock printer support ensures that you can get help 
                    whenever you need it, keeping your operations running smoothly.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Comprehensive Coverage</h3>
                  <p className="text-gray-600">
                    We support all major printer brands including HP, Canon, Epson, Brother, 
                    and Lexmark, ensuring you get the help you need regardless of your printer model.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Preventive Maintenance</h3>
                  <p className="text-gray-600">
                    Get expert advice on printer maintenance and best practices to prevent 
                    issues before they occur and extend your printer's lifespan.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="text-center">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">Why Choose Printer Fix?</h2>
              <div className="text-lg text-gray-600 space-y-4">
                <p>
                  With years of experience in printer troubleshooting and maintenance, 
                  we've helped thousands of users resolve their printer issues quickly and effectively.
                </p>
                <p className="font-medium text-gray-900">
                  Let us be your trusted partner in maintaining your printer's optimal performance.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;