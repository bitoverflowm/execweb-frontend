import React from 'react';

import { Checkbox, Row, Col } from 'antd';

import west from '../../shared/assets/west.png';
import mid_west from '../../shared/assets/mid_west.png';
import north_east from '../../shared/assets/north_east.png';
import south_east from '../../shared/assets/south_east.png';
import south_west from '../../shared/assets/south_west.png';

import '../../index.css';

const SponsorTargetRegion = props => {
    const DUMMY_REGIONS = [
        {
            id: '1',
            title: 'West',
            icon: <img src={west} alt="West" />
        },
        {
            id: '2',
            title: 'Mid-West',
            icon: <img src={mid_west} alt="West" />
        },
        {
            id: '3',
            title: 'South-West',
            icon: <img src={south_west} alt="West" />
        },
        {
            id: '4',
            title: 'North-East',
            icon: <img src={north_east} alt="West" />
        },
        {
            id: '5',
            title: 'South-East',
            icon: <img src={south_east} alt="West" />
        }
    ]; 

    return(
        <div className = 'response-field'>
            <p>What company sizes do you want to work with?</p>
            <Row >
                {DUMMY_REGIONS.map( title => (
                    <Col span={10} key={title.id}>
                        <div className="check-box">
                            <Checkbox value={title.id}>
                                {title.icon} {title.title }
                            </Checkbox>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );   
}

export default SponsorTargetRegion;