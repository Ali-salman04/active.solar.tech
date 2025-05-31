"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-black/5 border border-gray-200/50 hover:border-gray-300/80 bg-white/80 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Responsive Image Container */}
      <div className="relative overflow-hidden h-48 xs:h-52 sm:h-56 md:h-60 lg:h-64 xl:h-72 2xl:h-80">
        <Image
          src={product.imageSrc}
          alt={product.name}
          fill
          sizes="(max-width: 475px) 100vw, (max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
          className={`object-contain transition-transform duration-700 ease-out p-2 sm:p-3 md:p-4 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          priority
        />
        
        {/* Brand Badge - Responsive positioning */}
        <Badge className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-chart-1 hover:bg-chart-1 text-xs sm:text-sm px-2 py-1 font-medium">
          {product.brand}
        </Badge>
      </div>

      {/* Card Content - Responsive padding and spacing */}
      <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6">
        {/* Rating Section - Responsive star size */}
        <div className="flex items-center text-yellow-500 mb-2 sm:mb-3">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                  i < Math.floor(product.rating) ? "fill-current" : ""
                }`}
              />
            ))}
          <span className="text-xs sm:text-sm text-muted-foreground ml-1 sm:ml-2 font-medium">
            {product.rating.toFixed(1)}
          </span>
        </div>

        {/* Product Name - Responsive typography */}
        <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        {/* Description - Responsive text size and spacing */}
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        {/* Price and Details Section - Responsive layout */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-3">
          <span className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900">
            {/* ${product.price.toLocaleString()} */}
          </span>
          
          <Link href={`/catalog/${product.category}/${product.id}`} className="w-full xs:w-auto">
            <Button 
              variant="ghost" 
              size="sm" 
              className="group w-full xs:w-auto justify-center xs:justify-start hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base font-medium"
            >
              View Details
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;