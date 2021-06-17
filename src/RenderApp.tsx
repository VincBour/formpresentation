import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';

// function prepare() {
//     if (process.env.NODE_ENV === 'development') {
//       const { worker } = require('./mocks/browser');
//       return worker.start();
//     }
//     return Promise.resolve();
//   }
//   prepare().then(() => {
    
//   });

  render(
    <App />,
        document.getElementById('root')
    );