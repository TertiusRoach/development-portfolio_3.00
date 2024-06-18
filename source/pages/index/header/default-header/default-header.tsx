// default-header.tsx
import $ from 'jquery';
import React from 'react';
import { buttonIcon } from '../..';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../../mods/button/fade/Button.fade';

import { scrollSection } from '../../main/default-main/default-main';

function defaultHeader(page: string | any, label: string | any, block: string | any) {
  const validationCheck = (element: React.MouseEvent<HTMLElement>): void => {
    let validate = element.target as HTMLElement; //--|🠈 Enable the target element when clicked 🠈|--//
    //--|🠋 Only execute if the clicked button isn't active 🠋|--//
    if (!validate.parentElement?.classList.contains('active')) {
      activateButton(validate);
      scrollSection(element, '<header>');
    }
  };
  return (
    <header style={{ zIndex: 4 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: '(orientation: landscape) and (min-aspect-ratio: 16/9)' }) && (
          <>
            <ButtonFade click={validationCheck} grid="header-home" icon={buttonIcon.home} text="Home" state="active" />
            <ButtonFade click={validationCheck} grid="header-skills" icon={buttonIcon.skills} text="Skills" />
            <ButtonFade click={validationCheck} grid="header-contact" icon={buttonIcon.telephone} text="Contact" />
            <div>
              <img src={buttonIcon.logo} alt="Résumé Logo" />
            </div>
          </>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        useMediaQuery({ query: '(orientation: portrait) and (max-aspect-ratio: 1/1)' }) && (
          <div>
            <img src={buttonIcon.logo} alt="Résumé Logo" />
          </div>
        )
      }
      {
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
          <>
            <ButtonFade grid="header-projects" icon={buttonIcon.projects} text="Projects" />
            <div>
              <img src={buttonIcon.logo} alt="Résumé Logo" />
            </div>
          </>
        )
      }
    </header>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultHeader;

const activateButton = (element: HTMLElement): void => {
  let name = element.parentElement?.classList[0].split('-')[1] as string; //--|🠈 Retrieve the name of the section for element selection 🠈|--//
  let enable = document.querySelector(`main section[class*='${name}'`) as HTMLElement; //--|🠈 Retrieve the section selected in the <header>  🠈|--//
  let disable = document.querySelector('main .visible') as HTMLElement; //--|🠈 Retrieve the active section to hide it 🠈|--//
  let downplay = document.querySelector('header .active') as HTMLButtonElement; //--|🠈 Retrieve the currently active header 🠈|--//
  let highlight = element.parentElement as HTMLButtonElement; //--|🠈 Highlight the parent element of the selected button 🠈|--//

  downplay.classList.remove('active'); //--|🠈 Disable the current header 🠈|--//
  highlight.classList.add('active'); //--|🠈 Enable the selected header 🠈|--//

  disable.classList.add('hidden');
  disable.classList.remove('visible');

  enable.classList.add('visible');
  enable.classList.remove('hidden');
};
