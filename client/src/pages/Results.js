import React, { Component } from 'react';
import Listing from '../components/Listing';
import NavbarResultPage from '../components/Navbar';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MapContainer from '../components/Map';
import axios from 'axios';
import styled from 'styled-components';

import { updateSearch } from '../components/redux/actions/searchActions';

const ResultText = styled.h1`
  font-size: 1.5em;
  text-align:center;

`

class Results extends Component {
  state = {
    searchInput: '',
    searchState: '',
    data: null,
    searchState: 'LOADING',
    todos: [],
    resultsTotal: 0,
  };

  componentDidMount() {
    this.authenticate();
  }

  authenticate = async () => {
    this.setState({
      searchState: 'LOADING'
    });

    var urlString;
    if (this.props.searchInput === "" || this.props.searchInput === null) {
      urlString = `http://gatorstate.tk/api/listings`;
    }
    else {
      urlString = `http://gatorstate.tk/api/listingsSearch/${this.props.searchValue}`
    }
    await axios
      .get(urlString)
      .then(response => {
        const resData = response.data;
        console.log('Response');
        console.log(response);
        console.log(response.data);
        var i = 1;

        if (resData[0].street_address != null) {
          (resData).forEach(element => {
            this.state.todos.push({
              id: i,
              address: `${element.street_address}, ${element.zip_code}`,
              zipcode: element.zip_code,
              price: element.price,
              distance: 3,
              date: '4/27/2019',
              imgurl: `${element.images}`
            })
            i++;

          });

          i = i - 1;
          this.setState({
            searchState: 'AUTHENTICATED',
            data: resData,
            resultsTotal: i,
          });
          console.log('Stuffs was authenticated');
          console.log(this.state.todos);
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

  render() {


    return (
      <div>
        {/* {this.state.authenticate} */}
        <NavbarResultPage />
        <Container fluid >
          <Row style={{ background: "#AADAFF" }}>
            <Col className="px-0">
            {this.state.searchState === 'AUTHENTICATED' &&
              this.state.todos.length != 0 && 
              <MapContainer address={this.state.todos[0].address}/>
            }
            </Col>
            <Col className="px-0" >
              <div>
                {this.state.searchState === 'LOADING' &&
                  <div><h1>Loading Listings</h1>
                  </div>}
                {this.state.searchState === 'AUTHENTICATED' &&
                  <div>
                    <ResultText>
                       Number of results: {this.state.resultsTotal}
                    </ResultText>
                    
                    <Listing todos={this.state.todos} />
                  </div>
                }
                {this.state.searchState === 'DENIED' &&
                  <div>No results</div>
                }
              </div>
            </Col>
          </Row>
        </Container>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
