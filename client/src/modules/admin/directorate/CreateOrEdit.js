import React from 'react';
import { fetchDirectorate } from '../directorate/state';
import { connect } from 'react-redux';

class CreateOrEdit extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.fetchDirectorate(id);
        }
    }

    render() {
        return (
            <div>{this.props.itemToEdit ? this.props.itemToEdit.title : '' }</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemToEdit: state.directorates.byId[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchDirectorate })(CreateOrEdit)