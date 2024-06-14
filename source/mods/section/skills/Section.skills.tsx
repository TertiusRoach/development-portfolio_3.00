// Section.skills.tsx
import React from 'react';
import './Section.skills.scss';
import { useMediaQuery } from 'react-responsive';

interface SkillsProps {
  flex: string; //--|🠈 This className is used to position the section as a flex layout. 🠈|--//
  text: string;

  //--|🠋 Event: Reflects dynamic mouse interactions. 🠋|--//
  toggle: (event: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction 🠈|--//
  //--|🠊 MouseEvent: Standard interface for DOM mouse events. 🠈|--//
  //--|🠊 Void: Indicates tht no value is returned by the toggle function. 🠈|--//
}
const SectionSkills: React.FC<SkillsProps> = ({ flex, text, toggle }) => {
  return (
    <section className={flex} onMouseEnter={toggle}>
      <>
        {
          //--|🠋 Desktop (Landscape) 🠋|--//
          useMediaQuery({ query: '(orientation: landscape) and (min-aspect-ratio: 16/9)' }) && (
            <h1>{text}</h1>
          )
        }
        {
          //--|🠋 Mobile (Portrait) 🠋|--//
          useMediaQuery({ query: '(orientation: portrait) and (max-aspect-ratio: 1/1)' }) && (
            <h1>{text}</h1>
          )
        }
        {
          //--|🠋 Tablet (Square) 🠋|--//
          useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
            <h1>{text}</h1>
          )
        }
      </>
    </section>
  );
};
export default SectionSkills;
