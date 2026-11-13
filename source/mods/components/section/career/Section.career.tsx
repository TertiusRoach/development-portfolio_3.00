// Section.career.tsx
import React from 'react';
import './Section.career.scss';
import { useMediaQuery } from 'react-responsive';
import { CareerText } from '../../../../pages/index/main/default-main/default-text';

interface CareerProps {
  view: 'visible' | 'hidden';
  className: string;
  tag: CareerText;
  onMouseHover: (element: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction. 🠈|--//
  onMouseClick: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void; //--|🠈 Centers the view on the user-clicked section. 🠈|--//
}
const SectionCareer: React.FC<CareerProps> = ({
  className,
  view,
  tag: Object,
  onMouseHover: activateButton,
  onMouseClick: scrollSection,
}) => {
  const landscape: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  const orientation: string = landscape ? 'desktop-landscape' : 'mobile-portrait';

  return (
    <section
      className={`${className} ${view}`}
      onMouseEnter={activateButton}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      <div className={`${className} ${orientation}`}>
        <span className="career-title">
          <h1>{Object.title}</h1>
        </span>
        {/*--|🠊 Oldest first. Landscape reads left to right, portrait top to bottom 🠈|--*/}
        <span className="career-jobs">
          {Object.jobs.map((job) => (
            <article className="career-job" key={job.title}>
              <span className="job-heading">
                <img src={job.logo} alt={job.title} />
                <h4>{job.title}</h4>
                <h6>{job.dates}</h6>
              </span>
              <p>{job.paragraphs[0]}</p>
              {/*--|🠊 <details> opens and closes by itself: no state, no script 🠈|--*/}
              <details>
                <summary>{Object.more}</summary>
                {job.paragraphs.slice(1).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </details>
            </article>
          ))}
        </span>
      </div>
    </section>
  );
};
export default SectionCareer;
