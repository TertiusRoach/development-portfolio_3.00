// default-header.tsx
import $ from 'jquery';
import React from 'react';
import { buttonIcon } from '../..';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../../mods/button/fade/Button.fade';

import { activateButton, scrollSection } from '../../main/default-main/default-main';

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
