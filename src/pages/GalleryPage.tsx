import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <div className="relative">
        {/* Enhanced animated background */}
        <div className="fixed inset-0 z-0">
          <div className="gallery-background"></div>
          <div className="cosmic-stars absolute inset-0"></div>
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
          
          <Gallery />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
