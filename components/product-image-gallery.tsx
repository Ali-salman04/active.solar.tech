"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ProductImageGalleryProps {
  images: string[];
}

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/30"
              onClick={() => setIsZoomed(true)}
            >
              <ZoomIn className="h-5 w-5 text-white" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative aspect-square">
              <img 
                src={images[currentImage]} 
                alt="Product zoomed view" 
                className="object-contain w-full h-full"
              />
            </div>
          </DialogContent>
        </Dialog>

        <img 
          src={images[currentImage]} 
          alt="Product image" 
          className="w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/30"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/30"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </Button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto py-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "relative overflow-hidden rounded-md h-15 w-20 flex-shrink-0 border-2 transition-all",
                currentImage === index ? "border-primary" : "border-transparent"
              )}
            >
              <img 
                src={image} 
                alt={`Product thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}