import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//This component handles storing to the state what filter the user selected.
class FilterSelection extends Component {
    constructor(props, context){
        super(props, context);
        //Used to change the state value
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ""
        };
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        return(
            //Dropdown selection that contains listing types
            //when a value is selected we call onChange to handle the state change.
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
