
import React from 'react';
import { Settings, Gauge, Navigation, Umbrella } from 'lucide-react';

const TechnicalSpecs = () => {
  const specs = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "3D Printed Components",
      details: [
        "Engines: PETG plastic for heat resistance",
        "Body: PLA plastic for structural integrity",
        "Custom nozzle geometries for optimal thrust"
      ]
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Flight Electronics",
      details: [
        "Accelerometer for parachute deployment",
        "BNO055 gyroscope for stability control",
        "Arduino-based flight computer"
      ]
    },
    {
      icon: <Navigation className="h-8 w-8" />,
      title: "Control Systems",
      details: [
        "Four-canard steering system",
        "Real-time stability correction",
        "Autonomous flight path optimization"
      ]
    },
    {
      icon: <Umbrella className="h-8 w-8" />,
      title: "Recovery & Fuel Systems",
      details: [
        "Automated parachute deployment system",
        "Potassium Nitrate (KNO₃) oxidizer",
        "Sorbitol or Fructose fuel mixture"
      ]
    }
  ];

  return (
    <section id="technical" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Specifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every component is engineered for performance, reliability, and safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="text-green-400 mb-4">
                {spec.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-4">{spec.title}</h3>
              <ul className="space-y-2">
                {spec.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-400 text-sm flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
