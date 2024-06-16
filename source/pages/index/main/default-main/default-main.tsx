// default-main.tsx
import $ from 'jquery';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import SectionHome from '../../../../mods/section/home/Section.home';
import SectionSkills from '../../../../mods/section/skills/Section.skills';
import SectionContact from '../../../../mods/section/contact/Section.contact';

function defaultMain(page: string | any, label: string | any, block: string | any) {
  const hoverSection = (element: React.MouseEvent<HTMLElement>) => {
    let enable = element.target as HTMLElement; //--|🠈 Enable the target element upon hover. 🠈|--//
    let device = window.matchMedia('(orientation: landscape) and (min-aspect-ratio: 16/9)').matches ? 'header' : 'footer'; //--|🠈 Determine the device based on landscape orientation and aspect ratio. 🠈|--//

    while (enable && !enable.classList.contains('hidden')) {
      //--|🠉 Traverse up the DOM tree from the target element to check for 'hidden' class 🠉|--//
      //--|🠊 The while loop should be above the if statement 🠈|--//
      enable = enable.parentElement as HTMLElement; //--|🠈 Move up to the parent element 🠈|--//
      /*
      The while loop is a critical component of the hoverSection function because it
      ensures robust and reliable activation of hover effects across nested DOM elements.
      By traversing up the DOM tree to find the nearest ancestor with the 'hidden' class,
      it guarantees that the desired effects are applied consistently, regardless of the
      exact target of the hover event within the element hierarchy. This approach enhances
      the functionality of the hover interaction, making it more intuitive and responsive
      to user actions across various UI scenarios.
      */
    }

    if (enable && enable.classList.contains('hidden')) {
      //--|🠉 Check if the element has 'hidden' class. 🠉|--//
      //--|🠊 If true, proceed to toggle classes. 🠈|--//
      var marker = enable.classList[0].split('-')[1] as string; //--|🠈 Retrieve the marker from the target element's class list. 🠈|--//
      var disable = document.querySelector('main .visible') as HTMLElement; //--|🠈 Retrieve the currently visible main element and disable it. 🠈|--//
      var downplay = document.querySelector(`${device} .active`) as HTMLButtonElement; //--|🠈 Retrieve the currently active footer/header button and disable it. 🠈|--//
      var highlight = document.querySelector(`${device} .${device}-${marker}`) as HTMLButtonElement; //--|🠈 Highlight the footer/header button corresponding to the marker. 🠈|--//

      disable.classList.add('hidden');
      disable.classList.remove('visible');

      downplay.classList.remove('active');
      highlight.classList.add('active');

      //--|🠋 Enable the target element by removing 'hidden' class and adding 'visible' class. 🠋|--//
      enable.classList.add('visible');
      enable.classList.remove('hidden');
    }
  };

  const scrollSection = (element: React.MouseEvent<HTMLElement>) => {
    console.log('//--|🠊 Scroll to Selected Section 🠈|--//');
    console.log(element);
  };

  return (
    <main style={{ zIndex: 0 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      <SectionHome flex="main-home" text="Home" view="visible" hover={hoverSection} click={scrollSection} />
      <SectionSkills flex="main-skills" text="Skills" view="hidden" hover={hoverSection} click={scrollSection} />
      <SectionContact flex="main-contact" text="Contact" view="hidden" hover={hoverSection} click={scrollSection} />
    </main>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultMain;
