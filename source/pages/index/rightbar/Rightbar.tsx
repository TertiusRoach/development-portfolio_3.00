// Rightbar.tsx
import React from 'react';
import defaultRightbar from './default-rightbar/default-rightbar';

interface RightbarProps {
  pageName: string;
  blockName: string;
}
const Rightbar: React.FC<RightbarProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  // console.log('//--|🠊 Rightbar.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-rightbar':
      return defaultRightbar(pageName, blockName);
    case 'default-rightbar':
    // return defaultRightbar(pageName, blockName);
  }
};
export default Rightbar;
