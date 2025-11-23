import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Leaf } from "lucide-react";
import { useCart } from "../context/CartContext";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Categories", id: "categories" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const totalItems = getTotalItems();

  return (
   <nav
  className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-500 ${
    isScrolled
      ? "bg-gradient-to-r from-lime-300 via-lime-200 to-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2"
      : "bg-lime-200 py-4"
  }`}
>



      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo + Leaf */}
          <div
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Leaf Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-lime-400 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

              <Leaf
                className={`relative w-9 h-9 transition-all duration-300 ${
                  isScrolled ? "text-green-600" : "text-white drop-shadow-xl"
                } group-hover:rotate-12 group-hover:scale-110`}
              />
            </div>

            {/* Logo */}
            {<img
              src="/website navbar.png"
              alt="Logo"
              className="w-32 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
            /> }
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative text-[17px] font-medium tracking-wide transition-all duration-300 ${
                  isScrolled ? "text-gray-800" : "text-black drop-shadow-md"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-green-500 transition-all duration-300 rounded-full ${
                    currentPage === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={() => onNavigate("cart")}
              className={`relative p-2 rounded-full shadow-sm backdrop-blur-md transition-all duration-300 ${
                isScrolled
                  ? "bg-lime-100 text-green-700 hover:bg-lime-200"
                  : "bg-lime-100 text-lime-800 hover:bg-white/30"
              }`}
            >
              <ShoppingCart className="w-6 h-6" />

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                isScrolled
                  ? "bg-lime-100 text-green-700"
                  : "bg-white/20 text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl animate-slideDown">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-lime-200 text-green-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
