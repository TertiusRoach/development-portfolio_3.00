// default-footer.tsx
import $ from 'jquery';
import React from 'react';
import { anchorIcon, buttonIcon } from '../..';
import { useMediaQuery } from 'react-responsive';

import AnchorIcon from '../../../../mods/anchor/icon/Anchor.icon'; //--|🠈 Desktop (Landscape) 🠈|--//
import ButtonFade from '../../../../mods/button/fade/Button.fade'; //--|🠈 Mobile (Portrait) 🠈|--//
import ButtonIcon from '../../../../mods/button/icon/Button.icon'; //--|🠈 Tablet (Square) 🠈|--//

function defaultFooter(page: string | any, label: string | any, block: string | any) {
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

const scrollSection = (element: HTMLElement): void => {
  const name = element.parentElement?.classList[0].split('-')[1] as string; //--|🠈 Extract the marker linking <button> to <main> 🠈|--//
  const section = document.querySelector(`main .main-${name}`) as HTMLElement; //--|🠈 Select the clicked section inside <main> 🠈|--//
  const main = section.parentElement as HTMLElement; //--|🠈 Get the clicked section's parent element (main container) 🠈|--//
  let getIndex = (target: HTMLElement) => {
    //--|🠉 Helper function to get a section's index within its parent 🠉|--//
    //--|🠋 Check if the target element is a valid section 🠋|--//
    if (target && target.nodeName === 'SECTION') {
      var parent = target.parentNode as HTMLElement; //--|🠈 Get the parent of the target section 🠈|--//
      var children = Array.from(parent.children) as Array<HTMLElement>; //--|🠈 Convert parent's children to an array of HTMLElements 🠈|--//
      var index = children.indexOf(target) as number; //--|🠈 Get the target section's index within the children array 🠈|--//

      return index;
    }
  };
  let height = section.offsetHeight as number; //--|🠈 Get the clicked section's height 🠈|--//
  let adjust = main.scrollTop as number; //--|🠈 Get the current scroll position of <main> 🠈|--//
  let slot = getIndex(section) as number; //--|🠈 Call the helper to get the clicked section's index 🠈|--//

  //--|🠋 Animate scrolling to the clicked section considering height, index, and scroll position 🠋|--//
  //--|🠊 jQuery gets the job done! Deal with it...for now. 🠈|--//
  $(main).animate({ scrollTop: `+=${height * slot - adjust}px` }, 250);
};

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
const validationCheck = (element: React.MouseEvent<HTMLElement>): void => {
  let enable = element.target as HTMLElement; //--|🠈 Enable the target element when clicked 🠈|--//
  //--|🠋 Validation Check 🠋|--//
  if (!enable.parentElement?.classList.contains('active')) {
    //--|🠊 The ? is a Chaining Operator and can access properties with null or undefined values  🠈|--//
    activateButton(enable);
    scrollSection(enable);
  }
};

/*
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
*/
