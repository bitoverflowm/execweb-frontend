import React from 'react';

import { Steps, Button, message } from 'antd';

import SponsorAuth from './SponsorAuth';

const { Step } = Steps;

const steps = [
    {
        title: 'Step 1',
        content: <SponsorAuth />
    },
    {
        title: 'Step 2',
        content: 'First-content'
    },
    {
        title: 'Step 3',
        content: 'First-content'
    },
    {
        title: 'Step 4',
        content: 'First-content'
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
        <React.Fragment>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} hidden/>
                ))}
            </Steps>
            
            <div className="steps-content">{steps[current].content}</div>
            
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </React.Fragment>
    )
};

export default SponsorRequest;