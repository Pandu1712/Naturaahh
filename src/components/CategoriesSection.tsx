import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

interface CategoriesSectionProps {
  onCategoryClick: (categoryId: string) => void;
}

export default function CategoriesSection({ onCategoryClick }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our premium collection of natural and healthy products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onCategoryClick(category.id)}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/20 transition-colors duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-90">
                    {category.description}
                  </p>
                  <div className="flex items-center text-green-400 font-semibold group-hover:text-white transition-colors duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                View Products
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
