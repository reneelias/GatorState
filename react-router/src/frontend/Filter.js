import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

class Filter extends Component {

  render(){
  return (
    <div>
        <ButtonGroup size="md">

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

            <DropdownButton as={ButtonGroup} title="Housing Type" id="md-nested-dropdown">
                <Dropdown.Item eventKey="1">Apartment</Dropdown.Item>
                <Dropdown.Item eventKey="2">House</Dropdown.Item>
                <Dropdown.Item eventKey="3">Dorm</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    </div>
  );
  }
}

export default Filter;
