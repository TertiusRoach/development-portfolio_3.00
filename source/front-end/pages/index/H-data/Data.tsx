// Overlay.tsx
import React from 'react';
import resumeData from './resume-data/resume-data';
import defaultData from './default-data/default-data';

interface DataProps {
  pageName: string;
  blockName: string;
}
const Data: React.FC<DataProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  // console.log('//--|🠊 Data.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-data':
      return defaultData(pageName, blockName);
    case 'resume-data':
      return resumeData(pageName, blockName);
  }
};
export default Data;
