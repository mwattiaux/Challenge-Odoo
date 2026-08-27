import React from 'react';
import './Hint.css';

interface HintProps {
  number: number;
  children: React.ReactNode;
}

export default function Hint({ number, children }: HintProps) {
  return (
    <div className="hint-box revealed">
      <strong>💡 Indice {number} :</strong>
      <div className="hint-content-wrapper">
        {children}
      </div>
    </div>
  );
}