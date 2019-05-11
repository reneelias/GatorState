import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import Nav from 'react-bootstrap/Nav';
import {NavButton} from './styled';



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
          <NavButton href="/Login">Login</NavButton>&nbsp;
          <NavButton>Registration</NavButton>&nbsp;
        </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
