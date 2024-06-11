// default-header.tsx
import $ from 'jquery';
import React from 'react';
import Button from '../../../../mods/button/grid/Button.grid';

function defaultHeader(page: string | any, label: string | any, block: string | any) {
  const logoURI: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/17d708556905ed2a95bf3329e9dd6411792b16b9/public/content/svg-files/signature-adjacent/primary-light.svg';

  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
  return (
    <header style={{ zIndex: 4 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      <div>
        <img src={logoURI} alt="Résumé Logo" />
      </div>

      <Button className="header-home" text={'Home'} />
      <Button className="header-skills" text={'Skills'} />
      <Button className="header-contact" text={'Contact'} />
    </header>
  );
}

export default defaultHeader;

/*
function defaultHeader(pageName: string | any, blockName: string | any) {
  const page = pageName;
  const block = blockName;
  const archiveURI: string = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00';

  let logoAdjacent: string = `${archiveURI}/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-adjacent/primary-light.svg`;
  let logoIcon: string = `${archiveURI}/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-icon/primary-light.svg`;
  let homeHeader: string = `${archiveURI}/e88887177fcc7c80c4c3ad5db0268a1bcffa1fa6/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/home.svg`;
  let skillsHeader: string = `${archiveURI}/c028ce2a23eafd9b5f267f74262e47621ada789b/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/lightbulb-on.svg`;
  let contactHeader: { desktop: string; mobile: string } = {
    desktop: `${archiveURI}/e88887177fcc7c80c4c3ad5db0268a1bcffa1fa6/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/phone.svg`,
    mobile: `${archiveURI}/e88887177fcc7c80c4c3ad5db0268a1bcffa1fa6/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mobile-alt.svg`,
  };

  let projectsMain: string = `${archiveURI}/c028ce2a23eafd9b5f267f74262e47621ada789b/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/browser.svg`;

  console.log('//--|🠊 default-header.tsx loaded 🠈|--//');
  return (
    <>
      <aside id="header-aside">
        <img src={logoAdjacent} alt="Résumé Logo" />
      </aside>
      <menu id="header-menu">
        <button id="header-home" className="highlight">
          <a href="#main-home">
            <img src={homeHeader} alt="..." />
            <h4>Home</h4>
          </a>
        </button>
        <button id="header-skills" className="downplay">
          <a href="#main-skills">
            <img src={skillsHeader} alt="..." />
            <h4>Skills</h4>
          </a>
        </button>
        <button id="header-contact" className="downplay">
          <a href="#main-contact">
            <img src={contactHeader.desktop} alt="..." />
            <h4>Contact</h4>
          </a>
        </button>
      </menu>
    </>
  );
}
export default defaultHeader;

$(function () {
  const headerButtons: string = '#header-menu button';
  $(headerButtons).on('click', (event) => {
    let target = event.currentTarget as HTMLButtonElement; //--|🠊 Extract the clicked button element 🠈|--//
    let retrieve = {
      //--|🠋 Define an object to hold related elements and their properties 🠋|--//
      element: target, //--|🠊 Reference to the clicked button element 🠈|--//
      get parent() {
        return $(target).parent()[0] as HTMLElement; //--|🠊 Get the parent element of the clicked button 🠈|--//
      },
      get children() {
        return $(target).parent().children().toArray() as HTMLButtonElement[]; //--|🠊 Get an array of children elements of the parent 🠈|--//
      },
      get siblings() {
        return $(target).siblings().toArray() as HTMLButtonElement[]; //--|🠊 Get an array of sibling elements of the clicked button 🠈|--//
      },
    };
    $(retrieve.siblings).removeClass().addClass('downplay'); //--|🠊 Apply the 'downplay' class to all sibling elements 🠈|--//
    $(retrieve.element).removeClass('downplay').addClass('highlight'); //--|🠊 Apply the 'highlight' class to the clicked button element 🠈|--//
  });
});
*/
