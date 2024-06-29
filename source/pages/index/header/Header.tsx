// Header.tsx
import React from 'react';

import defaultHeader from '../../../mods/header/resume/Header.resume';

interface HeaderProps {
  page: string;
  label: string;
}

const Header: React.FC<HeaderProps> = ({ page, label }) => {
  let block: string = 'header';
  switch (label) {
    default:
      return defaultHeader(page, label, block);
      break;
  }
  console.log('//--|🠊 Header.tsx Loaded 🠈|--//');
};
export default Header;
