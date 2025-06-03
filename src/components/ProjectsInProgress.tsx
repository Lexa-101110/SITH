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

        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-sm text-gray-400">{project.status}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-green-400">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-yellow-400 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Target</span>
                  <span className="text-white">{project.timeline}</span>
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
