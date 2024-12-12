import React, { useState } from 'react';

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | string>(0);

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
            setResult(error.message || 'Invalid input');
        }
    };

    return (
        <div className="p-8 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers (e.g., 1,2)"
                className="border border-gray-300 p-2 w-full mb-4 rounded-md"
            />
            <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add
            </button>
            <div className="mt-4">
                <h2 className="text-lg font-medium">Result: {result}</h2>
            </div>
        </div>
    );
};

export default StringCalculator;
