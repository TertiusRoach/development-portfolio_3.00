import React from 'react';
import './Button.grid.scss';

interface GridProps {
  url: string;
  grid: string; //--|🠈 This className is used to position the button within a grid layout. 🠈|--//
  icon: string;
  action: '_blank' | '_parent' | '_self' | '_top';
}

// This is the component I can't find
const Anchor: React.FC<GridProps> = ({ url, grid, icon, action }) => {
  return (
    <a className={grid} href={url} target={action}>
      <img src={icon} alt="" />
    </a>
  );
  console.log(`//--|🠊 Anchor.icon.tsx Loaded 🠈|--//`);
};

export default Anchor;
