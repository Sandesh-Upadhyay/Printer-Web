
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Business Owner",
      content: "Outstanding service! They fixed my office printer the same day I called. The technician was professional and explained everything clearly. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      role: "Home User",
      content: "My printer was completely dead and I thought I'd have to buy a new one. These guys brought it back to life for a fraction of the cost. Amazing work!",
      rating: 5
    },
    {
      name: "Robert Davis",
      role: "Office Manager",
      content: "We've been using their services for 3 years now. Always reliable, fair pricing, and excellent customer service. They keep our office running smoothly.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our printer repair services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-300 pt-4">
                <div className="font-bold text-gray-800">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-red-600 rounded-lg p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-red-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24hr</div>
              <div className="text-red-100">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-red-100">First-Time Fix</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5★</div>
              <div className="text-red-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
