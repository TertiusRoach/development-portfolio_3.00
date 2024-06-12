import React from 'react';
import './Button.grid.scss';

interface GridProps {
  text: string;
  className: string;
}

// This is the component I can't find
const Anchor: React.FC<GridProps> = ({ text, className }) => {
  console.log(`//--|🠊 Button.grid.tsx Loaded 🠈|--//`);
  return (
    <a className={className}>
      <h6>{text}</h6>
    </a>
  );
};

export default Anchor;
