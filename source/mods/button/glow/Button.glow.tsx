import React from 'react';
import './Button.glow.scss';

interface GlowProps {
  text: string;
  className: string;
}

const ButtonGlow: React.FC<GlowProps> = ({ className, text }) => {
  const glowingEffect = (element: React.MouseEvent<HTMLElement>): void => {};
  return (
    <button className={`${className} glow`}>
      <h6>{text}</h6>
    </button>
  );
};

export default ButtonGlow;
