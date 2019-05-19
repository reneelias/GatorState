import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import Nav from 'react-bootstrap/Nav';
import { NavButton } from './styled';
import LoginModal from './LoginModal';
import { connect } from 'react-redux';
// import  {userReducer}  from './redux/reducers/userReducer'
import { logoutUser } from '../components/redux/actions/userActions';

class NavbarComp extends Component {

  logout = e => {
    localStorage.removeItem('userid')
    localStorage.removeItem('username')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    localStorage.removeItem('email')
    localStorage.removeItem('loggedIn')
    // localStorage.clear();

    // this.context.history.push('/')
    this.props.logoutUser()
    // this.props.loggedIn = false;
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" className="justify-content-between" style={{ width: "auto" }}>
          <Nav >
            <Navbar.Brand style={{ color: 'white' }} href="/">
              GatorState
          </Navbar.Brand>
            <NavButton>About</NavButton>&nbsp;
          <NavButton href="/UploadListing">Post</NavButton>&nbsp;
        </Nav>
          <Search />
          <Nav>
            {this.props.loggedIn ? <div><NavButton>Messages</NavButton><NavButton  >My Listings</NavButton><NavButton onClick={(e) => { this.logout() }}>Logout</NavButton></div> : <LoginModal />}
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
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarComp);

