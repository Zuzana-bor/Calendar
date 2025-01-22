import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-grow text-center p-4 bg-gray-100">
      <p className="text-gray-600 mb-4">
        Pro vybraný den a zaměstnance nejsou žádné rezervace
      </p>
      <div className="text-gray-400 text-6xl">
        <span className="material-icons">local_cafe</span>
      </div>
    </main>
  );
};

export default MainContent;
