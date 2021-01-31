import React from 'react';

import { Button, message } from 'antd';
import { DatePicker, Space } from 'antd';

class SponsorAuth extends React.Component{

    render(){
        function onChange(date, dateString) {
            console.log(date, dateString);
          }

        return(
            <React.Fragment>
                <h2>IntroEQ</h2>
                <p>Let's start by getting to know each other</p>
                <p>We care deeply about our memeber's experience and privacy.</p>
                <p>As part of this, we verify every member's professional identity:</p>
                <Button type="primary" onClick={() => message.success('Registration complete!')}>Connect to LinkedIn</Button>
                <DatePicker onChange={onChange} />
            </React.Fragment>
        );
    }   
}

export default SponsorAuth;