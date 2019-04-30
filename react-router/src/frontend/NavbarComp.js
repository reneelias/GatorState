import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


class NavbarComp extends Component {
  render(){
  return (
    <div>

      <Navbar bg="light justify-content-between">
        <Nav>
          <NavDropdown title="Rent">
            <NavDropdown.Item href="">Apartment</NavDropdown.Item>
            <NavDropdown.Item href="">House</NavDropdown.Item>
            <NavDropdown.Item href="">Dorm</NavDropdown.Item>
          </NavDropdown>
          <Button variant="primary-success">Sell</Button>
          </Nav>
          
          <Navbar.Brand> 
            <Button href="/Home" >Gator State</Button>
          </Navbar.Brand>

          <Nav className="navbar-right">
            <Button variant="primary-success" >Login</Button>
            <Button variant="primary-success" >Register</Button>
        </Nav>
      </Navbar>
    </div>
  );
  }
}

export default NavbarComp;
