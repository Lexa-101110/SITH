import React from 'react';
import { Rocket, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/70 backdrop-blur-sm border-t border-gray-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">Nova Project</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Pushing the boundaries of amateur rocketry through innovation, open-source sharing, and community collaboration.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Rockets', href: '#rockets' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '#contact' }
              ].map(item => (
                <a key={item.name} href={item.href} className="block text-gray-400 hover:text-purple-400 transition-colors">
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <nav className="space-y-2">
              {[
                { name: 'Circuit Schematics', href: '#docs' },
                { name: 'Arduino Code', href: '#docs' },
                { name: '3D Models', href: '#docs' },
                { name: 'Test Data', href: '#docs' }
              ].map(item => (
                <a key={item.name} href={item.href} className="block text-gray-400 hover:text-purple-400 transition-colors">
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> for the rocketry community
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 Nova Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
