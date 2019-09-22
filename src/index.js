import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

if (process.env.NODE_ENV === 'production') {
  const { init } = require('@sentry/browser');
  init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
  });
}

render(<App />, document.getElementById('root'));
