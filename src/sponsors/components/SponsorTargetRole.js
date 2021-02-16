import React, { useReducer, useEffect } from 'react';

import { Checkbox, Row, Col, Input, message } from 'antd';

import '../../index.css';

const { Search } = Input


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

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':
            return {
                ...state,
                value: action.val,
                isValid: true
            };
        case 'TEXT':
            return {
                ...state,
                textinput: action.val,
                isValid: true 
            };    
        default:
            return state;
    }

};

const SponsorTargetRole = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        textinput: '',
        isValid: false
    });

    const { id, formUpdateHandler } = props;
    const { value, textinput, isValid } = inputState;

    useEffect(() => {
        formUpdateHandler(id, value, isValid, textinput)
    }, [id, value, textinput, isValid, formUpdateHandler]);

    const clickHandler = checkedValues => {
        console.log('Selected value', checkedValues);
        dispatch({
            type: 'CLICK', 
            val: checkedValues
        });
    };

    const onTextSubmission = value => {
        console.log('newPosition text Entry', value);

        dispatch({
            type: 'TEXT',
            val: value
        });
        message.success(value + ' Added to your submission!');
    }


    return(
        <div className = 'response-field'>
            <p>What are the job titles you are looking to connect with?</p>
            <Row>
                <Checkbox.Group onChange={clickHandler} className="check-box-wrapper">
                        {DUMMY_JOB_TITLE.map( title => (
                            <div key={title.id} className="check-box">
                                <Checkbox key={title.id} value={title.title}>
                                    {title.title}
                                </Checkbox>
                            </div>
                        ))}
                </Checkbox.Group>
            </Row>
            <Row className= 'other-input'>
                <p>Have a custom job title in mind?</p>
                <Search placeholder="Enter job title here" allowClear enterButton="+" onSearch={onTextSubmission} />
            </Row>
            
        </div>
    );   
}

export default SponsorTargetRole;