import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import StickyCartIcon from './components/StickyCartIcon';
import WhatsAppButton from './components/WhatsAppButton';
import { Product } from './types';

type Page = 'home' | 'categories' | 'products' | 'product-detail' | 'cart' | 'checkout' | 'contact' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckoutSuccess = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onCategoryClick={handleCategoryClick} />;
      case 'products':
        return (
          <ProductsPage
            categoryId={selectedCategory}
            onBack={() => setCurrentPage('home')}
            onViewDetails={handleViewDetails}
          />
        );
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setCurrentPage('products')}
          />
        ) : null;
      case 'cart':
        return (
          <CartPage
            onBack={() => setCurrentPage('home')}
            onCheckout={() => setCurrentPage('checkout')}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage
            onBack={() => setCurrentPage('cart')}
            onSuccess={handleCheckoutSuccess}
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onCategoryClick={handleCategoryClick} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
        <main>{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
        <StickyCartIcon onClick={() => setCurrentPage('cart')} />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}

export default App;
