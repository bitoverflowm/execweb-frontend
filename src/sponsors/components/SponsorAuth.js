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
                <p>Let us know who your target clients are and sponsor only relevant to you round tables.</p>
                <p>We need to verify yout professional identity.</p>
                <Button type="primary" onClick={() => message.success('Registration complete!')}>Apply by LinkedIn</Button>
                <DatePicker onChange={onChange} />
            </React.Fragment>
        );
    }   
}

export default SponsorAuth;