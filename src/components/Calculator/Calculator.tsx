import React from 'react';
import InputField from '../InputField';
import ResultDisplay from '../ResultDisplay';
import { useCalculator } from '../../hooks/useCalculator';

const Calculator: React.FC = () => {
    const { input, setInput, result, handleAdd } = useCalculator();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 transform hover:scale-105 transition-all duration-300 ease-in-out">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">String Calculator</h1>
                <InputField value={input} onChange={setInput} />
                <button
                    onClick={handleAdd}
                    className="w-full py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:animate-pulse focus:ring-blue-300"
                >
                    Add
                </button>
                <ResultDisplay result={result} />
            </div>
        </div>
    );
};

export default Calculator;
