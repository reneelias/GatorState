import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Filter from './Filter';

import { connect } from 'react-redux';
import { updateSearch } from '../components/redux/actions/searchActions';

class Search extends Component {
  state = {
    searchInput: ''
    // {
    //   "address": "",
    //   "zipcode": "",
    //   "city": ""
    // }
  };

  onSearchHandler = event => {
    const { searchInput } = this.state;
    this.setState({
      searchInput: event.target.value
      // {
      //   "address": event.target.value,
      //   "zipcode": event.target.value,
      //   "city": event.target.value
      // }
    });

    console.log(searchInput);
  };

  // onSearchButtonClick = event => {
  //   const {searchInput} = this.state;
  //   this.setState({
  //     "searchInput" : event.target.value
  //   })
  //   updateSearch(searchInput);
  // }

  render() {
    const { searchInput } = this.state;
    // console.log(this.state);
    return (
      <div className="App">
        <Jumbotron>
          <Container>
            <h1>Gator State</h1>
            <p>Find your home away from home</p>
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search by address, zipcode, or city"
                  // onChange={this.onSearchHandler}
                  onChange={e => {
                    this.props.updateSearch(e.target.value);
                  }}
                  //value={searchInput}
                />
                <InputGroup.Append>
                  {/* <Button variant="outline-primary"><Link to={{pathname:"/about", searchValue: searchInput}}>Search</Link></Button> */}
                  {/* <Button onClick={this.onSearchButtonClick} variant="outline-primary"><Link to="/about">Search</Link></Button> */}
                  <Button variant="outline-primary">
                    <Link to="/about">Search</Link>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              <Filter />
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    searchValue: state.searchReducer.searchValue
  };
};

const mapDispatchToProps = {
  updateSearch
};
// function searchButtonClick()  {
//   const {searchInput} = this.state;
//   this.props.router.push('/about');
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
