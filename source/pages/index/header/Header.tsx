// Header.tsx
import React from 'react';
import defaultHeader from './default-header/default-header';

interface HeaderProps {
  page: string;
  label: string;
}

const Header: React.FC<HeaderProps> = ({ page, label }) => {
  let block: string = 'header';
  switch (label) {
    default:
      return defaultHeader(page, label, block);
  }
  console.log('//--|🠊 Header.tsx Loaded 🠈|--//');
};
export default Header;
