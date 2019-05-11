import React, { Component } from 'react';
import ListingCard from './ListingCard';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import styled from 'styled-components';

// const ResultText = styled.h1`
//   font-size: 1.5em;
//   text-align:center;

// `
class Listing extends Component {
  state = {
    searchInput: '',
    todos: [],
  };


  //In this render method we map the todos array to another component that extracts
  //the info and displays them in a card
  //
  render() {
    var listingCards;
      listingCards = this.props.todos.map(todo => {
        return (
            <ListingCard key={todo.id} todo={todo} />
        );
      });
    
    return (
      <Container>
        <div>{listingCards}</div>
      </Container>
    );
  }
}

//PropTypes
Listing.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Listing;
