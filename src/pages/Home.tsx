import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/features/productsSlice';
import ProductList from '../components/ProductList';
import ReasonsToBelieve from '../components/ReasonsToBelieve';
import ReviewsCarousel from '../components/ReviewsCarousel';
import Hero from '../components/Hero';

function Home() {
  const products = useSelector(selectAllProducts);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <Hero />

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