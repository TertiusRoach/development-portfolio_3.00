// default-main.tsx
import $ from 'jquery';
import React from 'react';

import { findDevice } from '../../../../mods/containers/main/Main';
import MainSectionHome from '../../../../mods/components/section/home/Section.home';
import MainSectionSkills from '../../../../mods/components/section/skills/Section.skills';
import MainSectionContact from '../../../../mods/components/section/contact/Section.contact';

console.log(findDevice());
function DefaultMain(page: string | any, label: string | any, block: string | any) {
  const imageURI: string = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/main/public/content';
  const homeText = {
    title: 'Multimedia Programmer',
    career: 'My Career',
    contact: 'Contact Me',
    profile: `${imageURI}/png-files/profile-picture.png`,
    subject: 'Welcome to my portfolio,',
    portfolio: 'View Portfolio',
    description: [
      `As a Multimedia Programmer, I create immersive websites, captivating animations, and interactive
       applications, blending cutting-edge technologies with an artistic vision for engaging experiences. My
       curiosity drives me to experiment with upcoming tools to stay ahead in this fast-paced world of computer
       technologies. I thrive in collaborative environments, and love to transform abstract ideas into impactful,
       long-lasting applications.`,
      `My strong work ethic and demonstrable skills equip me to excel in this field. I'm a quick learner, eager to
       prove myself and bring value to your team. So if you're willing to take a chance on me then we can create
       something extraordinary together. While I may not have a traditional "Computer Science De 😬 gree". Uhm, I
       shouldn't have used those air quotes...take a chance on me?`,
      `Well this pitch took an unexpected turn.`,
    ],
  };
  let skillsText: Object = {};
  let contactText: Object = {};
  return (
    <main style={{ zIndex: 0 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      <MainSectionHome
        //--|🠋 Input 🠋|--//
        className="home"
        view="visible"
        tag={homeText}
        //--|🠋 Functions 🠋|--//
        onMouseHover={activateButtons}
        onMouseClick={scrollToSection}

        /*?-|🠋 Output 🠋|-?*/
      />
      <MainSectionSkills
        //--|🠋 Input 🠋|--//
        className="skills"
        view="hidden"
        //--|🠋 Functions 🠋|--//
        onMouseClick={scrollToSection}
        onMouseHover={activateButtons}

        /*?-|🠋 Output 🠋|-?*/
      />
      <MainSectionContact
        //--|🠋 Input 🠋|--//
        className="contact"
        view="hidden"
        tag={(contactText = {})}
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

const activateButtons = (): void => {
  // console.log(element);
  // console.log(`DesktopLandscape: (orientation: landscape) and (min-aspect-ratio: 16/9)`);
  // console.log(`TabletSquare: (max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)`);
  // console.log(`MobilePortrait: (orientation: portrait) and (max-aspect-ratio: 1/1)`);
  // const desktopOrientation = ``;
  // const tabletOrientation = ``;
  // const mobileOrientation = ``;
  // console.log(`${element} Hovered`);
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
