import React, { Component } from 'react';
import Listing from '../components/Listing';
import NavbarResultPage from '../components/Navbar';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import axios from 'axios';

const RegDiv = styled.div`
  margin: auto;
`
class RegistrationPage extends Component {


  render() {


    return (
      <RegDiv>
        <h1>Registration</h1>
      </RegDiv>
    );
  }
}



const mapStateToProps = state => {
  // console.log(state);
  return {

  };
};

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);
