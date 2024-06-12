// default-footer.tsx
import $ from 'jquery';
import React from 'react';
import Anchor from '../../../../mods/anchor/icon/anchor.icon';

interface URL {
  linkedin: Array<string>;
  github: Array<string>;
  youtube: Array<string>;
}
function defaultFooter(page: string | any, label: string | any, block: string | any) {
  const projectURI: string = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00';
  const icons: URL = {
    linkedin: [
      `${projectURI}/8581795ce870e5465e4673403a22c14f5b9c156f/public/content/svg-files/icon-collection/brands/linkedin.svg`,
      'https://www.linkedin.com/in/tertius-roach/',
    ],
    github: [
      `${projectURI}/8581795ce870e5465e4673403a22c14f5b9c156f/public/content/svg-files/icon-collection/brands/github.svg`,
      'https://github.com/TertiusRoach',
    ],
    youtube: [
      `${projectURI}/8581795ce870e5465e4673403a22c14f5b9c156f/public/content/svg-files/icon-collection/brands/youtube.svg`,
      'https://www.youtube.com/@TertiusRoach',
    ],
  };

  return (
    <footer style={{ zIndex: 3 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      <Anchor grid="footer-github" icon={icons.github[0]} url={icons.github[1]} text="GitHub" action="_blank" />
      <Anchor grid="footer-youtube" icon={icons.youtube[0]} url={icons.youtube[1]} text="YouTube" action="_blank" />
      <Anchor grid="footer-linkedin" icon={icons.linkedin[0]} url={icons.linkedin[1]} text="LinkedIn" action="_blank" />
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
