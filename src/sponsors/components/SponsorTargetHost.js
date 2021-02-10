import React, { useReducer, useEffect } from 'react';

import '../../index.css';

import { Col, Checkbox, Typography } from 'antd';

const { Text } = Typography;

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':
            return {
                ...state,
                value: action.val,
                isValid: true
            };    
        default:
            return state;
    }

};

const SponsorTargetHost = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '', 
        isValid: false
    });

    const { id, formUpdateHandler } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        formUpdateHandler(id, value, isValid)
    }, [id, value, isValid, formUpdateHandler]);

    const clickHandler = checkedValues => {
        console.log('Selected value', checkedValues);
        dispatch({
            type: 'CLICK', 
            val: checkedValues
        });
    };

    return(
        <div className = 'response-field'>
            <p>Do you want us to source a host or do yuo have one in mind?</p>
            <Checkbox.Group onChange={clickHandler} style={{width : '100%'}}>
                <Col span={12} className="check-box">
                    <Checkbox value={1}>                               
                        <Text strong>I have my own host. </Text>
                    </Checkbox>
                </Col>
                <Col span={12} className="check-box">
                    <Checkbox value={0}>
                        <Text strong>Please provide me with a host </Text> 
                    </Checkbox>
                </Col>
            </Checkbox.Group> 
        </div>
    );   
}

export default SponsorTargetHost;