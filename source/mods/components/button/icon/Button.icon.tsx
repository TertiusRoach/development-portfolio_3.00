import React from 'react';
import './Button.icon.scss';

interface IconProps {
  grid: string; //--|🠈 This className is used to position the button within a grid layout. 🠈|--//
  icon: string;
  text?: string;
  state?: 'active';
  click?: (element: React.MouseEvent<HTMLElement>) => void;
}
const ButtonIcon: React.FC<IconProps> = ({ grid, icon, state, click: selectSegment }) => {
  let selectors: string = `${grid} icon${state ? ` ${state}` : ''}`;
  //--|🠊 ? - Is a Ternary Operator and it checks if state has a value. 🠈|--//
  //--|🠊 : - Is an Else Operator and adds nothing if the state has a falsy value. 🠈|--//
  return (
    <button className={selectors}>
      <img onClick={selectSegment} src={icon} alt={grid.split('-')[1].toLowerCase()} />
    </button>
  );
};

export default ButtonIcon;
