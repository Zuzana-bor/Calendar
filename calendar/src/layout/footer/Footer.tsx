import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center bg-gray-100 p-4 border-t border-gray-300">
      <nav className="flex justify-between w-full">
        <button className="flex flex-col items-center text-orange-500">
          <span className="material-icons">home</span>
          <span className="text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <span className="material-icons">calendar_today</span>
          <span className="text-sm">Kalendář</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <span className="material-icons">point_of_sale</span>
          <span className="text-sm">Pokladna</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <span className="material-icons">people</span>
          <span className="text-sm">Zákazníci</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <span className="material-icons">menu</span>
          <span className="text-sm">Více</span>
        </button>
      </nav>
      <button className="absolute bottom-6 right-6 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
        <span className="material-icons">add</span>
      </button>
    </footer>
  );
};

export default Footer;
