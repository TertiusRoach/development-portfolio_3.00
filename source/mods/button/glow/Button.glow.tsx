import React, { useRef } from 'react';
import './Button.glow.scss';
import $ from 'jquery';

interface GlowProps {
  text: string;
  className: string;
}

const ButtonGlow: React.FC<GlowProps> = ({ text, className }) => {
  let element = useRef<HTMLButtonElement>(null);
  const glowingEffect = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (element.current) {
      const x = event.pageX - element.current.offsetLeft;
      const y = event.pageY - element.current.offsetTop;

      element.current.style.setProperty('--x', `${x}px`);
      element.current.style.setProperty('--y', `${y}px`);
    }
  };

  const button: string = className.split('-')[0];
  switch (button) {
    case 'home':
      return (
        <button className={`${className} glow`} onMouseMove={glowingEffect} onClick={scrollToHome}>
          <h6>{text}</h6>
          <div></div>
        </button>
      );
    case 'skills':
      return (
        <button className={`${className} glow`} onMouseMove={glowingEffect} onClick={scrollToSkills}>
          <h6>{text}</h6>
          <div></div>
        </button>
      );
    case 'contact':
      return (
        <button className={`${className} glow`} onMouseMove={glowingEffect} onClick={scrollToContact}>
          <h6>{text}</h6>
          <div></div>
        </button>
      );
    default:
      return (
        <button className={`${className} glow`} onMouseMove={glowingEffect}>
          <h6>{text}</h6>
          <div></div>
        </button>
      );
  }
};

export default ButtonGlow;
let scrollToHome = () => {
  let element = document.querySelector('.default-main') as HTMLElement;
  if (element) {
    setTimeout((): void => {
      $(element).animate({ scrollTop: `+=${element.offsetHeight * 2}px` }, 750);
    }, 250);
  } else {
    console.log(`//--|🠊 Error: No <section> found inside 🠊|--//`);
  }
};
let scrollToSkills = () => {
  let element = document.querySelector('.default-main') as HTMLElement;
  if (element) {
    setTimeout((): void => {
      $(element).animate({ scrollTop: `+=${element.offsetHeight * 2}px` }, 750);
    }, 250);
  } else {
    console.log(`//--|🠊 Error: No <section> found inside 🠊|--//`);
  }
};
let scrollToContact = () => {
  let element = document.querySelector('.default-main') as HTMLElement;
  if (element) {
    setTimeout((): void => {
      $(element).animate({ scrollTop: `+=${element.offsetHeight * 2}px` }, 750);
    }, 250);
  } else {
    console.log(`//--|🠊 Error: No <section> found inside 🠊|--//`);
  }
};
