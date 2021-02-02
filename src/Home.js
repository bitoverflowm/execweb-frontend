import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

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