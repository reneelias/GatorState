import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import FilterSelection from './FilterSelection';
import Container from 'react-bootstrap/Container';

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
        <Navbar bg="dark" style={{color:"white"}}>
          <Navbar.Brand 
          style={{color:"white"}} 
          href="/"
          >GatorState</Navbar.Brand>
          <Container fluid >
              <Button 
                variant="primary"
                href="#"
              >About</Button>&nbsp;
              <Button 
                variant="primary"
                href="/UploadListing"
              >Post</Button>&nbsp;
              
              <InputGroup>
              <InputGroup.Prepend>
                <FilterSelection />
              </InputGroup.Prepend>
              
                <FormControl
                    placeholder="Search by address, zipcode, or city..."
                    onChange={this.onSearchHandler}
                    value={searchInput[0]}

                />
                <InputGroup.Append>
                  <Button variant="primary">Search</Button>&nbsp;
                </InputGroup.Append>
              <Button 
              variant="primary"
              href="/Login"
              >Login</Button>&nbsp;
              <Button variant="primary">Registration</Button>&nbsp;
            </InputGroup>
          </Container>
        </Navbar>
    </div>
  );
  }
}



export default NavbarComp;

