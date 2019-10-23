import React, { useEffect } from 'react';
import './AppLayout.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import { SideBar } from '../SideBar/SideBar';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { useStore } from '../../../../context';

export default function AppLayout(props) {
    const { common: { message, clearToast } } = useStore();

    useEffect(() => {
        if (message) {
            toast({
                icon: message.icon || 'check',
                type: message.type || 'success',
                title: message.title || 'test',
                description: message.description || 'test desc',
                size: 'small',
                time: 5000,
                onDismiss: () => { }
            })
            clearToast();
        }
    }, [clearToast, message]);

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
