import React from 'react';
import { Menu } from 'semantic-ui-react';
import './SideBarHeader.scss';

interface Props {
    title?: string;
}

export const SideBarHeader: React.FC<Props> = props => {
    const heading = props.title ? props.title.toUpperCase() : '';
    return (
        <Menu.Item>
            <Menu.Header className="side-bar-header">
                {heading}
            </Menu.Header>
        </Menu.Item>
    );
};
