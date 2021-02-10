import React, { useReducer, useEffect } from 'react';

import { Checkbox, Row, Col } from 'antd';

import { FireTwoTone, ExperimentTwoTone, CodeTwoTone, BankTwoTone } from '@ant-design/icons';

import '../../index.css';

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
        title: 'Other',
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
        default:
            return state;
    }

};

const SponsorTargetIndustry = props => {

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
            <p>What industry are you targeting?</p>

            <Row >
                <Checkbox.Group onChange={clickHandler} style={{width : '100%'}}>
                    {DUMMY_INDUSTRIES.map( title => (
                        <Col span={10} key={title.id} className="check-box">
                            <Checkbox value={title.title}>
                                {title.icon}{title.title}
                            </Checkbox>
                        </Col>
                        ))}
                </Checkbox.Group>
            </Row>
        </div>
    );   
}

export default SponsorTargetIndustry;
