export default function Navbar({ onNavigate }) {
  return (
    <nav style={{ display: 'flex', gap: 10, padding: 15, background: '#ddd' }}>
      <button onClick={() => onNavigate('home')}>Start</button>
      <button onClick={() => onNavigate('products')}>Produkty</button>
      <button onClick={() => onNavigate('cart')}>Koszyk</button>
      <button onClick={() => onNavigate('help')}>Pomoc</button>
    </nav>
  );
}