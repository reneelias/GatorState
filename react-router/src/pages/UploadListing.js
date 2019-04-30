import React, {Component} from 'react';
import { MDBInput } from "mdbreact";


class UploadListing extends Component {
    render(){
        return(
            <div>
                <NavBarResultPage></NavBarResultPage> 
                <div>
                    <h1>Upload Listing</h1>
                    <MDBInput label="Address*" />




                </div>
            </div>
            
        )
    }
}


export default UploadListing;