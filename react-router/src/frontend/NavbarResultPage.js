import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';

class NavbarComp extends Component {
  state = {
    searchInput: {
      search: "",
      address: "",
      zipcode: "",
      city: "",
      price: "",
      distance: "",
      type: "",
    }
  }

  onSearchHandler = event => {
    const {searchInput} = this.state
    this.setState({
      "searchInput" : {
        "address": event.target.value,
        "zipcode": event.target.value,
        "city": event.target.value
      }
    })
  }

  render(){
  const {searchInput} = this.state
  return (
    <div>
        <Navbar bg="dark ">
          <Navbar.Brand style={{color:"white"}}>
          <Button href="/Home">GatorState</Button>
          </Navbar.Brand>
          <InputGroup >
            <FormControl
              placeholder="Search by address, zipcode, or city..."
              onChange={this.onSearchHandler}
              value={searchInput[0]}
            />
            <InputGroup.Append>
              <Button variant="primary">Submit</Button>&nbsp;
            </InputGroup.Append>
            <Nav>
              
              <DropdownButton title="Price">
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Min"
                />
                <FormControl
                  type="text"
                  placeholder="Max"
                />
              </InputGroup>
              </DropdownButton>&nbsp;
              
              <DropdownButton title="Distance">
                <FormControl
                  type="text"
                  placeholder="Miles from SFSU: "
                />
              </DropdownButton>&nbsp;
              
              <DropdownButton title="Housing Type">
                <NavDropdown.Item href="">Apartment</NavDropdown.Item>
                <NavDropdown.Item href="">House</NavDropdown.Item>
                <NavDropdown.Item href="">Dorm</NavDropdown.Item>
              </DropdownButton>&nbsp;
            </Nav>
          </InputGroup>
        </Navbar>
    </div>
  );
  }
}



export default NavbarComp;

