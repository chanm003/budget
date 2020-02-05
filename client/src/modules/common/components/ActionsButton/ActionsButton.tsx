import React from 'react';
import {
    IContextualMenuItem,
    ContextualMenuItemType,
    DefaultButton,
} from 'office-ui-fabric-react';

export interface ActionButtonProps {
    onEditItemClicked: () => void;
    onDeleteItemClicked: () => void;
}

export const ActionsButton: React.FC<ActionButtonProps> = ({
    onEditItemClicked,
    onDeleteItemClicked,
}) => {
    const menuItems: IContextualMenuItem[] = [
        {
            key: 'actionsSections',
            itemType: ContextualMenuItemType.Section,
            sectionProps: {
                topDivider: true,
                bottomDivider: true,
                title: 'Actions',
                items: [
                    {
                        key: 'editItem',
                        text: 'Edit',
                        iconProps: {
                            iconName: 'Edit',
                        },
                        onClick: onEditItemClicked,
                    },
                    {
                        key: 'deleteItem',
                        text: 'Delete',
                        iconProps: {
                            iconName: 'Delete',
                        },
                        onClick: onDeleteItemClicked,
                    },
                ],
            },
        },
    ];
    return (
        <DefaultButton
            styles={{
                root: {
                    height: '22px',
                },
            }}
            text="Actions"
            menuProps={{ items: menuItems }}
        />
    );
};
