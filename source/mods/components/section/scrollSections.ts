// scrollSections.ts
import $ from 'jquery';

function scrollSections(className: string) {
  let group = className;
  console.log(className);
}

export default scrollSections;

let scrollToHome = () => {
  let element = document.querySelector('.default-main') as HTMLElement;
  if (element) {
    setTimeout((): void => {
      $(element).animate({ scrollTop: `+=${element.offsetHeight * 2}px` }, 750);
    }, 250);
  } else {
    console.log(`//--|🠊 Error: No <section> found inside 🠊|--//`);
  }
};
let scrollToSkills = () => {
  let element = document.querySelector('.default-main') as HTMLElement;
  if (element) {
    setTimeout((): void => {
      $(element).animate({ scrollTop: `+=${element.offsetHeight * 2}px` }, 750);
    }, 250);
  } else {
    console.log(`//--|🠊 Error: No <section> found inside 🠊|--//`);
  }
};
let scrollToContact = () => {
  let element = document.querySelector('.default-main') as HTMLElement;
  if (element) {
    setTimeout((): void => {
      $(element).animate({ scrollTop: `+=${element.offsetHeight * 2}px` }, 750);
    }, 250);
  } else {
    console.log(`//--|🠊 Error: No <section> found inside 🠊|--//`);
  }
};
