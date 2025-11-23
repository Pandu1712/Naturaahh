import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890873/Fruitpowder_trbphd.webp',
    title: '100% Natural & Pure',
    subtitle: 'Discover the power of nature in every product',
    cta: 'Shop Now'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890872/cold_oil_ggu81b.webp',
    title: 'Cold Pressed Oils',
    subtitle: 'Traditional methods, exceptional quality',
    cta: 'Explore Oils'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890873/millites_hwipba.webp',
    title: 'Healthy Millet Products',
    subtitle: 'Ancient grains for modern wellness',
    cta: 'View Collection'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890873/Leafpowder_czzycf.jpg',
    title: 'Premium Leaf Powders',
    subtitle: 'Nature\'s gift for your health',
    cta: 'Discover More'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('right');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className=" mt-10 relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : direction === 'right'
              ? 'opacity-0 scale-105 translate-x-full'
              : 'opacity-0 scale-105 -translate-x-full'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-2xl">
                <h1
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-1000 delay-200 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-xl md:text-2xl text-gray-200 mb-8 transition-all duration-1000 delay-400 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {slide.subtitle}
                </p>
                {/* <button
                  className={`bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0 delay-600'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {slide.cta}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-white w-12 h-3'
                : 'bg-white/50 hover:bg-white/75 w-3 h-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
