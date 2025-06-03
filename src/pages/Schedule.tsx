/** @jsxImportSource react */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import RocketTimeline from '../components/RocketTimeline';
import Footer from '../components/Footer';

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <div className="relative">
        {/* Animated starfield background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 opacity-90"></div>
          <div className="cosmic-stars absolute inset-0"></div>
          <div className="flying-rocket absolute"></div>
        </div>
        
        <div className="relative z-10">
          <Header />
          
          {/* Back to home link */}
          <div className="pt-24 px-4">
            <div className="max-w-6xl mx-auto">
              <Link 
                to="/" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
          
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Launch Schedule
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Track our past and upcoming rocket launches, tests, and development milestones
            </p>
          </div>

          <RocketTimeline />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Schedule; 