// default-header.tsx
import $ from 'jquery';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function DefaultHeader(page: string | any, label: string | any, block: string | any) {
  const IndexMain = ''; //Get the built mods with this string
  const wrapperFunction = (element: React.MouseEvent<HTMLElement>): void => {
    console.log(element);
    console.log(`${element} Hovered`);
  };

  return (
    <header style={{ zIndex: 4 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: '(orientation: landscape) and (min-aspect-ratio: 16/9)' }) && (
          <div className="default-header"></div>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        useMediaQuery({ query: '(orientation: portrait) and (max-aspect-ratio: 1/1)' }) && (
          <div className="default-header"></div>
        )
      }
      {
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
          <div className="default-header"></div>
        )
      }
    </header>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default DefaultHeader;
