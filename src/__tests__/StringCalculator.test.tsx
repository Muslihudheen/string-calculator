import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator/StringCalculator';

describe('StringCalculator', () => {
    test('returns 0 for an empty string', () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2)');
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Result: 0/)).toBeInTheDocument();
    });

    test('adds two numbers separated by commas', () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2)');
        fireEvent.change(input, { target: { value: '1,2' } });
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Result: 3/)).toBeInTheDocument();
    });

    test('supports custom delimiters', () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2)');
        fireEvent.change(input, { target: { value: '//;\n1;2' } });
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Result: 3/)).toBeInTheDocument();
    });

    test('throws an error for negative numbers', () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2)');
        fireEvent.change(input, { target: { value: '1,-2,-3' } });
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Negatives not allowed: -2, -3/)).toBeInTheDocument();
    });

    test('ignores numbers greater than 1000', () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2)');
        fireEvent.change(input, { target: { value: '2,1001' } });
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Result: 2/)).toBeInTheDocument();
    });

    test('supports multiple delimiters', () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2)');
        fireEvent.change(input, { target: { value: '//[*][%]\n1*2%3' } });
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Result: 6/)).toBeInTheDocument();
    });

    test('supports multiple delimiters with variable lengths', () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2)');
        fireEvent.change(input, { target: { value: '//[***][%%]\n1***2%%3' } });
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Result: 6/)).toBeInTheDocument();
    });
});
