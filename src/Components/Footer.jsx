import React from 'react';
import { assets } from '../assets/assets'; // your logo here

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & Description */}
        <div>
          <img src={assets.logo} alt="Logo" className="h-10 mb-4" />
          <p className="text-sm text-gray-400">
            Crafting quality spaces for modern living. Stay connected with us for updates and offers.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li><a href="#Home" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About</a></li>
            <li><a href="#Projects" className="hover:text-white">Projects</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h4 className="text-white font-semibold mb-4">Subscribe to our Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Get updates about new projects & offers.</p>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Md Shoaib. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.325v21.351C0 23.407.594 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.796.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.762v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.407 24 22.676V1.325C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 0 1 1.675 1.086 4.92 4.92 0 0 1 1.086 1.675c.163.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.086 1.675 4.92 4.92 0 0 1-1.675 1.086c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.902 4.902 0 0 1-2.761-2.761c-.163-.457-.349-1.257-.403-2.427-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.902 4.902 0 0 1 2.761-2.761c.457-.163 1.257-.349 2.427-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.736 0 8.332.014 7.052.072c-1.28.058-2.157.25-2.91.54a6.892 6.892 0 0 0-2.49 1.636A6.892 6.892 0 0 0 .072 4.14C-.218 4.893-.41 5.77-.468 7.05-.526 8.33-.54 8.734-.54 12s.014 3.67.072 4.95c.058 1.28.25 2.157.54 2.91a6.894 6.894 0 0 0 1.636 2.49 6.894 6.894 0 0 0 2.49 1.636c.753.29 1.63.482 2.91.54 1.28.058 1.684.072 4.95.072s3.67-.014 4.95-.072c1.28-.058 2.157-.25 2.91-.54a6.894 6.894 0 0 0 2.49-1.636 6.894 6.894 0 0 0 1.636-2.49c.29-.753.482-1.63.54-2.91.058-1.28.072-1.684.072-4.95s-.014-3.67-.072-4.95c-.058-1.28-.25-2.157-.54-2.91a6.894 6.894 0 0 0-1.636-2.49 6.894 6.894 0 0 0-2.49-1.636c-.753-.29-1.63-.482-2.91-.54C15.67.014 15.266 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.868 9.868 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482A13.949 13.949 0 0 1 1.671 3.149 4.917 4.917 0 0 0 3.194 9.86a4.903 4.903 0 0 1-2.229-.616v.062a4.919 4.919 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.922 4.922 0 0 0 4.6 3.42A9.867 9.867 0 0 1 0 19.54a13.905 13.905 0 0 0 7.548 2.209c9.056 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
