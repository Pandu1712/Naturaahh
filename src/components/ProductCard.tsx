import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Eye, Award, Leaf } from 'lucide-react';
import { Product, ProductSize } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ product, selectedSize, quantity });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    setQuantity(1);
  };

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="group bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden">

      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform transition-all duration-700 group-hover:scale-105"
        />

        <button
          onClick={() => onViewDetails(product)}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full 
            shadow-lg hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
        >
          <Eye className="w-5 h-5 text-gray-700" />
        </button>

        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="px-3 py-1 bg-lime-600/90 text-white text-xs font-semibold rounded-full flex items-center gap-1">
            <Leaf className="w-3 h-3" /> Natural
          </span>

          <span className="px-3 py-1 bg-white/90 text-lime-700 text-xs font-semibold rounded-full flex items-center gap-1">
            <Award className="w-3 h-3" /> Premium
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-lime-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Sizes */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-700 mb-2 block">Select Size</label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map(size => (
              <button
                key={size.size}
                onClick={() => setSelectedSize(size)}
                disabled={!size.inStock}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 border 
                ${selectedSize.size === size.size
                  ? "bg-lime-600 text-white border-lime-600 shadow-md scale-105"
                  : size.inStock
                  ? "bg-white text-gray-700 border-gray-200 hover:border-lime-400 hover:text-lime-600"
                  : "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed line-through"
                }`}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-5">
          <span className="text-3xl font-extrabold text-lime-600">
            ₹{selectedSize.price}
          </span>
          <span className="text-sm text-gray-500 ml-1">/{selectedSize.size}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Quantity */}
          <div className="flex items-center border border-lime-500 rounded-full overflow-hidden">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-2 text-lime-600 bg-lime-50 hover:bg-lime-100"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 text-gray-900 font-semibold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-2 text-lime-600 bg-lime-50 hover:bg-lime-100"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize.inStock}
            className={`flex-1 py-3 rounded-full font-semibold flex items-center justify-center gap-2 
            transition-all duration-300 
            ${isAdded
              ? "bg-lime-600 text-white"
              : selectedSize.inStock
              ? "bg-lime-500 text-white hover:bg-lime-600 hover:shadow-lg hover:scale-[1.03]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            {isAdded ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

