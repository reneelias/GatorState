import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import Nav from 'react-bootstrap/Nav';
import {NavButton} from './styled';
import LoginModal from './LoginModal';
import { connect } from 'react-redux';
// import  {userReducer}  from './redux/reducers/userReducer'

class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" className="justify-content-between" style={{width:"auto"}}>
        <Nav >
          <Navbar.Brand style={{ color: 'white' }} href="/">
              GatorState
          </Navbar.Brand>
          <NavButton>About</NavButton>&nbsp;
          <NavButton href="/UploadListing">Post</NavButton>&nbsp;
        </Nav>
        <Search />
        <Nav>
        {!this.props.loggedIn && <LoginModal />}
        {}
        </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('login mapStateToProps')
  console.log(state);
  return {
      user: state.userReducer.user,
      loggedIn: state.userReducer.loggedIn
  };
};

const mapDispatchToProps = {
  // loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarComp);

