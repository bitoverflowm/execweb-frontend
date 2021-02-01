import React from 'react';
import ReactDOM from 'react-dom';

import { Empty, Card, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;


const SponsorshipRequests = props => {
    if (props.sponsorshipRequests.length === 0){
        return (
            <div className="center">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
        )
    }
    //TODO: more featues on adding appropriate Sponsor Card data and details here:
    // https://codesandbox.io/s/9tm67?file=/index.js
    return(
        <ul>
            {props.sponsorshipRequests.map( request =>(
                    <Card key = {request.id} 
                          style={{ width: '75%' , alignContent: 'center', marginTop: 16 }}>
                            <Meta
                            avatar={<Avatar src={request.avatar} />}
                            title={request.title}
                            description={"created by " + request.sponsor_name + 'for ' + request.sponsor_business}
                            />
                    </Card>
                ))}
        </ul>
    );
};

export default SponsorshipRequests;