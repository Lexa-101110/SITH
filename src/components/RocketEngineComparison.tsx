/** @jsxImportSource react */
import React from 'react';
import { Flame, Clock, Scale, Gauge } from 'lucide-react';

const RocketEngineComparison = () => {
  const engines = [
    {
      name: "Nova-K1",
      type: "Solid Fuel",
      specs: {
        thrust: "120N",
        burnTime: "3.5s",
        propellant: "KNO₃/Sorbitol",
        weight: "250g",
        efficiency: "92%",
        status: "Flight Tested"
      },
      description: "Entry-level solid rocket motor optimized for consistent thrust curve and reliability.",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Nova-K2",
      type: "Solid Fuel",
      specs: {
        thrust: "250N",
        burnTime: "4.2s",
        propellant: "KNO₃/Dextrose",
        weight: "420g",
        efficiency: "94%",
        status: "Testing Phase"
      },
      description: "Mid-power motor with enhanced thrust for higher altitude missions.",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Nova-X1",
      type: "Hybrid",
      specs: {
        thrust: "350N",
        burnTime: "6.0s",
        propellant: "N₂O/HTPB",
        weight: "580g",
        efficiency: "96%",
        status: "Development"
      },
      description: "Experimental hybrid motor design with throttling capability.",
      color: "from-emerald-500 to-teal-600"
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
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="mb-4">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${engine.color} text-white mb-2`}>
                  {engine.type}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{engine.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{engine.description}</p>
              </div>

              <div className="space-y-3">
                {renderSpec("Thrust", engine.specs.thrust, <Flame className="h-4 w-4" />)}
                {renderSpec("Burn Time", engine.specs.burnTime, <Clock className="h-4 w-4" />)}
                {renderSpec("Weight", engine.specs.weight, <Scale className="h-4 w-4" />)}
                {renderSpec("Efficiency", engine.specs.efficiency, <Gauge className="h-4 w-4" />)}
                
                <div className="pt-4 mt-4 border-t border-gray-700">
                  <div className="flex justify-between items-center">
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