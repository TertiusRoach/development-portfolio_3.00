// default-footer.tsx
import $ from 'jquery';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import AnchorIcon from '../../../../mods/anchor/icon/Anchor.icon'; //--|🠈 Desktop (Landscape) 🠈|--//
import ButtonFade from '../../../../mods/button/fade/Button.fade'; //--|🠈 Mobile (Portrait) 🠈|--//
import ButtonIcon from '../../../../mods/button/icon/Button.icon'; //--|🠈 Tablet (Square) 🠈|--//

function defaultFooter(page: string | any, label: string | any, block: string | any) {
  const selectSegment = (element: React.MouseEvent<HTMLElement>): void => {
    let enable = element.target as HTMLElement; //--|🠈 Enable the target element when clicked 🠈|--//
    activateButton(enable);
    revealSection(enable);
  };

  const revealSection = (element: HTMLElement): void => {};

  const activateButton = (element: HTMLElement): void => {
    if (!element.parentElement?.classList.contains('active')) {
      //--|🠊 The ? is a Chaining Operator and can access properties with null or undefined values  🠈|--//
      var downplay = document.querySelector('footer .active') as HTMLButtonElement; //--|🠈 Retrieve the currently active footer 🠈|--//
      var highlight = element.parentElement as HTMLButtonElement; //--|🠈 Highlight the parent element of the selected button 🠈|--//

      downplay.classList.remove('active'); //--|🠈 Disable the current footer 🠈|--//
      highlight.classList.add('active'); //--|🠈 Enable the selected footer 🠈|--//
    }
  };
  return (
    <footer style={{ zIndex: 3 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: '(orientation: landscape) and (min-aspect-ratio: 16/9)' }) && (
          <>
            <AnchorIcon grid="footer-github" icon={anchor.github[0]} url={anchor.github[1]} text="GitHub" action="_blank" />
            <AnchorIcon
              grid="footer-youtube"
              icon={anchor.youtube[0]}
              url={anchor.youtube[1]}
              text="YouTube"
              action="_blank"
            />
            <AnchorIcon
              grid="footer-linkedin"
              icon={anchor.linkedin[0]}
              url={anchor.linkedin[1]}
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
            <ButtonIcon click={selectSegment} grid="footer-home" icon={button.home} state="active" />
            <ButtonIcon click={selectSegment} grid="footer-skills" icon={button.skills} />
            <ButtonIcon click={selectSegment} grid="footer-contact" icon={button.cellphone} />
            <ButtonIcon grid="footer-projects" icon={button.projects} />
          </>
        )
      }
      {
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
          <>
            <ButtonFade click={selectSegment} grid="footer-home" icon={button.home} text="Home" state="active" />
            <ButtonFade click={selectSegment} grid="footer-skills" icon={button.skills} text="Skills" />
            <ButtonFade click={selectSegment} grid="footer-contact" icon={button.email} text="Contact" />
          </>
        )
      }
    </footer>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultFooter;

const projectURI: string = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00';
interface AnchorURL {
  linkedin: Array<string>;
  github: Array<string>;
  youtube: Array<string>;
}
const anchor: AnchorURL = {
  linkedin: [
    `${projectURI}/8581795ce870e5465e4673403a22c14f5b9c156f/public/content/svg-files/icon-collection/brands/linkedin.svg`,
    'https://www.linkedin.com/in/tertius-roach/',
  ],
  github: [
    `${projectURI}/8581795ce870e5465e4673403a22c14f5b9c156f/public/content/svg-files/icon-collection/brands/github.svg`,
    'https://github.com/TertiusRoach',
  ],
  youtube: [
    `${projectURI}/8581795ce870e5465e4673403a22c14f5b9c156f/public/content/svg-files/icon-collection/brands/youtube.svg`,
    'https://www.youtube.com/@TertiusRoach',
  ],
};

interface ButtonURL {
  logo: string;
  home: string;
  email: string;
  skills: string;
  projects: string;
  telephone: string;
  cellphone: string;
}
const button: ButtonURL = {
  logo: `${projectURI}/17d708556905ed2a95bf3329e9dd6411792b16b9/public/content/svg-files/signature-adjacent/primary-light.svg`,
  home: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/home.svg`,
  email: `${projectURI}/b6fafac72b6b8c324b14d8a0560ad55e2e803096/public/content/svg-files/icon-collection/duotone/envelope-open-text.svg`,
  skills: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/lightbulb-on.svg`,
  projects: `${projectURI}/64766ee2eec5d723042a565c96644dd5d3b5732d/public/content/svg-files/icon-collection/duotone/code.svg`,
  telephone: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/phone-volume.svg`,
  cellphone: `${projectURI}/b6fafac72b6b8c324b14d8a0560ad55e2e803096/public/content/svg-files/icon-collection/duotone/mobile-android-alt.svg`,
};
