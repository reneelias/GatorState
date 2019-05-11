import React, { Component } from 'react';
import ListingCard from './ListingCard';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {ResultText,ListingDiv} from './styled';

class Listing extends Component {
  state = {
    searchInput: '',
    data: null,
    searchState: 'LOADING',
    todos: [],
    resultsTotal: 0,
  };

  // resultsArr = [];
  // var len

  componentDidMount() {
    this.authenticate();
  }

  authenticate = async () => {
    this.setState({
      searchState: 'LOADING'
    });

    var urlString;
    if(this.props.searchInput === "" || this.props.searchInput === null)
    {
      urlString = `http://gatorstate.tk/api/listings`;
    }
    else
    {
      urlString = `http://gatorstate.tk/api/listingsSearch/${this.props.searchInput}`
    }
    await axios
      .get(urlString)
      .then(response => {
        const resData = response.data;
        console.log('Response');
        console.log(response);
        console.log(response.data);
        var i = 1;

        if(resData[0].street_address != null){
          (resData).forEach(element => {
            this.state.todos.push({
              id: i,
              address: `${element.street_address}, ${element.zip_code}`,
              price: element.price,
              distance: 3,
              date: '4/27/2019',
              imgurl: `${element.images}`
            })
            i++;
            
          });
        
          i = i-1;
          this.setState({
            searchState: 'AUTHENTICATED',
             data: resData,
             resultsTotal: i,
          });
          
        }
        else {
          this.setState({
            searchState: 'DENIED'
          });
        }
        // console.log(`data: ${this.state.data}`);
      })
      .catch(e => {
        console.log('error');
        this.setState({
          searchState: 'DENIED'
        });
      });
  };

  //In this render method we map the todos array to another component that extracts
  //the info and displays them in a card
  //
  render() {

    console.log(`searchInput: ${this.props.searchInput}`);
    var listingCards;
    if(this.state.searchState === 'AUTHENTICATED')
    {
      console.log(`data: ${this.state.data[0].street_address}`);
      listingCards = this.state.todos.map(todo => {
        return (
            <ListingCard key={todo.id} todo={todo} />
        );
      });

      console.log(this.state.resultsTotal);
    }
    
    return (
      <Container>
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
      </Container>
    );
  }
}

//PropTypes
Listing.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Listing;
