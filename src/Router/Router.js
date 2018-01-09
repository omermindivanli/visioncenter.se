import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Nav from '../Components/Nav/Nav';
import Home from '../Components/Home/Home';
import Grundaren from '../Components/Grundaren/Grundaren';
import Stödboende from '../Components/Stödboende/Stödboende';
import Verksamheter from '../Components/Verksamheter/Verksamheter';
import Sponsorer from '../Components/Sponsorer/Sponsorer';
import Kontakt from '../Components/Kontakt/Kontakt';
import Footer from '../Components/Footer/Footer';

const routers = () => (
  <Router>
    <div>
      <Nav />

      <Route exact path="/" component={Home} />
      <Route exact path="/grundaren" component={Grundaren} />
      <Route exact path="/stödboende" component={Stödboende} />
      <Route exact path="/verksamheter" component={Verksamheter} />
      <Route exact path="/sponsorer" component={Sponsorer} />
      <Route exact path="/kontakt" component={Kontakt} />

      <Footer />
    </div>
  </Router>
);

export default routers;
