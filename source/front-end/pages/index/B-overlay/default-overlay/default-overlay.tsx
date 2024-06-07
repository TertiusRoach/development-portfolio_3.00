// default-overlay.tsx
import React from 'react';
function defaultOverlay(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 default-overlay.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}

export default defaultOverlay;
