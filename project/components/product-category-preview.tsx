"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ProductCategoryPreviewProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
}

const ProductCategoryPreview = ({
  id,
  title,
  description,
  icon,
  imageSrc,
}: ProductCategoryPreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden group transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={imageSrc} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <div className="flex items-center mb-3 text-white">
            {icon}
            <h3 className="text-xl font-semibold ml-3">{title}</h3>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href={`/catalog/${id}`}>
          <Button variant="outline" className="group w-full">
            View Collection
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCategoryPreview;