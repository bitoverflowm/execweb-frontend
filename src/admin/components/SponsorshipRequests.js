import React from 'react';
import ReactDOM from 'react-dom';

import { Empty, Card, Avatar } from 'antd';
const { Meta } = Card;

import 'antd/dist/antd.css';

const DUMMY_SPONSOR_SUBMISSION = [
    {
    'id' : 's1',
    't_job_titles' : ['j1', 'j2'],
    't_industry' : ['i1', 'i2'],
    't_client_list' : 'test.csv',
    't_employee_count': 50,
    't_users': ['u1', 'u3'],
    'date_start': 'Feb 1st 2021',
    'date_end' : 'Feb 1st 2021',
    't_topic' : 0,
    't_host' : 0
    }
];

const SponsorshipRequests = props => {
    if (props.sponsorshipRequests.length === 0){
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    }
    else{
        <Card style={{ width: 300, marginTop: 16 }}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
    }
};

export default SponsorshipRequests;