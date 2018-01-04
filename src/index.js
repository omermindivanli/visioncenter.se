import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Article from './Components/Article/Article';
import Video from './Components/Video/Video';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('Navbar'));
ReactDOM.render(<Carousel />, document.getElementById('Carousel'));
ReactDOM.render(<Article />, document.getElementById('article'));
ReactDOM.render(<Video />, document.getElementById('video'));
ReactDOM.render(<Content />, document.getElementById('Content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
