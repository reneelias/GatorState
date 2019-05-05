import React, { Component } from 'react';
import ListingCard from './ListingCard';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class Listing extends Component {
  state = {
    searchInput: '',
    data: '',
    searchState: 'LOADING',
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

  // resultsArr = [];
  // var len

  componentDidMount() {
    this.authenticate();
  }

  authenticate = async () => {
    this.setState({
      searchState: 'LOADING'
    });

    await axios
      .get(`http://localhost:3001/listingsSearch/${this.props.searchValue}`)
      .then(response => {
        const resData = response.data;
        // var len = data[0].length;
        // console.log(`len = ${len}`);
        // console.log(`response:`);
        // console.log(response);
        // console.log(`YO!`);
        console.log('Response');
        console.log(response);
        // console.log(resData);
        // console.log(response.data);
        // console.log(`data[0]: ${data[0][0]}`);
        
        this.setState({
          searchState: 'AUTHENTICATED',
          // data: response.data
          // id: response
        });
        console.log(`data: ${this.state.data}`);
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
    console.log(`data: ${this.props.data}`);
    let listingCards = this.state.todos.map(todo => {
      return (
          <ListingCard key={todo.id} todo={todo} />
      );
    });
    
    return (
      <Container>
        <div>
        {this.state.searchState === 'LOADING' &&
        <div><h1>There are # amount of listings.</h1>
        {/* {this.state.searchState} */}
        4
        {this.props.data}
        </div>}
        {this.state.searchState === 'AUTHENTICATED' &&
        <div>{listingCards}</div>
        }
        {this.state.searchState === 'DENIED' &&
        <div>Not good</div>
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
