import React, { useReducer, useEffect } from 'react';

import { Checkbox, Row, Col } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserFriends, faUsers, faHome, faLandmark, faBuilding } from '@fortawesome/free-solid-svg-icons';

import '../../index.css';

const DUMMY_HEAD_COUNT = [
    {
        id: '1',
        title: '0 - 50',
        value: [0, 50],
        icon: <FontAwesomeIcon icon={faUser} />
    },
    {
        id: '2',
        title: '51 - 100',
        value: [51, 100],
        icon: <FontAwesomeIcon icon={faUserFriends} />
    },
    {
        id: '3',
        title: '101 - 250',
        value: [101, 250],
        icon: <FontAwesomeIcon icon={faUsers} />
    },
    {
        id: '4',
        title: '251 -500',
        value: [251, 500],
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        id: '5',
        title: '501 -1000',
        value: [501, 1000],
        icon: <FontAwesomeIcon icon={faLandmark} />
    },
    {
        id: '6',
        title: 'more than 1000',
        value: [1001, 999999999],
        icon: <FontAwesomeIcon icon={faBuilding} />
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

const SponsorTargetHeadCount = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.value, 
        isValid: props.value.length > 0 ? true : false
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
            <p>What is the ideal number of employees of your target client accounts?</p>
            <Row >
                <Checkbox.Group onChange={clickHandler} defaultValue={inputState.value} className="check-box-wrapper" >
                    {DUMMY_HEAD_COUNT.map( title => (
                        <div key={title.id} className="check-box-headcount">
                                <Checkbox value={title.value}>
                                    {title.icon} {title.title }
                                </Checkbox>
                        </div>
                    ))}
                </Checkbox.Group>
            </Row>
        </div>
    );   
}

export default SponsorTargetHeadCount;