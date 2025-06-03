import React, { useState } from 'react';
import { Play, Camera, Filter, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface MediaItem {
  type: 'video' | 'image';
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  detailedDescription?: string;
  youtubeId?: string;
}

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      type: 'video',
      title: 'Static test fire of NGM Engine',
      category: 'Testing',
      thumbnail: 'https://github.com/Lexa-101110/imaj/blob/main/signal-2025-06-01-233811.jpeg?raw=true',
      description: 'Static test fire to prove engine pressure resistance',
      detailedDescription: 'Static test fire to prove engine pressure resistance, this test was done after a test of this same engine exploded due to a overpressure (4Mpa). The throat diameter was reduced to counter this problem and it worked',
      youtubeId: '-N4TVruPZM4'
    },
    {
      type: 'video',
      title: 'Nova 3 lLaunch',
      category: 'Launches',
      thumbnail: 'https://github.com/Lexa-101110/imaj/blob/main/signal-2025-05-18-204228.png',
      description: 'Lunch of nova 3, reaching 400m',
      detailedDescription: 'Lunch of nova 3 was quite impresive beacause it is one of the largest rocket i made, about 1.5m. It was a good lunch despite the rocket crashing beacause of a bad parachute deployement system, it failed to deploy proprely beacause it is the frist time it has been putted on a rocket.'
      youtubeId: 'ZBxcJGRMyfo'
    },
    {
      type: 'video',
      title: 'Nova 4.1 Launch',
      category: 'Launches',
      thumbnail: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
      description: 'Launch of Nova 4.1, reaching 550m',
      detailedDescription: 'The launch of nova 4.1 was done after nova 4 crashed beacause of a fatal flaw on the parachute, the nova 4 series was built to host a camera.',
      youtubeId: 'pEDT3YU3n5Y'
    }
  ]);

  const categories = ['All', 'Launches', 'Manufacturing', 'Testing', 'Electronics'];

  const filteredItems = filter === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === filter);

  const imageItems = mediaItems.filter(item => item.type === 'image');

  const openVideo = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const openLightbox = (imageIndex: number) => {
    const globalIndex = mediaItems.findIndex(item => item.type === 'image' && imageItems[imageIndex] === item);
    setCurrentImageIndex(globalIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const nextIndex = imageItems.findIndex((item, index) => 
      index > imageItems.findIndex(img => img === mediaItems[currentImageIndex])
    );
    if (nextIndex !== -1) {
      const globalIndex = mediaItems.findIndex(item => item === imageItems[nextIndex]);
      setCurrentImageIndex(globalIndex);
    }
  };

  const prevImage = () => {
    const currentImageItemIndex = imageItems.findIndex(img => img === mediaItems[currentImageIndex]);
    if (currentImageItemIndex > 0) {
      const globalIndex = mediaItems.findIndex(item => item === imageItems[currentImageItemIndex - 1]);
      setCurrentImageIndex(globalIndex);
    }
  };

  const currentImageItem = lightboxOpen ? mediaItems[currentImageIndex] : null;
  const isFirstImage = currentImageItem ? imageItems.findIndex(img => img === currentImageItem) === 0 : false;
  const isLastImage = currentImageItem ? imageItems.findIndex(img => img === currentImageItem) === imageItems.length - 1 : false;

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Multimedia Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Videos, photos, and documentation from design to launch
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === category 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Filter className="h-4 w-4 inline mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const globalIndex = mediaItems.findIndex(mediaItem => mediaItem === item);
            return (
              <div key={globalIndex} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                    onClick={() => {
                      if (item.type === 'image') {
                        const imageIndex = imageItems.findIndex(img => img === item);
                        openLightbox(imageIndex);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  
                  {/* Play button for videos */}
                  {item.type === 'video' && item.youtubeId && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => openVideo(item.youtubeId!)}
                        className="bg-purple-600/80 backdrop-blur-sm rounded-full p-4 hover:bg-purple-600 transition-colors"
                      >
                        <Play className="h-8 w-8 text-white ml-1" />
                      </button>
                    </div>
                  )}

                  {/* Camera icon for images */}
                  {item.type === 'image' && (
                    <div className="absolute top-4 right-4">
                      <Camera className="h-6 w-6 text-white/80" />
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <span className="text-xs px-2 py-1 bg-purple-600/20 text-purple-400 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                  
                  {item.detailedDescription && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-purple-400 border-purple-400 hover:bg-purple-600 hover:text-white">
                          Read More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-purple-400">{item.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <p className="text-gray-300 leading-relaxed">{item.detailedDescription}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Lightbox */}
        {lightboxOpen && currentImageItem && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 text-xl font-bold bg-black/50 rounded-full p-2"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous button */}
              {!isFirstImage && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-10 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              )}

              {/* Next button */}
              {!isLastImage && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-10 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              )}

              {/* Image */}
              <div className="flex flex-col items-center max-h-full">
                <img
                  src={currentImageItem.thumbnail}
                  alt={currentImageItem.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
                
                {/* Image info */}
                <div className="mt-4 text-center max-w-2xl">
                  <h3 className="text-white text-xl font-semibold mb-2">{currentImageItem.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{currentImageItem.description}</p>
                  {currentImageItem.detailedDescription && (
                    <p className="text-gray-400 text-sm leading-relaxed">{currentImageItem.detailedDescription}</p>
                  )}
                </div>
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                {imageItems.findIndex(img => img === currentImageItem) + 1} / {imageItems.length}
              </div>
            </div>
          </div>
        )}

        {/* YouTube Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeVideo}>
            <div className="relative max-w-4xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
              <button
                onClick={closeVideo}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 text-xl font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
