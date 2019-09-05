import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Button, Icon } from 'semantic-ui-react'
import admin from '../../../routes/admin';
import { fetchDirectorates, getDirectorates } from '../../../modules/admin/directorate/state';
import LoadingSegment from '../../../modules/common/components/LoadingSegment/LoadingSegment';
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

    remove = (id) => {
        let check = window.confirm('Are you sure you want to delete this item?')

        if (check) {
            console.log('Deleting...', id)
        }
    }
    render() {
        const { directorates: { items, isLoading } } = this.props;
        return (
            <Container fluid>
                <LoadingSegment heading="Directorates" headingActions={this.renderActionButtons()} isLoading={isLoading}>
                    <Table celled>
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
                                                    <Button color='red' icon='delete' onClick={() => this.remove(_id)} />
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
    { fetchDirectorates }
)(List);