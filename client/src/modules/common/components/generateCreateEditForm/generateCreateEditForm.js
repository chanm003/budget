import React from 'react';

export function generateCreateEditForm(Form, identifyEditableFields) {
    // ...and returns another component...
    const componentToReturn = class extends React.Component {
        componentDidMount() {
            const { itemToEditGuid, fetchItem } = this.props;

            if (itemToEditGuid) {
                fetchItem(itemToEditGuid);
            }
        }

        onSubmit = formValues => {
            const { itemToEditGuid, createItem, updateItem } = this.props;
            if (itemToEditGuid){
                updateItem(itemToEditGuid, formValues);
            } else {
                createItem(formValues);
            }
        }

        render() {
            const { itemToEdit } = this.props;
        
            return (
                <div>
                    {itemToEdit ? this.renderEditForm(itemToEdit) : this.renderCreateForm()}
                </div>
            );
        }
    
        renderCreateForm() {
            return (
                <Form onSubmit={this.onSubmit}></Form>
            );
        }
    
        renderEditForm(itemToEdit) {
            const initialValues = identifyEditableFields(itemToEdit);
            return (
                <Form initialValues={initialValues} onSubmit={this.onSubmit}></Form>
            );
        }
    };

    return componentToReturn;
}