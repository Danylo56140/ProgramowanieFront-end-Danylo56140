import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onNavigate }) {
  const { addToCart } = useCart();
  

  const currentPrice = product.promoPrice ? product.promoPrice : product.price;


  return (
    <div style={{ border: '1px solid #ccc', padding: 15, width: 220, borderRadius: 8 }}>
    <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} 
    />
      <h3>{product.name}</h3>
      <p style={{ color: 'gray', fontSize: '14px' }}>{product.category}</p>
      <p>Ocena: {product.rating} / 5</p>
      
      <div>
        {product.promoPrice && <span style={{ textDecoration: 'line-through', marginRight: 10 }}>{product.price} zł</span>}
        <strong style={{ color: product.promoPrice ? 'red' : 'black', fontSize: '18px' }}>
          {currentPrice} zł
        </strong>
      </div>

      <p>Dostępność: {product.stock > 0 ? product.stock : 'Brak'}</p>

      <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
        <button onClick={() => onNavigate('details', product.id)}>Szczegóły</button>
        <button 
          disabled={product.stock === 0} 
          onClick={() => addToCart(product)}
        >
          Do koszyka
        </button>
      </div>
    </div>
  );
}