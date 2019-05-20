import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import styled from "styled-components";


export const UploadListingButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const MessageBackground = styled.div`
    
    background:rgb(204, 222, 252);
    margin: auto;
    opacity: .9;
    width: 45%;
    border: 5px solid;
    border-color:white;
    position:relative;
    
`

const Title = styled.h1`
    margin: auto;
    text-align:center;
    `

class UploadListing extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render(){
        return(
           
            <div>
                <Navbar/>
                    <div align="center"> 
                    <p> </p>
                    <h1>Upload Listing</h1>
                    <div>
                    <form class="needs-validation" novalidate >
                        <div class="form-group" style={{ width: '40%' }} align="left">
                            <label for="inputAddress" >Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                            <small id="photo" class="form-text text-muted" align="left">Required</small>

                        </div>
                        <div class="form-group" style={{ width: '40%' }} align="left">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                        </div>
                        <div class="form-row"style={{ width: '40%' }} align="left">
                            <div class="col-md-6 mb-3">
                            <label for="validationCustom03">City</label>
                            <input type="text" class="form-control" id="validationCustom03" placeholder="City" required></input>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                            </div>
                            <div class="col-md-3 mb-3">
                            <label for="validationCustom04">State</label>
                            <input type="text" class="form-control" id="validationCustom04" placeholder="State" required></input>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                            </div>
                            <div class="col-md-3 mb-3">
                            <label for="validationCustom05">Zip</label>
                            <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required></input>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>

                            </div>
                        </div>
                           

             
                
                       {/* <div class="form-group"style={{ width: '30%' }}>
                            <div class="form-check">
                            <label for="validationCustom03">Rent Price</label>
                            <input type="text" class="form-control" id="validationCustom03" placeholder="$.." required></input>
                            <div class="invalid-feedback">
                                Please input amount.
                            </div> 
                            </div>
                        </div> */}
                         <div class="form-row"style={{ width: '40%' }} align="left">
                          <div class="form-col" style={{ width: '40%' }} align="left">
                            <label for="inputAddress" >Price</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="$..per month"></input>
                            <small id="photo" class="form-text text-muted" align="left">Required</small>

                        </div>&nbsp;

                        <div class="form-col"style={{ width: '40%' }} align="left">
                            <label for="exampleFormControlSelect1">Listing Type</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>Select...</option>
                                <option>Apartment</option>
                                <option>House</option>
                                <option>Dorm</option>
                                </select>
                                <small id="photo" class="form-text text-muted" align="left">Required</small>

                            </div>
                            </div>
                        
                        <div class="form-group"style={{ width: '40%' }} align="left">
                            <p> </p>
                            <p> </p>
                            <label for="uploadphotos">Upload Photos</label>
                            <input type="file" class="form-control-file" id="uploadphotos"></input>
                            <small id="photo" class="form-text text-muted" align="left">Upload photos of your listing.</small>

                        </div>

                        <h4>Details</h4>


                        <div class="form-check" style={{ width: '40%' }} align="left">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Pet Friendly
                            </label>
                        </div>
                        <div class="form-check" style={{ width: '40%' }} align="left">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Laundry On Site
                            </label>
                        </div>

                        <div class="form-check" style={{ width: '40%' }} align="left">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Garage Parking
                            </label>
                        </div>
                        <div class="form-check" style={{ width: '40%' }} align="left">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Street Parking
                            </label>
                        </div>

                        <div class="form-group"style={{ width: '40%' }} align="left">
                            <p> </p>
                            <label for="description" >Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Lorem ipsum..." rows="3"></textarea>
                        </div>

                        {/* <button class="btn btn-primary" type="submit">Submit form</button> */}
                        <UploadListingButton type="submit">Upload Listing</UploadListingButton>
                        <h1> </h1>
                        
                    </form>
                    </div>
                    

            </div>
         </div> 
        )
    }
}


export default UploadListing;