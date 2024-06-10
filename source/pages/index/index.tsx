import './index.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';

import Overlay from './overlay/Overlay';
import Header from './header/Header';
import Footer from './footer/Footer';
import Leftbar from './leftbar/Leftbar';
import Rightbar from './rightbar/Rightbar';
import Main from './main/Main';

// Improve the notes please
const page: string = 'index'; // This represents the page being viewed
const label: string = 'default'; // This represents the design that will be selected
interface IndexProps {
  page: string;
  label: string | 'default';
}

const Index: React.FC<IndexProps> = ({ page, label }) => {
  let block: Array<Object> = ['overlay', 'header', 'footer', 'leftbar', 'rightbar', 'main']; // This represents all the blocks loaded within the HTML

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

const Body: HTMLDivElement | null = document.querySelector(`#${page}-body`);
if (Body !== null) {
  let load = <Index page={page} label={label} />;
  createRoot(Body).render(load);
} else {
  let message: string = `//--|🠊 Add an element inside the <body> tag with an id='${page}-body' 🠈|--//`;
  alert(message);
  throw new Error(message);
}
export default Index;
