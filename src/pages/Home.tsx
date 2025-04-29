import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/features/productsSlice';
import ProductList from '../components/ProductList';
import ReasonsToBelieve from '../components/ReasonsToBelieve';
import ReviewsCarousel from '../components/ReviewsCarousel';

function Home() {
  const products = useSelector(selectAllProducts);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-xl mb-8">Discover our amazing collection of high-quality products</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Reasons to Believe Section */}
      <ReasonsToBelieve />

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <ProductList products={products} />
      </section>

      {/* Reviews Section */}
      <ReviewsCarousel />
    </div>
  );
}

export default Home; 