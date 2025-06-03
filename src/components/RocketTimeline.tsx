import React from 'react';

interface TimelineEvent {
  date: string;
  type: 'launch' | 'test';
  description: string;
  rocket: string;
}

const RocketTimeline = () => {
  const events: TimelineEvent[] = [
    {
      date: '2023-06-15',
      type: 'launch',
      rocket: 'NOVA 1',
      description: 'First successful launch of NOVA 1 rocket, reaching an altitude of 100m.'
    },
    {
      date: '2023-07-20',
      type: 'test',
      rocket: 'NOVA 2',
      description: 'Static fire test of improved engine design with 130N thrust.'
    },
    {
      date: '2023-08-10',
      type: 'launch',
      rocket: 'NOVA 2',
      description: 'NOVA 2 launch with improved stability system, successful flight.'
    },
    {
      date: '2023-09-05',
      type: 'test',
      rocket: 'NOVA 3',
      description: 'Parachute deployment system test and electronics verification.'
    },
    {
      date: '2023-10-01',
      type: 'launch',
      rocket: 'NOVA 3',
      description: 'First launch with onboard electronics and successful parachute recovery.'
    },
    {
      date: '2023-11-15',
      type: 'test',
      rocket: 'NOVA 4',
      description: 'Camera system integration test and static fire of enhanced engine.'
    },
    {
      date: '2023-12-01',
      type: 'launch',
      rocket: 'NOVA 4',
      description: 'Successful launch with full camera footage and telemetry data collection.'
    },
    {
      date: '2024-01-20',
      type: 'test',
      rocket: 'Nova Guided Rocket',
      description: 'Initial canard control system test and new fuel mixture verification.'
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Launch & Test History
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chronological timeline of rocket launches and engine tests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Launches Column */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Rocket Launches</h3>
            <div className="space-y-6">
              {events
                .filter(event => event.type === 'launch')
                .map((event, index) => (
                  <div key={index} className="border-l-2 border-orange-400 pl-4 pb-6">
                    <div className="text-blue-400 font-semibold">{event.date}</div>
                    <div className="text-white font-bold mt-1">{event.rocket}</div>
                    <p className="text-gray-300 mt-2">{event.description}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Tests Column */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Static Fire & System Tests</h3>
            <div className="space-y-6">
              {events
                .filter(event => event.type === 'test')
                .map((event, index) => (
                  <div key={index} className="border-l-2 border-blue-400 pl-4 pb-6">
                    <div className="text-blue-400 font-semibold">{event.date}</div>
                    <div className="text-white font-bold mt-1">{event.rocket}</div>
                    <p className="text-gray-300 mt-2">{event.description}</p>
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