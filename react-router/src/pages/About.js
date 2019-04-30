import React, {Component} from 'react';
import Listing from '../frontend/Listing';
import NavbarResultPage from '../frontend/NavbarResultPage'
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {
  updateSearch,
} from '../redux/actions/searchActions';    

class About extends Component {
    state = {
        "searchInput": "",
    }

    

    render() {
        console.log(this.props.searchInput)
        return (
            <div>
                <h2>About</h2>
                {this.props.searchValue}
                <Listing/>
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

const mapStateToProps = (state) => {
    // console.log(state);
    return{
      searchValue: state.searchReducer.searchValue,
    };
  };
  
  const mapDispatchToProps = {
    updateSearch,
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(About);