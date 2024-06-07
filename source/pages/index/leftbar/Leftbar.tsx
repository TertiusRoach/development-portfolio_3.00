// Leftbar.tsx
import React from 'react';
import defaultLeftbar from './default-leftbar/default-leftbar';

interface LeftbarProps {
  pageName: string;
  blockName: string;
}
const Leftbar: React.FC<LeftbarProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  // console.log('//--|🠊 Leftbar.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-leftbar':
      return defaultLeftbar(pageName, blockName);
    case 'default-leftbar':
    // return defaultLeftbar(pageName, blockName);
  }
};
export default Leftbar;
