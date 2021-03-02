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
                value: action.val,
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
        loginWithRedirect();   
        dispatch({
            type: 'CLICK', 
            val: user
        });
    }

    return(
        <div className = 'response-field'>
            <p>We will facilitate virtual roundtable with 5-10 tech execs in your target market who are actively looking for new vendors and are interested in the problem your platform is solving.</p>
            <p>You will need to answer a few questions, takes less than 2 minutes to complete, so that we know who are the most relevant tech executives to you.</p>
            <p>You will need to join using your LinkedIn account since we are an exclusive professional platform and need to confirm everyone's professional identity.</p>
            <p>Let's begin... </p>
            {console.log('props value in linked validation: ', props.value)}
            <div className= "linkedin-auth-wrapper">
                {isAuthenticated 
                    ? <Profile />
                    : <Button type="primary" className="linkedin-auth" onClick={() => clickHandler()}>  Connect to LinkedIn</Button>}
            </div>
        </div>
    );
};

export default SponsorAuth;