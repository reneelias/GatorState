import React, { Component } from 'react';
import Listing from '../components/Listing';
import NavbarResultPage from '../components/Navbar';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import axios from 'axios';


class LoginPage extends Component {


  render() {


    return (
      <div>
        <h1>LoginPage</h1>
      </div>
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
)(LoginPage);
