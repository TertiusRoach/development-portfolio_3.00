import './index.scss';
import React from 'react';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';
import Leftbar from './leftbar/Leftbar';
import Overlay from './overlay/Overlay';
import Rightbar from './rightbar/Rightbar';
import { createRoot } from 'react-dom/client';

const page: string = 'index'; //--|🠈 This represents the page being viewed 🠈|--//
const label: string = 'default'; //--|🠈 This represents the design that will be selected 🠈|--//
const container: HTMLDivElement | null = document.querySelector(`#${page}-body`); //--|🠈 Check for the required container element in the DOM 🠈|--//

//--|🠋 Interface = Component Recipe 🠋|--//
interface BodyProps {
  page: string;
  label: string | 'default';
}
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
