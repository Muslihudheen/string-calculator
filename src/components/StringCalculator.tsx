import React, { useState } from 'react';

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | string>('');

    const handleAdd = () => {
        if (!input) {
            setResult(0);
            return;
        }

        const numbers = input.split(',').map(Number);
        setResult(numbers.reduce((acc, num) => acc + num, 0));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="p-6 bg-white shadow-lg rounded">
                <h1 className="text-xl font-bold mb-4">String Calculator</h1>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter numbers (e.g., 1,2)"
                    className="border p-2 rounded mb-4 w-full"
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add
                </button>
                <div className="mt-4">
                    <strong>Result:</strong> {result}
                </div>
            </div>
        </div>
    );
};

export default StringCalculator;
