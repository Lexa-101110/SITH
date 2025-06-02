import React from 'react';
import { Clock, Zap, Cpu, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsInProgress = () => {
  const projects = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Nova Guided rocket",
      progress: 45,
      description: "Advanced gyroscopic control system with four-canard steering",
      timeline: "mid 2025",
      status: "test phase"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects in Progress
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upcoming innovations and experimental features in development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-green-400 mt-1">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <span className="text-sm px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-green-400">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-yellow-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Target: {project.timeline}</span>
                    <Link to="/gallery" className="text-green-400 hover:text-green-300 transition-colors">
                      View in Gallery →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsInProgress;
