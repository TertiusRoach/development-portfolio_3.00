import React from 'react';
import './Button.icon.scss';

interface IconProps {
  grid: string; //--|🠈 This className is used to position the button within a grid layout. 🠈|--//
  icon: string;

  state?: 'active' | '';
}

const ButtonIcon: React.FC<IconProps> = ({ grid, icon, state }) => {
  return (
    <button className={`${grid} icon ${state}`}>
      <img src={icon} alt={grid.split('-')[1].toLowerCase()} />
    </button>
  );
  //--|🠊 ? - Is a Ternary Operator and it checks if state has a value. 🠈|--//
  //--|🠊 : - Is an Else Operator and adds nothing if the state has a falsy value. 🠈|--//
};

export default ButtonIcon;
