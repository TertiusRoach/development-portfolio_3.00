// Overlay.tsx
import React from 'react';
import defaultMain from './default-main/default-main';

interface MainProps {
  pageName: string;
  blockName: string;
}
const Main: React.FC<MainProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  // console.log('//--|🠊 Main.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-main':
      return defaultMain(pageName, blockName);
    case 'default-main':
    // return defaultMain(pageName, blockName);
  }
};
export default Main;
