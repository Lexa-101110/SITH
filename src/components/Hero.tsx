
import React from 'react';
import { ArrowDown, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Rocket className="h-16 w-16 text-purple-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Nova Project</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Building the future of amateur rocketry with
            <span className="text-teal-400"> 3D printing</span>,
            <span className="text-purple-400"> electronics</span>, and
            <span className="text-violet-400"> innovative design</span>
          </p>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
