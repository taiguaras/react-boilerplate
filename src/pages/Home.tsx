import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/features/productsSlice';
import ProductList from '../components/ProductList';

function Home() {
  const products = useSelector(selectAllProducts);

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-gray-600">Discover our amazing collection of products</p>
      </div>
      <ProductList products={products} title="Featured Products" />
    </div>
  );
}

export default Home; 