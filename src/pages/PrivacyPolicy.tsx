
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, User, Database, Globe, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-glass">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-4xl mx-auto glass-panel p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="bg-elsol-sage/20 p-4 rounded-full">
                <Shield size={40} className="text-elsol-sage" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-100">Privacy Policy</h1>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <div className="flex items-center mb-4">
                  <Lock className="text-elsol-sage mr-3" size={24} />
                  <h2 className="text-xl font-semibold text-gray-100">Introduction</h2>
                </div>
                <p>
                  At ELSOL TRAVEL, we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit 
                  our website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>
              
              <section>
                <div className="flex items-center mb-4">
                  <User className="text-elsol-sage mr-3" size={24} />
                  <h2 className="text-xl font-semibold text-gray-100">Personal Information We Collect</h2>
                </div>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Identity Data: includes first name, last name, username or similar identifier, title, date of birth.</li>
                  <li>Contact Data: includes billing address, delivery address, email address and telephone numbers.</li>
                  <li>Financial Data: includes bank account and payment card details.</li>
                  <li>Transaction Data: includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                  <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                </ul>
              </section>
              
              <section>
                <div className="flex items-center mb-4">
                  <Database className="text-elsol-sage mr-3" size={24} />
                  <h2 className="text-xl font-semibold text-gray-100">How We Use Your Information</h2>
                </div>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>To process and deliver your travel booking</li>
                  <li>To manage our relationship with you</li>
                  <li>To improve our website, products/services, marketing, and customer relationships</li>
                  <li>To make recommendations to you about goods or services that may be of interest to you</li>
                  <li>To comply with legal and regulatory obligations</li>
                </ul>
              </section>
              
              <section>
                <div className="flex items-center mb-4">
                  <Globe className="text-elsol-sage mr-3" size={24} />
                  <h2 className="text-xl font-semibold text-gray-100">International Transfers</h2>
                </div>
                <p>
                  We may transfer your personal data to countries outside the European Economic Area (EEA) in connection with providing our services. Whenever we transfer your personal data out of the EEA, 
                  we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented.
                </p>
              </section>
              
              <section>
                <div className="flex items-center mb-4">
                  <Eye className="text-elsol-sage mr-3" size={24} />
                  <h2 className="text-xl font-semibold text-gray-100">Your Legal Rights</h2>
                </div>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </section>
              
              <section>
                <div className="flex items-center mb-4">
                  <FileText className="text-elsol-sage mr-3" size={24} />
                  <h2 className="text-xl font-semibold text-gray-100">Changes to This Privacy Policy</h2>
                </div>
                <p>
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the effective date at the top of this privacy policy.
                </p>
              </section>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-700 text-center">
              <p className="text-gray-400">Last updated: June 2023</p>
              <p className="text-gray-400 mt-2">
                If you have any questions about this privacy policy, please contact us at:
                <span className="text-elsol-sage ml-1">info@elsoltravel.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
