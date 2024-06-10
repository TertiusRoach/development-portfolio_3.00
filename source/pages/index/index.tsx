import './index.scss';
import React from 'react';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';
import Leftbar from './leftbar/Leftbar';
import Overlay from './overlay/Overlay';
import Rightbar from './rightbar/Rightbar';
import { createRoot } from 'react-dom/client';

let page: string = 'index'; //--|🠊 This represents the page being viewed 🠈|--//
let label: string = 'default'; //--|🠊 This represents the design that will be selected 🠈|--//
interface BodyProps {
  page: string;
  label: string | 'default';
}
const Body: React.FC<BodyProps> = ({ page, label }) => {
  console.log(`//--|🠊 ${page}.tsx Loaded 🠈|--//`);
  return (
    <>
      <Overlay page={page} label={label} />
      <Header page={page} label={label} />
      <Footer page={page} label={label} />
      <Leftbar page={page} label={label} />
      <Rightbar page={page} label={label} />
      <Main page={page} label={label} />
    </>
  );
};

const message: string = `//--|🠊 Add an element inside the <body> tag with an id='${page}-body' 🠈|--//`;
const container: HTMLDivElement | null = document.querySelector(`#${page}-body`); //--|🠊 Check for the required container element in the DOM 🠈|--//
if (container) {
  createRoot(container).render(<Body page={page} label={label} />);
} else {
  alert(message);
  throw new Error(message);
}
export default Body;
