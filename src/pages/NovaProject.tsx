
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const NovaProject = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <div className="relative">
        {/* Animated starfield background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 opacity-90"></div>
          <div className="stars absolute inset-0"></div>
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
                {t('blog.backToHome')}
              </Link>
            </div>
          </div>
          
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NovaProject;
