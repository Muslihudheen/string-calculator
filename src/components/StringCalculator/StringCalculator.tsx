import React from 'react';
import { useCalculator } from '../../hooks/useCalculator';
import styles from './StringCalculator.module.css';

const StringCalculator: React.FC = () => {
    const { input, setInput, result, handleAdd } = useCalculator();

    return (
        <div className={styles.calculatorContainer}>
            <h1 className={styles.title}>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers (e.g., 1,2)"
                className={styles.input}
            />
            <button onClick={handleAdd} className={styles.button}>
                Add
            </button>
            <div className={styles.result}>
                <h2>Result: {result}</h2>
            </div>
        </div>
    );
};

export default StringCalculator;
