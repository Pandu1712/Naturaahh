import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, Minus, Award, Leaf, CheckCircle } from 'lucide-react';
import { Product, ProductSize } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetailPage({ product, onBack }: ProductDetailPageProps) {
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
  };

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
         <div className="w-100 h-100 relative group mx-auto">

            <div className=" absolute -inset-4 bg-gradient-to-r from-lime-400 to-lime-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
            <img
              src={product.image}
              alt={product.name}
              className=" w-full h-full object-cover object-center  transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute top-6 left-6 flex flex-col gap-3">
              <div className="bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                <Leaf className="w-4 h-4" />
                100% Natural
              </div>
              <div className="bg-white text-lime-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                <Award className="w-4 h-4" />
                Premium Quality
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{product.description}</p>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-3 block">
                  Select Size:
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size)}
                      disabled={!size.inStock}
                      className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${selectedSize.size === size.size
                          ? 'bg-lime-500 text-white shadow-xl scale-110'
                          : size.inStock
                            ? 'bg-gray-100 text-gray-700 hover:bg-lime-100 hover:text-lime-700 hover:scale-105'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
                        }`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-lime-600">
                    ₹{selectedSize.price}
                  </span>
                  <span className="text-xl text-gray-500">/{selectedSize.size}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <label className="text-sm font-semibold text-gray-700">Quantity:</label>
                <div className="flex items-center border-2 border-lime-500 rounded-xl overflow-hidden">
                  <button
                    onClick={decreaseQuantity}
                    className="p-3 bg-lime-50 hover:bg-lime-100 text-lime-600 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-8 py-3 font-bold text-gray-900 text-xl">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="p-3 bg-lime-50 hover:bg-lime-100 text-lime-600 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!selectedSize.inStock}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${isAdded
                    ? 'bg-lime-600 text-white'
                    : selectedSize.inStock
                      ? 'bg-lime-500 hover:bg-lime-600 text-white hover:shadow-2xl hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                <ShoppingCart className="w-6 h-6" />
                {isAdded ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-lime-500" />
              Benefits
            </h2>
            <ul className="space-y-3">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-lime-500" />
              Specifications
            </h2>
            <ul className="space-y-3">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">How to Use</h2>
          <p className="text-lg leading-relaxed">{product.howToUse}</p>
        </div>
      </div>
    </div>
  );
}
