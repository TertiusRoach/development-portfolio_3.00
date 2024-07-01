import './Button.glow.scss';
import React, { useRef } from 'react';
import scrollSections from '../../section/scrollSections';

interface GlowProps {
  className: string;
  buttonText: string;
  deviceRatio: 'desktop' | 'mobile' | 'tablet' | string;
}

const ButtonGlow: React.FC<GlowProps> = ({ className, buttonText, deviceRatio }) => {
  const element = useRef<HTMLButtonElement>(null);

  const glowingEffect = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (element.current) {
      const rect = element.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      element.current.style.setProperty('--x', `${x}px`);
      element.current.style.setProperty('--y', `${y}px`);
    }
  };

  const ButtonContent = (className: string, device: string) => {
    const handleClick = () => scrollSections(className);
    switch (device) {
      case 'desktop':
        return (
          <button ref={element} className={`${className} glow`} onClick={handleClick} onMouseMove={glowingEffect}>
            <h6>{buttonText}</h6>
            <div className="background"></div>
          </button>
        );
      case 'tablet':
        return (
          <button ref={element} className={`${className} glow`} onClick={handleClick} onMouseMove={glowingEffect}>
            <h3>{buttonText}</h3>
            <div className="background"></div>
          </button>
        );
      case 'mobile':
        return (
          <button ref={element} className={`${className} glow`} onClick={handleClick} onMouseMove={glowingEffect}>
            <h1>{buttonText}</h1>
            <div className="background"></div>
          </button>
        );
      default:
        return (
          <button ref={element} className={`${className} glow`} onClick={handleClick} onMouseMove={glowingEffect}>
            <h4>{buttonText}</h4>
            <div className="background"></div>
          </button>
        );
    }
  };

  return ButtonContent(className, deviceRatio);
};

export default ButtonGlow;
