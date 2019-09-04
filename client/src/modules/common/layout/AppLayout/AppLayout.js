import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import { SideBar } from '../SideBar/SideBar';

export function AppLayout(props) {
    return (
        <div className='app-layout'>
            <HeaderNav />
            <SideBar />
            <div className='main'>
                {props.children}
            </div>
        </div>
    );
}