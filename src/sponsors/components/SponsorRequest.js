import React, { useState, useReducer, useCallback } from 'react';

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

    const prev = () => {
        setCurrent(current - 1);
    };

    const onFinish = () => {
        console.log('finished: ', formState);
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