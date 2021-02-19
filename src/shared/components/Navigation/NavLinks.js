import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { NavLink } from 'react-router-dom';

import { Menu, Button } from "antd";


const NavLinks = props => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <NavLink to ="/" exact> Home</NavLink>
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