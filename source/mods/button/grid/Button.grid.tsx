import React from 'react';
import './Button.grid.scss';

interface GridProps {
  text: string;
  className: string;
}

// This is the component I can't find
const ButtonGrid: React.FC<GridProps> = ({ text, className }) => {
  console.log(`//--|🠊 Button.grid.tsx Loaded 🠈|--//`);
  return (
    <button className={className}>
      <h6>{text}</h6>
    </button>
  );
};

export default ButtonGrid;
