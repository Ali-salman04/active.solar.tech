"use client";

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const WhatsAppButton = () => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = '+923104866961';
    const message = 'Hi! I am interested in your solar energy products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "WhatsApp Opening",
      description: "Connecting you with our sales team",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 p-2 bg-green-500 text-white rounded-lg whitespace-nowrap animate-fade-in text-sm font-medium">
            Chat with us on WhatsApp
          </div>
        )}
        <Button 
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-transform hover:scale-110"
        >
          <Phone className="h-6 w-6" />
          <span className="sr-only">Contact via WhatsApp</span>
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppButton