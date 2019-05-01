import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


class NavbarComp extends Component {
  render(){
  return (
    <div>

      <Navbar bg="dark justify-content-between" style={{color:"white"}}>
        <Nav>
          <Button href="/UploadListing">Post Listing</Button>
        </Nav>
          
          <Navbar.Brand style={{color:"white"}}href="/">Gator State</Navbar.Brand>

          <Nav className="navbar-right">
            <Button href="/Login" >Login</Button>&nbsp;
            <Button> Register</Button>
          </Nav>
          
      </Navbar>
    </div>
  );
  }
}

export default NavbarComp;
