// Section.skills.tsx
import React from 'react';
import './Section.skills.scss';
import { useMediaQuery } from 'react-responsive';
import { imageURI, SkillsText } from '../../../../pages/index/main/default-main/default-text';

interface SkillsProps {
  view: 'visible' | 'hidden';
  className: string;
  tag: SkillsText;
  onMouseHover: (element: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction. 🠈|--//
  onMouseClick: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void; //--|🠈 Centers the view on the user-clicked section. 🠈|--//
}
const SectionSkills: React.FC<SkillsProps> = ({
  className,
  view,
  tag: Object,
  onMouseHover: activateButton,
  onMouseClick: scrollSection,
}) => {
  //--|🠊 One question, asked once at the top. 'orientation: landscape' without brackets never matched anything. 🠈|--//
  const landscape: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  const orientation: string = landscape ? 'desktop-landscape' : 'mobile-portrait';

  return (
    <section
      className={`${className} ${view}`}
      onMouseEnter={activateButton}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      <div className={`${className} ${orientation}`}>
        <span className="skills-title">
          <h1>{Object.title}</h1>
          <h5>{Object.subject}</h5>
        </span>
        <span className="skills-groups">
          {Object.groups.map((group) => (
            <article className="skills-group" key={group.name}>
              <h4>{group.name}</h4>
              <ul>
                {group.skills.map(([name, file, rating]) => (
                  <li key={name}>
                    <img src={`${imageURI}/png-files/main-skills/original-logos/${file}.png`} alt={name} />
                    <h6>{name}</h6>
                    {/*--|🠊 The bar's width comes from its class (rating-0 to rating-10), not an inline style 🠈|--*/}
                    <span className="skills-rating" title={`${rating} out of 10`}>
                      <i className={`rating-${rating}`}></i>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </span>
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
