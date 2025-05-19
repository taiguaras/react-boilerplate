import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import { theme } from '../theme/theme';

function Header() {
  return (
    <header style={{ 
      backgroundColor: theme.colors.background.dark,
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ 
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '1.5rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ 
            color: theme.colors.text.primary,
            fontSize: '1.875rem',
            fontWeight: 'bold'
          }}>
            Boilerplate
          </h1>
          <p style={{ 
            color: theme.colors.text.secondary
          }}>
            Redux, Tailwind, Vite, React, Tests
          </p>
        </div>
        <nav style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <Link 
            to="/" 
            style={{ 
              color: theme.colors.text.secondary,
              padding: '0.5rem 0.75rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            style={{ 
              color: theme.colors.text.secondary,
              padding: '0.5rem 0.75rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Products
          </Link>
          <Link 
            to="/redux-test" 
            style={{ 
              color: theme.colors.text.secondary,
              padding: '0.5rem 0.75rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Redux Test
          </Link>
          <Link
            to="/task-board"
            style={{
              color: theme.colors.text.secondary,
              padding: '0.5rem 0.75rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Task Board
          </Link>
          <Link
            to="/posts"
            style={{
              color: theme.colors.text.secondary,
              padding: '0.5rem 0.75rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Posts
          </Link>
          <CartIcon />
        </nav>
      </div>
    </header>
  );
}

export default Header; 