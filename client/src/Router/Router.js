import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
import MiljArbete from '../Components/MiljArbete/MiljArbete';
import Nightshift from '../Components/Nightshift/Nightshift';
import Film from '../Components/Film/Film';
import StudentHouse from '../Components/StudentHouse/StudentHouse';
import Sponsorer from '../Components/Sponsorer/Sponsorer';
import Kontakt from '../Components/Kontakt/Kontakt';
import Turkiet from '../Components/Turkiet/Turkiet';
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
      <Route exact path="/miljöArbete" component={MiljArbete} />
      <Route exact path="/nightshift" component={Nightshift} />
      <Route exact path="/film" component={Film} />
      <Route exact path="/studentHouse" component={StudentHouse} />
      <Route exact path="/sponsorer" component={Sponsorer} />
      <Route exact path="/turkiet" component={Turkiet} />
      <Route exact path="/kontakt" component={Kontakt} />
      <Footer />
    </div>
  </Router>
);

export default routers;
