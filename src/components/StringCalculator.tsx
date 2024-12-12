import React, { useState } from 'react';

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | string>('');

    const handleAdd = () => {
        if (!input) {
            setResult(0);
            return;
        }
    
        let numbers: number[] = [];
        let delimiterRegex = /,|\n/;
        let processedInput = input;
    
        if (input.startsWith('//')) {
            const delimiterEndIndex = input.indexOf('\n');
            const delimiters = input.substring(2, delimiterEndIndex)
                .match(/\[.*?\]/g)
                ?.map((delim) => delim.slice(1, -1)) || [input.substring(2, delimiterEndIndex)];
            delimiterRegex = new RegExp(delimiters.join('|'));
            processedInput = input.substring(delimiterEndIndex + 1);
        }
    
        try {
            numbers = processedInput.split(delimiterRegex).map(Number);
            const negatives = numbers.filter((num) => num < 0);
            if (negatives.length > 0) {
                throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
            }
    
            const filteredNumbers = numbers.filter((num) => num <= 1000);
            setResult(filteredNumbers.reduce((acc, num) => acc + num, 0));
        } catch (error: any) {
            setResult(error.message);
        }
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
