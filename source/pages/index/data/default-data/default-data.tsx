// default-data.tsx
import React from 'react';

function defaultData(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 default-data.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
export default defaultData;
