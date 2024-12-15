import { StringCalculator } from '../utils/StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('returns 0 for an empty string', () => {
    expect(calculator.calculate('')).toBe(0);
  });

  test('returns the number for a single number input', () => {
    expect(calculator.calculate('1')).toBe(1);
  });

  test('returns the sum of two numbers separated by a comma', () => {
    expect(calculator.calculate('1,2')).toBe(3);
  });

  test('handles new lines between numbers', () => {
    expect(calculator.calculate('1\n2,3')).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(calculator.calculate('//;\n1;2')).toBe(3);
  });

  test('throws an error for negative numbers', () => {
    expect(() => calculator.calculate('1,-2,-3')).toThrow('Negatives not allowed: -2, -3');
  });

  test('ignores numbers greater than 1000', () => {
    expect(calculator.calculate('2,1001')).toBe(2);
  });

  test('handles multiple delimiters', () => {
    expect(calculator.calculate('//[*][%]\n1*2%3')).toBe(6);
  });

  test('handles delimiters of any length', () => {
    expect(calculator.calculate('//[***]\n1***2***3')).toBe(6);
  });

  test('tracks the number of calls to calculate', () => {
    calculator.calculate('1,2');
    calculator.calculate('3,4');
    expect(calculator.getCalledCount()).toBe(2);
  });
});