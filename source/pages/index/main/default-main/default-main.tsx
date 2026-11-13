// default-main.tsx
import $ from 'jquery';
import React from 'react';

import { activateSection } from '../../../../mods/components/section/scrollSections';
import { homeText, skillsText, careerText, contactText } from './default-text';
import ConSectionHome from '../../../../mods/components/section/home/Section.home';
import ConSectionSkills from '../../../../mods/components/section/skills/Section.skills';
import ConSectionCareer from '../../../../mods/components/section/career/Section.career';
import ConSectionContact from '../../../../mods/components/section/contact/Section.contact';

function DefaultMain(page: string | any, label: string | any, block: string | any) {
  return (
    <main style={{ zIndex: 0 }} id={`${page}-${block}`} className={`${label}-${block}`} onScroll={followScroll}>
      <ConSectionHome
        //--|🠋 Input 🠋|--//
        className="home"
        view="visible"
        tag={homeText}
        //--|🠋 Functions 🠋|--//
        onMouseHover={activateButtons}
        onMouseClick={scrollToSection}

        /*?-|🠋 Output 🠋|-?*/
      />
      <ConSectionSkills
        //--|🠋 Input 🠋|--//
        className="skills"
        view="hidden"
        tag={skillsText}
        //--|🠋 Functions 🠋|--//
        onMouseClick={scrollToSection}
        onMouseHover={activateButtons}

        /*?-|🠋 Output 🠋|-?*/
      />
      <ConSectionCareer
        //--|🠋 Input 🠋|--//
        className="career"
        view="hidden"
        tag={careerText}
        //--|🠋 Functions 🠋|--//
        onMouseClick={scrollToSection}
        onMouseHover={activateButtons}

        /*?-|🠋 Output 🠋|-?*/
      />
      <ConSectionContact
        //--|🠋 Input 🠋|--//
        className="contact"
        view="hidden"
        tag={contactText}
        //--|🠋 Functions 🠋|--//
        onMouseClick={scrollToSection}
        onMouseHover={activateButtons}

        /*?-|🠋 Output 🠋|-?*/
      />
    </main>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default DefaultMain;

const activateButtons = (element: React.MouseEvent<HTMLElement>): void => {
  //--|🠊 The mouse entered a <section>: light up its buttons in the <header> and <footer> 🠈|--//
  let section = element.currentTarget as HTMLElement;
  activateSection(section.classList[0]);
};

const followScroll = (element: React.UIEvent<HTMLElement>): void => {
  //--|🠊 Phones have no mouse to hover with, so the buttons also follow the scroll 🠈|--//
  let main = element.currentTarget as HTMLElement;
  let slot: number = Math.round(main.scrollTop / main.clientHeight); //--|🠈 Every <section> is one screen tall 🠈|--//
  let section = main.children[slot] as HTMLElement;
  if (section) {
    activateSection(section.classList[0]);
  }
};

export const scrollToSection = (element: React.MouseEvent<HTMLElement>, navigation: '<header>' | '<main>' | '<footer>') => {
  let getIndex = (target: HTMLElement) => {
    //--|🠉 Helper function to get a section's index within its parent 🠉|--//
    //--|🠋 Check if the target element is a valid section 🠋|--//
    if (target && target.nodeName === 'SECTION') {
      var parent = target.parentNode as HTMLElement; //--|🠈 Get the parent of the target section 🠈|--//
      var children = Array.from(parent.children) as Array<HTMLElement>; //--|🠈 Convert parent's children to an array of HTMLElements 🠈|--//
      var index: number = children.indexOf(target) as number; //--|🠈 Get the target section's index within the children array 🠈|--//

      return index;
    }
  };
  let getSection = (reassign: HTMLElement) => {
    while (reassign && !reassign.classList.contains('hidden')) {
      //--|🠉 jQuery, I get it. This code doesn't make sense. 🠉|--//
      /*
      This while loop ensures the hover effect works across all...
      */
      if (reassign.parentElement?.tagName === 'MAIN' && reassign.classList.contains('visible')) {
        break; //--|🠈 Break the loop when the selected <section> within <main> is found 🠈|--//
      } else reassign = reassign.parentElement as HTMLElement;
    }
    return reassign;
  };

  let section: HTMLElement;
  switch (navigation) {
    case '<footer>':
      var validate = element.target as HTMLImageElement | HTMLHeadingElement;
      var button = validate.parentElement as HTMLButtonElement;
      var name = button.classList[0].split('-')[1] as string;
      section = document.querySelector(`main .main-${name}`) as HTMLElement;
      break;
    case '<header>':
    case '<main>':
      section = getSection(element.target as HTMLElement);
      break;
  }

  let slot: number = getIndex(section) as number; //--|🠈 Call the helper to get the clicked section's index 🠈|--//
  let height: number = section.offsetHeight as number; //--|🠈 Get the clicked section's height 🠈|--//
  const main = section.parentElement as HTMLElement; //--|🠈 Get the clicked section's <main> container 🠈|--//
  let adjust: number = main.scrollTop as number; //--|🠈 Get the current scroll position of <main> 🠈|--//

  //--|🠋 Animate scrolling to the clicked section 🠋|--//
  //--|🠊 jQuery gets the job done! Deal with it...for now. 🠈|--//
  $(main).animate({ scrollTop: `+=${height * slot - adjust}px` }, 250);
  return (height * slot - adjust) as number;
};

export const activeButton = (element: HTMLButtonElement): void => {
  const device = window.matchMedia('(orientation: landscape) and (min-aspect-ratio: 16/9)').matches ? 'header' : 'footer'; //--|🠈 Determines where the buttons are based on orientation 🠈|--//
  let name = element.parentElement?.classList[0].split('-')[1] as string; //--|🠈 Retrieve the name of the section for element selection 🠈|--//
  let show = document.querySelector(`main section[class*='${name}'`) as HTMLElement; //--|🠈 Retrieve the section selected in the <footer>  🠈|--//
  let hide = document.querySelector('main .visible') as HTMLElement; //--|🠈 Retrieve the active section to hide it 🠈|--//
  let diable = document.querySelector(`${device} .active`) as HTMLButtonElement; //--|🠈 Retrieve the currently active footer 🠈|--//
  let enable = element.parentElement as HTMLButtonElement; //--|🠈 Highlight the parent element of the selected button 🠈|--//

  diable.classList.remove('active'); //--|🠈 Downplay Button 🠈|--//
  enable.classList.add('active'); //--|🠈 Highlight Button 🠈|--//

  hide.classList.add('hidden');
  hide.classList.remove('visible');

  show.classList.add('visible');
  show.classList.remove('hidden');
};
