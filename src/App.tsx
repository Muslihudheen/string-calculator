import React from 'react';
import Calculator from './components/Calculator';
import './assets/styles/tailwind.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <Calculator />
    </div>
  );
};

export default App;