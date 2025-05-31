"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sun, Zap, Battery, Shield, ChevronRight } from 'lucide-react';
import ProductCategoryPreview from '@/components/product-category-preview';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const productCategories = [
     {
    id: 'inverters',
    title: 'Solar Inverters',
    description: 'High-efficiency inverters for residential and commercial use',
    icon: <Zap className="h-10 w-10 text-chart-1" />,
    imageSrc: '/images/inverter.jpg',
  },
    {
      id: 'panels',
      title: 'Solar Panels',
      description: 'Premium photovoltaic panels with industry-leading efficiency',
      icon: <Sun className="h-10 w-10 text-chart-1" />,
      imageSrc: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'accessories',
      title: 'Accessories',
      description: 'Essential components and accessories for complete solar systems',
      icon: <Battery className="h-10 w-10 text-chart-1" />,
      imageSrc: 'https://images.pexels.com/photos/6322864/pexels-photo-6322864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-chart-4" />,
      title: 'Energy Efficiency',
      description: 'Our solar solutions maximize energy production while minimizing costs'
    },
    {
      icon: <Shield className="h-8 w-8 text-chart-4" />,
      title: 'Reliability',
      description: '25+ years warranty with proven durability in all weather conditions'
    },
    {
      icon: <Sun className="h-8 w-8 text-chart-4" />,
      title: 'Sustainability',
      description: 'Reduce your carbon footprint with clean, renewable energy'
    },
  ];

  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923104866961', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Powering the Future with Solar Energy
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Active Technology provides cutting-edge solar solutions for residential and commercial properties,
              helping you reduce energy costs while protecting the environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-chart-1 hover:bg-chart-1/90 text-white">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {/* <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                Request a Quote
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Solar Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of high-quality solar products designed to
              provide clean, renewable energy solutions for every need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <ProductCategoryPreview
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                imageSrc={category.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Solar Products?</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 bg-muted rounded-lg p-2">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="outline" className="group">
                  Learn more about our technology
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/9875367/pexels-photo-9875367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Solar installation"
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Take the first step toward energy independence and sustainability.
            Our experts will help you find the perfect solar solution for your needs.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600"
              onClick={handleWhatsAppClick}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}