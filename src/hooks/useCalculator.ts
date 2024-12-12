import { useState } from 'react';
import { parseInput } from '../utils/parseInput';

export function useCalculator() {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | string>(0);

    const handleAdd = () => {
        try {
            if (input.trim() === '') {
                setResult(0);
            } else {
                const sum = parseInput(input);
                setResult(sum);
            }
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return { input, setInput, result, handleAdd };
}
