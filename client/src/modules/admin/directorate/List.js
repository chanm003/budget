import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Header } from 'semantic-ui-react'
import {fetchDirectorates} from '../../../modules/admin/directorate/state/actions'
import admin from '../../../routes/admin';
import { getDirectorates } from '../../../modules/admin/directorate/state';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

class List extends React.Component {
    componentDidMount() {
        this.props.fetchDirectorates();
    }
    render() {
        const { directorates } = this.props;
        return (
            <Container fluid>
                
                
                <Segment>
                    <Header as='h3'>Directorates</Header>
                    <Dimmer inverted>
                        <Loader>Loading</Loader>
                    </Dimmer>
                    <Table celled fixed>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    Title
                                    </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {directorates.map(({ _id, title }) => (
                                <Table.Row key={_id}>
                                    <Table.Cell>{title}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Segment>
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