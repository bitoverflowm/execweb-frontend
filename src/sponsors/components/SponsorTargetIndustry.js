import React, { useReducer, useEffect } from 'react';

import { Checkbox, Row, Col, Input, message } from 'antd';

import { FireTwoTone, ExperimentTwoTone, CodeTwoTone, BankTwoTone } from '@ant-design/icons';

import '../../index.css';

const { Search } = Input;

const DUMMY_INDUSTRIES = [
    {
        id: 'i1',
        title: 'Financial Services',
        icon: <BankTwoTone twoToneColor="#FFB454"/>
    },
    {
        id: 'i2',
        title: 'Technology',
        icon: <CodeTwoTone twoToneColor="#AFE2DE"/>
    },
    {
        id: 'i3',
        title: 'Pharma & Medicine',
        icon: <ExperimentTwoTone twoToneColor="#FFB454"/>
    },
    {
        id: 'i4',
        title: 'Energy',
        icon: <FireTwoTone twoToneColor="#60C6BE"/>
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

const SponsorTargetIndustry = props => {

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
    };

    return(
        <div className = 'response-field'>
            <p>What industries are your target clients in?</p>
            <Row >
                <Checkbox.Group onChange={clickHandler} className="check-box-wrapper">
                    {DUMMY_INDUSTRIES.map( title => (
                        <div key={title.id} className="check-box">
                            <Checkbox key={title.id} value={title.title}>
                                {title.icon}{title.title}
                            </Checkbox>
                        </div>
                        ))}
                </Checkbox.Group>
            </Row>
            <Row className= 'other-input'>
                <p>Have a custom industry in mind?</p>
                <Search placeholder="Enter industry here" allowClear enterButton="+" onSearch={onTextSubmission} />
            </Row>
        </div>
    );   
}

export default SponsorTargetIndustry;
