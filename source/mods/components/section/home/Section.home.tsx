import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import propelEffect from '../../canvas/Canvas.propel';
import ButtonGlow from '../../button/glow/Button.glow';
import React, { useEffect, useRef, useState } from 'react';

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
  onMouseHover: (element: React.MouseEvent<HTMLElement>) => void;
  onMouseClick: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void;
}

const SectionHome: React.FC<HomeProps> = ({
  className,
  view,
  tag: sectionObject,
  onMouseHover: activateButton,
  onMouseClick: scrollSection,
}) => {
  const [visibleCanvas, hiddenCanvas] = useState(true);
  const loadCanvas = useRef<HTMLCanvasElement | null>(null);
  const toggleCanvas = () => {
    hiddenCanvas(!visibleCanvas);
  };
  useEffect(() => {
    const canvas = loadCanvas.current;
    if (canvas) {
      propelEffect(canvas);
    } else {
      console.log(`//--|🠊 No <canvas> element loaded for this orientation 🠈|--//`);
    }
  }, []);

  return (
    <section
      className={`${className} ${view}`}
      onMouseEnter={activateButton}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape) and (min-aspect-ratio: 16/9)' }) && (
        <div className={`${className} desktop-landscape`}>
          <span className="home-title">
            <h1 data-text={sectionObject.title}>{sectionObject.title}</h1>
          </span>
          <span className="home-buttons">
            <ButtonGlow className="career-button" buttonText="My Career" deviceRatio="desktop" />
            <ButtonGlow className="contact-button" buttonText="Contact Me" deviceRatio="desktop" />
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
            <h4>{sectionObject.description[2]}</h4>
          </span>

          {/*  ref={loadCanvas} dissappears when I rotate the screen. How can I tell react to reload the canvas when the screen is rotated?*/}
          <aside className="home-profile" onClick={toggleCanvas}>
            <img
              className={`${visibleCanvas ? 'hidden' : 'visible'}`}
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/main/public/content/png-files/profile-picture.png"
              alt="Tertius Roach"
            />
            <canvas className={`${visibleCanvas ? 'visible' : 'hidden'}`} ref={loadCanvas}></canvas>
          </aside>
        </div>
      )}
      {/*--|🠋 Tablet (Square) 🠋|--*/}
      {useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
        <div className={`${className} tablet-square`}>
          <span className="home-title">
            <h1 data-text={sectionObject.title}>{sectionObject.title}</h1>
          </span>
          <span className="home-buttons">
            <ButtonGlow className="career-button" buttonText="My Career" deviceRatio="tablet" />
            <ButtonGlow className="contact-button" buttonText="Contact Me" deviceRatio="tablet" />
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

            <h4>{sectionObject.description[2]}</h4>
          </span>

          <aside className="home-profile" onClick={toggleCanvas}>
            <img
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/main/public/content/png-files/profile-picture.png"
              alt="Tertius Roach"
            />
          </aside>
        </div>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait) and (max-aspect-ratio: 1/1)' }) && (
        <div className={`${className} mobile-portrait`}>
          <span className="home-title">
            <h1 data-text={sectionObject.title}>{sectionObject.title}</h1>
          </span>
          <span className="home-button">
            <ButtonGlow className="career-button" buttonText="My Career" deviceRatio="mobile" />
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
            <h4>{sectionObject.description[2]}</h4>
          </span>

          <aside className="home-profile" onClick={toggleCanvas}>
            <img
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/main/public/content/png-files/profile-picture.png"
              alt="Tertius Roach"
            />
          </aside>
        </div>
      )}
    </section>
  );
};
export default SectionHome;
