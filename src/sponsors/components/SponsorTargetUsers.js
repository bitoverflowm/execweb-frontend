import React from 'react';

import '../../index.css';

import { Checkbox, Row, Col, Typography, Avatar } from 'antd';

const { Text } = Typography;


const SponsorTargetUsers = props => {
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

    const onChange = (checkedValues) => {
        console.log('checked=', checkedValues);
        props.handleUserSelection(checkedValues);
    }

    return(
        <div className = 'response-field'>
            <p>
                <Text>We recommend the following professionals based on your responses.</Text>
                <br></br>
                <Text keyboard> Select who you would like to attend.</Text>
            </p>
                
                    <Row>
                        <Checkbox.Group onChange={onChange} style={{width : '100%'}}>
                            {DUMMY_USER_DATA.map( user => (
                                <Col span={24} key={user.id} className="check-box">
                                    <Checkbox value={user.id}>
                                        <Avatar src={user.avatar}/>                                
                                        <Text strong>{" " + user.first_name + " " + user.last_name}</Text> 
                                        <Text>{" " + user.position + " @" + user.company}</Text>
                                    </Checkbox>
                                </Col>
                            ))}
                        </Checkbox.Group>
                    </Row>
        </div>
    );   
}

export default SponsorTargetUsers;