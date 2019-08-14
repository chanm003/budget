import React from 'react';
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";

export default props => (
    <div className="grid">
        <div className="menu">
            <TopMenu/>
        </div>
        <div className="main-content">
            <SideMenu>
                {props.children}
            </SideMenu>
        </div>
    </div>
);
