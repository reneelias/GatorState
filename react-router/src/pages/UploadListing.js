import React, {Component} from 'react';
import { MDBInput } from "mdbreact";
import NavbarResultPage from '../frontend/NavbarResultPage'



export class UploadListing extends React.Component {
    render(){
        return(
            <div>
                <NavBarResultPage />
                <div>
                    <h1>Upload Listing</h1>
                    <MDBInput label= "Address*" />




                </div>
            </div>
            
        )
    }
}


export default UploadListing;