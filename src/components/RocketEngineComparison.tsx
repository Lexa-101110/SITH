/** @jsxImportSource react */
import React from 'react';
import { Flame, Clock, Scale, Gauge, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const RocketEngineComparison = () => {
  const engines = [
    {
      name: "N-1",
      type: "Solid Fuel",
      specs: {
        thrust: "90N",
        burnTime: "1s",
        propellant: "KNO₃/Sorbitol",
        weight: "90g",
        efficiency: "70s",
        status: "Flight Tested"
      },
      description: "One of the first rocket engine ever made.",
      color: "from-orange-500 to-red-600",
      galleryLink: "/gallery?filter=Engines&engine=Nova-K1"
    },
    {
      name: "N-2",
      type: "Solid Fuel",
      specs: {
        thrust: "120N",
        burnTime: "1.5s",
        propellant: "KNO₃/Sorbitol",
        weight: "120g",
        efficiency: "75s",
        status: "Flight Tested"
      },
      description: "Designed for Nova 3 this engine is not very reliable.",
      color: "from-blue-500 to-purple-600",
      galleryLink: "/gallery?filter=Engines&engine=Nova-K2"
    },
    {
      name: "NGM Engine",
      type: "Solid Fuel",
      specs: {
        thrust: "170N",
        burnTime: "1.7s",
        propellant: "KNO₃/Sorbitol",
        weight: "280g",
        efficiency: "101s",
        status: "Not flight proven"
      },
      description: "Most powerful engine, designed for Nova Guided Rocketl.",
      color: "from-emerald-500 to-teal-600",
      galleryLink: "/gallery?filter=Engines&engine=Nova-X1"
    }
  ];

  const renderSpec = (label: string, value: string, icon: React.ReactNode) => (
    <div className="flex items-center space-x-2 text-sm">
      <div className="text-gray-400">
        {icon}
      </div>
      <span className="text-gray-400">{label}:</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );

  return (
    <section id="engine-comparison" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rocket Engine Comparison
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare our different rocket engine configurations and their performance characteristics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engines.map((engine, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${engine.color} text-white mb-2`}>
                  {engine.type}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{engine.name}</h3>
                <p className="text-gray-400 text-sm min-h-[3rem] mb-4">{engine.description}</p>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {renderSpec("Thrust", engine.specs.thrust, <Flame className="h-4 w-4" />)}
                  {renderSpec("Burn Time", engine.specs.burnTime, <Clock className="h-4 w-4" />)}
                  {renderSpec("Weight", engine.specs.weight, <Scale className="h-4 w-4" />)}
                  {renderSpec("Efficiency", engine.specs.efficiency, <Gauge className="h-4 w-4" />)}
                </div>
                
                <div className="pt-4 mt-4 border-t border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">Status</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      engine.specs.status === 'Flight Tested' 
                        ? 'bg-green-500/20 text-green-400'
                        : engine.specs.status === 'Testing Phase'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {engine.specs.status}
                    </span>
                  </div>
                  
                  <Link 
                    to={engine.galleryLink}
                    className={`w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r ${engine.color} text-white rounded-lg hover:opacity-90 transition-opacity group`}
                  >
                    View in Gallery
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RocketEngineComparison; 