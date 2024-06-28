// Section.skills.tsx
import React from 'react';
import './Section.skills.scss';
import { useMediaQuery } from 'react-responsive';

interface SkillsProps {
  view: 'visible' | 'hidden';
  onMouseHover: (element: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction. 🠈|--//
  onMouseClick: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void; //--|🠈 Centers the view on the user-clicked section. 🠈|--//
  className: string;
  tag: {};

  //--|🠊 Event: Reflects dynamic mouse interactions. 🠈|--//
  //--|🠊 MouseEvent: Standard interface for DOM mouse events. 🠈|--//
  //--|🠊 Void: Indicates that no value is returned by the click function. 🠈|--//
}
const SectionSkills: React.FC<SkillsProps> = ({
  view,
  onMouseHover: activateButton,
  onMouseClick: scrollSection,
  className,
  // sectionText,
}) => {
  return (
    <section
      className={`${className} ${view}`}
      onMouseEnter={activateButton}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: desktop }) && (
          <div className={`${className} desktop`}>
            {/* <h1>{text}</h1>
              <p>Paragraph</p>
              <article>
                <h1>Article</h1>
                <p>Another Paragraph</p>
              </article> */}
          </div>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        useMediaQuery({ query: mobile }) && (
          <div className={`${className} mobile`}>
            {/* <h1>{text}</h1>
              <p>Paragraph</p>
              <article>
                <h1>Article</h1>
                <p>Another Paragraph</p>
              </article> */}
          </div>
        )
      }
      {
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: tablet }) && (
          <div className={`${className} tablet`}>
            {/* <h1>{text}</h1>
              <p>Paragraph</p>
              <article>
                <h1>Article</h1>
                <p>Another Paragraph</p>
              </article> */}
          </div>
        )
      }
    </section>
  );
};
const desktop: string = '(orientation: landscape) and (min-aspect-ratio: 16/9)';
const mobile: string = '(orientation: portrait) and (max-aspect-ratio: 1/1)';
const tablet: string = '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)';
export default SectionSkills;

/*
// I feel this might be usefull
  // Function to log all elements recursively
  function logElements(element: HTMLElement) {
    let children = element.children;
    let i = 0;

    while (i < children.length) {
      console.log(children[i]);
      // Recursively log the children of the current child element
      logElements(children[i] as HTMLElement);
      i++;
    }
  }

  // Start logging from the section element
  logElements(section);
  */
