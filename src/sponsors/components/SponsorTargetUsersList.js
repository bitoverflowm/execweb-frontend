import React, { useReducer, useEffect, useState } from 'react';

import '../../index.css';

import { Checkbox, Row, Col, Typography, Avatar, Spin, Popover, Button, Tag, Divider, Descriptions, List } from 'antd';

import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;


const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':
            return {
                ...state,
                value: [... new Set([...state.value].concat(action.val))],
                isValid: true
            };    
        default:
            return state;
    }
};

const SponsorTargetUsersList = props => {
    
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
            <p>
                <Text>The following executives best match your target client parameters.</Text>
                <br></br>
                <Text keyboard> Select up to 15 tech executives you would like to have attend your virtual round table you sponsor.</Text>
            </p>
                
            <Row>
                {!isLoading && filteredUsers
                    ? (
                        <Checkbox.Group onChange={clickHandler} className= "user-checkbox-wrapper">
                            <List                                 
                                dataSource ={filteredUsers}
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 3,
                                    showSizeChanger : false
                                }}
                                renderItem={
                                    item => (
                                        <List.Item key={item.item["_id"]} className="check-box">
                                            <Col span= {1}className="check-box-style">
                                                <Checkbox value={ item.item["_id"] }/>
                                            </Col>
                                            <Col span={9}>
                                                <div className="avatar-wrapper">
                                                    <Avatar size={64} 
                                                        src= {item.item["Personal Photo"] !== 'Image NA' && item.item["Personal Photo"] }
                                                        icon = { item.item["Personal Photo"] === 'Image NA' && <UserOutlined /> }
                                                            />
                                                </div>
                                                <div className="avatar-wrapper">
                                                    <Popover content={item.item["Personal Description"]} title="Description" overlayClassName="popover-content">
                                                        <Button type="primary">Description</Button>
                                                    </Popover>
                                                </div>
                                                <div className="avatar-wrapper">
                                                    <Popover content={item.item["Experience"]} title="Experience" overlayClassName="popover-content">
                                                        <Button>Experience</Button>
                                                    </Popover>
                                                </div>
                                            </Col>
                                            <Col span={13}>
                                                <Row>
                                                    <Text strong>{" " + item.item["First Name"] + " " + item.item["Last Name"]}</Text>
                                                </Row>
                                                <Row>
                                                    <Text>Title: {item.item.Position}</Text>
                                                </Row>
                                                <Row>
                                                    <Text>Company: {item.item.Company}</Text>
                                                </Row>   
                                                <Row>
                                                    <Text>Location: {item.item.State}</Text>
                                                </Row>
                                                <Row className="tag-wrapper">
                                                    <Tag >Est. Employees: {item.item["# of Employees"]}</Tag>
                                                </Row>
                                                <Row className="tag-wrapper">
                                                    <Tag>Industry: {item.item["Industry"]}</Tag>
                                                </Row>
                                                <Row className="tag-wrapper">
                                                    <Tag>Est. Revenue: {item.item["Estimated Revenues"]}</Tag>
                                                </Row> 
                                            </Col>
                                        </List.Item>
                                    )
                                }
                            />
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

export default SponsorTargetUsersList;