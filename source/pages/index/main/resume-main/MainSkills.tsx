import React from 'react';
import { useRef, useEffect, useState } from 'react';

const leftImageURI: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f91bdb9647f6489681a751181c5b7faccb92d16d/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/chevron-circle-left.svg`;
const rightImageURI: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f91bdb9647f6489681a751181c5b7faccb92d16d/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/chevron-circle-right.svg`;

const leftClick: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0cf5873cdcc5d0314fbd2a398a380bf170048d5/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mouse-left-click.svg`;
const rightClick: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0cf5873cdcc5d0314fbd2a398a380bf170048d5/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mouse-right-click.svg`;

function MainSkills() {
  return (
    <section id="main-skills">
      <div className="margin-main">
        <Aside jobTitle="developing" />
        <Aside jobTitle="producing" />
      </div>
    </section>
  );
}

interface SkillsProps {
  jobTitle: 'developing' | 'producing';
}

//--|🠋 Header 🠋|--//
function Nav({ jobTitle }: SkillsProps) {
  return (
    <nav className={`${jobTitle}-navigation`}>
      <button className={`${jobTitle}-left`}>
        <img src={leftImageURI} alt="Left" />
      </button>
      <article>
        <h4>{jobTitle.charAt(0).toUpperCase() + jobTitle.slice(1)}</h4>
      </article>

      <button className={`${jobTitle}-right`}>
        <img src={rightImageURI} alt="Right" />
      </button>
    </nav>
  );
}

//--|🠋 Carousel 🠋|--//
function Menu({ jobTitle }: SkillsProps) {
  return (
    <menu className={`${jobTitle}-carousel`}>
      <Article jobTitle={`${jobTitle}`} />
      <Figure jobTitle={`${jobTitle}`} />
    </menu>
  );
}

//--|🠋 Container 🠋|--//
function Aside({ jobTitle }: SkillsProps) {
  return (
    <aside id={`${jobTitle}-skills`} className="collapsed">
      <Nav jobTitle={`${jobTitle}`} />
      <Menu jobTitle={`${jobTitle}`} />
      <Details jobTitle={`${jobTitle}`} />
    </aside>
  );
}

//--|🠋 Tutorial 🠋|--//
function Figure({ jobTitle }: SkillsProps) {
  return (
    <figure className={`${jobTitle}-tutorial`}>
      <div className={`${jobTitle}-icon`}>
        {/* <header>
          <h1>Header</h1>
        </header> */}
        <img src={leftClick} alt="..." />
        <footer></footer>
      </div>

      <div className="background-cosmetics">
        <figcaption className="foreground-cosmetics">
          <span></span>
        </figcaption>
        <figcaption className="midground-cosmetics">
          <span></span>
        </figcaption>
        <figcaption className="background-cosmetics">
          <span></span>
        </figcaption>
      </div>
    </figure>
  );
}

//--|🠋 Information 🠋|--//
function Details({ jobTitle }: SkillsProps) {
  return (
    <details>
      {/* //--| Design details tag |--// */}
      <h1>Title</h1>
      <h3>{`${jobTitle}`}</h3>
      <p>Description</p>
    </details>
  );
}

//--|🠋 Icons & Items 🠋|--//
function Article({ jobTitle }: SkillsProps) {
  const selectedArticle = useRef<HTMLElement>(null);
  const [getWidth, setWidth] = useState<number>(0);
  useEffect(() => {
    if (selectedArticle.current) {
      setWidth(selectedArticle.current.offsetWidth);
    }
  }, []);

  var section: Array<string>;
  switch (jobTitle) {
    case 'developing':
      section = ['languages', 'utilities', 'databases'];
      break;
    case 'producing':
      section = ['design', 'editing', 'admin'];
      break;
  }
  // console.log(section);

  return (
    <>
      {/* //--| To be Continued |--// */}
      <article
        ref={selectedArticle}
        // The solution lies here. Maybe a for() loop?
        id={`${section[0]}-skills`}
        className={`${jobTitle}-article`}
        style={{ right: `-${getWidth * 0}px` }}
      >
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
      </article>
      <article id="" className={`${jobTitle}-article`} style={{ right: `-${getWidth * 1}px` }}>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
      </article>
      <article id="" className={`${jobTitle}-article`} style={{ right: `-${getWidth * 2}px` }}>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
        <li>
          <img src={leftClick} alt="..." />
        </li>
      </article>
    </>
  );
}

export default MainSkills;

//--|🠊 Separate Sections 🠈|--//
/*
      let skillSection: Array<string>;
      try {
        // Set skillSection based on jobTitle
        if (jobTitle === 'developing') {
          skillSection = ['languages', 'utilities', 'databases'];
        } else if (jobTitle === 'producing') {
          skillSection = ['design', 'editing', 'admin']; // Add other sections as needed
        } else {
          throw new Error('//--|🠊 Broken! resume-main.tsx 🠈|--//');
        }
      } catch (error) {
        console.log('//--|🠊 Broken! resume-main.tsx 🠈|--//');
        // Handle error or log it
      }
      */
