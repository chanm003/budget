import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Header } from 'semantic-ui-react'
import { fetchBudgetCategories } from '../../../store/budgetCategory';

class BudgetCategoryList extends React.Component {
    componentDidMount() {
        this.props.fetchBudgetCategories();
    }
    render() {
        const { categories } = this.props;
        return (
            <Container fluid>
                <Header as='h2'>Budget Categories</Header>
                <Table celled fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                Title
                                </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {categories.map(({ _id, title }) => (
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

const mapStateToProps = ({ budgetCategory }) => {
    console.log(budgetCategory)
    return {
        categories: budgetCategory.items
    };
};

export default connect(
    mapStateToProps,
    { fetchBudgetCategories }
)(BudgetCategoryList);