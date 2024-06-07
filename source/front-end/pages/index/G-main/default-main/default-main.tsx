// default-main.tsx
import React from 'react';

function defaultMain(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 default-main.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
export default defaultMain;
