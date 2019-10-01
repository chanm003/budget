import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import { SideBar } from '../SideBar/SideBar';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

class AppLayout extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.message && this.props.message) {
            toast({
                icon: this.props.icon,
                type: this.props.message.type,
                title: this.props.message.title || '',
                description: this.props.message.description || '',
                size: 'small',
                time: 5000
            })
            this.props.clearMessage();
        }
    }

    render() {
        return (
            <ScrollToTop>
                <div className='app-layout'>
                    <HeaderNav />
                    <SideBar />
                    <div className='main'>
                        {this.props.children}
                        <SemanticToastContainer className="container" position="top-right" />
                    </div>
                </div>
            </ScrollToTop>
        );
    }
}

export default AppLayout;