import React, { useReducer, useEffect } from 'react';
import moment from 'moment';

import '../../index.css';

import { DatePicker, TimePicker, Row, Col } from 'antd';

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
        return current && current < moment().add(14, 'd').endOf('day');
    };

    const format = 'h:mm a';
    
    return(
        <div className = 'response-field'>
            <p> Provide 3 dates and times that you would like the roundtable to take place on: </p>
            <p>(Allow at least 2 weeks from today for us to recruit the right execs):</p>
            <div className='date-time-wrapper'>
                <Row>
                    <Col xs={24} md={6}><p className="date-time-heading"> Date Selection 1:</p></Col>
                    <Col xs={24} md={6}><DatePicker id={0} disabledDate={disabledDate} onChange={dateChange} /> </Col>
                    <Col xs={24} md={6}><TimePicker id={1} use12Hours minuteStep={15} onChange={timeChange} format={format} /></Col>
                </Row>
                <Row>
                    <Col xs={24} md={6}><p className="date-time-heading"> Date Selection 2:</p></Col>
                    <Col xs={24} md={6}><DatePicker id={2} disabledDate={disabledDate} onChange={dateChange} /></Col>
                    <Col xs={24} md={6}><TimePicker id={3} use12Hours minuteStep={15} onChange={timeChange} format={format} /></Col>
                </Row>
                <Row>
                    <Col xs={24} md={6}><p className="date-time-heading"> Date Selection 3:</p></Col>
                    <Col xs={24} md={6}><DatePicker id={4} disabledDate={disabledDate} onChange={dateChange} /> </Col>
                    <Col xs={24} md={6}><TimePicker id={5} use12Hours minuteStep={15} onChange={timeChange} format={format} /></Col>
                </Row>
            </div>
            
        </div>
    );   
}

export default SponsorTargetDate;