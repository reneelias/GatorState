import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Filter from './Filter';

import { connect } from 'react-redux';
import {
  updateSearch,
} from '../redux/actions/searchActions';
import Jumbotron from 'react-bootstrap/Jumbotron';



class Search extends Component {
  state = {
    "searchInput": ""
    // {
    //   "address": "",
    //   "zipcode": "",
    //   "city": ""
    // }
  }

  onSearchHandler = event => {
    const {searchInput} = this.state
    this.setState({
      "searchInput" : event.target.value
      // {
      //   "address": event.target.value,
      //   "zipcode": event.target.value,
      //   "city": event.target.value
      // }
    })

    console.log(searchInput);

  }

  // onSearchButtonClick = event => {
  //   const {searchInput} = this.state;
  //   this.setState({
  //     "searchInput" : event.target.value
  //   })
  //   updateSearch(searchInput);
  // }

  render(){
  const {searchInput} = this.state  
  // console.log(this.state);
  return (
    <div>
      <Jumbotron fluid>
        <div className="overlay">
        <Container>
          <Col>
            <h1>Gator State</h1>
            <p>
            Find your home away from home
            </p>
          </Col>
          <Col md="7" >
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <Filter/>
              </InputGroup.Prepend>
                    <FormControl 
                    placeholder= "Search by address, zipcode, or city"
                    // onChange={this.onSearchHandler}
                    onChange={(e) => {
                      this.props.updateSearch(e.target.value);
                    }}
                    //value={searchInput}
                    />
                    <InputGroup.Append>
                        {/* <Button variant="outline-primary"><Link to={{pathname:"/about", searchValue: searchInput}}>Search</Link></Button> */}
                        {/* <Button onClick={this.onSearchButtonClick} variant="outline-primary"><Link to="/about">Search</Link></Button> */}
                        
                        <Button variant="primary" style={{color:"white"}}><Link to="/about">Search</Link></Button>
                    </InputGroup.Append>
                </InputGroup>            
            </Col>       
        </Container>
        </div>
      </Jumbotron>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    searchValue: state.searchReducer.searchValue,
  };
};

const mapDispatchToProps = {
  updateSearch,
};
// function searchButtonClick()  {
//   const {searchInput} = this.state;
//   this.props.router.push('/about');
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
