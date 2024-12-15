import React, { useState } from "react";
import { useCalculator } from "../hooks/useCalculator";
import Keypad from "./Keypad";
import ResultDisplay from "./ResultDisplay";
import HistoryList from "./HistoryList";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const { result, calculate } = useCalculator();

  const handleCalculate = () => {
    calculate(input);
    if (result) {
      setHistory([...history, `${input} = ${result}`]);
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleReset = () => {
    setInput("");
    setHistory([]);
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleKeypadClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  return (
    <div className="p-6 bg-primary text-light w-96 rounded shadow-lg">
      <h1 className="text-center text-2xl font-bold mb-4">String Calculator</h1>
      <textarea
        rows={3}
        className="w-full p-2 mb-4 text-dark rounded text-secondary text-lg font-semibold"
        placeholder="Enter your expression (e.g., 1+2*(3-1))"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Keypad
        onKeypadClick={handleKeypadClick}
        onBackspace={handleBackspace}
        onClear={handleClear}
      />
      <button
        className="w-full py-2 mb-4 bg-accent text-light font-bold rounded hover:bg-accent-dark"
        onClick={handleCalculate}
      >
        Calculate
      </button>
      <button
        className="w-full py-2 mb-4 bg-secondary text-light"
        onClick={handleReset}
      >
        Reset
      </button>
      <ResultDisplay result={result} />
      <HistoryList history={history} />
    </div>
  );
};

export default Calculator;
