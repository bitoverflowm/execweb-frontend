import React, { useReducer, useEffect } from 'react';

import { useAuth0 } from "@auth0/auth0-react";

import Profile from '../../shared/components/Auth/Profile';

import '../../index.css';

import { Descriptions } from 'antd';



const SponsorSummary = props => {

    const data  = props.data;

    return(
        <div className = 'response-field'>
            <p>Do you have a topic in mind?</p>
            <Descriptions title="Sumamry" column={1} >
                {console.log("summary data:", data)}
                <Profile />
                <Descriptions.Item label="Job Titles">{data.roles.value}</Descriptions.Item>
                <Descriptions.Item label="Industries">{data.industries.value}</Descriptions.Item>
                <Descriptions.Item label="Head count">{data.headCounts.value}</Descriptions.Item>
                <Descriptions.Item label="Regions">{data.regions.value}</Descriptions.Item>
                <Descriptions.Item label="Date 1">{data.dates.value[0]}, {data.dates.value[1]}</Descriptions.Item>
                <Descriptions.Item label="Date 2">{data.dates.value[2]}, {data.dates.value[3]}</Descriptions.Item>
                <Descriptions.Item label="Date 3">{data.dates.value[4]}, {data.dates.value[5]}</Descriptions.Item>
                <Descriptions.Item label="Do you have a preferred topic?">{data.topic.value[0] === 1 ? 'Yes' : 'No'}</Descriptions.Item>
                <Descriptions.Item label="Do you want to source the host?">{data.host.value[0] === 1 ? 'Yes' : 'No'}</Descriptions.Item>
            </Descriptions>
        </div>
    );   
}

export default SponsorSummary;