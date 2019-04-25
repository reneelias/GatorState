import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';

class Filter extends Component {

  render(){
  return (
    <div className="d-flex flex-column">
        <ButtonGroup size="md">
            <Button>Price</Button>
            <Button>Distance</Button>
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
