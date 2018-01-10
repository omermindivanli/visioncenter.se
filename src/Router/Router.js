import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Nav from '../Components/Nav/Nav';
import Home from '../Components/Home/Home';
import Grundaren from '../Components/Grundaren/Grundaren';
import Historia from '../Components/Historia/Historia';
import OmVisionCenter from '../Components/OmVisionCenter/OmVisionCenter';
import Stadgar from '../Components/Stadgar/Stadgar';
import BliMedlem from '../Components/BliMedlem/BliMedlem';
import IdeellArbete from '../Components/IdeellArbete/IdeellArbete';
import Styrelse from '../Components/Styrelse/Styrelse';
import Aktiviteter from '../Components/Aktiviteter/Aktiviteter';
import MiljöArbete from '../Components/MiljöArbete/MiljöArbete';
import Film from '../Components/Film/Film';
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
      <Route exact path="/historia" component={Historia} />
      <Route exact path="/omvisioncenter" component={OmVisionCenter} />
      <Route exact path="/stadgar" component={Stadgar} />
      <Route exact path="/blimedlem" component={BliMedlem} />
      <Route exact path="/ideellarbete" component={IdeellArbete} />
      <Route exact path="/styrelse" component={Styrelse} />
      <Route exact path="/aktiviteter" component={Aktiviteter} />
      <Route exact path="/miljöArbete" component={MiljöArbete} />
      <Route exact path="/film" component={Film} />
      <Route exact path="/stödboende" component={Stödboende} />
      <Route exact path="/verksamheter" component={Verksamheter} />
      <Route exact path="/sponsorer" component={Sponsorer} />
      <Route exact path="/kontakt" component={Kontakt} />

      <Footer />
    </div>
  </Router>
);

export default routers;
