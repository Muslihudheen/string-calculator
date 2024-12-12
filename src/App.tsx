import React from 'react';
import StringCalculator from './components/StringCalculator.tsx';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <StringCalculator />
        </div>
    );
};

export default App;
