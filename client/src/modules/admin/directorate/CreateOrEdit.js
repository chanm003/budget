import React from 'react';
import { fetchDirectorate, createDirectorate } from '../directorate/state';
import { connect } from 'react-redux';
import Form from './Form';
import _ from 'lodash';

class CreateOrEdit extends React.Component {
    componentDidMount() {
        const { itemToEditGuid, fetchItem } = this.props;
        if (itemToEditGuid) {
            fetchItem(itemToEditGuid);
        }
    }

    onSubmit = formValues => {
        const { itemToEditGuid, createItem } = this.props;
        if (!itemToEditGuid){
            createItem(formValues);
        }
    }

    render() {
        const { itemToEditGuid, itemToEdit } = this.props;
        return (
            <div>
                {itemToEditGuid ? this.renderEditForm(itemToEdit) : this.renderCreateForm()}
            </div>
        );
    }

    renderCreateForm() {
        return (
            <Form onSubmit={this.onSubmit}></Form>
        );
    }

    renderEditForm(itemToEdit) {
        return (
            <Form initialValues={identifyEditableFields(itemToEdit)} onSubmit={this.onSubmit}></Form>
        );
    }
}

const identifyEditableFields = itemToEdit => {
    return _.pick(itemToEdit, 'title');
}

const mapStateToProps = (state, ownProps) => {
    const itemToEditGuid = ownProps.match.params.id;
    return {
        itemToEditGuid,
        itemToEdit: state.directorates.byId[itemToEditGuid]
    }
}

export default connect(mapStateToProps, { fetchItem: fetchDirectorate, createItem: createDirectorate })(CreateOrEdit)