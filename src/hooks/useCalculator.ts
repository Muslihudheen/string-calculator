import { useState } from 'react';
import { StringCalculator } from '../utils/StringCalculator';

export const useCalculator = () => {
  const [calculator] = useState(() => new StringCalculator());
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const calculate = (input: string) => {
    try {
      setError(null);
      const output = calculator.calculate(input);
      setResult(output.toString());
    } catch (err: any) {
      setError(err.message);
      setResult('');
    }
  };

  const getCalledCount = (): number => {
    return calculator.getCalledCount();
  };

  return { result, error, calculate, getCalledCount };
};