import React from 'react';
import styles from './InputField.module.css';

interface InputFieldProps {
    value: string;
    onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => (
    <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter numbers (e.g., 1,2)"
        className={styles.input}
    />
);

export default InputField;
