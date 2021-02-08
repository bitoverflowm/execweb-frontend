import React from 'react';

import { Checkbox, Row, Col } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserFriends, faUsers, faHome, faLandmark, faBuilding } from '@fortawesome/free-solid-svg-icons'

import '../../index.css';

const SponsorTargetHeadCount = props => {
    const DUMMY_HEAD_COUNT = [
        {
            id: '1',
            title: '0 - 50',
            icon: <FontAwesomeIcon icon={faUser} />
        },
        {
            id: '2',
            title: '51 - 100',
            icon: <FontAwesomeIcon icon={faUserFriends} />
        },
        {
            id: '3',
            title: '101 - 250',
            icon: <FontAwesomeIcon icon={faUsers} />
        },
        {
            id: '4',
            title: '251 -500',
            icon: <FontAwesomeIcon icon={faHome} />
        },
        {
            id: '5',
            title: '501 -1000',
            icon: <FontAwesomeIcon icon={faLandmark} />
        },
        {
            id: '6',
            title: 'more than 1000',
            icon: <FontAwesomeIcon icon={faBuilding} />
        }
    ]; 

    const onChange = (checkedValues) => {
        console.log('checked=', checkedValues);
        props.handleHeadCountSelection(checkedValues);
    }

    return(
        <div className = 'response-field'>
            <p>What company sizes do you want to work with?</p>
            <Row >
                <Checkbox.Group onChange={onChange} style={{width : '100%'}}>
                    {DUMMY_HEAD_COUNT.map( title => (
                        <Col span={10} key={title.id} className="check-box">
                                <Checkbox value={title.title}>
                                    {title.icon} {title.title }
                                </Checkbox>
                        </Col>
                    ))}
                </Checkbox.Group>
            </Row>
        </div>
    );   
}

export default SponsorTargetHeadCount;