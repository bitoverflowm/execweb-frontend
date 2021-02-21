import React, { useReducer, useEffect } from 'react';

import '../../index.css';

import { Col, Checkbox, Typography } from 'antd';

const { Text } = Typography;


const SponsorSummary = props => {

    const data  = props;

    return(
        <div className = 'response-field'>
            <p>Do you have a topic in mind?</p>
            <p>{'summary page output data: ', console.log(data)}</p>
        </div>
    );   
}

export default SponsorSummary;