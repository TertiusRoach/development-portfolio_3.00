// Overlay.tsx
import React from 'react';
import defaultOverlay from './default-overlay/default-overlay';

interface OverlayProps {
  page: string;
  label: string;
}

const Overlay: React.FC<OverlayProps> = ({ page, label }) => {
  let block: string = 'overlay';
  console.log('//--|🠊 Overlay.tsx Loaded 🠈|--//');

  switch (label) {
    default:
      return defaultOverlay(page, label, block);
  }
};
export default Overlay;
