import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div 
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url('/header_img.png')` }}
      id="Header"
    >
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        {/* Main Heading */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-[82px] font-extrabold leading-tight max-w-3xl mx-auto pt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Find Your Perfect Home Today
        </motion.h2>
        
        {/* Subheading */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mt-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover homes that match your lifestyle and dreams. Start your journey now.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {/* Projects Button */}
          <motion.a
  href="#Projects"
  className="border border-white px-5 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium uppercase tracking-wide hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105 text-center"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Projects
</motion.a>


          {/* Contact Button */}
          <motion.a
  href="#Contact"
  className="bg-blue-600 text-white px-5 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium uppercase tracking-wide hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 text-center"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
 Get In Touch
</motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Header
