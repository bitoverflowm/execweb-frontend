import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Layout, Row, Col, Typography } from 'antd';
import { Content} from 'antd/lib/layout/layout';

import jumboBig from './shared/assets/jumbo-home/jumbo-main.jpg';
import howItWorks from './shared/assets/jumbo-home/how-it-works.jpg';
import homeWhy from './shared/assets/jumbo-home/home-why.jpg';

const { Title } = Typography;

const Home = () => {
    return(
        <React.Fragment>
            <Layout>
                <Content className="home-jumbo-content">
                    <img src={jumboBig} />
                    <Row >
                        <Link to={`/sponsorHome/`} className="home-call-to-action">
                            <Button type="primary">Apply to Sponsor</Button>
                        </Link>
                    </Row>
                    <Row>
                        <Title level={3} className="home-about-heading">How it Works</Title>
                    </Row>
                    <Row>
                        <img src={howItWorks} className="home-about-content"/>
                    </Row>
                    <Row className="home-why-content-wrapper">
                        <img src={homeWhy} className="home-why-content"/>
                    </Row>                    
                </Content>
                
            </Layout>
        </React.Fragment>
        );
};

export default Home;