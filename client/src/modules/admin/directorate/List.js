import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Header } from 'semantic-ui-react'
import { fetchDirectorates } from '../../../store/directorate';

class DirectorateList extends React.Component {
    componentDidMount() {
        this.props.fetchDirectorates();
    }
    render() {
        const { directorates } = this.props;
        return (
            <Container fluid>
                <Header as='h2'>Directorates</Header>
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
            </Container>
        );
    }
}

const mapStateToProps = ({ directorate }) => {
    console.log(directorate)
    return {
        directorates: directorate.items
    };
};

export default connect(
    mapStateToProps,
    { fetchDirectorates }
)(DirectorateList);