// Overlay.tsx
import React from 'react';
import defaultMain from './default-main/default-main';

interface MainProps {
  page: string;
  label: string;
}

const Main: React.FC<MainProps> = ({ page, label }) => {
  let block: string = 'header';
  console.log('//--|🠊 Main.tsx Loaded 🠈|--//');

  switch (label) {
    default:
      return defaultMain(page, label, block);
  }
};
export default Main;
