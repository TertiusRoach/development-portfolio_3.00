// default-leftbar.tsx
import React from 'react';

function defaultLeftbar(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 default-leftbar.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
export default defaultLeftbar;
