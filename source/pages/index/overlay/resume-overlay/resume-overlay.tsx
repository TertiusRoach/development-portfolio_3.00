// resume-overlay.tsx
import React from 'react';
function resumeOverlay(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 resume-overlay.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}

export default resumeOverlay;
