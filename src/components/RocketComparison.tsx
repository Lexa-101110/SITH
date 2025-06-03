
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const RocketComparison = () => {
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const rockets = [
    {
      name: "NOVA 1",
      thrust: "90N",
      weight: "0.4Kg",
      stability: "Very low",
      fuel: "KNO₃ + Sorbitol",
      electronics: "None",
      recovery: "None",
      status: "Lunched, destroyed on impact"
    },
    {
      name: "Nova 2",
      thrust: "130N",
      weight: "0.6Kg",
      stability: "High",
      fuel: "KNO₃ + Sorbitol",
      electronics: "None",
      recovery: "None",
      status: "Lunched, severely damaged on impact"
    },
    {
      name: "Nova 3",
      thrust: "110N",
      weight: "1.3kg",
      stability: "High",
      fuel: "KNO₃ + Sorbitol",
      electronics: "Accelerometer",
      recovery: "Single parachute",
      status: "Lunched, parachute detached rocket destroyed on impact"
    },
    {
      name: "Nova 4",
      thrust: "120N",
      weight: "1.1kg",
      stability: "Very high",
      fuel: "KNO₃ + Sorbitol",
      electronics: "Accelerometer + onboard camera",
      recovery: "Single parachute",
      status: "Lunched and recovered safely"
    },
    {
      name: "Nova Guided Rocket",
      thrust: "200N",
      weight: "1.5kg",
      stability: "Extremly high",
      fuel: "KNO₃ + (Sorbitol + fructose)",
      electronics: "Accelerometer + gyroscope + four canards + onboard camera",
      recovery: "Dual parachute",
      status: "In developement"
    }
  ];

  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: string }) => (
    <span className="ml-1">
      {sortField === field ? (
        sortDirection === 'asc' ? (
          <ChevronUp className="h-4 w-4 inline" />
        ) : (
          <ChevronDown className="h-4 w-4 inline" />
        )
      ) : (
        <ChevronDown className="h-4 w-4 inline opacity-30" />
      )}
    </span>
  );

  return (
    <section id="rockets" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rocket Fleet Comparison
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive comparison of all rocket designs and their capabilities
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700">
            <thead>
              <tr className="border-b border-gray-700">
                {[
                  { key: 'name', label: 'Rocket Name' },
                  { key: 'thrust', label: 'Thrust' },
                  { key: 'weight', label: 'Weight' },
                  { key: 'stability', label: 'Stability' },
                  { key: 'fuel', label: 'Fuel Type' },
                  { key: 'electronics', label: 'Electronics' },
                  { key: 'recovery', label: 'Recovery System' },
                  { key: 'status', label: 'Status' }
                ].map((header) => (
                  <th
                    key={header.key}
                    className="px-6 py-4 text-left text-orange-400 font-semibold cursor-pointer hover:text-orange-300 transition-colors"
                    onClick={() => handleSort(header.key)}
                  >
                    {header.label}
                    <SortIcon field={header.key} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rockets.map((rocket, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 text-white font-semibold">{rocket.name}</td>
                  <td className="px-6 py-4 text-blue-400">{rocket.thrust}</td>
                  <td className="px-6 py-4 text-gray-300">{rocket.weight}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      rocket.stability === 'Extreme' ? 'bg-green-500/20 text-green-400' :
                      rocket.stability === 'Very High' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {rocket.stability}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{rocket.fuel}</td>
                  <td className="px-6 py-4 text-gray-300">{rocket.electronics}</td>
                  <td className="px-6 py-4 text-gray-300">{rocket.recovery}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      rocket.status === 'Tested' ? 'bg-green-500/20 text-green-400' :
                      rocket.status === 'In Development' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {rocket.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RocketComparison;
