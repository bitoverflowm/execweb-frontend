import React, { useReducer, useEffect } from 'react';
import moment from 'moment';

import '../../index.css';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':
            return {
                ...state,
                value: [...state.value, [action.val]],
                isValid: true
            };    
        default:
            return state;
    }

};

const SponsorTargetDate = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '', 
        isValid: false
    });

    const { id, formUpdateHandler } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        formUpdateHandler(id, value, isValid)
    }, [id, value, isValid, formUpdateHandler]);

    const clickHandler = selectedDate => {
        console.log('Selected value', selectedDate);
        dispatch({
            type: 'CLICK', 
            val: selectedDate
        });
    };

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    };
    
    return(
        <div className = 'response-field'>
            <p>When would you like to host your roundtable?</p>
            <RangePicker
                id = {0}
                onChange={clickHandler}
                disabledDate={disabledDate}
                showTime={{
                    hideDisabledOptions: true,
                    defaultValue: [moment('00:00', 'HH:mm'), moment('11:59', 'HH:mm')],
                }}
                format="YYYY-MM-DD HH:mm"
            />
            <RangePicker
                id = {1}
                onChange={clickHandler}
                disabledDate={disabledDate}
                showTime={{
                    hideDisabledOptions: true,
                    defaultValue: [moment('00:00', 'HH:mm'), moment('11:59', 'HH:mm')],
                }}
                format="YYYY-MM-DD HH:mm"
            />
            <RangePicker
                id = {2}
                onChange={clickHandler}
                disabledDate={disabledDate}
                showTime={{
                    hideDisabledOptions: true,
                    defaultValue: [moment('00:00', 'HH:mm'), moment('11:59', 'HH:mm')],
                }}
                format="YYYY-MM-DD HH:mm"
            />
        </div>
    );   
}

export default SponsorTargetDate;