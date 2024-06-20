// Section.home.tsx
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';

interface HomeProps {
  flex: string; //--|🠈 This className is used to position the section as a flex layout. 🠈|--//
  text: string;
  view: 'visible' | 'hidden';
  hover: (element: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction. 🠈|--//
  click: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void; //--|🠈 Centers the view on the user-clicked section. 🠈|--//

  //--|🠊 Event: Reflects dynamic mouse interactions. 🠈|--//
  //--|🠊 MouseEvent: Standard interface for DOM mouse events. 🠈|--//
  //--|🠊 Void: Indicates that no value is returned by the toggle function. 🠈|--//
}
const desktop: string = '(orientation: landscape) and (min-aspect-ratio: 16/9)';
const mobile: string = '(orientation: portrait) and (max-aspect-ratio: 1/1)';
const tablet: string = '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)';
const SectionHome: React.FC<HomeProps> = ({ flex, text, view, hover: hoverSection, click: scrollSection }) => {
  return (
    <section
      className={`${flex} ${view}`}
      onMouseEnter={hoverSection}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: desktop }) && (
          <>
            <div>
              <h1>{text}</h1>
              <p>Paragraph</p>
              <article>
                <h1>Article</h1>
                <p>Another Paragraph</p>
              </article>
            </div>
            {/* <div>
              <h2>{text}</h2>
              <p>Paragraph</p>
              <article>
                <h2>Article</h2>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h3>{text}</h3>
              <p>Paragraph</p>
              <article>
                <h3>Article</h3>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h4>{text}</h4>
              <p>Paragraph</p>
              <article>
                <h4>Article</h4>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h5>{text}</h5>
              <p>Paragraph</p>
              <article>
                <h5>Article</h5>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h6>{text}</h6>
              <p>Paragraph</p>
              <article>
                <h6>Article</h6>
                <p>Another Paragraph</p>
              </article>
            </div> */}
          </>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        useMediaQuery({ query: mobile }) && (
          <>
            <div>
              <h1>{text}</h1>
              <p>Paragraph</p>
              <article>
                <h1>Article</h1>
                <p>Another Paragraph</p>
              </article>
            </div>
            {/* <div>
              <h2>{text}</h2>
              <p>Paragraph</p>
              <article>
                <h2>Article</h2>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h3>{text}</h3>
              <p>Paragraph</p>
              <article>
                <h3>Article</h3>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h4>{text}</h4>
              <p>Paragraph</p>
              <article>
                <h4>Article</h4>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h5>{text}</h5>
              <p>Paragraph</p>
              <article>
                <h5>Article</h5>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h6>{text}</h6>
              <p>Paragraph</p>
              <article>
                <h6>Article</h6>
                <p>Another Paragraph</p>
              </article>
            </div> */}
          </>
        )
      }
      {
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: tablet }) && (
          <>
            <div>
              <h1>{text}</h1>
              <p>Paragraph</p>
              <article>
                <h1>Article</h1>
                <p>Another Paragraph</p>
              </article>
            </div>
            {/* <div>
              <h2>{text}</h2>
              <p>Paragraph</p>
              <article>
                <h2>Article</h2>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h3>{text}</h3>
              <p>Paragraph</p>
              <article>
                <h3>Article</h3>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h4>{text}</h4>
              <p>Paragraph</p>
              <article>
                <h4>Article</h4>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h5>{text}</h5>
              <p>Paragraph</p>
              <article>
                <h5>Article</h5>
                <p>Another Paragraph</p>
              </article>
            </div>
            <div>
              <h6>{text}</h6>
              <p>Paragraph</p>
              <article>
                <h6>Article</h6>
                <p>Another Paragraph</p>
              </article>
            </div> */}
          </>
        )
      }
    </section>
  );
};
export default SectionHome;

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
