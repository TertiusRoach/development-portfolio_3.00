import React from 'react';

export function defaultBody(pageName: any, blockName: any) {
  const page: string = pageName;
  const block: string = blockName;
  console.log('//--|🠊 Optional: default-body.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
export default defaultBody;
