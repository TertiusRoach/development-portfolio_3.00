// Body.tsx
import React from 'react';

import Overlay from '../b-overlay/Overlay';
import Header from '../c-header/Header';
import Footer from '../d-footer/Footer';
import Leftbar from '../e-leftbar/Leftbar';
import Rightbar from '../f-rightbar/Rightbar';
import Main from '../g-main/Main';
import Data from '../h-data/Data';

import reactBody from './react-body/react-body';
import knotsBody from './knots-body/knots-body';
interface BodyProps {
  pageName: string;
  blockName: string;
}

const Body: React.FC<BodyProps> = ({ pageName, blockName }) => {
  const block = blockName.split('-')[0];
  // console.log('//--| body.tsx detected |--//');
  switch (blockName) {
    case 'resume-body':

    case 'default-body':
      return (
        <>
          <section
            id={`${pageName}-overlay`}
            className={`${block}-overlay`}
          >
            <Overlay
              pageName={`${pageName}-overlay`}
              blockName={`${block}-overlay`}
            />
          </section>

          <header id={`${pageName}-header`} className={`${block}-header`}>
            <Header
              pageName={`${pageName}-header`}
              blockName={`${block}-header`}
            />
          </header>

          <footer id={`${pageName}-footer`} className={`${block}-footer`}>
            <Footer
              pageName={`${pageName}-footer`}
              blockName={`${block}-footer`}
            />
          </footer>

          <aside id={`${pageName}-leftbar`} className={`${block}-leftbar`}>
            <Leftbar
              pageName={`${pageName}-leftbar`}
              blockName={`${block}-leftbar`}
            />
          </aside>

          <aside
            id={`${pageName}-rightbar`}
            className={`${block}-rightbar`}
          >
            <Rightbar
              pageName={`${pageName}-rightbar`}
              blockName={`${block}-rightbar`}
            />
          </aside>

          <main id={`${pageName}-main`} className={`${block}-main`}>
            <Main
              pageName={`${pageName}-main`}
              blockName={`${block}-main`}
            />
          </main>

          <script id={`${pageName}-data`} className={`${block}-data`}>
            <Data
              pageName={`${pageName}-data`}
              blockName={`${block}-data`}
            />
          </script>
        </>
      );
    case 'knots-body':
      return knotsBody(pageName, blockName);
    case 'react-body':
      return reactBody(pageName, blockName);
    default:
      console.log('//--|🠊 Add Pages to body.tsx 🠈|--//');
      break;
  }
};

export default Body;
