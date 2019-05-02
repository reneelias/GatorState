import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class FilterSelection extends Component {
    constructor(props, context){
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ""
        };
    }
    handleChange(value, event){
        this.setState({value});
    }

    render(){
        return(
            <DropdownButton
                type="checkbox"
                value={this.state.value}
                onChange={this.handleChange}
                title="Listing Type"
            >
                <Dropdown.Item value={"apartment"}>Apartment</Dropdown.Item>
                <Dropdown.Item value={"house"}>House</Dropdown.Item>
                <Dropdown.Item value={"dorm"}>Dorm</Dropdown.Item>
            </DropdownButton>
        );
    }
}


export default FilterSelection