import React from 'react';
import styles from './ResultDisplay.module.css';

interface ResultDisplayProps {
    result: number | string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => (
    <div className={styles.result}>
        <h2>Result: {result}</h2>
    </div>
);

export default ResultDisplay;
