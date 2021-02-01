import React from 'react';
import { Link } from 'react-router-dom';

import { Empty, Card, Avatar } from 'antd';
import { PlusSquareOutlined, WarningOutlined, CheckSquareOutlined} from '@ant-design/icons';
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
        <ul className="sponsorship-request-list">
            {props.sponsorshipRequests.map( request =>(
                    <Card key = {request.id} 
                          style={{ width: '75%' , alignContent: 'center', marginTop: 16 }}
                          actions={[
                            <Link to={`/${request.id}/SponsorshipRequestDetails`}>
                                <div><PlusSquareOutlined key="Vew Details"/> View Details</div>
                            </Link>,
                            <div><WarningOutlined key="Reject"/> Reject </div>,
                            <div><CheckSquareOutlined key="Accept"/>Accept</div>
                          ]}>
                            <Meta
                            avatar={<Avatar src={request.avatar} />}
                            title={request.title}
                            description={"created by " + request.sponsor_name + "for " + request.sponsor_business}
                            />
                    </Card>
                ))}
        </ul>
    );
};

export default SponsorshipRequests;