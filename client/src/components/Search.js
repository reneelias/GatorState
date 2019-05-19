import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import FilterSelection from './FilterSelection';

import { connect } from 'react-redux';
import { updateSearch } from '../components/redux/actions/searchActions';

const LinkButton = styled(Link)`
  textDecoration: none;
  display: inline-block;
  font-size: 1em;
  color: white;
  background: rgb(0, 123, 255);
  border-radius: 3px;
  font: sans serif;
  height: 38px;
  margin: auto;
  padding: 0.25em 1em;
    
}
`

class Search extends Component {
  state = {
    searchInput: {
      search: '',
      address: '',
      zipcode: '',
      city: '',
      price: '',
      distance: '',
      type: ''
    }
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
          <Container style={{width: '600px'}}>
              <InputGroup>
              <InputGroup.Prepend>
                <FilterSelection />
              </InputGroup.Prepend>
                <FormControl
                  placeholder="Search by address, zipcode, or city..."
                  
                  // onChange={this.onSearchHandler}
                  onChange={e => {
                    this.props.updateSearch(e.target.value);
                  }}
                  //value={searchInput}
                />
                <InputGroup.Append>
                  {/* <Button variant="outline-primary"><Link to={{pathname:"/about", searchValue: searchInput}}>Search</Link></Button> */}
                  {/* <Button onClick={this.onSearchButtonClick} variant="outline-primary"><Link to="/about">Search</Link></Button> */}
                  
                  
                    <LinkButton to="/results" style={{ textDecoration: 'none', color: 'white' }}>Search</LinkButton>
                  
                </InputGroup.Append>
              </InputGroup>
          </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('map state to props:')
  console.log(state);
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
