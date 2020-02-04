import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { roleNames } from 'shared';
import { useConstCallback } from '@uifabric/react-hooks';

import { useAuth } from '../../authentication/authContext';
import { User } from '../../../../generated/graphql';
import {
    CommandBar,
    ICommandBarItemProps,
    IContextualMenuItem,
    DefaultButton,
    Persona,
    Stack,
    IStackStyles,
    ICommandBarStyles,
    ContextualMenu,
    PersonaSize,
} from 'office-ui-fabric-react';

interface Props {
    onWaffleClicked: any;
}

const HeaderNav: React.FC<Props> = props => {
    const { user } = useAuth();
    const history = useHistory();

    const generateCommandBarFarItems = (): ICommandBarItemProps[] => {
        let items: IContextualMenuItem[] = [];

        if (isUserProfileValid(user)) {
            items = [
                {
                    key: 'currentUser',
                    text: `Signed in as ${user.firstName} ${user.lastName}`,
                    disabled: true,
                },
                {
                    key: 'myProfile',
                    text: 'Edit My profile',
                    iconProps: {
                        iconName: 'ProfileSearch',
                        style: {
                            color: '#258DE',
                        },
                    },
                    onClick: () => history.push('/userprofile/edit'),
                },
                {
                    key: 'logOut',
                    text: 'Sign out',
                    iconProps: {
                        iconName: 'SignOut',
                        style: {
                            color: '#258DE',
                        },
                    },
                    onClick: () => history.push('/logout'),
                },
            ];
        }

        return [
            {
                key: 'menuItem',
                name: 'menuItem',
                onRender: () => {
                    return (
                        <Stack
                            horizontal
                            styles={commandBarFloatRightStyles}
                        >
                            {user.role === roleNames.VISITOR ? (
                                <DefaultButton
                                    text="Login"
                                    onClick={() =>
                                        history.push('/login')
                                    }
                                />
                            ) : (
                                <LoggedInUser
                                    user={user}
                                    items={items}
                                />
                            )}
                        </Stack>
                    );
                },
            },
        ];
    };

    return (
        <CommandBar
            items={generateCommandBarItems(props)}
            farItems={generateCommandBarFarItems()}
            styles={outerCommandBarStyles}
        />
    );
};

const commandBarFloatRightStyles: IStackStyles = {
    root: {
        marginRight: '10px',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const outerCommandBarStyles: ICommandBarStyles = {
    root: {
        backgroundColor: '#eee',
        height: 50,
        padding: 0,
        boxShadow: '0 4px 6px -6px #222',
    },
};

const isUserProfileValid = (user: User) => {
    return (
        user?.firstName?.trim() &&
        user?.lastName?.trim() &&
        user?.email?.trim()
    );
};

const generateCommandBarItems = (
    props: Props,
): ICommandBarItemProps[] => [
    {
        key: 'WaffleButton',
        iconOnly: true,
        iconProps: {
            iconName: 'Waffle',
            styles: {
                root: {
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 600,
                },
            },
        },
        buttonStyles: {
            root: {
                backgroundColor: '#0078d7',
                width: 50,
            },
            rootHovered: {
                backgroundColor: '#104a7d',
            },
            rootPressed: {
                backgroundColor: '#104a7d',
            },
        },
        onClick: () => {
            props.onWaffleClicked();
        },
    },
    {
        key: 'appName',
        name: 'Spend Plan Tracker',
        buttonStyles: {
            root: {
                backgroundColor: '#eee',
                fontSize: 22,
                marginLeft: 20,
                paddingTop: '5px',
                padding: 0,
            },
            rootHovered: {
                backgroundColor: '#eee',
            },
            rootPressed: {
                backgroundColor: '#eee',
            },
            label: {
                margin: 0,
            },
        },
    },
];

interface LoggedInUserProps {
    user: User;
    items: IContextualMenuItem[];
}

const LoggedInUser: React.FC<LoggedInUserProps> = ({
    items,
    user: { firstName, lastName },
}) => {
    const linkRef = useRef(null);
    const [showContextualMenu, setShowContextualMenu] = useState(
        false,
    );
    const onShowContextualMenu = useConstCallback(() =>
        setShowContextualMenu(true),
    );
    const onHideContextualMenu = useConstCallback(() =>
        setShowContextualMenu(false),
    );

    const initials = `${firstName ? firstName[0] : ''}${
        lastName ? lastName[0] : ''
    }`;

    return (
        <>
            <span ref={linkRef} onClick={onShowContextualMenu}>
                <Persona
                    imageInitials={initials}
                    size={PersonaSize.size32}
                />
            </span>
            <ContextualMenu
                items={items}
                hidden={!showContextualMenu}
                target={linkRef}
                onItemClick={onHideContextualMenu}
                onDismiss={onHideContextualMenu}
            />
        </>
    );
};

export default HeaderNav;
