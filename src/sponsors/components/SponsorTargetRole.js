import React, { useReducer, useEffect } from 'react';

import { Checkbox, Row, Col } from 'antd';

import '../../index.css';

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
        default:
            return state;
    }

};

const SponsorTargetRole = props => {

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
            <p>What are the job titles you are looking to connect with?</p>

            <Row>
                <Checkbox.Group onChange={clickHandler} style={{width : '100%'}}>
                        {DUMMY_JOB_TITLE.map( title => (
                            <Col span={10} key={title.id} className="check-box">
                                <Checkbox value={title.title}>
                                    {title.title}
                                </Checkbox>
                            </Col>
                        ))}
                </Checkbox.Group>
            </Row>
            
        </div>
    );   
}

export default SponsorTargetRole;