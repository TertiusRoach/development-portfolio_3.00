import React from 'react';
import './Button.fade.scss';

interface FadeProps {
  className: string; //--|🠈 This className is used to position the button within a grid layout. 🠈|--//
  icon: string;
  text: string;
  state?: 'active';
  click?: (element: React.MouseEvent<HTMLElement>) => void;
}

const ButtonFade: React.FC<FadeProps> = ({ className, icon, text, state, click: wrapperFunction }) => {
  let selectors: string = `${className} fade${state ? ` ${state}` : ''}`;
  //--|🠊 ? - Is a Ternary Operator and it checks if state has a value. 🠈|--//
  //--|🠊 : - Is an Else Operator and adds nothing if the state has a falsy value. 🠈|--//
  return (
    <button className={selectors}>
      <img onClick={wrapperFunction} src={icon} alt={text.toLowerCase()} />
      <h6 onClick={wrapperFunction}>{text}</h6>
    </button>
  );
};

export default ButtonFade;
