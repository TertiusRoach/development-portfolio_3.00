// Leftbar.tsx
import React from 'react';
import resumeLeftbar from './resume-leftbar/resume-leftbar';
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
    case 'resume-leftbar':
      return resumeLeftbar(pageName, blockName);
  }
};
export default Leftbar;
