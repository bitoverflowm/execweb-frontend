import React from 'react';
import moment from 'moment';

import '../../index.css';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const SponsorTargetDate = props => {



    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    };

    const onChange = (selectedDate) => {
        console.log('dates=', selectedDate);
        props.handleDateSelection(selectedDate);
    };
    
    return(
        <div className = 'response-field'>
            <p>When would you like to host your roundtable?</p>
            <RangePicker
                onChange={onChange}
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