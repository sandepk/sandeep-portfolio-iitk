import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="w-5 h-5 text-primary-400" />
            <span className="text-lg font-medium">Sandeep K Gupta</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Building exceptional web experiences with modern technologies and creative problem-solving.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Sandeep K Gupta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;