import { ArrowRight } from "lucide-react";
import { categories } from "../data/products";

interface CategoriesSectionProps {
  onCategoryClick: (categoryId: string) => void;
}

export default function CategoriesSection({
  onCategoryClick,
}: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-[#FFFDF3]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Discover Our Categories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-3">
            Explore naturally crafted, premium-quality products curated for your well-being.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-14 text-center">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              style={{ animationDelay: `${index * 80}ms` }}
              className="group cursor-pointer animate-slideUp"
            >
              {/* Circular Image with Premium Border */}
              <div
                className="
                  w-44 h-44 md:w-48 md:h-48 mx-auto rounded-full bg-white relative p-2
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]
                  transition-all duration-500
                  group-hover:scale-105
                  group-hover:shadow-[0_15px_40px_-8px_rgba(0,0,0,0.35)]
                "
                style={{
                  border: "6px solid #bef264", // lime-300
                }}
              >
                {/* Inner Soft Shadow */}
                <div className="absolute inset-0 rounded-full shadow-inner"></div>

                {/* Perfect Circle Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="
                    w-full h-full rounded-full object-cover
                    transition-all duration-500
                    group-hover:brightness-105
                  "
                />
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-semibold text-gray-900 mt-4 group-hover:text-lime-700 transition-all">
                {category.name}
              </h3>

              {/* Explore Button */}
              <div className="flex items-center justify-center gap-2 mt-2 text-lime-700 font-medium opacity-80 group-hover:opacity-100 transition-all">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
