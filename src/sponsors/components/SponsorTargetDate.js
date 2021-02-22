import React, { useReducer, useEffect } from 'react';
import moment from 'moment';

import '../../index.css';

import { DatePicker, TimePicker, Row } from 'antd';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'DATE_SELECT':
            return {
                ...state,
                value: [...state.value, action.val],
                isValid: true
            };
        case 'TIME_SELECT':
            return {
                ...state,
                value: [...state.value, action.val],
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

    const clickHandler = (selectedDateTime, dateOrTime) => {
        console.log('Selected value', selectedDateTime, dateOrTime);
        if(dateOrTime === 'date'){
            dispatch({
                type: 'DATE_SELECT', 
                val: selectedDateTime
            });
        } else {
            dispatch({
                type: 'TIME_SELECT', 
                val: selectedDateTime
            });
        }        
    };

    const dateChange = (date, dateString) => {
        console.log(dateString);
        clickHandler(dateString, 'date');
    };

    const timeChange = (time, timeString) => {
        console.log(timeString);
        clickHandler(timeString, 'time');
    };

    // Can not select days before today and today
    const disabledDate = (current) => {        
        return current && current < moment().endOf('day');
    };

    const format = 'h:mm a';
    
    return(
        <div className = 'response-field'>
            <p>When would you like to host your roundtable?</p>
            <Row>
                <DatePicker id={0} disabledDate={disabledDate} onChange={dateChange} /> 
                <TimePicker id={1} use12Hours onChange={timeChange} format={format} />
            </Row>
            <Row>
                <DatePicker id={2} disabledDate={disabledDate} onChange={dateChange} /> 
                <TimePicker id={3} use12Hours onChange={timeChange} format={format} />
            </Row>
            <Row>
                <DatePicker id={4} disabledDate={disabledDate} onChange={dateChange} /> 
                <TimePicker id={5} use12Hours onChange={timeChange} format={format} />
            </Row>
        </div>
    );   
}

export default SponsorTargetDate;