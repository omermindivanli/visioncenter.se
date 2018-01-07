import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Components/Routers/Routers';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('Routers'));

registerServiceWorker();
