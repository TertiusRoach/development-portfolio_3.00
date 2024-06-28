// Section.home.tsx
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import ButtonGlow from '../../button/glow/Button.glow';

interface HomeProps {
  view: 'visible' | 'hidden';
  className: string;
  sectionText: {
    title: string;
    career: string;
    contact: string;
    profile: string;
    subject: string;
    portfolio: string;
    description: Array<string>;
  };
  hover: (element: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction. 🠈|--//
  click: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void; //--|🠈 Centers the view on the user-clicked section. 🠈|--//

  //--|🠊 Event: Reflects dynamic mouse interactions. 🠈|--//
  //--|🠊 MouseEvent: Standard interface for DOM mouse events. 🠈|--//
  //--|🠊 Void: Indicates that no value is returned by the toggle function. 🠈|--//
}

const SectionHome: React.FC<HomeProps> = ({ sectionText, hover: activateButton, click: scrollSection, view, className }) => {
  let desktop: string = '(orientation: landscape) and (min-aspect-ratio: 16/9)';
  let mobile: string = '(orientation: portrait) and (max-aspect-ratio: 1/1)';
  let tablet: string = '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)';
  return (
    <section
      className={`${className} ${view}`}
      onMouseEnter={activateButton}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: desktop }) && (
          <div className={className}>
            <span className="home-title">
              <h1 data-text={sectionText.title}>{sectionText.title}</h1>
            </span>
            <span className="home-buttons">
              <ButtonGlow className="career-button" text="My Career" />
              <ButtonGlow className="contact-button" text="Contact Me" />
            </span>
            <span className="home-subject">
              <h3>{sectionText.subject}</h3>
            </span>
            <span className="home-description">
              <p>
                {sectionText.description[0]}
                <br />
                <br />
                {sectionText.description[1]}
              </p>
              <h6>{sectionText.description[2]}</h6>
            </span>
            <aside className="home-profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/main/public/content/png-files/profile-picture.png"
                alt="Tertius Roach"
              />
            </aside>
          </div>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        useMediaQuery({ query: mobile }) && (
          <div className={className}>
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
          <div className={className}>
            <span className="home-title">
              <h1 data-text={sectionText.title}>{sectionText.title}</h1>
            </span>

            <span className="home-buttons">
              <ButtonGlow className="career-button" text="My Career" />
              <ButtonGlow className="contact-button" text="Contact Me" />
            </span>

            <span className="home-subject">
              <h3>{sectionText.subject}</h3>
            </span>
            <aside className="home-profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/main/public/content/png-files/profile-picture.png"
                alt="Tertius Roach"
              />
            </aside>
            <span className="home-description">
              <p>
                {sectionText.description[0]}
                <br />
                <br />
                {sectionText.description[1]}
              </p>
              <h6>{sectionText.description[2]}</h6>
            </span>
          </div>
        )
      }
    </section>
  );
};
export default SectionHome;
