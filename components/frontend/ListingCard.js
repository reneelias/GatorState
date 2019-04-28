import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export class ListingCard extends Component {
    render() {
        return (
                <Card border="secondary" style={itemStyle}>
                    <Card.Img variant="top"src={this.props.todo.imgurl} />
                    <Card.Body>
                        <Card.Title>
                            Address: {this.props.todo.address}
                        </Card.Title>
                        <Card.Text>
                            Price: {this.props.todo.price}
                            Distance: {this.props.todo.distance} miles
                        </Card.Text>
                        <Button variant="primary">View Listing</Button>
                    </Card.Body>
                </Card>
        );
    }
}

//PropTypes
ListingCard.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: 'white',
    width: '18rem'
}
export default ListingCard;
