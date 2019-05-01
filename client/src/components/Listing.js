import React, { Component } from 'react';
import ListingCard from './ListingCard';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Listing extends Component {
  state = {
    searchInput: '',
    todos: [
      {
        id: 1,
        address: '1600 Holloway Ave',
        price: 1000,
        distance: 3,
        date: '4/27/2019',
        imgurl:
          'https://sfrecpark.org/wp-content/uploads/Delores-park-san-francisco1-480x286.jpg'
      },
      {
        id: 1,
        address: '1600 Holloway Ave',
        price: 1000,
        distance: 3,
        date: '4/27/2019',
        imgurl:
          'https://sfrecpark.org/wp-content/uploads/Delores-park-san-francisco1-480x286.jpg'
      },
      {
        id: 1,
        address: '1600 Holloway Ave',
        price: 1000,
        distance: 3,
        date: '4/27/2019',
        imgurl:
          'https://sfrecpark.org/wp-content/uploads/Delores-park-san-francisco1-480x286.jpg'
      }
    ]
  };
  //In this render method we map the todos array to another component that extracts
  //the info and displays them in a card
  //
  render() {
    console.log(this.state);
    let listingCards = this.state.todos.map(todo => {
      return (
        <Col>
          <ListingCard key={todo.id} todo={todo} />
        </Col>
      );
    });
    return (
      <Container>
        <Row>{listingCards}</Row>
      </Container>
    );
  }
}

//PropTypes
Listing.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Listing;
