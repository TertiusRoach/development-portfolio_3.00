import React from 'react';
import { useState } from 'react';
const fileLocation = 'front-end/utilities/A-body/Body.tsx';

let EXAMPLES: Object | any = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
          function Welcome() {
            return <h1>Hello, World!</h1>;
          }`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
          <div>
            <h1>Welcome {userName}</h1>
            <p>Time to learn React!</p>
          </div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
          function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
          }`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
          function Counter() {
            const [isVisible, setIsVisible] = useState(false);

            function handleClick() {
              setIsVisible(true);
            }

            return (
              <div>
                <button onClick={handleClick}>Show Details</button>
                {isVisible && <p>Amazing details!</p>}
              </div>
            );
          }`,
  },
};

export function randomizeItem(array: Array<string>) {
  const items = array;
  const max: number = items.length;

  const randomize = Math.floor(Math.random() * (max + 1));
  // console.log(`//--| Item Randomized |--//`);
  return items[randomize];
}
export function TabButton({ children, onSelect, isSelected }: any) {
  return (
    <li>
      <button
        className={isSelected ? 'active' : undefined}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
export function Container(props: string | any) {
  // Props makes a function reusable
  return (
    <li>
      <img src={`${props.image}`} alt="..." />
      <h6>{props.title}</h6>
      <p>{props.description}</p>
    </li>
  );
}
export function TabContent() {
  const [currentTopic, setSelectedTopic]: Array<any> = useState();

  let tabContent = <p>Please select a topic.</p>;
  if (currentTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[currentTopic].title}</h3>
        <p>{EXAMPLES[currentTopic].description}</p>
        <pre>
          <code>{EXAMPLES[currentTopic].code}</code>
        </pre>
      </div>
    );
  }
  function handleSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
    let tabContent: string = 'Please click a button';
    const capitalizedString =
      selectedButton.charAt(0).toUpperCase() + selectedButton.slice(1);

    console.log(`//--| ${capitalizedString} Selected |--//`);
    tabContent = selectedButton;
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={currentTopic === 'components'}
          onSelect={() => handleSelect('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={currentTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={currentTopic === 'props'}
          onSelect={() => handleSelect('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={currentTopic === 'state'}
          onSelect={() => handleSelect('state')}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
