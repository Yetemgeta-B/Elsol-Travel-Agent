
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting ELSOL Travel. We'll get back to you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="elsol-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-subheading mx-auto">
            We're here to help plan your perfect journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Map and contact info */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg h-80 mb-8">
              {/* Map iframe - Replace with actual map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5475983050266!2d38.7612!3d9.0059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMjEuMiJOIDM4wrA0NScwNC4zIkU!5e0!3m2!1sen!2sus!4v1624882898075!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="ELSOL Travel Office Location"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="mr-4 text-elsol-sage">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-100">Our Location</h3>
                    <p className="text-gray-300">Bole Medhanialem, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="mr-4 text-elsol-sage">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-100">Call Us</h3>
                    <p className="text-gray-300">+251 911 234 567</p>
                    <p className="text-gray-300">+251 911 987 654</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="mr-4 text-elsol-sage">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-100">Email Us</h3>
                    <p className="text-gray-300">info@elsoltravel.com</p>
                    <p className="text-gray-300">bookings@elsoltravel.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="mr-4 text-elsol-sage">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-100">Working Hours</h3>
                    <p className="text-gray-300">Mon - Fri: 8:30AM - 6:00PM</p>
                    <p className="text-gray-300">Sat: 9:00AM - 1:00PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="glass-panel rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-100">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-black/50 border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-black/50 border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full bg-black/50 border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full min-h-[120px] bg-black/50 border-gray-700"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-elsol-sage hover:bg-elsol-sage-light text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message <Send size={16} className="ml-2" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
