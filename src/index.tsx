import React  from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Apps from './App';

const rootId = 'root';
const rootElement = document.getElementById(rootId);

if (!rootElement) {
  throw new Error(`Unable to find element with id '${rootId}'`);
}

const root=createRoot(rootElement)

root.render(<Apps />)
