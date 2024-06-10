// Overlay.tsx
import React from 'react';
import defaultMain from './default-main/default-main';

interface MainProps {
  page: string;
  label: string;
}

const Main: React.FC<MainProps> = ({ page, label }) => {
  let block: string = 'main';
  switch (label) {
    default:
      return defaultMain(page, label, block);
  }
  console.log('//--|🠊 Main.tsx Loaded 🠈|--//');
};
export default Main;
