// Footer.tsx
import React from 'react';
import defaultFooter from './default-footer/default-footer';

interface FooterProps {
  pageName: string;
  blockName: string;
}
const Footer: React.FC<FooterProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  // console.log('//--|🠊 Footer.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-footer':
      return defaultFooter(pageName, blockName);
    case 'default-footer':
    // return defaultFooter(pageName, blockName);
  }
};
export default Footer;
