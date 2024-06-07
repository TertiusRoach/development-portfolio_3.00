// Footer.tsx
import React from 'react';
import resumeFooter from './resume-footer/resume-footer';
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
    case 'resume-footer':
      return resumeFooter(pageName, blockName);
  }
};
export default Footer;
