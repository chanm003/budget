import React from 'react';
import { Icon, Menu } from "semantic-ui-react";
import './SideBarItem.scss';
import { Link, withRouter } from 'react-router-dom';

function SideBarItem(props) {
    const shouldBeHighlighted = () => {
        const { pathname } = props.location;
        if (props.path === '/') {
            return pathname === props.path;
        }
        return pathname.includes(props.path);
    }

    // React will ignore custom boolean attributes, therefore we pass a string
    // we use this attribute in our SCSS for styling
    const highlight = shouldBeHighlighted() ? 'highlight-item' : null;
    return (
        <Link to={{ pathname: props.path }}>
            <Menu.Item className={['sidebar-item', highlight].join(' ')}>
                <div className='sidebar-item-alignment-container'>
                    <span><Icon size='large' name={props.icon} /> </span>
                    <span>{props.label}</span>
                </div>
            </Menu.Item>
        </Link>
    );
}

export default withRouter(SideBarItem);

