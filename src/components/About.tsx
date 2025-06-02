
import React from 'react';
import { Code, Cpu, Printer, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Printer className="h-8 w-8" />,
      title: "3D Printing",
      description: "Advanced PETG and PLA printing for rocket components"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Arduino Electronics",
      description: "Custom flight computers and sensor integration"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Engine Design",
      description: "Solid fuel rocket motor development and testing"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "Flight control systems and data analysis tools"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Nova Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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

          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-purple-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
