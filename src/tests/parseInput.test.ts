import { parseInput } from '../utils/parseInput';

test('correctly handles multiple delimiters', () => {
    expect(parseInput('//[***]\n1***2***3')).toBe(6);
    expect(parseInput('//[**][%%]\n1**2%%3')).toBe(6);
});

test('throws error for negative numbers', () => {
    expect(() => parseInput('1,-2,3')).toThrow('Negatives not allowed: -2');
    expect(() => parseInput('-1,-2')).toThrow('Negatives not allowed: -1, -2');
});

test('ignores numbers greater than 1000', () => {
    expect(parseInput('2,1001')).toBe(2);
    expect(parseInput('1001,2')).toBe(2);
    expect(parseInput('1000,1001,2')).toBe(1002);
});

test('parses newline separated numbers', () => {
    expect(parseInput('1\n2,3')).toBe(6);
    expect(parseInput('1\n2\n3')).toBe(6);
});

test('parses empty input as 0', () => {
    expect(parseInput('')).toBe(0);
});
