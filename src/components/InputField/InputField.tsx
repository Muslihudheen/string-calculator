import React from 'react';

interface InputFieldProps {
    value: string;
    onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg"
            placeholder="Enter numbers (e.g., 1,2 or //[*]\n1*2)"
        />
    );
};

export default InputField;
