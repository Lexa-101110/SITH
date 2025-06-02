/** @jsxImportSource react */
import React from 'react';
import { Mail, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, label: 'Instagram', href: 'https://www.instagram.com/nova_rocket_/', color: 'hover:text-pink-400' },
    { icon: <Youtube className="h-6 w-6" />, label: 'YouTube', href: 'https://www.youtube.com/@axelrancoule9809', color: 'hover:text-red-400' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about rocketry? Want to collaborate? Or just interested in following the journey?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`group flex flex-col items-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${link.color}`}
            >
              <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300 mb-3">
                {link.icon}
              </div>
              <span className="text-white font-medium">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
          <h3 className="text-white font-bold text-xl mb-4">Quick Contact</h3>
          <p className="text-gray-400 mb-6">
            For technical discussions, collaboration opportunities, or general inquiries
          </p>
          <p className="text-cyan-400 font-medium flex items-center justify-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>lexa101110@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
