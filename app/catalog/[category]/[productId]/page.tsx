import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, getProductsByCategory, getAllProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Phone, ChevronLeft, Star, Truck, Shield, Clock } from 'lucide-react';
import ProductImageGallery from '@/components/product-image-gallery';
import RelatedProducts from '@/components/related-products';


type ProductPageProps = {
  params: {
    category: string;
    productId: string;
  };
};

// Add generateStaticParams function for static site generation
export async function generateStaticParams() {
  const products = getAllProducts();

  return products.map((product) => ({
    category: product.category.toLowerCase(),
    productId: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const { category, productId } = params;

  const product = getProductById(productId);

  if (!product) {
    return notFound();
  }

  // Get related products (same category, different product)
  const relatedProducts = getProductsByCategory(category)
    .filter(p => p.id !== productId)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link
          href={`/catalog/${category}`}
          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image Gallery */}
        <ProductImageGallery images={product.gallery} />

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{product.brand}</Badge>
              <div className="flex items-center text-yellow-500">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                ))}
                <span className="text-muted-foreground text-sm ml-2">{product.rating.toFixed(1)}</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            {/* <p className="text-2xl font-medium mt-2">${product.price.toLocaleString()}</p> */}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <div className="text-sm">
                <p className="font-medium">Free Shipping</p>
                <p className="text-muted-foreground">On orders over $500</p>
              </div>
            </div> */}
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div className="text-sm">
                <p className="font-medium">Warranty</p>
                <p className="text-muted-foreground">{product.specifications.Warranty}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div className="text-sm">
                <p className="font-medium">Installation</p>
                <p className="text-muted-foreground">Professional available</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/923104866961" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-1 border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact Sales
            </a>

          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <Tabs defaultValue="features" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="warranty">Warranty</TabsTrigger>
        </TabsList>
        <TabsContent value="features" className="mt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">{feature}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="mt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="flex justify-between py-3 border-b">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="warranty" className="mt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Warranty Information</h3>
            <p className="text-muted-foreground">
              This product comes with a {product.specifications.Warranty} warranty that covers manufacturing defects and performance.
              Active Technology provides comprehensive warranty support, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-muted-foreground">Free repair or replacement of defective parts</li>
              <li className="text-muted-foreground">On-site technical support where applicable</li>
              <li className="text-muted-foreground">Performance guarantee ensuring minimum specified output</li>
              <li className="text-muted-foreground">Transferable warranty for system ownership changes</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-12" />

      <RelatedProducts products={relatedProducts} />
    </div>
  );
}