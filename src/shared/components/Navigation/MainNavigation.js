
import React from 'react';

import { Link } from 'react-router-dom';

import { Menu } from "antd";

import MainHeader from './MainHeader';



const MainNavigation = props => {
    return (
         <MainHeader>
                <button>
                    <span />
                    <span />
                    <span />
                </button>
                <h1>
                    <Link to="/">Home</Link>
                </h1>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
         </MainHeader>
    )

}

export default MainNavigation;