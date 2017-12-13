import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Header from './Header';
import Article from './Article';
import Card from './Card';
import Footer from './Footer';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Article />, document.getElementById('article'));
ReactDOM.render(<Card />, document.getElementById('card'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
