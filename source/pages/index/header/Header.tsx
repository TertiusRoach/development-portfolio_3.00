// Header.tsx
import React from 'react';
import defaultHeader from './default-header/default-header';

interface HeaderProps {
  page: string;
  label: string;
}

const Header: React.FC<HeaderProps> = ({ page, label }) => {
  let block: string = 'header';
  console.log('//--|🠊 Header.tsx Loaded 🠈|--//');

  switch (label) {
    default:
      return defaultHeader(page, label, block);
  }
};
export default Header;
