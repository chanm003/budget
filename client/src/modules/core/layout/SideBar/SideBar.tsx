import React from 'react';
import { routes } from '../../../../routes';
import { useLocation, useHistory } from 'react-router';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';

export const SideBar: React.FC = () => {
    const history = useHistory();
    const { pathname } = useLocation();

    const onLinkClick = (
        ev?: React.MouseEvent<HTMLElement>,
        item?: INavLink,
    ) => {
        if (ev && item) {
            ev.preventDefault();
            history.push(item.url);
        }
    };

    return (
        <Nav
            onLinkClick={onLinkClick}
            selectedKey={pathname}
            selectedAriaLabel="Selected"
            styles={{
                root: {
                    width: '17rem',
                    boxSizing: 'border-box',
                    border: '1px solid #eee',
                    overflowY: 'auto',
                },
            }}
            groups={[
                {
                    links: [
                        {
                            name: 'Home',
                            url: '/',
                            key: '/',
                            icon: 'home',
                        },
                        {
                            name: 'Admin',
                            url: '',
                            links: [
                                {
                                    name: 'Directorates',
                                    url: routes.directorateList.path,
                                    key: pathname.includes(
                                        routes.directorateList.path,
                                    )
                                        ? pathname
                                        : routes.directorateList.path,
                                },
                            ],
                            isExpanded: true,
                        },
                    ],
                },
            ]}
        />
    );
};
