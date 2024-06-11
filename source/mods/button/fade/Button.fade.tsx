import React from 'react';
import './Button.fade.scss';

interface FadeProps {
  text: string;
  className: string;
}

// This is the component I can't find
const Button: React.FC<FadeProps> = ({ text, className }) => {
  console.log(`//--|🠊 Button.grid.tsx Loaded 🠈|--//`);
  return (
    <button className={className}>
      <h6>{text}</h6>
    </button>
  );
};

export default Button;
