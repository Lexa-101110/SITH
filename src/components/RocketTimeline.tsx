import React from 'react';

interface LaunchEvent {
  date: string;
  rocket: string;
  description: string;
  status: 'completed' | 'upcoming';
}

const RocketTimeline = () => {
  const launches: LaunchEvent[] = [
    // Previous Launches
    {
      date: '2023-12-15',
      rocket: 'NOVA 1',
      description: 'First successful launch of NOVA rocket, reaching an altitude of about 30m, the engine nossle has experienced derofmation during the engine assembly phase causing uneven thrust and the rocket started to spin.',
      status: 'completed'
    },
    {
      date: '2024-02-10',
      rocket: 'NOVA 2',
      description: 'NOVA 2 launch with improved stability system, successful flight.',
      status: 'completed'
    },
    {
      date: '2024-05-10',
      rocket: 'NOVA 3',
      description: 'First launch with onboard electronics and unsuccessful parachute recovery, the parachute detached from the rocket causing it to crash at a very high speed and making the recovery unsuccsesful.',
      status: 'completed'
    },
    {
      date: '2024-05-23',
      rocket: 'NOVA 4',
      description: 'Unsuccessful launch, the homemade parachute experienced tangeling and the rocket crashed at high speed causing lost of camera footage.',
      status: 'completed'
    },
    {
      date: '2024-05-23',
      rocket: 'NOVA 4.1',
      description: 'Successful launch with full camera footage and electronic salvation.',
      status: 'completed'
    },
    // Upcoming Launches
    {
      date: 'Not Earlier Than 2025-06-20',
      rocket: 'Nova Guided Rocket',
      description: 'First test flight of guided rocket system with active canard control.',
      status: 'upcoming'
    }
    
  ];

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Launch History & Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Timeline of completed and upcoming rocket launches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Launches Column */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Previous Launches</h3>
            <div className="space-y-6">
              {launches
                .filter(launch => launch.status === 'completed')
                .map((launch, index) => (
                  <div key={index} className="border-l-2 border-green-400 pl-4 pb-6">
                    <div className="text-blue-400 font-semibold">{launch.date}</div>
                    <div className="text-white font-bold mt-1">{launch.rocket}</div>
                    <p className="text-gray-300 mt-2">{launch.description}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      Completed
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Upcoming Launches Column */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Upcoming Launches</h3>
            <div className="space-y-6">
              {launches
                .filter(launch => launch.status === 'upcoming')
                .map((launch, index) => (
                  <div key={index} className="border-l-2 border-purple-400 pl-4 pb-6">
                    <div className="text-blue-400 font-semibold">{launch.date}</div>
                    <div className="text-white font-bold mt-1">{launch.rocket}</div>
                    <p className="text-gray-300 mt-2">{launch.description}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      Scheduled
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RocketTimeline; 