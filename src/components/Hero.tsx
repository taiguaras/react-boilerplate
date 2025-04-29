import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fresh food selection"
        />
        <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Fresh Food Delivered to Your Door
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Discover the best selection of fresh, organic, and locally sourced products. 
          Shop with confidence and enjoy fast delivery right to your doorstep.
        </p>
        <div className="mt-10">
          <Link
            to="/products"
            className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
} 