import React from 'react';
import './Button.fade.scss';

interface FadeProps {
  grid: string; //--|🠈 This className is used to position the button within a grid layout. 🠈|--//
  icon: string;
  text: string;
  state?: 'active' | '';
}

const Button: React.FC<FadeProps> = ({ grid, icon, text, state }) => {
  return (
    <button className={`${grid} fade ${state}`}>
      <img src={icon} alt={text.toLowerCase()} />
      <h6>{text}</h6>
    </button>
  );
  //--|🠊 ? - Is a Ternary Operator and it checks if state has a value. 🠈|--//
  //--|🠊 : - Is an Else Operator and adds nothing if the state has a falsy value. 🠈|--//
};

export default Button;
