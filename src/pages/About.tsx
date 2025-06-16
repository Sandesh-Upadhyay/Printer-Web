import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-12">About Us</h1>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-lg leading-relaxed">
              Welcome to PrinterDoctor, your dedicated partner for all printer troubleshooting needs. We understand that printer issues can be frustrating and disruptive, which is why we're here to provide easy-to-follow guidance and expert solutions for all printer makes and models, including HP, Canon, Epson, Brother, and Lexmark.
            </p>

            <p className="text-lg leading-relaxed">
              At PrinterDoctor, we offer step-by-step troubleshooting resources and 24/7 access to certified experts who can assist with any printer-related challenge—from connectivity problems to hardware malfunctions. Our mission is to ensure that you get your printer back up and running smoothly, quickly, and reliably.
            </p>

            <p className="text-lg leading-relaxed font-medium">
              With PrinterDoctor, help is always just a click away.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;