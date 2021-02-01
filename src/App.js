import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import SponsorHome from './sponsors/pages/sponsorHome';
import SponsorRequest from './sponsors/components/SponsorRequest';
import AdminDashboard from './admin/pages/AdminDashboard';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import SponsorshipRequestDetails from './admin/components/SponsorshipRequestDetails';

import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './index.css';

const { Content, Header } = Layout;



const App = () => {
  return <Router>
            <Layout >
              <Header className = "site-layout-header" style={{backgroundColor: '#fff'}}>
                <MainNavigation />
              </Header>
              
              <Content className = "site-layout-content">
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
                  <Route path="/:sid/sponsorshipRequestDetails/" exact>
                    <SponsorshipRequestDetails />
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
