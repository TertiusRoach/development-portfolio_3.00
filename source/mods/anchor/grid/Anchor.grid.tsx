import React from 'react';
import './Anchor.grid.scss';

interface GridProps {
  text: string;
  className: string;
}

// This is the component I can't find
const Anchor: React.FC<GridProps> = ({ text, className }) => {
  return (
    <a className={className}>
      <h6>{text}</h6>
    </a>
  );
  console.log(`//--|🠊 Anchor.grid.tsx Loaded 🠈|--//`);
};

export default Anchor;
