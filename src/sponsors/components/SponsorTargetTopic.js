import React, { useReducer, useEffect } from 'react';

import '../../index.css';

import { Col, Radio, Typography, message, Row, Input } from 'antd';

const {Search} = Input;

const { Text } = Typography;

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

const SponsorTargetTopic = props => {

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
            val: checkedValues.target.value
        });
    };

    const onTextSubmission = value => {
        console.log('newPosition text Entry', value);

        dispatch({
            type: 'TEXT',
            val: value
        });
        message.success(value + ' Added to your submission!');
    };

    return(
        <div className = 'response-field'>
            <p>What is the topic you would like to be discussed?</p>
            <p>(ideally a topic that solves a problem using your platform/service)</p>
            <Row className= 'other-input'>
            <p>Have a custom industry in mind?</p>
                <Search placeholder="Enter topic here" allowClear enterButton="+" onSearch={onTextSubmission} />
            </Row>
            
            <Row>
                <Radio.Group onChange={clickHandler} style={{width : '100%'}}>
                    <div className="check-box">
                        <Radio value={0}>
                            <Text strong>Please provide me with a topic </Text> 
                        </Radio>
                    </div>
                </Radio.Group>
            </Row>

        </div>
    );   
}

export default SponsorTargetTopic;