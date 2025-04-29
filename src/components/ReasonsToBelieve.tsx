import { FaGlobe, FaRuler, FaHistory } from 'react-icons/fa';

function ReasonsToBelieve() {
  const reasons = [
    {
      icon: <FaHistory className="w-8 h-8" />,
      title: "15 Years of Business",
      description: "Trusted by customers worldwide since 2009"
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Worldwide Shipping",
      description: "Fast and reliable delivery to your doorstep"
    },
    {
      icon: <FaRuler className="w-8 h-8" />,
      title: "Multiple Sizes",
      description: "Available in various sizes to fit your needs"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-blue-600 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReasonsToBelieve; 