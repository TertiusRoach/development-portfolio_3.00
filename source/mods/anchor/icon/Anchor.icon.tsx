import React from 'react';
import './Anchor.icon.scss';

interface GridProps {
  url: string;
  text: string;
  grid: string; //--|🠈 This is a className used to position the anchor within a grid layout. 🠈|--//
  icon: string;
  action: '_blank' | '_parent' | '_self' | '_top';
}

const Anchor: React.FC<GridProps> = ({ url, text, grid, icon, action }) => {
  return (
    <>
      <a className={`${grid} icon`} href={url} target={action}>
        <img src={icon} alt={text.toLowerCase()} />
      </a>
    </>
  );
};
export default Anchor;
