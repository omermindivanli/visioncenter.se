import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router/Router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('routers'));

registerServiceWorker();
