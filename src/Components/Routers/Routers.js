import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import Stödboende from '../Stödboende/Stödboende';
import Verksamheter from '../Verksamheter/Verksamheter';
import Sponsorer from '../Sponsorer/Sponsorer';
import Kontakt from '../Kontakt/Kontakt';

const routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/stödboende" component={Stödboende} />
      <Route exact path="/verksamheter" component={Verksamheter} />
      <Route exact path="/sponsorer" component={Sponsorer} />
      <Route exact path="/kontakt" component={Kontakt} />
    </div>
  </Router>
);

export default routers;
