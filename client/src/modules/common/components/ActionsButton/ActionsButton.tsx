import React from 'react';
import {
    IContextualMenuItem,
    ContextualMenuItemType,
    DefaultButton,
} from 'office-ui-fabric-react';
import { useAuth } from '../../../core/authentication/authContext';
import { hasPermissions } from '../../../core/security/Can';
import { User } from '../../../../generated/graphql';

export interface ActionButtonProps {
    onEditItemPermissions: string;
    onDeleteItemPermissions: string;
    onEditItemClicked: () => void;
    onDeleteItemClicked: () => void;
}

export const ActionsButton: React.FC<ActionButtonProps> = props => {
    const { user } = useAuth();

    const items = generateMenuItems(user, props);

    return (
        <DefaultButton
            styles={{
                root: {
                    height: '22px',
                },
            }}
            disabled={items.length === 0}
            text="Actions"
            menuProps={{ items }}
        />
    );
};

const generateMenuItems = (
    user: User,
    {
        onEditItemPermissions,
        onEditItemClicked,
        onDeleteItemClicked,
        onDeleteItemPermissions,
    }: ActionButtonProps,
): IContextualMenuItem[] => {
    const actionsMenuItems: IContextualMenuItem[] = [];
    if (hasPermissions(user, onEditItemPermissions)) {
        actionsMenuItems.push({
            key: 'editItem',
            text: 'Edit',
            iconProps: {
                iconName: 'Edit',
            },
            onClick: onEditItemClicked,
        });
    }

    if (hasPermissions(user, onDeleteItemPermissions)) {
        actionsMenuItems.push({
            key: 'deleteItem',
            text: 'Delete',
            iconProps: {
                iconName: 'Delete',
            },
            onClick: onDeleteItemClicked,
        });
    }

    if (!actionsMenuItems.length) {
        return [];
    }

    const menuItems: IContextualMenuItem[] = [
        {
            key: 'actionsSections',
            itemType: ContextualMenuItemType.Section,
            sectionProps: {
                topDivider: true,
                bottomDivider: true,
                title: 'Actions',
                items: actionsMenuItems,
            },
        },
    ];

    return menuItems;
};
