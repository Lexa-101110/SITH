import React, { useState } from 'react';
import { FileText, Download, Code, Cpu } from 'lucide-react';

const TechnicalDocs = () => {
  const [activeCategory, setActiveCategory] = useState('Schematics');

  const documents = {
    'Schematics': [
      { 
        name: 'Flight Computer PCB', 
        type: 'PDF', 
        size: '2.4 MB', 
        downloads: 156,
        githubUrl: 'https://github.com/nova-project/documentation/raw/main/schematics/flight-computer-pcb.pdf'
      },
      { 
        name: 'Recovery System Wiring', 
        type: 'PDF', 
        size: '1.8 MB', 
        downloads: 89,
        githubUrl: 'https://github.com/nova-project/documentation/raw/main/schematics/recovery-system-wiring.pdf'
      },
      { 
        name: 'Sensor Integration Layout', 
        type: 'PDF', 
        size: '3.1 MB', 
        downloads: 134,
        githubUrl: 'https://github.com/nova-project/documentation/raw/main/schematics/sensor-integration-layout.pdf'
      }
    ],
    'Arduino Code': [
      { 
        name: 'Flight Controller v2.3', 
        type: 'INO', 
        size: '45 KB', 
        downloads: 267,
        githubUrl: 'https://github.com/nova-project/arduino-code/raw/main/flight-controller-v2.3.ino'
      },
      { 
        name: 'Sensor Calibration', 
        type: 'INO', 
        size: '23 KB', 
        downloads: 198,
        githubUrl: 'https://github.com/nova-project/arduino-code/raw/main/sensor-calibration.ino'
      },
      { 
        name: 'Recovery Deployment', 
        type: 'INO', 
        size: '18 KB', 
        downloads: 145,
        githubUrl: 'https://github.com/nova-project/arduino-code/raw/main/recovery-deployment.ino'
      }
    ],
    '3D Models': [
      { 
        name: 'Engine Assembly STL', 
        type: 'STL', 
        size: '15.6 MB', 
        downloads: 324,
        githubUrl: 'https://github.com/nova-project/3d-models/raw/main/engine-assembly.stl'
      },
      { 
        name: 'Nose Cone Design', 
        type: 'STL', 
        size: '8.2 MB', 
        downloads: 287,
        githubUrl: 'https://github.com/nova-project/3d-models/raw/main/nose-cone-design.stl'
      },
      { 
        name: 'Canard Fins Set', 
        type: 'STL', 
        size: '4.9 MB', 
        downloads: 156,
        githubUrl: 'https://github.com/nova-project/3d-models/raw/main/canard-fins-set.stl'
      }
    ],
    'Test Data': [
      { 
        name: 'Thrust Curve Analysis', 
        type: 'CSV', 
        size: '890 KB', 
        downloads: 67,
        githubUrl: 'https://github.com/nova-project/test-data/raw/main/thrust-curve-analysis.csv'
      },
      { 
        name: 'Flight Telemetry Log', 
        type: 'JSON', 
        size: '1.2 MB', 
        downloads: 43,
        githubUrl: 'https://github.com/nova-project/test-data/raw/main/flight-telemetry-log.json'
      },
      { 
        name: 'Sensor Calibration Data', 
        type: 'CSV', 
        size: '456 KB', 
        downloads: 78,
        githubUrl: 'https://github.com/nova-project/test-data/raw/main/sensor-calibration-data.csv'
      }
    ]
  };

  const categories = Object.keys(documents);

  const getIcon = (type: string) => {
    switch (type) {
      case 'INO': return <Code className="h-5 w-5" />;
      case 'STL': return <Cpu className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'text-red-400 bg-red-500/20';
      case 'INO': return 'text-blue-400 bg-blue-500/20';
      case 'STL': return 'text-green-400 bg-green-500/20';
      case 'CSV': return 'text-yellow-400 bg-yellow-500/20';
      case 'JSON': return 'text-purple-400 bg-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <section id="docs" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Documentation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Open-source designs, code, and test data for the rocketry community
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4">
              <h3 className="text-white font-bold mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeCategory === category 
                        ? 'bg-orange-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Documents List */}
          <div className="lg:w-3/4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-xl">{activeCategory}</h3>
                <span className="text-gray-400 text-sm">
                  {documents[activeCategory].length} files
                </span>
              </div>

              <div className="space-y-4">
                {documents[activeCategory].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="text-orange-400">
                        {getIcon(doc.type)}
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{doc.name}</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className={`text-xs px-2 py-1 rounded ${getTypeColor(doc.type)}`}>
                            {doc.type}
                          </span>
                          <span className="text-gray-400 text-sm">{doc.size}</span>
                          <span className="text-gray-400 text-sm">{doc.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={doc.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDocs;
