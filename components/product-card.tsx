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
      className="overflow-hidden transition-all duration-200 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <Image
          src={product.imageSrc}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className={`object-cover transition-transform duration-700 ease-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          priority
        />
        <Badge className="absolute top-3 right-3 bg-chart-1 hover:bg-chart-1">
          {product.brand}
        </Badge>
      </div>

      <CardContent className="p-5">
        <div className="flex items-center text-yellow-500 mb-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : ""}`}
              />
            ))}
          <span className="text-xs text-muted-foreground ml-2">{product.rating.toFixed(1)}</span>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold">${product.price.toLocaleString()}</span>
          <Link href={`/catalog/${product.category}/${product.id}`}>
            <Button variant="ghost" size="sm" className="group">
              Details
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
