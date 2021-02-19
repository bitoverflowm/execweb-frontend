import React, { useState, useReducer, useCallback } from 'react';

import { Form, Steps, Button, message, Row, Col } from 'antd';

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
import formImage0 from '../../shared/assets/sponsor-request-images/0.jpg';
import formImage1 from '../../shared/assets/sponsor-request-images/1.jpg';
import formImage2 from '../../shared/assets/sponsor-request-images/2.jpg';
import formImage3 from '../../shared/assets/sponsor-request-images/3.jpg';
import formImage4 from '../../shared/assets/sponsor-request-images/4.jpg';
import formImage5 from '../../shared/assets/sponsor-request-images/5.jpg';
import formImage6 from '../../shared/assets/sponsor-request-images/6.jpg';

import logo from '../../shared/assets/logo2.png';

const { Step } = Steps;

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT':
            let formIsValid = true;
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

    const formUpdateHandler = useCallback(( id, value, isValid, textInput = null ) => { 
        console.log(`formUpdateHandler id: ${id} value: ${value} isValid: ${isValid}`);
        if(textInput && value){
            value.push(textInput);
        } else if (textInput && !value){
            value = textInput;
        }
        dispatch({type: 'SELECT', value: value, inputId: id, isValid: isValid});
    }, []);

    const steps = [
        { 
            title: 'Step 1', 
            content:  <SponsorAuth 
                        id="username"
                        formUpdateHandler={formUpdateHandler} 
                        value={formState.inputs.username}/>,
            image: <img src={formImage0} alt="formImage0" className="response-field-image" />
                        
        },
        { 
            title: 'Step 2', 
            content: 
                <SponsorTargetRole
                    id="roles"
                    formUpdateHandler={formUpdateHandler}
                    value={formState.inputs.roles}/>,
            image: <img src={formImage1} alt="formImage1" className="response-field-image" />
        },
        { 
            title: 'Step 3', 
            content: 
            <SponsorTargetIndustry 
                id="industries"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.industries}/>,
            image: <img src={formImage2} alt="formImage2" className="response-field-image" /> 
        },
        { 
            title: 'Step 4', 
            content: 
            <SponsorTargetHeadCount 
                id="headCounts"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.headCounts}/>,
            image: <img src={formImage3} alt="formImage3" className="response-field-image" /> 
        },
        { 
            title: 'Step 5', 
            content: 
            <SponsorTargetRegion
                id="regions"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.regions}/>,
            image: <img src={formImage4} alt="formImage4" className="response-field-image" />
        },
        { 
            title: 'Step 6', 
            content: 
            <SponsorTargetUsers 
                id="users"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs}/>,
            image: <img src={formImage5} alt="formImage5" className="response-field-image" />
        },
        { 
            title: 'Step 7', 
            content: 
            <SponsorTargetDate 
                id="dates"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.dates}/>,
            image: <img src={formImage6} alt="formImage6" className="response-field-image"/>
        },
        { 
            title: 'Step 8', 
            content: 
            <SponsorTargetTopic 
                id="topic"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.topic}/>,
            image: <img src={formImage6} alt="formImage6" className="response-field-image"/>
        },
        { 
            title: 'Step 9', 
            content: 
            <SponsorTargetHost 
                id="host"
                formUpdateHandler={formUpdateHandler}
                value={formState.inputs.host}/>,
            image: <img src={formImage6} alt="formImage6" className="response-field-image"/>
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
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/sponsors/sponsorRequest', {
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
            
            <Row>
                <Col span={12}>
                    <div className="response-field-wrapper">
                        <Row>
                            <img src={logo} alt="Logo" className="logo"/>
                        </Row>
                        <Row className="response-field">
                            {steps[current].content}
                        </Row>

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
                                <Button className="response-submit" type="primary" htmlType="submit" onClick={() => message.success('Processing complete!')}>
                                    Done
                                </Button>
                            )}
                        </div>
                    </div>
                </Col>
                <Col span={10}>
                    {steps[current].image}
                </Col>
            </Row>
        </Form>
    )
};

export default SponsorRequest;