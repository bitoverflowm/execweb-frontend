import React from 'react';

import SponsorRequest from './SponsorRequest';
import logo from '../../shared/assets/logo2.png';
import jumbo_image1 from '../../shared/assets/jumbo-image1.png';

import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

const SponsorHome = () => {
    return <div>
                <Content style={{ padding: '0 50px'}}>
                    <div className="site-layout-content">
                        <Row>
                            <Col span={12}>
                                <div className="logo">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <SponsorRequest />
                            </Col>
                            <Col span={10}>
                                <div className="jumbo-image">
                                    <img src={jumbo_image1} alt="jumbo_image1" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </div>
};

export default SponsorHome; 