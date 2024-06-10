// default-rightbar.tsx
import React from 'react';

function defaultRightbar(page: string, label: string, block: string) {
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
  return (
    <aside style={{ zIndex: 1 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {/* Code here */}
    </aside>
  );
}
export default defaultRightbar;

/*
function defaultRightbar(pageName: string | any, blockName: string | any) {
  console.log('//--|🠊 default-rightbar.tsx loaded 🠈|--//');
  return (
    <>
      <h1>{pageName}</h1>
      <h4>{blockName}</h4>
    </>
  );
}
export default defaultRightbar;
*/
