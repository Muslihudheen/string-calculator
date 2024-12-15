import React from "react";

interface KeypadProps {
  onKeypadClick: (value: string) => void;
  onBackspace: () => void;
  onClear: () => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeypadClick, onBackspace, onClear }) => {
  return (
    <div className="grid grid-cols-4 gap-2 mb-4">
      {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", ".", "0", "/", "("]
        .map((key) => (
          <button
            key={key}
            className="py-2 bg-accent text-light font-bold rounded hover:bg-accent-dark"
            onClick={() => onKeypadClick(key)}
          >
            {key}
          </button>
        ))}
      <button
        className="py-2 bg-accent text-light font-bold rounded hover:bg-accent-dark"
        onClick={() => onKeypadClick(")")}
      >
        )
      </button>
      <button
        className="py-2 bg-warning text-light font-bold rounded hover:bg-warning-dark"
        onClick={onBackspace}
      >
        Backspace
      </button>
      <button
        className="col-span-2 py-2 bg-error text-light"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};

export default Keypad;