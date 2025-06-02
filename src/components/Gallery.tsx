import React, { useState } from 'react';
import { Play, Camera, Filter, ChevronLeft, ChevronRight, X, Edit, Save } from 'lucide-react';
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
  const [editMode, setEditMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [tempDescription, setTempDescription] = useState('');
  
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      type: 'video',
      title: 'Phoenix Alpha Launch',
      category: 'Launches',
      thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      description: 'Successful first launch reaching 1,200 feet',
      detailedDescription: 'This historic launch marked the first successful test of our Phoenix Alpha rocket. The vehicle achieved an altitude of 1,200 feet with perfect trajectory control and safe recovery. The launch validated our engine design, flight computer systems, and recovery mechanisms.',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      type: 'image',
      title: 'Engine Assembly',
      category: 'Manufacturing',
      thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
      description: '3D printed PETG engine components',
      detailedDescription: 'Our custom-designed rocket engine components are 3D printed using high-temperature PETG material. Each component undergoes rigorous testing for structural integrity and thermal resistance. The modular design allows for easy maintenance and upgrades.'
    },
    {
      type: 'video',
      title: 'Static Fire Test',
      category: 'Testing',
      thumbnail: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
      description: 'Ground testing of new fuel mixture',
      detailedDescription: 'Static fire tests are crucial for validating engine performance before flight. This test series evaluated our new propellant mixture, measuring thrust curves, combustion efficiency, and thermal characteristics.',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      type: 'image',
      title: 'Flight Computer PCB',
      category: 'Electronics',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      description: 'Custom Arduino-based flight computer',
      detailedDescription: 'Our flight computer features a custom PCB design with multiple sensors including accelerometers, gyroscopes, and barometric pressure sensors. The Arduino-based system provides real-time telemetry and autonomous flight control with built-in safety protocols.'
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

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setTempDescription(mediaItems[index].detailedDescription || '');
  };

  const saveEdit = () => {
    if (editingIndex !== null) {
      const updatedItems = [...mediaItems];
      updatedItems[editingIndex].detailedDescription = tempDescription;
      setMediaItems(updatedItems);
      setEditingIndex(null);
      setTempDescription('');
    }
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setTempDescription('');
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

        {/* Admin Controls */}
        <div className="flex justify-end mb-6">
          <Button
            onClick={() => setEditMode(!editMode)}
            variant={editMode ? "destructive" : "outline"}
            className="text-white border-purple-400 hover:bg-purple-600"
          >
            <Edit className="h-4 w-4 mr-2" />
            {editMode ? 'Exit Edit Mode' : 'Edit Descriptions'}
          </Button>
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

                  {/* Edit button */}
                  {editMode && (
                    <div className="absolute top-4 left-4">
                      <Button
                        size="sm"
                        onClick={() => startEdit(globalIndex)}
                        className="bg-purple-600/80 hover:bg-purple-600"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
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

        {/* Edit Description Modal */}
        {editingIndex !== null && (
          <Dialog open={true} onOpenChange={() => cancelEdit()}>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-purple-400">
                  Edit Description: {mediaItems[editingIndex].title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Textarea
                  value={tempDescription}
                  onChange={(e) => setTempDescription(e.target.value)}
                  placeholder="Enter detailed description..."
                  className="bg-gray-800 border-gray-600 text-white min-h-[200px]"
                />
                <div className="flex gap-2 justify-end">
                  <Button onClick={cancelEdit} variant="outline" className="text-gray-400 border-gray-600">
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onClick={saveEdit} className="bg-purple-600 hover:bg-purple-700">
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

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
