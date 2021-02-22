import React, { useReducer, useEffect, useState } from 'react';

import '../../index.css';

import { Checkbox, Row, Col, Typography, Avatar, Spin, Popover, Button, Tag } from 'antd';

const { Text } = Typography;

const SponsorTargetUsers = props => {
    
    const searchParams = props.value;
    const [isLoading, setIsLoading] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState();

    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try
            {
                console.log("searching on the following params: ",  searchParams);
                const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/sponsors/userSearch', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        jobTitles  : searchParams.roles.value,
                        industries : searchParams.industries.value,
                    })
                });

                const responseData = await response.json();

                if(!response.ok){
                    throw new Error(responseData.message);
                }

                console.log('Filtered users:', responseData)
                setFilteredUsers(responseData.filteredUsers);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        sendRequest();
    }, []);

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '', 
        isValid: false
    });

    const { id, formUpdateHandler } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        formUpdateHandler(id, value, isValid)
    }, [id, value, isValid, formUpdateHandler]);

    const clickHandler = checkedValues => {
        console.log('Selected value', checkedValues);
        dispatch({
            type: 'CLICK', 
            val: checkedValues
        });
    };

    return(
        <div className = 'response-field'> 
            <p className="text">The following executives best match your target client parameters.</p>
            <p className="text"> Select up to 15 tech executives you would like to have attend your virtual round table you sponsor.</p>                
            <Row>
                {!isLoading && filteredUsers
                    ? (
                        <Checkbox.Group onChange={clickHandler} className="check-box-wrapper">
                            {filteredUsers.map( user => (
                                <div key={user.item["_id"]} className="check-box">
                                        <Row>
                                            <Col span= {1}className="check-box-style">
                                                <Checkbox value={user.item["_id"]}/>
                                            </Col>
                                            <Col span={9}>
                                                <div className="avatar-wrapper">
                                                    <Avatar size={64} src={user.item["Personal Photo"]}/>
                                                </div>
                                                <div className="avatar-wrapper">
                                                    <Popover content={user.item["Personal Description"]} title="Description" overlayClassName="popover-content">
                                                        <Button type="primary">Description</Button>
                                                    </Popover>
                                                </div>
                                                <div className="avatar-wrapper">
                                                    <Popover content={user.item["Experience"]} title="Experience" overlayClassName="popover-content">
                                                        <Button>Experience</Button>
                                                    </Popover>
                                                </div>
                                            </Col>
                                            <Col span={14}>
                                                <Row>
                                                    <Text strong>{" " + user.item["First Name"] + " " + user.item["Last Name"]}</Text>
                                                </Row>
                                                <Row>
                                                    <Text>Title: {user.item.Position}</Text>
                                                </Row>
                                                <Row>
                                                    <Text>Company: {user.item.Company}</Text>
                                                </Row>   
                                                <Row>
                                                    <Text>Location: {user.item.State}</Text>
                                                </Row>
                                                <Row className="tag-wrapper">
                                                    <Tag >Est. Employees: {user.item["# of Employees"]}</Tag>
                                                </Row>
                                                <Row className="tag-wrapper">
                                                    <Tag>Industry: {user.item["Industry"]}</Tag>
                                                </Row>
                                                <Row className="tag-wrapper">
                                                    <Tag>Est. Revenue: {user.item["Estimated Revenues"]}</Tag>
                                                </Row> 
                                            </Col>
                                        </Row>
                                </div>
                            ))}
                        </Checkbox.Group>
                    )
                    : (
                        <Spin />
                    )
                }
            </Row>
        </div>
    );   
}

export default SponsorTargetUsers;