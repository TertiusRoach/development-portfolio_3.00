// default-main.tsx
import $ from 'jquery';
import React from 'react';

function defaultMain(page: string | any, label: string | any, block: string | any) {
  const highlightHeader = (event: React.MouseEvent<HTMLElement>) => {
    //--|🠉 Function to handle highlighting a header button on click 🠉|--//
    const clickedElement = event.target as HTMLElement; //--|🠈 Get the clicked element 🠈|--//

    //--|🠋 Define selectors for buttons 🠋|--//
    const disableSelector = 'header button[class*="active"]'; //--|🠈 Selector for button to deactivate 🠈|--//
    const enableSelector = `.header-${clickedElement.className.split('-')[1]}`; //--|🠈 Selector for button to activate (based on clicked button's class) 🠈|--//
    const buttons = {
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

  const highlightFooter = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
  };

  return (
    <main style={{ zIndex: 0 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      <section className="main-home" onMouseEnter={highlightHeader}></section>
      <section className="main-skills" onMouseEnter={highlightHeader}></section>
      <section className="main-contact" onMouseEnter={highlightHeader}></section>
    </main>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultMain;
