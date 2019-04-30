import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import Filter from './Filter';

class Search extends Component {

  state = {
    "searchInput": {
      "address": "",
      "zipcode": "",
      "city": ""
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

    console.log(searchInput)

  }


  render(){
  const {searchInput} = this.state  
  console.log(searchInput)
  return (
    <div className="App">
      <Jumbotron>
        <Container>
            <h1>Gator State</h1>
            <p>
            Find your home away from home
            </p>
            <div>
                <InputGroup className="mb-3">
                    <FormControl 
                    placeholder= "Search by address, zipcode, or city"
                    onChange={this.onSearchHandler}
                    value={searchInput}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Filter/>
            </div>
        </Container>
        </Jumbotron>;
    </div>
  );
  }
}


export default Search;
