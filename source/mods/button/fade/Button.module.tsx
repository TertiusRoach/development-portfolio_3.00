import React from 'react';
import './Button.module.scss';

interface FadeProps {
  text: string;
  className: string;
}

const Button: React.FC<FadeProps> = ({ text, className }) => {
  console.log(`//--|🠊 Button.grid.tsx Loaded 🠈|--//`);
  return (
    <button className={`${className} fade`}>
      <span></span>
      <span>
        <h6>{text}</h6>
      </span>
    </button>
  );
};

export default Button;
