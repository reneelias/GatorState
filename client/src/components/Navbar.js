import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import Login from './Login';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';


const NavButton = styled.button`
  display: inline-block;
  font-size: 1em;
  color: white;
  background: rgb(0, 123, 255);
  border: none;
  border-radius: 3px;
  font: sans serif;
  text-align: center;
  line-height: 36px;
`

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
        <Login />
          <NavButton>Registration</NavButton>&nbsp;
        </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
