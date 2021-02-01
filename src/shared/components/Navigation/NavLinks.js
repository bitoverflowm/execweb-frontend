import React from 'react';

import { NavLink } from 'react-router-dom';

import { Menu } from "antd";


const NavLinks = props => {
    return (
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
                <NavLink to ="/SponsorRequest" exact> SPONSOR AN EVENT</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <NavLink to ="/u1/SponsorHome"> Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
                <NavLink to ="/auth"> Register </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
                <NavLink to ="/adminDashboard"> Admin Dashboard </NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default NavLinks;