import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  position: string;
  quote: string;
  avatar: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, position, quote, avatar, rating }) => {
  return (
    <div className="glass-panel rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="mr-4">
            <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover" loading="lazy" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-100">{name}</h4>
            <p className="text-sm text-gray-300">{position}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? "#FFD700" : "none"}
              stroke={i < rating ? "#FFD700" : "#D1D5DB"}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-300 italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Samuel Tesfaye",
      position: "Business Traveler",
      quote: "ELSOL Travel has been handling my business trips for the past 3 years. Their service is exceptional, always finding the best routes and accommodations that fit my schedule and budget.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      name: "Hiwot Alemayehu",
      position: "Family Vacationer",
      quote: "Our family trip to Dubai was perfectly organized by ELSOL Travel. From flights to hotel and attractions, everything was seamless. The kids loved it, and we didn't have to worry about a thing!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      name: "Dawit Haile",
      position: "Solo Traveler",
      quote: "I've been using ELSOL for my international travels since 2019. Their visa processing service saves me so much time and stress. Highly recommended for anyone traveling abroad!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 4
    }
  ];

  return (
    <section className="elsol-section bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-subheading mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
