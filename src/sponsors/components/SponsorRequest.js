import React, { useState, useReducer } from 'react';

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

    const [current, setCurrent] = useState(0);    
    const [linkeIn, setLinkedIn] = useState();
    const [roles, setRoles] = useState();
    const [industries, setIndustries] = useState();
    const [headCount, setHeadCount] = useState();
    const [regions, setRegions] = useState();
    const [users, setUsers] = useState();
    const [dates, setDates] = useState();
    const [topics, setTopics] = useState();
    const [host, setHost] = useState();
    const [summary, setSummary] = useState();


    const handleLinkedInVerification = ( value ) => {
        //this.setState({ linkedInVerified : true});
        setLinkedIn({
            username : 'testUser',
            linkedInVerified: value 
        });
    };

    const handleRoleSelection = ( values ) => {
        setRoles(values);
    };

    const handleIndustrySelection = ( values ) => {
        setIndustries(values);
    };
    
    const handleHeadCountSelection = ( values ) => {
        setHeadCount(values);
    };

    const handleRegionSelection = ( values ) => {
        setRegions(values);
    };

    const handleUserSelection = ( values ) => {
        setUsers(values);
    };

    const handleDateSelection = ( values ) => {
        setDates(values);
    };

    const handleTopicSelection = ( values ) => {
        setTopics(values);
    };

    const handleHostSelection = ( values ) => {
        setHost(values);
    };

    

    const steps = [
        { title: 'Step 1', content: <SponsorAuth handleLinkedInVerification={handleLinkedInVerification}/> },
        { title: 'Step 2', content: <SponsorTargetRole handleRoleSelection = {handleRoleSelection}/> },
        { title: 'Step 3', content: <SponsorTargetIndustry handleIndustrySelection = {handleIndustrySelection}/> },
        { title: 'Step 4', content: <SponsorTargetHeadCount handleHeadCountSelection = {handleHeadCountSelection}/> },
        { title: 'Step 5', content: <SponsorTargetRegion handleRegionSelection = {handleRegionSelection}/>},
        { title: 'Step 6', content: <SponsorTargetUsers handleUserSelection = {handleUserSelection}/>},
        { title: 'Step 7', content: <SponsorTargetDate handleDateSelection = {handleDateSelection}/>},
        { title: 'Step 8', content: <SponsorTargetTopic handleTopicSelection = {handleTopicSelection}/>},
        { title: 'Step 9', content: <SponsorTargetHost handleHostSelection = {handleHostSelection}/>},
    ];

    const next = () => {
        setCurrent(current + 1);
        setSummary([linkeIn, roles, industries, headCount, regions, users, dates, topics, host ])
        console.log(summary);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onFinish = () => {
        setSummary([linkeIn, roles, industries, headCount, regions, users, dates, topics, host ])
        console.log('Successfully submitted:', [linkeIn, roles, industries, headCount, regions, users, dates, topics, host ]);
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