import React from 'react';
import Header from './layout/header/Header';
import MainContent from './layout/mainContent/MainContent';
import Footer from './layout/footer/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
