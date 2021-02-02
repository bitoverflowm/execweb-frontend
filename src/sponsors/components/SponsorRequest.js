import React from 'react';

import { Steps, Button, message } from 'antd';

import SponsorAuth from './SponsorAuth';
import SponsorTargetRole from './SponsorTargetRole';
import SponsorTargetIndustry from './SponsorTargetIndustry';
import SponsorTargetHeadCount from './SponsorTargetHeadCount';

import '../../index.css';

const { Step } = Steps;

const steps = [
    {
        title: 'Step 1',
        content: <SponsorAuth />
    },
    {
        title: 'Step 2',
        content: <SponsorTargetRole />
    },
    {
        title: 'Step 3',
        content: <SponsorTargetIndustry />
    },
    {
        title: 'Step 4',
        content: <SponsorTargetHeadCount />
    },
    {
        title: 'Step 5',
        content: 'First-content'
    },
    {
        title: 'Step 6',
        content: 'First-content'
    },
    {
        title: 'Step 7',
        content: 'First-content'
    },
    {
        title: 'Step 8',
        content: 'First-content'
    },
    {
        title: 'Step 9',
        content: 'First-content'
    },
    {
        title: 'Step 10',
        content: 'First-content'
    },
    {
        title: 'Step 11',
        content: 'First-content'
    },
    {
        title: 'Step 12',
        content: 'First-content'
    },
];

const SponsorRequest = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div className = "site-layout-content">
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} hidden/>
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
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}                
            </div>
        </div>
    )
};

export default SponsorRequest;