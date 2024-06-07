// Header.tsx
import React from 'react';

import defaultHeader from './default-header/default-header';

interface HeaderProps {
  pageName: string;
  blockName: string;
}
const Header: React.FC<HeaderProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  // console.log('//--|🠊 Header.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-header':
      return defaultHeader(pageName, blockName);
    case 'default-header':
    // return defaultHeader(pageName, blockName);
  }
};
export default Header;
