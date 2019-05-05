import React, { Component } from 'react';
import Listing from '../components/Listing';
import NavbarResultPage from '../components/Navbar';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Map from '../components/Map';
import axios from 'axios';

import { updateSearch } from '../components/redux/actions/searchActions';

class Results extends Component {
  state = {
    searchInput: '',
    searchState: '',
  };

  render() {
    // console.log(`searchValue: ${this.props.searchValue}`);
    // this.setState({
    //   searchInput: this.props.searchValue,
    // })

    return (
      <div>
        {this.state.authenticate}
        <NavbarResultPage />
        <Container fluid>
          <Row>
            <Col className= "px-0">
              <Map />
            </Col>
            <Col className= "px-0" style={{background:"#AADAFF"}}>
              <Listing searchInput={this.props.searchValue}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// const About = (searchValue) => {

// return (

//     <div>
//         <h2>About</h2>
//         {searchValue.value}
//         <Listing/>
//     </div>
// );
// };

const mapStateToProps = state => {
  // console.log(state);
  return {
    searchValue: state.searchReducer.searchValue
  };
};

const mapDispatchToProps = {
  updateSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
