import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import TechnicalSpecs from '../components/TechnicalSpecs';
import RocketComparison from '../components/RocketComparison';
import RocketEngineComparison from '../components/RocketEngineComparison';
import RocketTimeline from '../components/RocketTimeline';
import ProjectsInProgress from '../components/ProjectsInProgress';
import TechnicalDocs from '../components/TechnicalDocs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="relative">
        {/* Animated cosmic background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-gray-900 opacity-90"></div>
          <div className="cosmic-stars absolute inset-0"></div>
          <div className="nebula-effect absolute inset-0"></div>
          <div className="flying-comet absolute"></div>
        </div>
        
        <div className="relative z-10">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          
          {/* Gallery Navigation Section - Moved before About */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multimedia Gallery
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Explore our complete collection of videos, photos, and documentation from design to launch
              </p>
              <Link 
                to="/gallery"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                View Gallery
              </Link>
            </div>
          </section>

          <About />
          <TechnicalSpecs />
          <RocketComparison />
          <RocketEngineComparison />
          <RocketTimeline />
          <ProjectsInProgress />
          <TechnicalDocs />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
