import React from "react";

interface HistoryListProps {
  history: string[];
}

const HistoryList: React.FC<HistoryListProps> = ({ history }) => {
  return (
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
  );
};

export default HistoryList;