import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import searchReducer from '../redux/reducers/searchReducer';
export class ListingCard extends Component {
    render() {
        return (
        <Container >
            <Card className= "flex-row flex-wrap ">
                <Card.Header className="card-header border-0">
                    <img src="//placehold.it/200" alt="" />
                </Card.Header>
                <Card.Body>
                    <Card.Title>Address</Card.Title>
                    {/* <h3>{this.props.todo.price}</h3> */}
                    <h3>15000</h3>
                    {/* <h3>{this.state.searchReducer.se}</h3> */}
                    {/* <h4>Miles from SFSU: {this.props.todo.distance}</h4> */}
                    <h4>Miles from SFSU: 5</h4>
                </Card.Body>
            </ Card>
        </ Container>
        );
    }
}

//PropTypes
ListingCard.propTypes = {
    todo: PropTypes.object.isRequired
};
export default ListingCard;
