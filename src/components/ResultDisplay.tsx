import React from "react";

interface ResultDisplayProps {
  result: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div className="p-2 bg-secondary text-dark rounded mb-4">
      <strong>Result:</strong> {result}
    </div>
  );
};

export default ResultDisplay;