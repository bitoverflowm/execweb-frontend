import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Layout, Spin, Space } from 'antd';
import { Auth0Provider } from "@auth0/auth0-react";

import 'antd/dist/antd.css';
import './index.css';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Home from './Home';


//Lazy imports:
const SponsorHome = React.lazy(() => import('./sponsors/pages/sponsorHome'));
const SponsorRequest = React.lazy(() => import('./sponsors/pages/SponsorRequest'));
const AdminDashboard = React.lazy(() => import('./admin/pages/AdminDashboard'));
const SponsorshipRequestDetails = React.lazy(() => import('./admin/components/SponsorshipRequestDetails'));
const auth_domain = process.env.REACT_APP_AUTH_DOMAIN;
const auth_client_id = process.env.REACT_APP_AUTH_CLIENT;
const auth_redirect = process.env.REACT_APP_AUTH_REDIRECT;

const { Content, Header } = Layout;

const App = () => {
  return <Auth0Provider
            domain = {auth_domain}
            clientId = {auth_client_id}
            redirectUri = {auth_redirect}
            >
          <Router>
            <Layout >
              <Header className = "site-layout-header" style={{backgroundColor: '#fff'}}>
                <MainNavigation />
              </Header>
              
              <Content className = "site-layout-content">
                <Suspense fallback={
                  <Space size="middle">
                    <Spin size="large" />
                  </Space>
                }>
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
                </Suspense>
              </Content>
            </Layout>
          </Router>
        </Auth0Provider>;
};

export default App;
