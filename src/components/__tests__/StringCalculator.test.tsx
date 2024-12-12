import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../StringCalculator';

describe('StringCalculator', () => {
    test('returns 0 for empty input', () => {
        render(<StringCalculator />);
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Result: 0/)).toBeInTheDocument();
    });

    test('adds two numbers correctly', () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2)');
        fireEvent.change(input, { target: { value: '1,2' } });
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Result: 3/)).toBeInTheDocument();
    });

    test('handles newline as a delimiter', () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2)');
        fireEvent.change(input, { target: { value: '1\n2,3' } });
        const button = screen.getByText('Add');
        fireEvent.click(button);
        expect(screen.getByText(/Result: 6/)).toBeInTheDocument();
    });
    
});
