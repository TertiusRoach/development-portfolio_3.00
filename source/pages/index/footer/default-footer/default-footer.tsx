// default-footer.tsx
import $ from 'jquery';
import React from 'react';
import { anchorIcon, buttonIcon } from '../..';
import { useMediaQuery } from 'react-responsive';

import { activeButton, scrollSection } from '../../main/default-main/default-main';

import AnchorIcon from '../../../../mods/anchor/icon/Anchor.icon'; //--|🠈 Desktop (Landscape) 🠈|--//
import ButtonFade from '../../../../mods/button/fade/Button.fade'; //--|🠈 Mobile (Portrait) 🠈|--//
import ButtonIcon from '../../../../mods/button/icon/Button.icon'; //--|🠈 Tablet (Square) 🠈|--//

function defaultFooter(page: string | any, label: string | any, block: string | any) {
  const wrapperFunction = (element: React.MouseEvent<HTMLElement>): void => {
    scrollSection(element, '<footer>');
    activeButton(element.target as HTMLButtonElement);
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
            <ButtonIcon click={wrapperFunction} grid="footer-home" icon={buttonIcon.home} state="active" />
            <ButtonIcon click={wrapperFunction} grid="footer-skills" icon={buttonIcon.skills} />
            <ButtonIcon click={wrapperFunction} grid="footer-contact" icon={buttonIcon.cellphone} />
            <ButtonIcon grid="footer-projects" icon={buttonIcon.projects} />
          </>
        )
      }
      {
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
          <>
            <ButtonFade click={wrapperFunction} grid="footer-home" icon={buttonIcon.home} text="Home" state="active" />
            <ButtonFade click={wrapperFunction} grid="footer-skills" icon={buttonIcon.skills} text="Skills" />
            <ButtonFade click={wrapperFunction} grid="footer-contact" icon={buttonIcon.email} text="Contact" />
          </>
        )
      }
    </footer>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultFooter;
