import React from 'react';
import {withRouter} from 'react-router-dom';

import { Button } from 'antd';

class Home extends React.Component{
    nextPath(path){
        this.props.history.push(path);
    };

    render(){
        return(
            <React.Fragment>
                <h2>Welcome to ExecWeb</h2>
                <Button type="primary" onClick={() => this.nextPath('/sponsorHome/')}>Apply to Sponsor</Button>
            </React.Fragment>
        );
    }   
}

/*
const Home = () => {

    const nextPath = (path) => {
        props.history.push(path);
    };

    return(
        <React.Fragment>
            <h2>Welcome to ExecWeb</h2>
            <Button type="primary" onClick={() => nextPath('/sponsorSignup/')}>Apply to Sponsor</Button>
        </React.Fragment>
        );
};*/

export default withRouter(Home);