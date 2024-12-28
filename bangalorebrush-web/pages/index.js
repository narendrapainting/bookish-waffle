import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Star, Check } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Brand Colors */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Logo placement */}
            <div className="mb-8">
              {/* Logo SVG Component */}
            </div>
            <h1 className="text-5xl font-bold font-montserrat mb-6">
              Transform Your Space with Premium Painting
            </h1>
            <p className="text-xl font-inter mb-8 text-blue-100">
              South Bangalore's Most Trusted Professional Painting Service
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-6 text-lg">
                Get Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative wave pattern */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L48 8C96 16 192 32 288 40C384 48 480 48 576 40C672 32 768 16 864 24C960 32 1056 64 1152 72C1248 80 1344 64 1392 56L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-100 hover:border-blue-500 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-2">Premium Quality</h3>
                <p className="font-inter text-gray-600">International standard materials and techniques</p>
              </CardContent>
            </Card>
            {/* Add more trust indicators */}
          </div>
        </div>
      </div>

      {/* More sections following brand guidelines */}
    </div>
  );
};

export default LandingPage;