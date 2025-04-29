import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../store/features/cartSlice';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function CartIcon() {
  const itemsCount = useSelector(selectCartItemsCount);

  return (
    <Link to="/cart" className="relative">
      <ShoppingBagIcon className="h-6 w-6 text-gray-300 hover:text-white" />
      {itemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemsCount}
        </span>
      )}
    </Link>
  );
} 