import React, { useReducer, useEffect } from 'react';

import { useAuth0 } from "@auth0/auth0-react";

import Profile from '../../shared/components/Auth/Profile';

import '../../index.css';

import { Col, Checkbox, Typography, Descriptions } from 'antd';

const { Text } = Typography;


const SponsorSummary = props => {

    const data  = props.data;

    return(
        <div className = 'response-field'>
            <p>Do you have a topic in mind?</p>
            <Descriptions title="Sumamry" column={1} >
                {console.log("summary data:", data)}
                {process.env.REACT_APP_BACKEND_URL === 'http://localhost:5000/api' && <Profile />}
                <Descriptions.Item label="Job Titles">{data.roles.value}</Descriptions.Item>
                <Descriptions.Item label="Industries">{data.industries.value}</Descriptions.Item>
                <Descriptions.Item label="Head count">{data.headCounts.value}</Descriptions.Item>
                <Descriptions.Item label="Regions">{data.regions.value}</Descriptions.Item>
                <Descriptions.Item label="Date and time of round table">{/*data.dates.value*/}</Descriptions.Item>
                <Descriptions.Item label="Do you have a preferred topic?">{data.topic.value[0] === 1 ? 'Yes' : 'No'}</Descriptions.Item>
                <Descriptions.Item label="Do you want to source the host?">{data.host.value[0] === 1 ? 'Yes' : 'No'}</Descriptions.Item>
            </Descriptions>
        </div>
    );   
}

export default SponsorSummary;