import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

/*
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
*/


const Home = () => {
    return(
        <React.Fragment>
            <h2>Welcome to ExecWeb</h2>
            <Link to={`/sponsorHome/`}>
                <Button type="primary">Apply to Sponsor</Button>
            </Link>
        </React.Fragment>
        );
};

export default Home;