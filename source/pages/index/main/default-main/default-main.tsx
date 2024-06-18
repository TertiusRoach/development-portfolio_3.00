// default-main.tsx
import $ from 'jquery';
import React from 'react';

import SectionHome from '../../../../mods/section/home/Section.home';
import SectionSkills from '../../../../mods/section/skills/Section.skills';
import SectionContact from '../../../../mods/section/contact/Section.contact';

function defaultMain(page: string | any, label: string | any, block: string | any) {
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

export const activateButton = (element: HTMLElement): void => {
  let name = element.parentElement?.classList[0].split('-')[1] as string; //--|🠈 Retrieve the name of the section for element selection 🠈|--//
  let show = document.querySelector(`main section[class*='${name}'`) as HTMLElement; //--|🠈 Retrieve the section selected in the <footer>  🠈|--//
  let hide = document.querySelector('main .visible') as HTMLElement; //--|🠈 Retrieve the active section to hide it 🠈|--//
  let device = window.matchMedia('(orientation: landscape) and (min-aspect-ratio: 16/9)').matches ? 'header' : 'footer'; //--|🠈 Determines where the buttons are based on orientation 🠈|--//
  let downplay = document.querySelector(`${device} .active`) as HTMLButtonElement; //--|🠈 Retrieve the currently active footer 🠈|--//
  let highlight = element.parentElement as HTMLButtonElement; //--|🠈 Highlight the parent element of the selected button 🠈|--//

  downplay.classList.remove('active'); //--|🠈 Downplay Button 🠈|--//
  highlight.classList.add('active'); //--|🠈 Highlight Button 🠈|--//

  hide.classList.add('hidden');
  //--|🠉 Hide Section 🠋|--//
  hide.classList.remove('visible');

  show.classList.add('visible');
  //--|🠉 Show Section 🠋|--//
  show.classList.remove('hidden');
};

export const scrollSection = (
  element: React.MouseEvent<HTMLElement>,
  navigation: '<header>' | '<main>' | '<footer>'
): void => {
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
  let getSection = (reassign: HTMLElement) => {
    while (reassign && !reassign.classList.contains('hidden')) {
      //--|🠉 Traverse up the DOM tree for a 'hidden' class 🠉|--//
      /*
      This while loop ensures the hover effect works across all the nested elements by
      checking its parent for a "hidden" class to guarantee consistent behavior when
      hovering over a <section> within the <main> tag.
      */
      console.log('loop');
      if (reassign.parentElement?.tagName === 'MAIN' && reassign.classList.contains('visible')) {
        console.log('loop');

        break; //--|🠈 Break the loop when the selected <section> within <main> is found 🠈|--//
      }
      console.log('loop');
      reassign = reassign.parentElement as HTMLElement;
    }
    console.log('loop');

    return reassign;
  };
  let section: HTMLElement;
  switch (navigation) {
    case '<header>':
    case '<footer>':
      var validate = element.target as HTMLImageElement | HTMLHeadingElement;
      var button = validate.parentElement as HTMLButtonElement;
      var name = button.classList[0].split('-')[1] as string;
      section = document.querySelector(`main .main-${name}`) as HTMLElement;
      break;
    case '<main>':
      section = getSection(element.target as HTMLElement);
      break;
  }

  let main = section.parentElement as HTMLElement; //--|🠈 Get the clicked section's <main> container 🠈|--//
  let height: number = section.offsetHeight; //--|🠈 Get the clicked section's height 🠈|--//
  let adjust: number = main.scrollTop; //--|🠈 Get the current scroll position of <main> 🠈|--//
  let slot = getIndex(section) as number; //--|🠈 Call the helper to get the clicked section's index 🠈|--//

  //--|🠋 Animate scrolling to the clicked section 🠋|--//
  //--|🠊 jQuery gets the job done! Deal with it...for now. 🠈|--//
  $(main).animate({ scrollTop: `+=${height * slot - adjust}px` }, 250);
};

//------------------------------//
const hoverSection = (element: React.MouseEvent<HTMLElement>): void => {
  let enable = element.target as HTMLElement; //--|🠈 Enable the target element upon hover 🠈|--//
  let device = window.matchMedia('(orientation: landscape) and (min-aspect-ratio: 16/9)').matches ? 'header' : 'footer'; //--|🠈 Determines where the buttons are based on orientation 🠈|--//
  while (enable && !enable.classList.contains('hidden')) {
    //--|🠉 Traverse up the DOM tree for a 'hidden' class 🠉|--//
    /*
    This while loop ensures the hover effect works across all the nested elements by
    checking its parent for a "hidden" class to guarantee consistent behavior when
    hovering over a <section> within the <main> tag.
    */
    console.log('loop');
    if (enable.parentElement?.tagName === 'MAIN' && enable.classList.contains('visible')) {
      console.log('loop');
      break; //--|🠈 Break the loop when the selected <section> within <main> is found 🠈|--//
    }
    console.log('loop');
    enable = enable.parentElement as HTMLElement;
  }

  if (enable.classList.contains('hidden')) {
    //--|🠉 Check if the element has 'hidden' class 🠉|--//
    //--|🠊 If true, proceed to toggle classes 🠈|--//
    var name = enable.classList[0].split('-')[1] as string; //--|🠈 Retrieve the name of the section for element selection 🠈|--//
    var disable = document.querySelector('main .visible') as HTMLElement; //--|🠈 Retrieve the currently visible main element and disable it 🠈|--//
    var downplay = document.querySelector(`${device} .active`) as HTMLButtonElement; //--|🠈 Retrieve the currently active footer/header button and disable it 🠈|--//
    var highlight = document.querySelector(`${device} .${device}-${name}`) as HTMLButtonElement; //--|🠈 Highlight the footer/header button corresponding to the marker 🠈|--//

    downplay.classList.remove('active');
    highlight.classList.add('active');

    disable.classList.add('hidden');
    disable.classList.remove('visible');

    enable.classList.add('visible');
    enable.classList.remove('hidden');
  }
};

/*
// I feel this might be usefull
  // Function to log all elements recursively
  function logElements(element: HTMLElement) {
    let children = element.children;
    let i = 0;

    while (i < children.length) {
      console.log(children[i]);
      // Recursively log the children of the current child element
      logElements(children[i] as HTMLElement);
      i++;
    }
  }

  // Start logging from the section element
  logElements(section);
  */
