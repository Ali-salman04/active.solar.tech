import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-bold">Active Technology</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing innovative solar energy solutions for a sustainable future.
              We power homes and businesses with clean, renewable energy.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog/inverters" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inverters
                </Link>
              </li>
              <li>
                <Link href="/catalog/panels" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link href="/catalog/accessories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Complete Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Mall Road Lahore (Pakistan)
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  +92 3104866961
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  info@activtech.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Active Technology Solar. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;