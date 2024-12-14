import { StringCalculator } from '../utils/StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('calculates basic addition', () => {
    expect(calculator.calculate('1+2')).toBe(3);
  });

  test('handles subtraction', () => {
    expect(calculator.calculate('10-4')).toBe(6);
  });

  test('handles multiplication', () => {
    expect(calculator.calculate('3*4')).toBe(12);
  });

  test('handles division', () => {
    expect(calculator.calculate('12/3')).toBe(4);
  });

  test('handles combined operations', () => {
    expect(calculator.calculate('1+2*3-4/2')).toBe(5);
  });

  test('handles parentheses', () => {
    expect(calculator.calculate('(1+2)*(3-1)')).toBe(6);
  });

  test('throws error for invalid input', () => {
    expect(() => calculator.calculate('abc')).toThrow('Invalid characters in the expression.');
  });

  test('throws error for empty input', () => {
    expect(() => calculator.calculate('')).toThrow('Input is empty.');
  });

  test('tracks the number of calls', () => {
    calculator.calculate('1+2');
    calculator.calculate('3*4');
    expect(calculator.getCalledCount()).toBe(2);
  });
});