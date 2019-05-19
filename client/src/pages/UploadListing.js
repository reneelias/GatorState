import React, {Component} from 'react';
import { MDBInput } from "mdbreact";
import Navbar from '../components/Navbar';
import styled from "styled-components";



class UploadListing extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div>
                    <h1>Upload Listing</h1>
                    <MDBInput label= "Address*" />




                </div>
            </div>
            
        )
    }
}


export default UploadListing;