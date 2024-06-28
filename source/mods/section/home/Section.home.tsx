// Section.home.tsx
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import ButtonGlow from '../../button/glow/Button.glow';

interface HomeProps {
  view: 'visible' | 'hidden';
  className: string;
  tag: {
    title: string;
    career: string;
    contact: string;
    profile: string;
    subject: string;
    portfolio: string;
    description: Array<string>;
  };
  onMouseHover: (element: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction. 🠈|--//
  onMouseClick: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void; //--|🠈 Centers the view on the user-clicked section. 🠈|--//

  //--|🠊 Event: Reflects dynamic mouse interactions. 🠈|--//
  //--|🠊 MouseEvent: Standard interface for DOM mouse events. 🠈|--//
  //--|🠊 Void: Indicates that no value is returned by the toggle function. 🠈|--//
}

const SectionHome: React.FC<HomeProps> = ({
  className,
  view,
  tag: sectionObject,

  onMouseHover: activateButton,
  onMouseClick: scrollSection,
}) => {
  console.log(sectionObject);
  console.log('TEST!');

  return (
    <section
      className={`${className} ${view}`}
      onMouseEnter={activateButton}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: '(orientation: landscape) and (min-aspect-ratio: 16/9)' }) && (
          <div className={`${className} desktop-landscape`}>
            <span className="home-title">
              <h1 data-text={sectionObject.title}>{sectionObject.title}</h1>
            </span>
            <span className="home-buttons">
              <ButtonGlow className="career-button" text="My Career" />
              <ButtonGlow className="contact-button" text="Contact Me" />
            </span>
            <span className="home-subject">
              <h6>{sectionObject.subject}</h6>
            </span>
            <span className="home-description">
              <p>
                {sectionObject.description[0]}
                <br />
                <br />
                {sectionObject.description[1]}
              </p>
              <h6>{sectionObject.description[2]}</h6>
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
        useMediaQuery({ query: '(orientation: portrait) and (max-aspect-ratio: 1/1)' }) && (
          <div className={`${className} mobile-portrait`}>
            <span className="home-title">
              <h3 data-text="My Portfolio">My Portfolio</h3>
            </span>

            <span className="home-subject">
              <h6>Why mobile is the future,</h6>
            </span>
            <span className="home-description">
              <span className="home-description">
                <p>{sectionObject.description[0]}</p>
              </span>
            </span>

            <span className="home-buttons">
              <ButtonGlow className="career-button" text="My Career" />
              <ButtonGlow className="contact-button" text="Contact Me" />
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
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
          <div className={`${className} tablet-square`}>
            <aside className="home-profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/main/public/content/png-files/profile-picture.png"
                alt="Tertius Roach"
              />
            </aside>

            <span className="home-title">
              <h1 data-text={sectionObject.title}>{sectionObject.title}</h1>
            </span>
            <span className="home-buttons">
              <ButtonGlow className="career-button" text="My Career" />
              <ButtonGlow className="contact-button" text="Contact Me" />
            </span>
            <span className="home-subject">
              <h3>{sectionObject.subject}</h3>
            </span>
            <span className="home-description">
              <p>
                {sectionObject.description[0]}
                <br />
                <br />
                {sectionObject.description[1]}
              </p>
              <h6>{sectionObject.description[2]}</h6>
            </span>
          </div>
        )
      }
    </section>
  );

  const desktopLandscape: string = '(orientation: landscape) and (min-aspect-ratio: 16/9)';
  const mobilePortrait: string = '(orientation: portrait) and (max-aspect-ratio: 1/1)';
  const tabletSquare: string = '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)';

  console.log(desktopLandscape);
  console.log(mobilePortrait);
  console.log(tabletSquare);
};
export default SectionHome;
