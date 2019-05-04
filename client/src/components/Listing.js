import React, { Component } from 'react';
import ListingCard from './ListingCard';
import PropTypes from 'prop-types';
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
    let listingCards = this.state.todos.map(todo => {
      return (
        
          <ListingCard key={todo.id} todo={todo} />
        
      );
    });
    return (
      <Container>
        <h1>There are # amount of listings.</h1>
        {listingCards}
      </Container>
    );
  }
}

//PropTypes
Listing.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Listing;
