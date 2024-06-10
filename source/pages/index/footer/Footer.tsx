// Footer.tsx
import React from 'react';
import defaultFooter from './default-footer/default-footer';

interface FooterProps {
  page: string;
  label: string;
}

const Footer: React.FC<FooterProps> = ({ page, label }) => {
  let block: string = 'footer';
  switch (label) {
    default:
      return defaultFooter(page, label, block);
  }
  console.log('//--|🠊 Footer.tsx Loaded 🠈|--//');
};
export default Footer;
