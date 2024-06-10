// Rightbar.tsx
import React from 'react';
import defaultRightbar from './default-rightbar/default-rightbar';

interface RightbarProps {
  page: string;
  label: string;
}

const Rightbar: React.FC<RightbarProps> = ({ page, label }) => {
  let block: string = 'rightbar';
  console.log('//--|🠊 Rightbar.tsx Loaded 🠈|--//');

  switch (label) {
    default:
      return defaultRightbar(page, label, block);
  }
};
export default Rightbar;
