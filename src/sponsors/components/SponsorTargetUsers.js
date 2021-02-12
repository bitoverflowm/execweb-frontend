import React, { useReducer, useEffect, useState } from 'react';

import '../../index.css';

import { Checkbox, Row, Col, Typography, Avatar, Spin } from 'antd';

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
                <Text>We recommend the following professionals based on your responses.</Text>
                <br></br>
                <Text keyboard> Select who you would like to attend.</Text>
            </p>
                
            <Row>
                {!isLoading && filteredUsers
                    ? (
                        <Checkbox.Group onChange={clickHandler} style={{width : '100%'}}>
                            {filteredUsers.map( user => (
                                <Col span={24} key={user.item["_id"]} className="check-box">
                                    <Checkbox value={user.item["_id"]}>
                                        <Avatar src={user.item["Personal Photo"]}/>                                
                                        <Text strong>{" " + user.item["First Name"] + " " + user.item["Last Name"]}</Text> 
                                        <Text>{" " + user.item.Position + " @" + user.item.Company}</Text>
                                    </Checkbox>
                                </Col>
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