import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders the Calculator component', () => {
    const { getByText } = render(<Calculator />);
    expect(getByText('String Calculator')).toBeInTheDocument();
});

test('calculates the sum of numbers correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const input = getByPlaceholderText('Enter numbers (e.g., 1,2)');
    const button = getByText('Add');

    fireEvent.change(input, { target: { value: '1,2,3' } });
    fireEvent.click(button);

    expect(getByText('Result: 6')).toBeInTheDocument();
});
