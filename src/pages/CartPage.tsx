import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartPageProps {
  onBack: () => void;
  onCheckout: () => void;
}

export default function CartPage({ onBack, onCheckout }: CartPageProps) {
  const { cart, updateQuantity, updateSize, removeFromCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-lime-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </button>

          <div className="flex flex-col items-center justify-center py-20">
            <ShoppingBag className="w-32 h-32 text-gray-300 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Add some natural goodness to your cart!</p>
            <button
              onClick={onBack}
              className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Continue Shopping
        </button>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize.size}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="flex gap-6">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-32 h-32 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-600">{item.product.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize.size)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* ⭐ SIZE SELECTOR */}
                    {/* SIZE CHANGE OPTION */}
<div className="flex items-center gap-3 mb-4">
  {item.product.sizes.map(size => (
    <button
      key={size.size}
      className={`px-4 py-1 rounded-full text-sm font-semibold border transition
        ${
          item.selectedSize.size === size.size
            ? "bg-lime-500 text-white border-lime-600"
            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-lime-100"
        }
      `}
      onClick={() => updateSize(item.product.id, item.selectedSize.size, size)}
    >
      {size.size}
    </button>
  ))}
</div>


                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-lime-600">
                        ₹{item.selectedSize.price}
                      </span>
                    </div>

                    {/* ⭐ QUANTITY CONTROL */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border-2 border-lime-500 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedSize.size, item.quantity - 1)
                          }
                          className="p-2 bg-lime-50 hover:bg-lime-100 text-lime-600 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-6 py-2 font-semibold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedSize.size, item.quantity + 1)
                          }
                          className="p-2 bg-lime-50 hover:bg-lime-100 text-lime-600 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-1">Subtotal</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ₹{item.selectedSize.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-lime-600">Free</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-lime-600">₹{getTotalPrice()}</span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-lime-500 hover:bg-lime-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
