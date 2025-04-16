import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x:200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true}}
    className="py-20 px-6 md:px-20 lg:px-32 bg-gray-50" id="Testimonials">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
        What Our <span className="text-blue-600 underline underline-offset-4">Clients Say</span>
      </h2>

      <div className="flex flex-col gap-8">
        {/* Row 1 - 2 Testimonials */}
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {testimonialsData.slice(0, 2).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center flex-1 h-full"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-blue-500 mb-2">{testimonial.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">“{testimonial.text}”</p>

              <div className="flex space-x-1 text-yellow-400 mt-auto">
                {[...Array(testimonial.rating)].map((_, starIdx) => (
                  <svg
                    key={starIdx}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.864 1.4-8.168L.132 9.21l8.2-1.192z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Centered 3rd Testimonial */}
        <div className="flex justify-center">
          {testimonialsData.slice(2, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center w-full sm:w-1/2 h-full"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-blue-500 mb-2">{testimonial.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">“{testimonial.text}”</p>

              <div className="flex space-x-1 text-yellow-400 mt-auto">
                {[...Array(testimonial.rating)].map((_, starIdx) => (
                  <svg
                    key={starIdx}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.864 1.4-8.168L.132 9.21l8.2-1.192z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
