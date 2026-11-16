import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

export default function Products({ onNavigate }) {
  return (
    <div>
      <h2>Katalog produktów</h2>
      
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onNavigate={onNavigate} 
          />
        ))}

      </div>
    </div>
  );
}