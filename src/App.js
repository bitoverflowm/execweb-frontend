import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Layout, Spin, Space } from 'antd';

import 'antd/dist/antd.css';
import './index.css';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Home from './Home';


//Lazy imports:
const SponsorHome = React.lazy(() => import('./sponsors/pages/sponsorHome'));
const SponsorRequest = React.lazy(() => import('./sponsors/pages/SponsorRequest'));
const AdminDashboard = React.lazy(() => import('./admin/pages/AdminDashboard'));
const SponsorshipRequestDetails = React.lazy(() => import('./admin/components/SponsorshipRequestDetails'));

const { Content, Header } = Layout;

const App = () => {
  return <Router>
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
          </Router>;
};

export default App;
