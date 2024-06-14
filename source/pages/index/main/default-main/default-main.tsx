// default-main.tsx
import $ from 'jquery';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import SectionHome from '../../../../mods/section/home/Section.home';
import SectionSkills from '../../../../mods/section/skills/Section.skills';
import SectionContact from '../../../../mods/section/contact/Section.contact';

function defaultMain(page: string | any, label: string | any, block: string | any) {
  //--|🠋 Highlight Active Section 🠋|--//
  const activateButton = (event: React.MouseEvent<HTMLElement>) => {
    const hoveredElement = event.target as HTMLElement; //--|🠈 Get the clicked element 🠈|--//
    // console.log(device);

    let enableSelector = `.header-${hoveredElement.className.split('-')[1]}`; //--|🠈 Selector for button to activate (based on clicked button's class) 🠈|--//
    let disableSelector = 'header button[class*="active"]'; //--|🠈 Selector for button to deactivate 🠈|--//
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

  return (
    <main style={{ zIndex: 0 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      <SectionHome flex="main-home" text="Home" toggle={activateButton} />
      <SectionSkills flex="main-skills" text="Skills" toggle={activateButton} />
      <SectionContact flex="main-contact" text="Contact" toggle={activateButton} />
    </main>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultMain;
