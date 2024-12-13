import React from 'react';

interface ResultDisplayProps {
    result: number | string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
    return (
        <div
            className="text-center text-3xl font-semibold text-gray-700 mt-4 p-3 rounded-md bg-gray-100 shadow-md"
            style={{ transition: 'all 0.3s ease-in-out' }}
        >
            {typeof result === 'number' ? result : <span className="text-red-500">{result}</span>}
        </div>
    );
};

export default ResultDisplay;
