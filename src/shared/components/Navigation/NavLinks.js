import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { NavLink, useLocation } from 'react-router-dom';

import { Menu, Button } from "antd";


const NavLinks = props => {
    const { logout, isAuthenticated } = useAuth0();

    const currentPath = useLocation();

    return (
        <Menu theme="light" mode="horizontal" className="menu">
            { currentPath.pathname !== "/" &&
                    <Menu.Item key="1">
                        <NavLink to ="/" exact> Home</NavLink>
                    </Menu.Item>
                }
            <Menu.Item key="2">
                <a href="https://www.introeq.com/" className="home-footer-links"> Request Access To Our Community</a>
            </Menu.Item>
            {isAuthenticated && (
                <Menu.Item key="5">
                    <Button onClick={() => logout()}> 
                        Log Out 
                    </Button>
                </Menu.Item>
            )}            
        </Menu>
    )
}

export default NavLinks;