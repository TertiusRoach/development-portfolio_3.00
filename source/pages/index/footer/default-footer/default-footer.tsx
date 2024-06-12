// default-footer.tsx
import $ from 'jquery';
import React from 'react';
import Anchor from '../../../../mods/anchor/grid/Anchor.grid';

function defaultFooter(page: string | any, label: string | any, block: string | any) {
  return (
    <footer style={{ zIndex: 3 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      <Anchor text="LinkedIn" className="footer-linkedin" />
      <Anchor text="LinkedIn" className="footer-github" />
      <Anchor text="LinkedIn" className="footer-youtube" />
      {/* Code here */}
    </footer>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultFooter;

/*
function defaultFooter(pageName: string | any, blockName: string | any) {
  const page = pageName;
  const block = blockName;

  console.log('//--|🠊 default-footer.tsx loaded 🠈|--//');

  const linkedIn: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3385d592cf5b4db40db8ea181b52f13ec9291e53/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/brands/linkedin.svg`;
  const gitHub: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3385d592cf5b4db40db8ea181b52f13ec9291e53/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/brands/github.svg`;
  const youTube: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3385d592cf5b4db40db8ea181b52f13ec9291e53/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/brands/youtube.svg`;
  return (
    <>
      <menu id="footer-navigation">
        <button className="footer-linkedin">
          <a href="https://www.linkedin.com/in/tertius-roach/" target="_blank">
            <img src={linkedIn} alt="www.linkedin.com/in/tertius-roach/" />
          </a>
        </button>
        <button className="footer-github">
          <a href="https://github.com/TertiusRoach" target="_blank">
            <img src={gitHub} alt="github.com/TertiusRoach" />
          </a>
        </button>
        <button className="footer-youtube">
          <a href="https://www.youtube.com/@TertiusRoach" target="_blank">
            <img src={youTube} alt="www.youtube.com/@TertiusRoach" />
          </a>
        </button>
      </menu>
    </>
  );
}
export default defaultFooter;
*/
