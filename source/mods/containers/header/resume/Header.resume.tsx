// Header.resume.tsx
import React from 'react';
import './Header.resume.scss';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../components/button/fade/Button.fade';
import scrollSections from '../../../components/section/scrollSections';
import { imageURI } from '../../../../pages/index/main/default-main/default-text';

//--|🠋 One list feeds every orientation 🠋|--//
export const sectionButtons: Array<[string, string, string]> = [
  //--|🠊 [section, text, icon] 🠈|--//
  ['home', 'Home', `${imageURI}/svg-files/icon-collection/solid/house.svg`],
  ['skills', 'Skills', `${imageURI}/svg-files/icon-collection/solid/code.svg`],
  ['career', 'Career', `${imageURI}/svg-files/icon-collection/solid/briefcase.svg`],
  ['contact', 'Contact', `${imageURI}/svg-files/icon-collection/solid/address-card.svg`],
];
const logo: string = `${imageURI}/svg-files/signature-adjacent/primary-light.svg`;

function defaultHeader(page: string | any, label: string | any, block: string | any) {
  //--|🠊 Tablet (Square) left on 1 July 2024. Landscape and portrait are the whole story now. 🠈|--//
  const landscape: boolean = useMediaQuery({ query: '(orientation: landscape)' });

  return (
    <header style={{ zIndex: 4 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        landscape && (
          <>
            <div onClick={() => scrollSections('home')}>
              <img src={logo} alt="Tertius Roach" />
            </div>
            {sectionButtons.map(([name, text, icon]) => (
              <ButtonFade
                key={name}
                click={() => scrollSections(name)}
                className={`header-${name}`}
                icon={icon}
                text={text}
                state={name === 'home' ? 'active' : undefined}
              />
            ))}
          </>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        !landscape && (
          <>
            <div onClick={() => scrollSections('home')}>
              <img src={logo} alt="Tertius Roach" />
            </div>
          </>
        )
      }
    </header>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultHeader;
