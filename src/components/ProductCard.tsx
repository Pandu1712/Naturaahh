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
    addToCart({
      product,
      selectedSize,
      quantity
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    setQuantity(1);
  };

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <Leaf className="w-3 h-3" />
            100% Natural
          </div>
          <div className="bg-white text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <Award className="w-3 h-3" />
            Premium
          </div>
        </div>

        <button
          onClick={() => onViewDetails(product)}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-white hover:scale-110"
        >
          <Eye className="w-5 h-5" />
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-700 mb-2 block">
            Select Size:
          </label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.size}
                onClick={() => setSelectedSize(size)}
                disabled={!size.inStock}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedSize.size === size.size
                    ? 'bg-green-500 text-white shadow-lg scale-105'
                    : size.inStock
                    ? 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
                }`}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-green-600">
              ₹{selectedSize.price}
            </span>
            <span className="text-sm text-gray-500 ml-1">/{selectedSize.size}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center border-2 border-green-500 rounded-lg overflow-hidden">
            <button
              onClick={decreaseQuantity}
              className="p-2 bg-green-50 hover:bg-green-100 text-green-600 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-2 font-semibold text-gray-900 min-w-[3rem] text-center">
              {quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="p-2 bg-green-50 hover:bg-green-100 text-green-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!selectedSize.inStock}
            className={`flex-1 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              isAdded
                ? 'bg-green-600 text-white'
                : selectedSize.inStock
                ? 'bg-green-500 hover:bg-green-600 text-white hover:shadow-lg hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            {isAdded ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
