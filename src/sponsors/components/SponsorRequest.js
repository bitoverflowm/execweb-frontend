import React from 'react';

import { Form, Steps, Button, message } from 'antd';

import SponsorAuth from './SponsorAuth';
import SponsorTargetRole from './SponsorTargetRole';
import SponsorTargetIndustry from './SponsorTargetIndustry';
import SponsorTargetHeadCount from './SponsorTargetHeadCount';
import SponsorTargetRegion from './SponsorTargetRegion';
import SponsorTargetUsers from './SponsorTargetUsers';
import SponsorTargetDate from './SponsorTargetDate';
import SponsorTargetTopic from './SponsorTargetTopic';
import SponsorTargetHost from './SponsorTargetHost';

import '../../index.css';

const { Step } = Steps;

const SponsorRequest = () => {
    const [current, setCurrent] = React.useState(0);
    const [linkeIn, setLinkedIn] = React.useState(0);


    const handleClick = ( value ) => {
        //this.setState({ linkedInVerified : true});
        setLinkedIn({'linkedInVerified': value });
        console.log(linkeIn);
    };

    const steps = [
        { title: 'Step 1', content: <SponsorAuth handleClick={handleClick}/> },
        { title: 'Step 2', content: <SponsorTargetRole /> },
        { title: 'Step 3', content: <SponsorTargetIndustry /> },
        { title: 'Step 4', content: <SponsorTargetHeadCount /> },
        { title: 'Step 5', content: <SponsorTargetRegion />},
        { title: 'Step 6', content: <SponsorTargetUsers />},
        { title: 'Step 7', content: <SponsorTargetDate />},
        { title: 'Step 8', content: <SponsorTargetTopic/>},
        { title: 'Step 9', content: <SponsorTargetHost />},
    ];

    const next = () => {
        setCurrent(current + 1);
        console.log(linkeIn);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
      };

    return (
        <Form className = "site-layout-content" onFinish={onFinish}>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} hidden />
                ))}
            </Steps>
            
            <div className="response-field">
                {steps[current].content}
            </div>
            
            <div className="response-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current > 0 && (
                    <Button onClick={() => prev()}>
                        Previous
                    </Button>
                )}                
                {current === steps.length - 1 && (
                    <Button type="primary" htmlType="submit" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
            </div>
        </Form>
    )
};

export default SponsorRequest;