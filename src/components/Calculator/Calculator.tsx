import React from 'react';
import InputField from '../InputField';
import ResultDisplay from '../ResultDisplay';
import { useCalculator } from '../../hooks/useCalculator';
import styles from './Calculator.module.css';

const Calculator: React.FC = () => {
    const { input, setInput, result, handleAdd } = useCalculator();

    return (
        <div className={styles.calculatorContainer}>
            <h1 className={styles.title}>String Calculator</h1>
            <InputField value={input} onChange={setInput} />
            <button onClick={handleAdd} className={styles.button}>
                Add
            </button>
            <ResultDisplay result={result} />
        </div>
    );
};

export default Calculator;
