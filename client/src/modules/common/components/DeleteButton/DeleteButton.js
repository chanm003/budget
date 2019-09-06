import React from 'react';
import { Button, Confirm } from 'semantic-ui-react';

export default class DeleteButton extends React.Component {
    state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = () => {
        const { guid, onDeleteConfirm } = this.props;
        onDeleteConfirm(guid);
        //.then() hide modal then show taste
        this.setState({ open: false });
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