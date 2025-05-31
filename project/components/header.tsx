"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X, Sun, PanelTop as SolarPanel, Zap } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Inverters', href: '/catalog/inverters' },
    { name: 'Solar Panels', href: '/catalog/panels' },
    { name: 'Accessories', href: '/catalog/accessories' },
    // { name: 'About Us', href: '/about' },
    // { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold">Active Technology</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
            {/* <Button variant="default" size="sm">
              Request Quote
            </Button> */}
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16 md:hidden">
          <div className="container px-4">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center space-x-2">
                <Sun className="h-8 w-8 text-yellow-500" />
                <span className="text-xl font-bold">Active Technology</span>
              </Link>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 py-8">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`text-lg font-medium py-2 transition-colors hover:text-primary ${
                    pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-4 w-full">Request Quote</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;