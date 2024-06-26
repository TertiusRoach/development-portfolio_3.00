// Section.skills.tsx
import React from 'react';
import './Section.skills.scss';
import { useMediaQuery } from 'react-responsive';

interface SkillsProps {
  view: 'visible' | 'hidden';
  className: string;
  sectionText: {};
  hover: (element: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction. 🠈|--//
  click: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void; //--|🠈 Centers the view on the user-clicked section. 🠈|--//
  //--|🠊 Event: Reflects dynamic mouse interactions. 🠈|--//
  //--|🠊 MouseEvent: Standard interface for DOM mouse events. 🠈|--//
  //--|🠊 Void: Indicates that no value is returned by the toggle function. 🠈|--//
}
const desktop: string = '(orientation: landscape) and (min-aspect-ratio: 16/9)';
const mobile: string = '(orientation: portrait) and (max-aspect-ratio: 1/1)';
const tablet: string = '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)';
const SectionSkills: React.FC<SkillsProps> = ({
  hover: activateButton,
  click: scrollSection,
  view,
  className,
  sectionText,
}) => {
  return (
    <section
      className={`${className} ${view}`}
      onMouseEnter={activateButton}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      <div className={className}>
        {
          //--|🠋 Desktop (Landscape) 🠋|--//
          useMediaQuery({ query: desktop }) && (
            <>
              {/* <h1>{text}</h1>
              <p>Paragraph</p>
              <article>
                <h1>Article</h1>
                <p>Another Paragraph</p>
              </article> */}
            </>
          )
        }
        {
          //--|🠋 Mobile (Portrait) 🠋|--//
          useMediaQuery({ query: mobile }) && (
            <>
              {/* <h1>{text}</h1>
              <p>Paragraph</p>
              <article>
                <h1>Article</h1>
                <p>Another Paragraph</p>
              </article> */}
            </>
          )
        }
        {
          //--|🠋 Tablet (Square) 🠋|--//
          useMediaQuery({ query: tablet }) && (
            <>
              {/* <h1>{text}</h1>
              <p>Paragraph</p>
              <article>
                <h1>Article</h1>
                <p>Another Paragraph</p>
              </article> */}
            </>
          )
        }
      </div>
    </section>
  );
};
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
