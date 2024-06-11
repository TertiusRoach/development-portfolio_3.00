import React from 'react';

interface GridProps {
  text: string;
  className: string;
}

// This is the component I can't find
const Button: React.FC<GridProps> = ({ text, className }) => {
  console.log(`//--|🠊 Button.grid.tsx Loaded 🠈|--//`);
  return (
    <button className={className}>
      <h6>{text}</h6>
    </button>
  );
};

export default Button;
