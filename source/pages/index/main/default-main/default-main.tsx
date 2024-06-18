// default-main.tsx
import $ from 'jquery';
import React from 'react';

import SectionHome from '../../../../mods/section/home/Section.home';
import SectionSkills from '../../../../mods/section/skills/Section.skills';
import SectionContact from '../../../../mods/section/contact/Section.contact';

function defaultMain(page: string | any, label: string | any, block: string | any) {
  const scrollSection = (element: React.MouseEvent<HTMLElement>): void => {
    const section = element.target as HTMLElement; //--|🠈 Select the clicked section inside <main> 🠈|--//
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

const hoverSection = (element: React.MouseEvent<HTMLElement>): void => {
  let enable = element.target as HTMLElement; //--|🠈 Enable the target element upon hover 🠈|--//
  let device = window.matchMedia('(orientation: landscape) and (min-aspect-ratio: 16/9)').matches ? 'header' : 'footer'; //--|🠈 Determine the device based on landscape orientation and aspect ratio. 🠈|--//

  while (enable && !enable.classList.contains('hidden')) {
    enable = enable.parentElement as HTMLElement; //--|🠈 Move up to the parent element 🠈|--//
    //--|🠉 Traverse up the DOM tree from the target element to check for 'hidden' class 🠉|--//
    /*
    The while loop ensures hover effects work across nested elements by checking parent
    elements for a "hidden" class, guaranteeing consistent behavior regardless of the
    hovered element. This improves hover interaction functionality and responsiveness.
    */
    //--|🠊 The while loop should be above the if statement 🠈|--//
  }

  if (enable && enable.classList.contains('hidden')) {
    //--|🠉 Check if the element has 'hidden' class 🠉|--//
    //--|🠊 If true, proceed to toggle classes 🠈|--//
    var section = enable.classList[0].split('-')[1] as string; //--|🠈 Retrieve the name of the section for element selection 🠈|--//
    var disable = document.querySelector('main .visible') as HTMLElement; //--|🠈 Retrieve the currently visible main element and disable it 🠈|--//
    var downplay = document.querySelector(`${device} .active`) as HTMLButtonElement; //--|🠈 Retrieve the currently active footer/header button and disable it 🠈|--//
    var highlight = document.querySelector(`${device} .${device}-${section}`) as HTMLButtonElement; //--|🠈 Highlight the footer/header button corresponding to the marker 🠈|--//

    downplay.classList.remove('active');
    highlight.classList.add('active');

    disable.classList.add('hidden');
    disable.classList.remove('visible');

    enable.classList.add('visible');
    enable.classList.remove('hidden');
  }
};
