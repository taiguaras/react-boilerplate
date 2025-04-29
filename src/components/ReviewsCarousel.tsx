import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';

function ReviewsCarousel() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing quality and fast shipping! Will definitely buy again.",
      location: "New York, USA"
    },
    {
      id: 2,
      name: "Sarah Smith",
      rating: 4,
      comment: "Great product, exactly as described. Very satisfied with my purchase.",
      location: "London, UK"
    },
    {
      id: 3,
      name: "Michael Johnson",
      rating: 5,
      comment: "The best customer service I've experienced. Product is top-notch!",
      location: "Sydney, Australia"
    },
    {
      id: 4,
      name: "Emma Wilson",
      rating: 5,
      comment: "Love the quality and attention to detail. Highly recommended!",
      location: "Toronto, Canada"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.comment}</p>
                <div className="mt-auto">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ReviewsCarousel; 