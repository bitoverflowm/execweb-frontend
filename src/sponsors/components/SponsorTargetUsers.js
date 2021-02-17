import React, { useReducer, useEffect, useState } from 'react';

import '../../index.css';

import { Checkbox, Row, Col, Typography, Avatar, Spin, Popover, Button, Tag, Divider } from 'antd';

const { Text } = Typography;

const DUMMY_USER_DATA = [
    {
        id: '1',
        first_name: 'Sterling',
        last_name: 'Archer',
        position: 'Spy',
        company: 'Figgis Agency',
        avatar: 'https://pbs.twimg.com/profile_images/473693408649674753/Fjo74UD2.png'
    },
    {
        id: '2',
        first_name: 'Bob',
        last_name: 'Burger',
        position: 'Burger Maker',
        company: 'Bobs Burger',
        avatar: 'https://www.gannett-cdn.com/presto/2020/06/12/PPHX/e7207da9-6fbe-467b-b63e-ac44e95db582-BobsBurgers_2019_KeyPoses_Bob_1.jpg?crop=3356,1888,x0,y480&width=3200&height=1801&format=pjpg&auto=webp'
    },
    {
        id: '3',
        first_name: 'Kristin',
        last_name: 'Watson',
        position: 'Project Manager',
        company: 'Heinemann',
        avatar: 'https://pbs.twimg.com/profile_images/473693408649674753/Fjo74UD2.png'
    }
]; 

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':
            return {
                ...state,
                value: action.val,
                isValid: true
            };    
        default:
            return state;
    }
};

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
            <p>
                <Text>The following executives best match your target client parameters.</Text>
                <br></br>
                <Text keyboard> Select up to 15 tech executives you would like to have attend your virtual round table you sponsor.</Text>
            </p>
                
            <Row>
                {!isLoading && filteredUsers
                    ? (
                        <Checkbox.Group onChange={clickHandler} className="check-box-wrapper">
                            {filteredUsers.map( user => (
                                <div key={user.item["_id"]} className="check-box">
                                        <Row>
                                            <Col span= {2}>
                                                <Checkbox value={user.item["_id"]} />
                                            </Col>
                                            <Col span={5}>
                                                <Avatar size={64} src={user.item["Personal Photo"]}/>
                                            </Col>
                                            <Col span={17}>
                                                <Row>
                                                    <Text strong>{" " + user.item["First Name"] + " " + user.item["Last Name"]}</Text>
                                                </Row> 
                                                <Row>
                                                    <Text>{" " + user.item.Position + " @" + user.item.Company}</Text>
                                                </Row>
                                                <Row>
                                                    <Col span={12}>
                                                        <Popover content={user.item["Personal Description"]} title="Description">
                                                            <Button type="primary">Description</Button>
                                                        </Popover>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Popover content={user.item["Experience"]} title="Experience">
                                                            <Button type="primary">Experience</Button>
                                                        </Popover>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Divider orientation="left">Key Values</Divider>
                                                    <div>
                                                        <Tag color="magenta">{user.item["# of Employees"]}</Tag>
                                                        <Tag color="magenta">{user.item["Estimated Revenues"]}</Tag>
                                                        <Tag color="magenta">{user.item["Industry"]}</Tag>
                                                    </div>

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