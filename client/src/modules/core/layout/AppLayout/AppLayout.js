import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import { SideBar } from '../SideBar/SideBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function AppLayout(props) {

    return (
        <ScrollToTop>
            <div className='app-layout'>
                <HeaderNav />
                <SideBar />
                <div className='main'>
                    {props.children}
                </div>
            </div>
        </ScrollToTop>

    );
}
