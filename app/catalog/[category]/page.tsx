import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getProductsByCategory, getBrandsForCategory } from '@/lib/data';
import ProductCard from '@/components/product-card';
import BrandFilter from './brand-filter';

export const dynamicParams = true;

type CategoryParams = {
  params: {
    category: string;
  };
  searchParams: {
    brand?: string;
  };
};

// Add generateStaticParams function for static site generation
export async function generateStaticParams() {
  return [
    { category: 'inverters' },
    { category: 'panels' },
    { category: 'accessories' }
  ];
}

export default function CategoryPage({ params, searchParams }: CategoryParams) {
  const { category } = params;
  const selectedBrand = searchParams.brand || 'all';
  
  // Valid categories check
  const validCategories = ['inverters', 'panels', 'accessories'];
  if (!validCategories.includes(category)) {
    return notFound();
  }

  // Get category data
  const products = getProductsByCategory(category);
  const brands = getBrandsForCategory(category);
  
  // Category title mapping
  const categoryTitles: Record<string, string> = {
    inverters: 'Solar Inverters',
    panels: 'Solar Panels',
    accessories: 'Solar Accessories',
  };

  const categoryDescriptions: Record<string, string> = {
    inverters: 'High-efficiency inverters to convert DC power from your solar panels to usable AC electricity for your home or business.',
    panels: 'Premium solar panels with cutting-edge technology to maximize energy harvesting even in low-light conditions.',
    accessories: 'Essential components and add-ons to complete and enhance your solar power system.',
  };

  // Filter products based on selected brand
  const filteredProducts = selectedBrand === 'all' 
    ? products 
    : products.filter(product => product.brand === selectedBrand);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">{categoryTitles[category]}</h1>
        <p className="text-muted-foreground max-w-3xl">
          {categoryDescriptions[category]}
        </p>
      </div>

      {/* Brand Filter */}
      <Suspense fallback={<div>Loading filters...</div>}>
        <BrandFilter brands={brands} selectedBrand={selectedBrand} category={category} />
      </Suspense>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found for the selected brand.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}