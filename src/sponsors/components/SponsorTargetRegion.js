import React, { useReducer, useEffect } from 'react';

import { Checkbox, Row, Col } from 'antd';

import west from '../../shared/assets/west.png';
import mid_west from '../../shared/assets/mid_west.png';
import north_east from '../../shared/assets/north_east.png';
import south_east from '../../shared/assets/south_east.png';
import south_west from '../../shared/assets/south_west.png';

import '../../index.css';

const DUMMY_REGIONS = [
    {
        id: '1', 
        title: 'West',
        icon: <img src={west} alt="West" />
    },
    {
        id: '2',
        title: 'Mid-West',
        icon: <img src={mid_west} alt="West" />
    },
    {
        id: '3',
        title: 'South-West',
        icon: <img src={south_west} alt="West" />
    },
    {
        id: '4',
        title: 'North-East',
        icon: <img src={north_east} alt="West" />
    },
    {
        id: '5',
        title: 'South-East',
        icon: <img src={south_east} alt="West" />
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

const SponsorTargetRegion = props => {
    
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
            <p>What US regions are your target accounts headquatered in?</p>
            <Row >
                <Checkbox.Group onChange={clickHandler} defaultValue={inputState.value} className="check-box-wrapper">
                    {DUMMY_REGIONS.map( title => (
                        <div key={title.id} className="check-box-generic">
                                <Checkbox value={title.title}>
                                    {title.icon} {title.title }
                                </Checkbox>
                        </div>
                    ))}
                </Checkbox.Group>
            </Row>
        </div>
    );   
}

export default SponsorTargetRegion;