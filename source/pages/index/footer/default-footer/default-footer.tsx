// default-footer.tsx
import $ from 'jquery';
import React from 'react';
import { anchorIcon, buttonIcon } from '../..';
import { useMediaQuery } from 'react-responsive';

import { scrollSection } from '../../main/default-main/default-main';

import AnchorIcon from '../../../../mods/anchor/icon/Anchor.icon'; //--|🠈 Desktop (Landscape) 🠈|--//
import ButtonFade from '../../../../mods/button/fade/Button.fade'; //--|🠈 Mobile (Portrait) 🠈|--//
import ButtonIcon from '../../../../mods/button/icon/Button.icon'; //--|🠈 Tablet (Square) 🠈|--//

function defaultFooter(page: string | any, label: string | any, block: string | any) {
  const validationCheck = (element: React.MouseEvent<HTMLElement>): void => {
    let validate = element.target as HTMLElement; //--|🠈 Enable the target element when clicked 🠈|--//
    //--|🠋 Only execute if the clicked button isn't active 🠋|--//
    if (!validate.parentElement?.classList.contains('active')) {
      activateButton(validate);
      scrollSection(element, '<footer>');
      //--|🠊 The ? is a Chaining Operator and can access properties with null or undefined values  🠈|--//
    }
  };
  return (
    <footer style={{ zIndex: 3 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: '(orientation: landscape) and (min-aspect-ratio: 16/9)' }) && (
          <>
            <AnchorIcon
              grid="footer-github"
              icon={anchorIcon.github[0]}
              url={anchorIcon.github[1]}
              text="GitHub"
              action="_blank"
            />
            <AnchorIcon
              grid="footer-youtube"
              icon={anchorIcon.youtube[0]}
              url={anchorIcon.youtube[1]}
              text="YouTube"
              action="_blank"
            />
            <AnchorIcon
              grid="footer-linkedin"
              icon={anchorIcon.linkedin[0]}
              url={anchorIcon.linkedin[1]}
              text="LinkedIn"
              action="_blank"
            />
          </>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        useMediaQuery({ query: '(orientation: portrait) and (max-aspect-ratio: 1/1)' }) && (
          <>
            <ButtonIcon click={validationCheck} grid="footer-home" icon={buttonIcon.home} state="active" />
            <ButtonIcon click={validationCheck} grid="footer-skills" icon={buttonIcon.skills} />
            <ButtonIcon click={validationCheck} grid="footer-contact" icon={buttonIcon.cellphone} />
            <ButtonIcon grid="footer-projects" icon={buttonIcon.projects} />
          </>
        )
      }
      {
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
          <>
            <ButtonFade click={validationCheck} grid="footer-home" icon={buttonIcon.home} text="Home" state="active" />
            <ButtonFade click={validationCheck} grid="footer-skills" icon={buttonIcon.skills} text="Skills" />
            <ButtonFade click={validationCheck} grid="footer-contact" icon={buttonIcon.email} text="Contact" />
          </>
        )
      }
    </footer>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultFooter;

const activateButton = (element: HTMLElement): void => {
  let name = element.parentElement?.classList[0].split('-')[1] as string; //--|🠈 Retrieve the name of the section for element selection 🠈|--//
  let enable = document.querySelector(`main section[class*='${name}'`) as HTMLElement; //--|🠈 Retrieve the section selected in the <footer>  🠈|--//
  let disable = document.querySelector('main .visible') as HTMLElement; //--|🠈 Retrieve the active section to hide it 🠈|--//
  let downplay = document.querySelector('footer .active') as HTMLButtonElement; //--|🠈 Retrieve the currently active footer 🠈|--//
  let highlight = element.parentElement as HTMLButtonElement; //--|🠈 Highlight the parent element of the selected button 🠈|--//

  downplay.classList.remove('active'); //--|🠈 Disable the current footer 🠈|--//
  highlight.classList.add('active'); //--|🠈 Enable the selected footer 🠈|--//

  disable.classList.add('hidden');
  disable.classList.remove('visible');

  enable.classList.add('visible');
  enable.classList.remove('hidden');
};
