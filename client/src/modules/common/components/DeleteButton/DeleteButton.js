import React from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import { toast } from 'react-semantic-toasts';

export default class DeleteButton extends React.Component {
    state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = () => {
        const { guid, onDeleteConfirm } = this.props;
        onDeleteConfirm(guid);
        //.then() hide modal then show taste
        this.setState({ open: false });
        toast({
            type: 'success',
            title: this.props.toastHeader || 'Item Deleted',
            description: this.props.toastMessage || 'This item has been deleted',
            size: 'small',
            time: 5000
        });
    }
    handleCancel = () => this.setState({ open: false })

    render() {
        const header = this.props.confirmHeader || 'Confirm Deletion';
        const message = this.props.confirmMessage || 'Are you sure you want to delete this item?';
        return (
           <React.Fragment>
                <Button color='red' icon='delete' onClick={this.show} />
                <Confirm
                    open={this.state.open}
                    header={header}
                    content={message}
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                    />
           </React.Fragment>
        );
    }
}