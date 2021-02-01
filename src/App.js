import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import SponsorHome from './sponsors/pages/sponsorHome';
import SponsorRequest from './sponsors/components/SponsorRequest';
import AdminDashboard from './admin/pages/AdminDashboard';
import MainNavigation from './shared/components/Navigation/MainNavigation';

import { Layout } from 'antd';

import 'antd/dist/antd.css';

const { Content, Header } = Layout;



const App = () => {
  return <Router>
            <Layout className = "layout">
              <Header>
                <MainNavigation />
              </Header>
              
              <Content>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/sponsorHome/" exact>
                    <SponsorHome />
                  </Route>
                  <Route path="/sponsorRequest/" exact>
                    <SponsorRequest />
                  </Route>
                  <Route path="/adminDashboard/" exact>
                    <AdminDashboard />
                  </Route>
                  <Redirect to="/" />
                </Switch>
              </Content>
            </Layout>
          </Router>;
};

export default App;
