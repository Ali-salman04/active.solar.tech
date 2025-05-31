import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductsByCategory, getBrandsForCategory } from '@/lib/data';
import ProductCard from '@/components/product-card';

export const dynamicParams = true;

type CategoryParams = {
  params: {
    category: string;
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

export default function CategoryPage({ params }: CategoryParams) {
  const { category } = params;
  
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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">{categoryTitles[category]}</h1>
        <p className="text-muted-foreground max-w-3xl">
          {categoryDescriptions[category]}
        </p>
      </div>
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Brands</TabsTrigger>
          {brands.map(brand => (
            <TabsTrigger key={brand} value={brand}>
              {brand}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        
        {brands.map(brand => (
          <TabsContent key={brand} value={brand} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter(product => product.brand === brand)
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}