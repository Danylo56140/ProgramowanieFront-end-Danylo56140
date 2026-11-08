import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Help from './pages/Help';

export default function App() {
  const [page, setPage] = useState('home');

  const handleNavigate = (targetPage) => {
    setPage(targetPage);
  };

  return (
    <CartProvider>
      <Navbar onNavigate={handleNavigate} />
      
      <div style={{ padding: 20 }}>
        {page === 'home' && <Home />}
        {page === 'products' && <Products />}
        {page === 'details' && <ProductDetails />}
        {page === 'cart' && <Cart />}
        {page === 'checkout' && <Checkout />}
        {page === 'help' && <Help />}
      </div>
    </CartProvider>
  );
}