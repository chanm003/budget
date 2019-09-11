import { fetchItem, createItem, updateItem } from '../program/state';
import { connect } from 'react-redux';
import Form from './Form';
import _ from 'lodash';
import { generateCreateEditForm } from '../../common/components/generateCreateEditForm/generateCreateEditForm';


const identifyEditableFields = itemToEdit => {
    return _.pick(itemToEdit, 'title');
}

const mapStateToProps = (state, ownProps) => {
    const itemToEditGuid = ownProps.match.params.id;
    return {
        itemToEditGuid,
        itemToEdit: state.programs.byId[itemToEditGuid]
    }
}

const createEditForm = generateCreateEditForm(Form, identifyEditableFields);
export default connect(mapStateToProps, { fetchItem, createItem, updateItem })(createEditForm);