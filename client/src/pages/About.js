import React, { Component } from 'react';
import Listing from '../components/Listing';
import NavbarResultPage from '../components/NavbarResultPage';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Map from '../components/Map';
import axios from 'axios';

import { updateSearch } from '../components/redux/actions/searchActions';

class About extends Component {
  state = {
    searchInput: '',
    searchState: '',
    todos: [
      {
        id: '',
        address: '',
        price: 0,
        distance: 0,
        date: '4/27/2019',
        imgurl:
          'https://sfrecpark.org/wp-content/uploads/Delores-park-san-francisco1-480x286.jpg'
      }
    ]
  };

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
        const data = response.data;
        console.log(data);
        this.setState({
          searchState: 'AUTHENTICATED'
          // id: response
        });
      })
      .catch(e => {
        console.log('error');
        this.setState({
          searchState: 'DENIED'
        });
      });
  };

  render() {
    console.log(`searchValue: ${this.props.searchValue}`);

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
              <Listing />
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
)(About);
