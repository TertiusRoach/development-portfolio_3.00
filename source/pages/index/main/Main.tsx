// Main.tsx
import React from 'react';
import defaultMain from './default-main/default-main';

interface MainProps {
  page: string;
  label: 'resume' | string;
}

const Main: React.FC<MainProps> = ({ page, label }) => {
  let block: string = 'main';
  switch (label) {
    default:
      return defaultMain(page, label, block);
  }
};

export default Main;
