import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { theme } from '../theme/theme';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: theme.colors.background.dark,
      color: theme.colors.text.primary
    }}>
      <div style={{ 
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '3rem 1rem'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ 
              color: theme.colors.text.primary,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Our Store
            </h3>
            <p style={{ 
              color: theme.colors.text.secondary
            }}>
              Providing high-quality products since 2009. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ 
              color: theme.colors.text.primary,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Quick Links
            </h3>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/" 
                  style={{ 
                    color: theme.colors.text.secondary,
                    textDecoration: 'none'
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/products" 
                  style={{ 
                    color: theme.colors.text.secondary,
                    textDecoration: 'none'
                  }}
                >
                  Products
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/cart" 
                  style={{ 
                    color: theme.colors.text.secondary,
                    textDecoration: 'none'
                  }}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 style={{ 
              color: theme.colors.text.primary,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Customer Service
            </h3>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/contact" 
                  style={{ 
                    color: theme.colors.text.secondary,
                    textDecoration: 'none'
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/shipping" 
                  style={{ 
                    color: theme.colors.text.secondary,
                    textDecoration: 'none'
                  }}
                >
                  Shipping Info
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  to="/returns" 
                  style={{ 
                    color: theme.colors.text.secondary,
                    textDecoration: 'none'
                  }}
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 style={{ 
              color: theme.colors.text.primary,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Connect With Us
            </h3>
            <div style={{ 
              display: 'flex',
              gap: '1rem'
            }}>
              <a 
                href="#" 
                style={{ 
                  color: theme.colors.text.secondary
                }}
              >
                <FaFacebook style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
              <a 
                href="#" 
                style={{ 
                  color: theme.colors.text.secondary
                }}
              >
                <FaTwitter style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
              <a 
                href="#" 
                style={{ 
                  color: theme.colors.text.secondary
                }}
              >
                <FaInstagram style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
              <a 
                href="#" 
                style={{ 
                  color: theme.colors.text.secondary
                }}
              >
                <FaLinkedin style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          borderTop: `1px solid ${theme.colors.border.light}`,
          marginTop: '3rem',
          paddingTop: '2rem',
          textAlign: 'center',
          color: theme.colors.text.secondary
        }}>
          <p>&copy; {currentYear} Our Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 