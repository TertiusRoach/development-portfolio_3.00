// default-main.tsx
import $ from 'jquery';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import SectionHome from '../../../../mods/section/home/Section.home';
import SectionSkills from '../../../../mods/section/skills/Section.skills';
import SectionContact from '../../../../mods/section/contact/Section.contact';

function defaultMain(page: string | any, label: string | any, block: string | any) {
  //--|🠋 Highlight Active Section 🠋|--//
  const activateButton = (element: React.MouseEvent<HTMLElement>) => {
    let getSelectors = (element: React.MouseEvent<HTMLElement>) => {
      var navigationLocation = () => {
        return window.matchMedia('(orientation: landscape) and (min-aspect-ratio: 16/9)').matches
          ? 'header'
          : 'footer';
      };
      var navigation: 'header' | 'footer' = navigationLocation();
      var hoveredElement = element.target as HTMLElement; //--|🠈 Get the clicked element 🠈|--//
      var enableSelector = `.${navigation}-${hoveredElement.className.split('-')[1]}`; //--|🠈 Selector for button to activate (based on clicked button's class) 🠈|--//
      var disableSelector = `${navigation} button[class*="active"]`; //--|🠈 Selector for button to deactivate 🠈|--//

      return { enableSelector, disableSelector };
    };

    let { enableSelector, disableSelector } = getSelectors(element);
    let buttons = {
      //--|🠋 Get references to the buttons 🠋|--//
      downplay: document.querySelector(disableSelector) as HTMLButtonElement,
      highlight: document.querySelector(enableSelector) as HTMLButtonElement,
    };

    //--|🠋 Check if the clicked button isn't already active 🠋|--//
    if (!buttons.highlight?.classList.contains('active')) {
      buttons.highlight?.classList.add('active'); //--|🠈 Add 'active' class to clicked button for highlighting 🠈|--//
      buttons.downplay?.classList.remove('active'); //--|🠈 Remove 'active' class from previously active button (if any) 🠈|--//
    }
  };
  const selectSection = () => {
    console.log('Scroll to section');
  };

  return (
    <main style={{ zIndex: 0 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      <SectionHome
        flex="main-home"
        text="Home"
        view="visible"
        hover={activateButton}
        click={selectSection}
      />
      <SectionSkills
        flex="main-skills"
        text="Skills"
        view="hidden"
        hover={activateButton}
        click={selectSection}
      />
      <SectionContact
        flex="main-contact"
        text="Contact"
        view="hidden"
        hover={activateButton}
        click={selectSection}
      />
    </main>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultMain;
