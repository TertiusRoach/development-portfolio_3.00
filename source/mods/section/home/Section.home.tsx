// Section.home.tsx
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';

interface HomeProps {
  flex: string; //--|🠈 This className is used to position the section as a flex layout. 🠈|--//
  text: string;

  hover: (event: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction. 🠈|--//
  click: (event: React.MouseEvent<HTMLElement>) => void; //--|🠈 Centers the view on the user-clicked section. 🠈|--//
  //--|🠊 Event: Reflects dynamic mouse interactions. 🠈|--//
  //--|🠊 MouseEvent: Standard interface for DOM mouse events. 🠈|--//
  //--|🠊 Void: Indicates tht no value is returned by the toggle function. 🠈|--//
}
const desktop: string = '(orientation: landscape) and (min-aspect-ratio: 16/9)';
const mobile: string = '(orientation: portrait) and (max-aspect-ratio: 1/1)';
const tablet: string = '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)';
const SectionHome: React.FC<HomeProps> = ({
  flex,
  text,
  hover: activateButton,
  click: selectSection,
}) => {
  return (
    <section className={flex} onMouseEnter={activateButton} onClick={selectSection}>
      <>
        {
          //--|🠋 Desktop (Landscape) 🠋|--//
          useMediaQuery({ query: desktop }) && <h1>{text}</h1>
        }
        {
          //--|🠋 Mobile (Portrait) 🠋|--//
          useMediaQuery({ query: mobile }) && <h1>{text}</h1>
        }
        {
          //--|🠋 Tablet (Square) 🠋|--//
          useMediaQuery({ query: tablet }) && <h1>{text}</h1>
        }
      </>
    </section>
  );
};
export default SectionHome;
