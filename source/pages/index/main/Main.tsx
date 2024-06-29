// Main.tsx
import React from 'react';
import DefaultMain from './default-main/default-main';

interface MainProps {
  page: string;
  label: 'resume' | string;
}

const Main: React.FC<MainProps> = ({ page, label }) => {
  let block: string = 'main';
  switch (label) {
    default:
      return DefaultMain(page, label, block);
  }
};

export default Main;
