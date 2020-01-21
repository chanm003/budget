import React from 'react';
import { Icon, Menu, SemanticICONS } from 'semantic-ui-react';
import './SideBarItem.css';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

interface Props {
    path?: string;
    label: string;
    icon: SemanticICONS;
}

const SideBarItem: React.FC<Props> = props => {
    const location = useLocation();
    const shouldBeHighlighted = () => {
        if (props.path) {
            const { pathname } = location;
            if (props.path === '/') {
                return pathname === props.path;
            }
            return pathname.includes(props.path);
        }
        return false;
    };

    // React will ignore custom boolean attributes, therefore we pass a string
    // we use this attribute in our SCSS for styling
    const highlight = shouldBeHighlighted() ? 'highlight-item' : null;
    return (
        <Link to={{ pathname: props.path }}>
            <Menu.Item
                className={['sidebar-item', highlight].join(' ')}
            >
                <div className="sidebar-item-alignment-container">
                    <span>
                        <Icon size="large" name={props.icon} />{' '}
                    </span>
                    <span>{props.label}</span>
                </div>
            </Menu.Item>
        </Link>
    );
};

export default SideBarItem;
