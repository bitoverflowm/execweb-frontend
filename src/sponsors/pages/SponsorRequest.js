import React, { useState, useReducer, useCallback } from 'react';

import { Form, Steps, Button, message } from 'antd';

import SponsorAuth from '../components/SponsorAuth';
import SponsorTargetRole from '../components/SponsorTargetRole';
import SponsorTargetIndustry from '../components/SponsorTargetIndustry';
import SponsorTargetHeadCount from '../components/SponsorTargetHeadCount';
import SponsorTargetRegion from '../components/SponsorTargetRegion';
import SponsorTargetUsers from '../components/SponsorTargetUsers';
import SponsorTargetDate from '../components/SponsorTargetDate';
import SponsorTargetTopic from '../components/SponsorTargetTopic';
import SponsorTargetHost from '../components/SponsorTargetHost';

import '../../index.css';

const { Step } = Steps;

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT':
            let formIsValid = true;
            /*for (const inputId in state.inputs){
                if(inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                }
                TODO: Add form validation logic here;
            }*/
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId] : { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
}

const SponsorRequest = () => {

    const [current, setCurrent] = useState(0);

    const [formState, dispatch] = useReducer(formReducer, {
            inputs: {
                username: { value: '', isValid: false},
                roles: { value: '', isValid: false},
                industries: { value: '', isValid: false}
            }, isValid: false});

    const formUpdateHandler = useCallback(( id, value, isValid ) => { 
        console.log(`formUpdateHandler id: ${id} value: ${value} isValid: ${isValid}`);
        dispatch({type: 'SELECT', value: value, inputId: id, isValid: isValid});
    }, []);

    const steps = [
        { 
            title: 'Step 1', 
            content: 
            <SponsorAuth 
                id="username"
                formUpdateHandler={formUpdateHandler} 
                value={formState.inputs.username}/> 
        },
        { 
            title: 'Step 2', 
            content: 
            <SponsorTargetRole
                id="roles"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.roles}/> 
        },
        { 
            title: 'Step 3', 
            content: 
            <SponsorTargetIndustry 
                id="industries"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.industries}/> 
        },
        { 
            title: 'Step 4', 
            content: 
            <SponsorTargetHeadCount 
                id="headCounts"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.headCounts}/> 
        },
        { 
            title: 'Step 5', 
            content: 
            <SponsorTargetRegion
                id="regions"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.regions}/>
        },
        { 
            title: 'Step 6', 
            content: 
            <SponsorTargetUsers 
                id="users"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.users}/>
        },
        { 
            title: 'Step 7', 
            content: 
            <SponsorTargetDate 
                id="dates"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.dates}/>
        },
        { 
            title: 'Step 8', 
            content: 
            <SponsorTargetTopic 
                id="topic"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.topic}/>
        },
        { 
            title: 'Step 9', 
            content: 
            <SponsorTargetHost 
                id="host"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.host}/>
        },
    ];

    const next = () => {
        setCurrent(current + 1);
        console.log("triggering next: current formState: ", formState);
    };

    // Prev is currently disabled as it jsut complicated the state management
    const prev = () => {
        setCurrent(current - 1);
    };

    const onFinish = async event => {
        console.log('Submitting completed form: ', formState);

        try {
            const response = await fetch('http://localhost:5000/api/sponsors/sponsorRequest', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    jobTitles  : formState.inputs.roles.value,
                    industries : formState.inputs.industries.value, 
                    clientList : 'text.csv',
                    headCounts : formState.inputs.headCounts.value,
                    regions    : formState.inputs.regions.value,
                    users      : formState.inputs.users.value,
                    dateStart  : formState.inputs.dates.value[0],
                    dateEnd    : formState.inputs.dates.value[1],
                    topic      : formState.inputs.topic.value[0],
                    host       : formState.inputs.host.value[0],
                    sponsor    : 1,
                })
            });
            
            const responseData = await response.json();
            console.log('Server response: ', responseData);
        } catch (err) {
            console.log(err);
        }       
        
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
                {/*current > 0 && (
                    <Button onClick={() => prev()}>
                        Previous
                    </Button>
                )*/}                
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