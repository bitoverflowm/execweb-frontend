import React, { useReducer, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import { Button, Typography } from 'antd';

import Profile from '../../shared/components/Auth/Profile';

const { Text } = Typography;


const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':
            return {
                ...state,
                value: action.val.username,
                isValid: true
            };    
        default:
            return state;
    }

}

const SponsorAuth = props => {
    
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '', 
        isValid: false
    });

    const { id, formUpdateHandler } = props;
    const { value, isValid } = inputState;
    const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
    

    useEffect(() => {
        formUpdateHandler(id, value, isValid)
    }, [id, value, isValid, formUpdateHandler]);

    const clickHandler = submission => {
        console.log('Submitted Value', submission);
        
        dispatch({
            type: 'CLICK', 
            val: submission
        });
    }

    return(
        <div className = 'response-field'>
            <p>Let's start by getting to know each other</p>
            <p>We care deeply about our memeber's experience and privacy.</p>
            <p>As part of this, we verify every member's professional identity.</p>
            <p>Connect your LinkedIn to begin!</p>
            {console.log('props value in linked validation: ', props.value)}
            {isAuthenticated 
                ? <Text>Welcome {user.name} thank you for joining our community!</Text> 
                : <Button type="primary" onClick={() => loginWithRedirect()/*clickHandler({username : "John Doe"})*/}> Connect to LinkedIn</Button>}
        </div>
    );
};

export default SponsorAuth;