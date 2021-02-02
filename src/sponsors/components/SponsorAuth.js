import React from 'react';

import { Button, message } from 'antd';


const SponsorAuth = props => {
    return(
        <div className = 'response-field'>
            <p>Let's start by getting to know each other</p>
            <p>We care deeply about our memeber's experience and privacy.</p>
            <p>As part of this, we verify every member's professional identity.</p>
            <p>Connect your LinkedIn to begin!</p>
            <Button type="primary" onClick={() => message.success('Registration complete!')}>Connect to LinkedIn</Button>
        </div>
    );
};

export default SponsorAuth;