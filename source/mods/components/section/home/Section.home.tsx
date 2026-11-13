import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';
import propelEffect from '../../canvas/Canvas.propel';
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
  onMouseHover: (element: React.MouseEvent<HTMLElement>) => void;
  onMouseClick: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void;
}
const SectionHome: React.FC<HomeProps> = ({
  className,
  view,
  tag: Object,
  onMouseHover: activateButton,
  onMouseClick: scrollSection,
}) => {
  const [visibleCanvas, hiddenCanvas] = useState(true);
  const loadCanvas = useRef<HTMLCanvasElement | null>(null);
  const toggleCanvas = () => {
    hiddenCanvas(!visibleCanvas);
  };
  //--|🠊 Asked once, up here, so the effect below can listen for it changing 🠈|--//
  const landscape: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  useEffect(() => {
    let canvas = loadCanvas.current;
    if (canvas) {
      return propelEffect(canvas); //--|🠈 React calls what comes back before the next run, which stops the old animation 🠈|--//
    } else {
      console.log(`//--|🠊 No <canvas> element loaded for this orientation 🠈|--//`);
    }
  }, [landscape]); //--|🠈 Run again every time the screen turns 🠈|--//

  return (
    <section
      className={`${className} ${view}`}
      onMouseEnter={activateButton}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {landscape && (
        <div className={`${className} desktop-landscape`}>
          <span className="home-title">
            <h1 data-text={Object.title}>{Object.title}</h1>
          </span>
          <span className="home-buttons">
            <ButtonGlow className="career-button" buttonText="My Career" deviceRatio="desktop" />
            <ButtonGlow className="contact-button" buttonText="Contact Me" deviceRatio="desktop" />
          </span>
          <span className="home-subject">
            <h3>{Object.subject}</h3>
          </span>
          <span className="home-description">
            <p>
              {Object.description[0]}
              <br />
              <br />
              {Object.description[1]}
            </p>
            <h4>{Object.description[2]}</h4>
          </span>

          {/*--|🠊 2024: ref={loadCanvas} dissappears when I rotate the screen. How can I tell react to reload the canvas when the screen is rotated? 🠈|--*/}
          {/*--|🠊 2026: Turning the screen throws this <div> away and builds a new <canvas> when you turn back. 🠈|--*/}
          {/*--|🠊 useEffect(..., []) only ever ran for the first one. With [landscape] it runs for every new one. 🠈|--*/}
          <aside className="home-profile" onClick={toggleCanvas}>
            <img
              className={`${visibleCanvas ? 'hidden' : 'visible'}`}
              src={Object.profile}
              alt="Tertius Roach"
            />
            <canvas className={`${visibleCanvas ? 'visible' : 'hidden'}`} ref={loadCanvas}></canvas>
          </aside>
        </div>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {!landscape && (
        <div className={`${className} mobile-portrait`}>
          <span className="home-title max-width: 100%">
            <h1 className="display-1" data-text={Object.title}>
              {Object.title}
            </h1>
          </span>
          <span className="home-button">
            <ButtonGlow className="career-button" buttonText="My Career" deviceRatio="mobile" />
          </span>
          <span className="home-subject">
            <h3 className="display-3">{Object.subject}</h3>
          </span>
          <span className="home-description">
            <p className="display-6">
              {Object.description[0]}
              <br />
              <br />
              {Object.description[1]}
            </p>
            <h4 className="display-4">{Object.description[2]}</h4>
          </span>

          <aside className="home-profile" onClick={toggleCanvas}>
            <img
              src={Object.profile}
              alt="Tertius Roach"
            />
          </aside>
        </div>
      )}
    </section>
  );
};
export default SectionHome;
