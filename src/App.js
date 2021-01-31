import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import SponsorHome from './sponsors/pages/sponsorHome';

import 'antd/dist/antd.css';

const App = () => {
  return <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/sponsorHome/" exact>
                <SponsorHome />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Router>;
};

export default App;
