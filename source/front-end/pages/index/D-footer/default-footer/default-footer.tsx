// default-footer.tsx
import React from 'react';

function defaultFooter(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 default-footer.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
export default defaultFooter;
