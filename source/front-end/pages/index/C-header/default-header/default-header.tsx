// default-header.tsx
import React from 'react';

function defaultHeader(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 default-header.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
export default defaultHeader;
