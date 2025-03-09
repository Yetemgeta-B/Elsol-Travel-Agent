
import React from 'react';
import { Plane, CreditCard, Hotel, Compass, Globe, FileCheck, Users, Gift } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  return (
    <div className="glass-panel rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 group">
      <div className="mb-4 text-elsol-sage group-hover:text-elsol-sage-light transition-colors duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Tickets",
      description: "Book domestic and international flights at competitive rates with our IATA accredited agency."
    },
    {
      icon: FileCheck,
      title: "Visa Processing",
      description: "Hassle-free visa application services for major destinations around the world."
    },
    {
      icon: Hotel,
      title: "Hotel Booking",
      description: "Find the perfect accommodation from our curated selection of hotels worldwide."
    },
    {
      icon: Compass,
      title: "Holiday Packages",
      description: "All-inclusive vacation packages tailored to your preferences and budget."
    },
    {
      icon: Globe,
      title: "Group Tours",
      description: "Join our guided group tours to popular destinations with experienced tour leaders."
    },
    {
      icon: Users,
      title: "Corporate Travel",
      description: "Specialized business travel services for companies of all sizes."
    },
    {
      icon: Gift,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance packages for a worry-free journey."
    },
    {
      icon: CreditCard,
      title: "Payment Options",
      description: "Flexible payment methods including installment plans for your convenience."
    }
  ];

  return (
    <section id="services" className="elsol-section bg-black">
      <div className="text-center mb-12">
        <h2 className="section-heading">Our Services</h2>
        <p className="section-subheading mx-auto">
          Comprehensive travel solutions tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceItem 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
