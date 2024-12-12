import { parseInput } from '../utils/parseInput';

test('parses and calculates the sum correctly', () => {
    expect(parseInput('1,2,3')).toBe(6);
    expect(parseInput('')).toBe(0);
});

test('handles custom delimiters', () => {
    expect(parseInput('//;\n1;2;3')).toBe(6);
    expect(parseInput('//[***]\n1***2***3')).toBe(6);
});

test('throws error for negatives', () => {
    expect(() => parseInput('1,-2,3')).toThrow('Negatives not allowed: -2');
});
