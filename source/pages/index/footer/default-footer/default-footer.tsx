// default-footer.tsx
import $ from 'jquery';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import AnchorIcon from '../../../../mods/anchor/icon/Anchor.icon'; //--|🠈 Desktop (Landscape) 🠈|--//
import ButtonFade from '../../../../mods/button/fade/Button.fade'; //--|🠈 Mobile (Portrait) 🠈|--//
import ButtonIcon from '../../../../mods/button/icon/Button.icon'; //--|🠈 Tablet (Square) 🠈|--//

function defaultFooter(page: string | any, label: string | any, block: string | any) {
  const pageName = page;
  return (
    <footer style={{ zIndex: 3 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        //--|🠋 Desktop (Landscape) 🠋|--//
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
      )}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        //--|🠋 Mobile (Portrait) 🠋|--//
        <>
          {/* <ButtonIcon grid="footer-home" icon={button.home} text="Home" state="active" /> */}
          {/* <ButtonIcon grid="footer-skills" icon={button.skills} text="Skills" /> */}
          {/* <ButtonIcon grid="footer-contact" icon={button.contact} text="Contact" /> */}
          {/* <ButtonIcon grid="footer-projects" icon={button.projects} text="Projects" /> */}
        </>
      )}
      {useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
        //--|🠋 Tablet (Square) 🠋|--//
        <>
          {/* <ButtonFade grid="footer-home" icon={button.home} text="Home" state="active" /> */}
          {/* <ButtonFade grid="footer-skills" icon={button.skills} text="Skills" /> */}
          {/* <ButtonFade grid="footer-contact" icon={button.contact} text="Contact" /> */}
        </>
      )}
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
  skills: string;
  contact: string;
  projects: string;
}
const button: ButtonURL = {
  logo: `${projectURI}/17d708556905ed2a95bf3329e9dd6411792b16b9/public/content/svg-files/signature-adjacent/primary-light.svg`,
  home: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/home.svg`,
  skills: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/lightbulb-on.svg`,
  contact: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/phone-volume.svg`,
  projects: `${projectURI}/64766ee2eec5d723042a565c96644dd5d3b5732d/public/content/svg-files/icon-collection/duotone/code.svg`,
};
