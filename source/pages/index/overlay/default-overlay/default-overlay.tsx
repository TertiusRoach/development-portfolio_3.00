// default-overlay.tsx
import React from 'react';
function defaultOverlay(page: string | any, label: string | any, block: string | any) {
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
  return (
    <section style={{ zIndex: 5 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {/* Code here */}
    </section>
  );
}

export default defaultOverlay;
