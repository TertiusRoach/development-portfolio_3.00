// Overlay.tsx
import React from 'react';
import defaultOverlay from './default-overlay/default-overlay';
import resumeOverlay from './resume-overlay/resume-overlay';

interface OverlayProps {
  pageName: string;
  blockName: string;
}
const Overlay: React.FC<OverlayProps> = ({ pageName, blockName }) => {
  const page = pageName;
  const block = blockName;
  // console.log('//--|🠊 Overlay.tsx Detected 🠈|--//');
  switch (blockName) {
    case 'default-overlay':
      return defaultOverlay(pageName, blockName);
    case 'resume-overlay':
      return resumeOverlay(pageName, blockName);
  }
};
export default Overlay;
