import './index.scss';
import React from 'react';
import Body from './body/Body';

import { createRoot } from 'react-dom/client';

const element = document.getElementById('index-body');
const blockName: 'default' | 'react' | 'knots' | 'resume' = 'resume';
if (element) {
  let load = <Body pageName={blockName} blockName={`${blockName}-body`} />;
  createRoot(element).render(load);
} else {
  throw new Error('Root element not found.');
}
