import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar_Router from './Components/Navbar/Navbar_Router';
import Carousel from './Components/Carousel/Carousel';
import Article from './Components/Article/Article';
import Video from './Components/Video/Video';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar_Router />, document.getElementById('Navbar_Router'));
ReactDOM.render(<Carousel />, document.getElementById('Carousel'));
ReactDOM.render(<Article />, document.getElementById('Article'));
ReactDOM.render(<Video />, document.getElementById('Video'));
ReactDOM.render(<Content />, document.getElementById('Content'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));


registerServiceWorker();
