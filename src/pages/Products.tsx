import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/features/productsSlice';
import ProductList from '../components/ProductList';

function Products() {
  const products = useSelector(selectAllProducts);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Products; 