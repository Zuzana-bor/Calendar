import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-orange-500 text-white p-4">
      <div className="flex items-center">
        <span className="material-icons">groups</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-icons">chevron_left</button>
        <span className="text-lg font-semibold">Út 21. 1.</span>
        <button className="material-icons">chevron_right</button>
      </div>
      <button className="text-sm">Dnes</button>
    </header>
  );
};

export default Header;
