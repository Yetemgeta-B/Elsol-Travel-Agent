
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollButtons from './ScrollButtons';

interface LayoutProps {
  children: React.ReactNode;
  showScrollButtons?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showScrollButtons = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {showScrollButtons && <ScrollButtons />}
      <Footer />
    </div>
  );
};

export default Layout;
