import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

function Header() {
  return (
    <header className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-100">Boilerplate</h1>
            <p className="text-gray-500">Redux, Tailwind, Vite, React, Tests</p>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
            <Link to="/redux-test" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Redux Test</Link>
            <CartIcon />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header; 