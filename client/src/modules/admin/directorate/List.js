import React from 'react';
import { connect } from 'react-redux';
import { Container, Button, Table } from 'semantic-ui-react'
import admin from '../../../routes/admin';
import { deleteItem, fetchItems, getDirectorates } from '../../../modules/admin/directorate/state';
import DeleteButton from '../../../modules/common/components/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import ItemsTabular from '../../common/components/Table/Table';

class List extends React.Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    tableHeaderRowRender = () => (
        <Table.Row>
            <Table.HeaderCell>
                Title
            </Table.HeaderCell>
            <Table.HeaderCell>
            </Table.HeaderCell>
        </Table.Row>
    )

    tableRowRender = ({ _id, title }) => (
        <Table.Row key={_id}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell collapsing textAlign='right'>
                <Link to={admin.directorateEdit.path(_id)}>
                    <Button icon='pencil' primary />
                </Link>
                <DeleteButton guid={_id} onDeleteConfirm={(guid) => this.props.deleteItem(guid)}/>
            </Table.Cell>
        </Table.Row>
    )

    tableRowNoItemsMessage = () => (
        <Table.Row>
            <Table.Cell colSpan='2'>No directorates have been added by an administrator</Table.Cell>
        </Table.Row>
    );

    render() {
        const { items, isLoading } = this.props;
        return (
            <Container fluid>
                <ItemsTabular 
                    heading="Directorates"
                    isLoading={isLoading}
                    items={items}
                    createItemPath={admin.directorateCreate.path}
                    tableHeaderRowRender={this.tableHeaderRowRender}
                    tableRowRender={this.tableRowRender}
                    tableRowNoItemsMessage={this.tableRowNoItemsMessage}>
                </ItemsTabular>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...getDirectorates(state)
    };
};

export default connect(
    mapStateToProps,
    { fetchItems, deleteItem }
)(List);