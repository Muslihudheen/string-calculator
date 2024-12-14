import { useState } from 'react';
import { StringCalculator } from '../utils/StringCalculator';

export const useCalculator = () => {
  const [calculator] = useState(() => new StringCalculator());
  const [result, setResult] = useState<string>('');

  const calculate = (input: string) => {
    try {
      const output = calculator.calculate(input);
      setResult(output.toString());
    } catch (error: any) {
      setResult(error.message);
    }
  };

  return { result, calculate };
};