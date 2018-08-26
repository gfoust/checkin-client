import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement,
  );
});
