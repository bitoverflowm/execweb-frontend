import React from 'react';

import '../../index.css';

import { Col, Checkbox, Typography } from 'antd';

const { Text } = Typography;


const SponsorTargetHost = props => {

    return(
        <div className = 'response-field'>
            <p>Do you want us to source a host or do yuo have one in mind?</p>
            <Col span={12} className="check-box">
                <Checkbox value={1}>                               
                    <Text strong>I have my own host. </Text>
                </Checkbox>
            </Col>
            <Col span={12} className="check-box">
                <Checkbox value={0}>
                    <Text strong>Please provide me with a host </Text> 
                </Checkbox>
            </Col>
        </div>
    );   
}

export default SponsorTargetHost;