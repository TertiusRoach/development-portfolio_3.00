import React from 'react';

interface GridProps {
  text: string;
}

// This is the component I can't find
const Button: React.FC<GridProps> = ({ text }) => {
  console.log(`//--|🠊 Button.grid.tsx Loaded 🠈|--//`);
  return (
    <button>
      <h6>{text}</h6>
    </button>
  );
};

export default Button;
