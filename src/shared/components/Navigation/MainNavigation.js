
import React from 'react';

import NavLinks from './NavLinks';

import './MainNavigation.css';
import 'antd/dist/antd.css';


const MainNavigation = props => {
    return (
            <div className="header">
                <div className="logo" />
                <NavLinks className="header-child" />
            </div>
    )

}

export default MainNavigation;
