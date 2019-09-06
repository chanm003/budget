import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Button, Icon } from 'semantic-ui-react'
import admin from '../../../routes/admin';
import { deleteDirectorate, fetchDirectorates, getDirectorates } from '../../../modules/admin/directorate/state';
import LoadingSegment from '../../../modules/common/components/LoadingSegment/LoadingSegment';
import DeleteButton from '../../../modules/common/components/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';

class List extends React.Component {
    componentDidMount() {
        this.props.fetchDirectorates();
    }

    renderActionButtons() {
        return (
            <Link to={admin.directorateCreate.path}>
                <Button primary>
                    <Icon name='add' /> New
                </Button>
            </Link>
        );
    }

    render() {
        const { directorates: { items, isLoading }, deleteDirectorate } = this.props;
        return (
            <Container fluid>
                <LoadingSegment heading="Directorates" headingActions={this.renderActionButtons()} isLoading={isLoading}>
                    <Table celled compact='very'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    Title
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                                items.length > 0
                                    ?   items.map(({ _id, title }) => (
                                            <Table.Row key={_id}>
                                                <Table.Cell>{title}</Table.Cell>
                                                <Table.Cell collapsing textAlign='right'>
                                                    <Link to={admin.directorateEdit.path(_id)}>
                                                        <Button icon='pencil' primary />
                                                    </Link>
                                                    <DeleteButton guid={_id} onDeleteConfirm={(guid) => deleteDirectorate(guid)}/>
                                                </Table.Cell>
                                            </Table.Row>
                                        ))
                                    :   <Table.Row>
                                            <Table.Cell colSpan='2'>No items to render</Table.Cell>
                                        </Table.Row>
                            }
                        </Table.Body>
                    </Table>
                </LoadingSegment>

            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        directorates: getDirectorates(state)
    };
};

export default connect(
    mapStateToProps,
    { fetchDirectorates, deleteDirectorate }
)(List);