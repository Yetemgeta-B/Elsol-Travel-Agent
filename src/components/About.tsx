
import React from 'react';
import { Award, Users, Clock, CheckCircle2 } from 'lucide-react';

const About = () => {
  const achievements = [
    { 
      icon: Award, 
      title: "IATA Accredited", 
      description: "Official recognition by the International Air Transport Association"
    },
    { 
      icon: Users, 
      title: "5,000+ Clients", 
      description: "Trusted by thousands of satisfied travelers worldwide"
    },
    { 
      icon: Clock, 
      title: "5+ Years Experience", 
      description: "Established in 2017 with continuous growth and development"
    },
    { 
      icon: CheckCircle2, 
      title: "100% Satisfaction", 
      description: "Committed to exceptional service and client satisfaction"
    }
  ];

  return (
    <section id="about" className="elsol-section bg-elsol-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80" 
                alt="ELSOL Travel Team" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-elsol-sage rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-elsol-sage-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-elsol-sage/20 text-white text-sm font-medium mb-6">
              Since 2017
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About ELSOL Travel</h2>
            <p className="text-white/80 mb-6">
              ELSOL Travel is an IATA accredited travel agency based in Addis Ababa, Ethiopia. 
              Founded in 2017 by Eleni Nigussie, we have grown to become one of the most trusted names 
              in the travel industry, providing exceptional service to both leisure and business travelers.
            </p>
            <p className="text-white/80 mb-8">
              Our team of experienced travel consultants is dedicated to creating memorable journeys 
              tailored to your specific needs and preferences. Whether you're planning a family vacation, 
              a romantic getaway, or a corporate trip, we have the expertise and resources to make it perfect.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 text-elsol-sage">
                    <achievement.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-white/70">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
