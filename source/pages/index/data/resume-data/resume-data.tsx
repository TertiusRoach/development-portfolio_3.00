// resume-data.tsx
import React from 'react';

function resumeData(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 resume-data.tsx loaded 🠈|--//');

  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}

export default resumeData;
