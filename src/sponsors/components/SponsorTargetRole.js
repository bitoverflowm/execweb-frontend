import React from 'react';

import { Checkbox, Row, Col } from 'antd';

import '../../index.css';

const SponsorTargetRole = props => {
    const DUMMY_JOB_TITLE = [
        {
            id: 'j1',
            title: 'Chief Information Officer'
        },
        {
            id: 'j2',
            title: 'Chief Executive Officer'
        },
        {
            id: 'j3',
            title: 'Chief Technology Officer'
        },
        {
            id: 'j4',
            title: 'Chief Operations Officer'
        },
        {
            id: 'j5',
            title: 'Chief Scientist'
        }
    ]; 

    return(
        <div className = 'response-field'>
            <p>What are the job titles you are looking to connect with?</p>
            <Row >
                {DUMMY_JOB_TITLE.map( title => (
                    <Col span={10} key={title.id}>
                        <div className="check-box">
                            <Checkbox value={title.id}>
                                {title.title}
                            </Checkbox>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );   
}

export default SponsorTargetRole;