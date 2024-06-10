// default-leftbar.tsx
import React from 'react';

function defaultLeftbar(page: string | any, label: string | any, block: string | any) {
  return (
    <aside style={{ zIndex: 2 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {/* Code here */}
    </aside>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultLeftbar;

/*
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
*/
