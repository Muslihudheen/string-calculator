import { useState } from 'react';
import { parseInput } from '../utils/parseInput';

export const useCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | string>(0);

    const handleAdd = () => {
        try {
            const calculationResult = parseInput(input);
            setResult(calculationResult);
        } catch (error: any) {
            setResult(error.message || 'Invalid input');
        }
    };

    return { input, setInput, result, handleAdd };
};
