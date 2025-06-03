/** @jsxImportSource react */
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Nova Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-gray-300 leading-relaxed">
            Welcome to Nova Project, where passion for rocketry meets cutting-edge technology. I'm an amateur rocket enthusiast dedicated to pushing the boundaries of what's possible in DIY aerospace.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            My expertise spans across multiple disciplines: 3D printing for precise component manufacturing, Arduino-based electronics for sophisticated flight systems, and innovative engine design for reliable propulsion.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Every rocket is a testament to the philosophy that great engineering comes from understanding, not just following instructions. I share all designs, code, and insights to foster a community of learning and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
