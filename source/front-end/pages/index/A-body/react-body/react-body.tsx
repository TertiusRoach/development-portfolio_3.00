import React from 'react';
import { useState } from 'react';

import {
  randomizeItem,
  Container,
  TabContent,
} from '../../../../assets/A-Body/Body';

const projectURI =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main';

function reactBody(pageName: string | any, blockName: string | any) {
  // useState is a tool in React that helps components remember and manage information on their own.
  // const [currentTopic, setSelectedTopic]: Array<any> = useState('');

  const page: string = pageName;
  const block: string = blockName;

  // console.log('//--|🠊 react-body.tsx loaded 🠈|--//');
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h3>Core Concepts</h3>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <Container key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <TabContent />
      </main>
    </>
  );
}

const CORE_CONCEPTS: Array<any> = [
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/components.png`,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/config.png`,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/jsx-ui.png`,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: `${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/state-mgmt.png`,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

function Header() {
  return (
    <header>
      <img
        src={`${projectURI}/source/front-end/pages/index/%7Econtent/png-files/react-concepts/react-core-concepts.png`}
        alt="Meh"
      />
      <h1>React Essentials</h1>
      <p>
        {randomizeItem(['Fundemental', 'Crucial', 'Core'])} React concepts
        you will need for almost any app you are going to build.
      </p>
    </header>
  );
}

export default reactBody;
