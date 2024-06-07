import React from 'react';

import Overlay from '../../b-overlay/Overlay';
import Header from '../../c-header/Header';
import Footer from '../../d-footer/Footer';
import Leftbar from '../../e-leftbar/Leftbar';
import Rightbar from '../../f-rightbar/Rightbar';
import Main from '../../g-main/Main';
import Data from '../../h-data/Data';

export function resumeBody(pageName: any, blockName: any) {
  const page: string = pageName;
  const block: string = blockName;
  console.log('//--|🠊 Optional: resume-body.tsx loaded 🠈|--//');
  return (
    <>
      <section id={`${pageName}-overlay`} className={`${block}-overlay`}>
        <Overlay
          pageName={`${pageName}-overlay`}
          blockName={`${block}-overlay`}
        />
      </section>

      <header
        style={{ zIndex: 4 }}
        id={`${pageName}-header`}
        className={`${block}-header`}
      >
        <Header
          pageName={`${pageName}-header`}
          blockName={`${block}-header`}
        />
      </header>

      <footer
        style={{ zIndex: 3 }}
        id={`${pageName}-footer`}
        className={`${block}-footer`}
      >
        <Footer
          pageName={`${pageName}-footer`}
          blockName={`${block}-footer`}
        />
      </footer>

      <aside
        style={{ zIndex: 2 }}
        id={`${pageName}-leftbar`}
        className={`${block}-leftbar`}
      >
        <Leftbar
          pageName={`${pageName}-leftbar`}
          blockName={`${block}-leftbar`}
        />
      </aside>

      <aside
        style={{ zIndex: 1 }}
        id={`${pageName}-rightbar`}
        className={`${block}-rightbar`}
      >
        <Rightbar
          pageName={`${pageName}-rightbar`}
          blockName={`${block}-rightbar`}
        />
      </aside>

      <main
        style={{ zIndex: 0 }}
        id={`${pageName}-main`}
        className={`${block}-main`}
      >
        <Main pageName={`${pageName}-main`} blockName={`${block}-main`} />
      </main>

      <script id={`${pageName}-data`} className={`${block}-data`}>
        <Data pageName={`${pageName}-data`} blockName={`${block}-data`} />
      </script>
    </>
  );
}
export default resumeBody;
