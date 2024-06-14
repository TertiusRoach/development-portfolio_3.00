// default-header.tsx
import $ from 'jquery';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../../mods/button/fade/Button.fade';

function defaultHeader(page: string | any, label: string | any, block: string | any) {
  return (
    <header style={{ zIndex: 4 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: '(orientation: landscape) and (min-aspect-ratio: 16/9)' }) && (
          <>
            <ButtonFade grid="header-home" icon={icons.home} text="Home" state="active" />
            <ButtonFade grid="header-skills" icon={icons.skills} text="Skills" />
            <ButtonFade grid="header-contact" icon={icons.contact} text="Contact" />
            <div>
              <img src={icons.logo} alt="Résumé Logo" />
            </div>
          </>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        useMediaQuery({ query: '(orientation: portrait) and (max-aspect-ratio: 1/1)' }) && (
          <div>
            <img src={icons.logo} alt="Résumé Logo" />
          </div>
        )
      }
      {
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
          <>
            <ButtonFade grid="header-projects" icon={icons.projects} text="Projects" />
            <div>
              <img src={icons.logo} alt="Résumé Logo" />
            </div>
          </>
        )
      }
    </header>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultHeader;

interface IconURL {
  logo: string;
  home: string;
  skills: string;
  contact: string;
  projects: string;
}
const projectURI: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00';
const icons: IconURL = {
  logo: `${projectURI}/17d708556905ed2a95bf3329e9dd6411792b16b9/public/content/svg-files/signature-adjacent/primary-light.svg`,
  home: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/home.svg`,
  skills: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/lightbulb-on.svg`,
  contact: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/phone-volume.svg`,
  projects: `${projectURI}/64766ee2eec5d723042a565c96644dd5d3b5732d/public/content/svg-files/icon-collection/duotone/code.svg`,
};
