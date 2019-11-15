import React, { useState } from 'react';
import { Button, Confirm } from 'semantic-ui-react';


export default function DeleteButton(props) {
    const [open, setOpen] = useState(false);

    const handleConfirm = () => {
        const { guid, onDeleteConfirm } = props;
        onDeleteConfirm(guid);
        //.then() hide modal then show taste
        setOpen(false)
    }

    const header = props.confirmHeader || 'Confirm Deletion';
    const message = props.confirmMessage || 'Are you sure you want to delete this item?';
    return (
        <React.Fragment>
            <Button color='red' icon='delete' onClick={() => setOpen(true)} />
            <Confirm
                open={open}
                header={header}
                content={message}
                onCancel={() => setOpen(false)}
                onConfirm={handleConfirm}
            />
        </React.Fragment>
    );
}