import React, { Component } from 'react';
import ListingCard from './ListingCard';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {ResultText,ListingDiv} from './styled';

<<<<<<< HEAD
// const ResultText = styled.h1`
//   font-size: 1.5em;
//   text-align:center;

// `
=======
>>>>>>> b4e72a9ed9f11279d47458608fed1bbd3a18628a
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
<<<<<<< HEAD
        <div>{listingCards}</div>
=======
        <div>
        {this.state.searchState === 'LOADING' &&
         <div><h1>Loading Listings</h1> 
        {this.state.searchState} }
         4 
         {/* {this.state.data[0].street_address}  */}
         </div>} 
         {this.state.searchState === 'AUTHENTICATED' && 
         <div>
           <ResultText>
            {/* Showing results for: {this.props.searchInput} */}
            Number of results: {this.state.resultsTotal}
            </ResultText>
        <ListingDiv>{listingCards}</ListingDiv>
        </div>
         } 
         {this.state.searchState === 'DENIED' && 
         <div>No results</div> 
         } 
        </div>
>>>>>>> b4e72a9ed9f11279d47458608fed1bbd3a18628a
      </Container>
    );
  }
}

//PropTypes
Listing.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Listing;
