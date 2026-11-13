// scrollSections.ts
import $ from 'jquery';

//--|🠊 2024: scrollToHome, scrollToSkills and scrollToContact were three copies of one draft, and each scrolled two screens down. 🠈|--//
//--|🠊 2026: one function. Hand it a class name and it finds the <section> by itself. 🠈|--//
function scrollSections(className: string) {
  let name: string = className.split('-')[0]; //--|🠈 'career-button' and 'career' both become 'career' 🠈|--//
  let main = document.querySelector('main') as HTMLElement;
  let section = document.querySelector(`main > section.${name}`) as HTMLElement;

  if (main && section) {
    let distance: number = section.getBoundingClientRect().top - main.getBoundingClientRect().top;
    $(main)
      .stop() //--|🠈 A second click cancels the first animation instead of queueing behind it 🠈|--//
      .animate({ scrollTop: main.scrollTop + distance }, 750);
    activateSection(name);
  } else {
    console.log(`//--|🠊 Error: No <section class="${name}"> found inside <main> 🠈|--//`);
  }
}
export default scrollSections;

//--|🠋 Light up the buttons that belong to the named <section>, and mark the <section> as the one in view 🠋|--//
export function activateSection(name: string) {
  document.querySelectorAll('main > section').forEach((section) => {
    if (section.classList.contains(name)) {
      section.classList.add('visible');
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
      section.classList.remove('visible');
    }
  });
  document.querySelectorAll('header .active, footer .active').forEach((button) => {
    button.classList.remove('active');
  });
  document.querySelectorAll(`header .header-${name}, footer .footer-${name}`).forEach((button) => {
    button.classList.add('active');
  });
}
