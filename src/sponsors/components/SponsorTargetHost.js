import React, { useReducer, useEffect } from 'react';

import '../../index.css';

import { Col, Checkbox, Typography, Radio } from 'antd';

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
            val: checkedValues.target.value
        });
    };

    return(
        <div className = 'response-field'>
            <p>Do you want us to source a host/moderator for the roundtable? </p>
            <Radio.Group onChange={clickHandler}>
                <div span={12} className="check-box-generic">
                    <Radio value={1}>                               
                        <Text strong>I have my own host. </Text>
                    </Radio>
                </div>
                <div span={12} className="check-box-generic">
                    <Radio value={0}>
                        <Text strong>Please source host for me. </Text> 
                    </Radio>
                </div>
            </Radio.Group> 
        </div>
    );   
}

export default SponsorTargetHost;