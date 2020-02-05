import React from 'react';
import {
    DefaultButton,
    PrimaryButton,
    DialogFooter,
    Dialog,
    DialogType,
} from 'office-ui-fabric-react';

export interface DeleteDialogState {
    visible: boolean;
    subText?: string;
    guidToDelete?: string;
}
export interface DeleteDialogProps {
    dialogState: DeleteDialogState;
    close: () => void;
    onDeleteButtonClicked: (guid: string) => {};
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
    dialogState,
    close,
    onDeleteButtonClicked,
}) => {
    const onConfirmButtonClicked = () => {
        close();
        if (dialogState.guidToDelete) {
            onDeleteButtonClicked(dialogState.guidToDelete);
        }
    };

    return (
        <Dialog
            hidden={!dialogState.visible}
            onDismiss={close}
            dialogContentProps={{
                type: DialogType.normal,
                title: 'Confirm Delete',
                closeButtonAriaLabel: 'Close',
                subText: dialogState.subText,
            }}
            modalProps={{
                isBlocking: false,
                styles: { main: { maxWidth: 450 } },
            }}
        >
            <DialogFooter>
                <PrimaryButton
                    onClick={onConfirmButtonClicked}
                    text="Delete"
                />
                <DefaultButton onClick={close} text="Cancel" />
            </DialogFooter>
        </Dialog>
    );
};
