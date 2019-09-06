import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import { SideBar } from '../SideBar/SideBar';
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

class AppLayout extends React.Component {
    render() {
        return (
            <div className='app-layout'>
                <HeaderNav />
                <SideBar />
                <div className='main'>
                    {this.props.children}
                    <SemanticToastContainer className="container" position="top-right"/>
                </div>
            </div>
        );
    }
}

export default AppLayout;