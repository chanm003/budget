import React from 'react';
import { routeConfig } from '../../../../combineRoutes';
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
                                    url:
                                        routeConfig.DirectorateMany
                                            .path,
                                    key: generateDynamicKeyBasedOnInclusion(
                                        pathname,
                                        routeConfig.DirectorateMany
                                            .path,
                                    ),
                                },
                                {
                                    name: 'MFP Indicators',
                                    url:
                                        routeConfig.MfpIndicatorMany
                                            .path,
                                    key: generateDynamicKeyBasedOnInclusion(
                                        pathname,
                                        routeConfig.MfpIndicatorMany
                                            .path,
                                    ),
                                },
                                {
                                    name: 'Programs',
                                    url: routeConfig.ProgramMany.path,
                                    key: generateDynamicKeyBasedOnInclusion(
                                        pathname,
                                        routeConfig.ProgramMany.path,
                                    ),
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

const generateDynamicKeyBasedOnInclusion = (
    pathname: string,
    basePathForResource: string,
): string => {
    return pathname.includes(basePathForResource)
        ? pathname
        : basePathForResource;
};
