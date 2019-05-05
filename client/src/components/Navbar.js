import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import Register from './Register';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import LoginModal from './LoginModal';

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
        <LoginModal />
        </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
