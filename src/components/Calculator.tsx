import React, { useState } from "react";
import { useCalculator } from "../hooks/useCalculator";

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
      <h1 className="text-center text-2xl font-bold mb-4">
        String Calculator
      </h1>
      <textarea
        rows={3}
        className="w-full p-2 mb-4 text-dark rounded text-secondary text-lg font-semibold"
        placeholder="Enter your expression (e.g., 1+2*(3-1))"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          ".",
          "0",
          "/",
          "(",
        ].map((key) => (
          <button
            key={key}
            className="py-2 bg-accent text-light font-bold rounded hover:bg-accent-dark"
            onClick={() => handleKeypadClick(key)}
          >
            {key}
          </button>
        ))}
        <button
          className="py-2 bg-accent text-light font-bold rounded hover:bg-accent-dark"
          onClick={() => handleKeypadClick(")")}
        >
          )
        </button>
        <button
          className="py-2 bg-warning text-light font-bold rounded hover:bg-warning-dark"
          onClick={handleBackspace}
        >
          Backspace
        </button>
        <button
          className="col-span-2 py-2 bg-error text-light"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
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
      <div className="p-2 bg-secondary text-dark rounded mb-4">
        <strong>Result:</strong> {result}
      </div>
      <div className="p-2 bg-secondary text-dark rounded">
        <strong>History:</strong>
        <ul>
          {history.map((entry, index) => (
            <li key={index} className="text-sm">
              {entry}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
