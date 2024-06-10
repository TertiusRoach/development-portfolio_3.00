// Leftbar.tsx
import React from 'react';
import defaultLeftbar from './default-leftbar/default-leftbar';

interface LeftbarProps {
  page: string;
  label: string;
}

const Leftbar: React.FC<LeftbarProps> = ({ page, label }) => {
  let block: string = 'leftbar';
  switch (label) {
    default:
      return defaultLeftbar(page, label, block);
  }
  console.log('//--|🠊 Leftbar.tsx Loaded 🠈|--//');
};
export default Leftbar;
