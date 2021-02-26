import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Layout, Row, Col, Typography } from 'antd';
import { Content, Footer} from 'antd/lib/layout/layout';

import jumboBig from './shared/assets/jumbo-home/jumbo-main.jpg';
import howItWorks from './shared/assets/jumbo-home/how-it-works.jpg';
import homeWhy from './shared/assets/jumbo-home/home-why.jpg';
import logo from './shared/assets/logo2.png';

import './index.css';

const { Title } = Typography;

const Home = () => {
    return(
        <React.Fragment>
            <Layout>
                <Content className="home-jumbo-content">
                    <img src={jumboBig} />
                    <Row >
                        <Link to={`/sponsorHome/`} className="home-call-to-action">
                            <a className="button-execweb-brand"> Get in front of relevant executives </a>
                        </Link>
                    </Row>
                    <Row>
                        <Title level={3} className="home-about-heading"> How it Works </Title>
                    </Row>
                    <Row>
                        <img src={howItWorks} className="home-about-content"/>
                    </Row>
                    <Row className="home-why-content-wrapper">
                        <img src={homeWhy} className="home-why-content"/>
                    </Row>                    
                </Content>
                <Footer className="home-footer" style={{background : '#fff'}}>
                    <Row>
                        <Col xs={24} xl={8}>
                            <div className="home-footer-wrapper">
                                <img src={logo} alt="Logo" className="home-footer-logo"/>
                            </div>                            
                        </Col>
                        <Col xs={24} xl={4} className="home-footer-col-wrapper">
                            <Row className="home-footer-headers">Resources</Row>
                            <Row className="home-footer-links"><a href="mailto:support@execweb.com">Support</a></Row>
                            <Row className="home-footer-links"><a href="https://www.introeq.com/">Community</a></Row>
                            <Row>Privacy</Row>
                            <Row>Terms</Row>
                            <Row>Data processing</Row>
                        </Col>
                        <Col xs={24} xl={4} className="home-footer-col-wrapper">
                            <Row className="home-footer-headers">Connect With Us</Row>
                            <Row className="home-footer-links"><a href="https://www.facebook.com/introeq"><FontAwesomeIcon className="home-footer-icon" icon={faFacebook} size="lg"/> Facebook</a></Row>
                            <Row className="home-footer-links"><a href="https://twitter.com/IntroEQ"><FontAwesomeIcon className="home-footer-icon" icon={faTwitter} size="lg"/>Twitter</a></Row>
                        </Col>
                        <Col xs={24} xl={8} className="home-footer-col-wrapper">
                            <Row className="home-footer-headers">Need Help?</Row>
                            <Row>Let us know if you have any questions or comments and our customer success team will get back to you as soon as possible.</Row>
                            <Row>support@introeq.com</Row>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </React.Fragment>
        );
};

export default Home;