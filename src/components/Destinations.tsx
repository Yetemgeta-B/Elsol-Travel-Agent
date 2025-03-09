
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, name, description, price }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl">
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">{name}</h3>
          <span className="rounded-full bg-elsol-sage px-3 py-1 text-sm font-medium">
            {price}
          </span>
        </div>
        <p className="mt-2 text-white/80">{description}</p>
        <a 
          href="#contact" 
          className="mt-4 inline-flex items-center text-elsol-sage hover:text-white transition-colors duration-300"
        >
          Explore Now <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

const Destinations = () => {
  const destinationData = [
    {
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
      name: "Lalibela",
      description: "Explore the ancient rock-hewn churches of Ethiopia",
      price: "From $599"
    },
    {
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
      name: "Bali",
      description: "Experience the paradise island with stunning beaches",
      price: "From $899"
    },
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      name: "Santorini",
      description: "Magnificent views on this iconic Greek island",
      price: "From $799"
    },
    {
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
      name: "Maldives",
      description: "Luxury overwater bungalows and white sand beaches",
      price: "From $1299"
    }
  ];

  return (
    <section id="destinations" className="elsol-section">
      <div className="text-center mb-12">
        <h2 className="section-heading">Popular Destinations</h2>
        <p className="section-subheading mx-auto">
          Discover our hand-picked selection of top destinations around the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinationData.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#contact" className="elsol-button-outline">
          View All Destinations
        </a>
      </div>
    </section>
  );
};

export default Destinations;
