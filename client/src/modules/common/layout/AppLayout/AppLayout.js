import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import { SideBar } from '../SideBar/SideBar';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function AppLayout(props) {
    setTimeout(() => {
        const message = {}
        toast({
            icon: message.icon || 'check',
            type: message.type || 'success',
            title: message.title || 'test',
            description: message.description || 'test desc',
            size: 'small',
            time: 5000
        })

    }, 2000);

    return (
        <ScrollToTop>
            <div className='app-layout'>
                <HeaderNav />
                <SideBar />
                <div className='main'>
                    {props.children}
                    <SemanticToastContainer className="container" position="top-right" />
                </div>
            </div>
        </ScrollToTop>
    );
}
