import React from 'react';

import { Layout } from 'antd';

import './MainHeader.css';

const { Header } = Layout;

const MainHeader = props => {
    return <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'transparent', marginBottom: 10 }}>
                {props.children}                
            </Header>    
};

export default MainHeader;