// Footer.resume.tsx
// ----------------
import React from 'react';
import './Footer.resume.scss';
import { useMediaQuery } from 'react-responsive';
import { sectionButtons } from '../../header/resume/Header.resume';
import AnchorIcon from '../../../components/anchor/icon/Anchor.icon'; //--|🠈 Desktop (Landscape) 🠈|--//
import ButtonIcon from '../../../components/button/icon/Button.icon'; //--|🠈 Mobile (Portrait) 🠈|--//
import scrollSections from '../../../components/section/scrollSections';
import { contactText } from '../../../../pages/index/main/default-main/default-text';

function defaultFooter(page: string | any, label: string | any, block: string | any) {
  const landscape: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  const anchors = contactText.links.filter((link) => link.url.startsWith('http')); //--|🠈 GitHub, LinkedIn and YouTube 🠈|--//

  return (
    <footer style={{ zIndex: 3 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        landscape && (
          <>
            {anchors.map((link) => (
              <AnchorIcon
                key={link.name}
                grid={`footer-${link.name}`}
                icon={link.icon}
                url={link.url}
                text={link.text}
                action="_blank"
              />
            ))}
          </>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        !landscape && (
          <>
            {sectionButtons.map(([name, , icon]) => (
              <ButtonIcon
                key={name}
                click={() => scrollSections(name)}
                grid={`footer-${name}`}
                icon={icon}
                state={name === 'home' ? 'active' : undefined}
              />
            ))}
          </>
        )
      }
    </footer>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultFooter;
