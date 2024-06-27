import React, { useRef } from 'react';
import './Button.glow.scss';

interface GlowProps {
  text: string;
  className: string;
}

const ButtonGlow: React.FC<GlowProps> = ({ text, className }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const glowingEffect = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const x = event.pageX - buttonRef.current.offsetLeft;
      const y = event.pageY - buttonRef.current.offsetTop;

      buttonRef.current.style.setProperty('--x', `${x}px`);
      buttonRef.current.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <button className={`${className} glow`} onMouseMove={glowingEffect} ref={buttonRef}>
      <h6>{text}</h6>
      <div></div>
    </button>
  );
};

export default ButtonGlow;
