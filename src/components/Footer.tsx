import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-lime-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Leaf className="relative w-10 h-10 text-lime-500 group-hover:rotate-12 transition-transform" />
              </div>
              <span className="text-2xl font-bold group-hover:text-lime-400 transition-colors">
                Naturaahh
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for 100% natural and organic products. Experience the power of nature
              for a healthier lifestyle.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-lime-500 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href=" https://www.instagram.com/naturaahh/"
                className="bg-white/10 hover:bg-lime-500 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-lime-500 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Categories', id: 'categories' },
                { name: 'About Us', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300 hover:translate-x-2 inline-block"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Categories</h3>
            <ul className="space-y-3">
              {[
                'Leaf Powder',
                'Vegetable Powder',
                'Fruit Powder',
                'Herbs',
                'Millet & Mixes',
                'Healthy Snacks',
                'Cold Pressed Oils'
              ].map((category) => (
                <li key={category}>
                  <button className="text-gray-400 hover:text-lime-400 transition-colors duration-300 hover:translate-x-2 inline-block">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-lime-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">
                  Hyderbad<br />
                  
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-lime-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+91 90009 65896" className="text-gray-400 hover:text-lime-400 transition-colors">
                  +91  90009 65896
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-lime-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@naturaahh.com" className="text-gray-400 hover:text-lime-400 transition-colors">
                 naturaahh@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Naturaahh. All rights reserved. Made with{' '}
              <span className="text-red-500 animate-pulse">❤</span> for your health.
            </p>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
