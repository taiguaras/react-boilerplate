import { useDispatch } from 'react-redux';
import { addToCart } from '../store/features/cartSlice';
import { Product } from '../store/features/productsSlice';
import { theme } from '../theme/theme';

interface ProductListProps {
  products: Product[];
  title?: string;
}

export default function ProductList({ products, title = 'Products' }: ProductListProps) {
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: theme.colors.background.main }}>
      <h2 style={{ 
        color: theme.colors.text.primary,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem'
      }}>
        {title}
      </h2>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
            backgroundColor: theme.colors.background.main,
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '12rem', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ 
                color: theme.colors.text.primary,
                fontSize: '1.25rem',
                fontWeight: 'semibold',
                marginBottom: '0.5rem'
              }}>
                {product.name}
              </h3>
              <p style={{ 
                color: theme.colors.text.secondary,
                marginBottom: '1rem'
              }}>
                {product.description}
              </p>
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ 
                  color: theme.colors.text.primary,
                  fontSize: '1.125rem',
                  fontWeight: 'bold'
                }}>
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  style={{ 
                    backgroundColor: theme.colors.primary.main,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.25rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 