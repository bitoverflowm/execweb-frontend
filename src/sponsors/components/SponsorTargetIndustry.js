import React from 'react';

import { Checkbox, Row, Col } from 'antd';

import { FireTwoTone, ExperimentTwoTone, CodeTwoTone, BankTwoTone } from '@ant-design/icons';

import '../../index.css';

const SponsorTargetIndustry = props => {
    const DUMMY_INDUSTRIES = [
        {
            id: 'i1',
            title: 'Financial Services',
            icon: <BankTwoTone twoToneColor="#FFB454"/>
        },
        {
            id: 'i2',
            title: 'Technology',
            icon: <CodeTwoTone twoToneColor="#AFE2DE"/>
        },
        {
            id: 'i3',
            title: 'Pharma & Medicine',
            icon: <ExperimentTwoTone twoToneColor="#FFB454"/>
        },
        {
            id: 'i4',
            title: 'Other',
            icon: <FireTwoTone twoToneColor="#60C6BE"/>
        }
    ]; 

    const onChange = (checkedValues) => {
        console.log('checked=', checkedValues);
        props.handleIndustrySelection(checkedValues);
    }

    return(
        <div className = 'response-field'>
            <p>What industry are you targeting?</p>
            <Row >
                <Checkbox.Group onChange={onChange} style={{width : '100%'}}>
                    {DUMMY_INDUSTRIES.map( title => (
                        <Col span={10} key={title.id} className="check-box">
                            <Checkbox value={title.title}>
                                {title.icon}{title.title}
                            </Checkbox>
                        </Col>
                        ))}
                </Checkbox.Group>
            </Row>
        </div>
    );   
}

export default SponsorTargetIndustry;


/*
                {DUMMY_INDUSTRIES.map( title => (
                    <Col span={10} key={title.id}>
                        <div className="check-box">
                            <Checkbox value={title.id}>
                                {title.icon} {title.title }
                            </Checkbox>
                        </div>
                    </Col>
                ))}*/