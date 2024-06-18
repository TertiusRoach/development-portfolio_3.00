import './index.scss';
import React from 'react';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';
import Leftbar from './leftbar/Leftbar';
import Overlay from './overlay/Overlay';
import Rightbar from './rightbar/Rightbar';
import { createRoot } from 'react-dom/client';

//--|🠋 Interface = Component Recipe 🠋|--//
interface BodyProps {
  page: string;
  label: string | 'default';
}
interface Designs {
  logo: string;
  home: string;
  email: string;
  skills: string;
  projects: string;
  telephone: string;
  cellphone: string;
}
interface Websites {
  linkedin: Array<string>;
  github: Array<string>;
  youtube: Array<string>;
}

const page: string = 'index'; //--|🠈 This represents the page being viewed 🠈|--//
const label: string = 'default'; //--|🠈 This represents the design that will be selected 🠈|--//
const container = document.querySelector(`#${page}-body`) as HTMLDivElement; //--|🠈 Check for the required container element in the DOM 🠈|--//
const projectURI: string = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00';
export const buttonIcon: Designs = {
  logo: `${projectURI}/17d708556905ed2a95bf3329e9dd6411792b16b9/public/content/svg-files/signature-adjacent/primary-light.svg`,
  home: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/home.svg`,
  email: `${projectURI}/b6fafac72b6b8c324b14d8a0560ad55e2e803096/public/content/svg-files/icon-collection/duotone/envelope-open-text.svg`,
  skills: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/lightbulb-on.svg`,
  projects: `${projectURI}/64766ee2eec5d723042a565c96644dd5d3b5732d/public/content/svg-files/icon-collection/duotone/code.svg`,
  telephone: `${projectURI}/33ecc4eebaa902dbc040024fbc24833dd4e1fdd1/public/content/svg-files/icon-collection/duotone/phone-volume.svg`,
  cellphone: `${projectURI}/b6fafac72b6b8c324b14d8a0560ad55e2e803096/public/content/svg-files/icon-collection/duotone/mobile-android-alt.svg`,
};
export const anchorIcon: Websites = {
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

const Body: React.FC<BodyProps> = ({ page, label }) => {
  //--|🠉 React.FC tells your code that this is a React function component. 🠉|--//
  //--|🠋 <BodyProps> defines the information this component needs to work. 🠋|--//
  return (
    <>
      <Header page={page} label={label} />
      <Main page={page} label={label} />
      <Footer page={page} label={label} />

      <Overlay page={page} label={label} />
      <Leftbar page={page} label={label} />
      <Rightbar page={page} label={label} />
    </>
  );
  console.log(`//--|🠊 ${page}.tsx Loaded 🠈|--//`);
  //--|🠊 This component needs info about the page and label to work. 🠈|--//
};
if (container) {
  createRoot(container).render(<Body page={page} label={label} />);
  //--|🠊 If the container element exists then render the <Body> component. 🠈|--//
} else {
  let message: string = `//--|🠊 Add a <div id='${page}-body'> inside the <body> HTML tag 🠈|--//`;
  alert(message);
  throw new Error(message);
}
export default Body;
