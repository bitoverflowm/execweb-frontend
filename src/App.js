import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './shared/pages/Home';
import SponsorRequest from './sponsors/components/SponsorRequest';

import 'antd/dist/antd.css';

const App = () => {
  return <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/sponsorRequest/" exact>
                <SponsorRequest />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Router>;
};

export default App;
