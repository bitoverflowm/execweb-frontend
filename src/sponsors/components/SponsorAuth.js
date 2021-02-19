import React, { useReducer, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import { Button, Typography } from 'antd';

import { LinkedinOutlined } from '@ant-design/icons';

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
            <p>We will facilitate virtual roundtables with tech execs in your target market who are actively looking for new vendors.</p>
            <p>You will need to answer a few questions, takes less than 2 minutes to complete, so that we can get you in front of the 5-10 most relevant to you tech executives.</p>
            <p>You will need to to join using your LinkedIn account since we are an exclusive professional network and need to confirm everyone's professional identity.</p>
            <p>Let's begin... </p>
            {console.log('props value in linked validation: ', props.value)}
            <div className= "linkedin-auth-wrapper">
                {isAuthenticated 
                    ? <Text>Welcome {user.name} thank you for joining our community!</Text> 
                    : <Button type="primary" className="linkedin-auth" onClick={() => loginWithRedirect()/*clickHandler({username : "John Doe"})*/}>  Connect to LinkedIn</Button>}
            </div>
        </div>
    );
};

export default SponsorAuth;